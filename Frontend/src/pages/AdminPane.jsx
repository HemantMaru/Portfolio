import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  FaArrowLeft, 
  FaLock, 
  FaSignOutAlt, 
  FaRegEnvelope, 
  FaCalendarAlt, 
  FaUserCircle, 
  FaSyncAlt 
} from 'react-icons/fa';

const AdminPane = () => {
  const [messages, setMessages] = useState([]);
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchMessages = async (pass) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get('http://localhost:5000/api/messages', {
        headers: { 'x-admin-password': pass },
      });
      if (res.data.success) {
        setMessages(res.data.data);
        setIsLoggedIn(true);
        sessionStorage.setItem('admin_pass', pass);
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setError('Invalid credentials');
        sessionStorage.removeItem('admin_pass');
      } else {
        setError('System offline');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchMessages(password);
  };

  useEffect(() => {
    const saved = sessionStorage.getItem('admin_pass');
    if (saved) { setPassword(saved); fetchMessages(saved); }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword('');
    setMessages([]);
    sessionStorage.removeItem('admin_pass');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-primary">
        <div className="w-full max-w-sm">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-xs font-bold tracking-widest text-muted hover:text-white transition-colors mb-12"
          >
            <FaArrowLeft /> ESCAPE TO PORTFOLIO
          </button>

          <div className="p-10 rounded-[2.5rem] bg-surface border border-white/5 space-y-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                <FaLock className="text-xl text-white/20" />
              </div>
              <h2 className="text-3xl font-black tracking-tighter uppercase">Nexus <span className="text-muted font-light">Access</span></h2>
              <p className="text-muted text-xs font-bold tracking-widest uppercase mt-2">Secure Gateway</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                required className="input-field" placeholder="PASSKEY" autoFocus
              />
              <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
                {loading ? 'AUTHENTICATING...' : 'AUTHORIZE ACCESS'}
              </button>
              {error && <p className="text-red-400 text-center text-[10px] font-bold tracking-widest uppercase">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary py-12 px-6 sm:px-12 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 pb-8 border-b border-white/5">
          <div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-xs font-bold tracking-widest text-muted hover:text-white transition-colors mb-6"
            >
              <FaArrowLeft /> ARCHIVE
            </button>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase">
              Inquiries <span className="text-muted italic font-light">({messages.length})</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <button onClick={() => fetchMessages(password)} className="btn-secondary !rounded-2xl !px-6 !py-3">
              <FaSyncAlt className={loading ? 'animate-spin' : ''} />
            </button>
            <button onClick={handleLogout} className="btn-secondary !rounded-2xl !px-6 !py-3">
                <FaSignOutAlt />
            </button>
          </div>
        </div>

        {messages.length === 0 ? (
          <div className="p-32 text-center rounded-[3rem] bg-surface/50 border border-white/5">
            <FaRegEnvelope className="text-5xl text-white/5 mx-auto mb-6" />
            <p className="text-muted text-sm font-bold tracking-widest uppercase">Communications Archive Empty</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {messages.map((msg, idx) => (
              <div key={msg._id || idx} className="p-10 rounded-[2.5rem] bg-surface border border-white/5 hover:border-white/20 transition-all duration-500">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                      <FaUserCircle className="text-2xl text-white/20" />
                    </div>
                    <div>
                      <h3 className="font-bold tracking-tight text-white">{msg.name}</h3>
                      <a href={`mailto:${msg.email}`} className="text-xs text-muted hover:text-white transition-colors">
                        {msg.email}
                      </a>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold tracking-widest text-white/20 uppercase whitespace-nowrap">
                    <FaCalendarAlt />
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-primary/50 text-muted text-sm leading-relaxed border border-white/5">
                    {msg.message}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPane;
