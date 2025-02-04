import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="music_17_931">
      <div className="music_17_968">
        <div className="music_17_0065">
          {/* 联系我们 */}
          <div className="music_17_0356">
            <span className="music_17_0579">联系我们</span>
            <span className="music_17_0580">东京都涩谷区代代木2-7-7</span>
            <span className="music_17_0581">contact@nippondesign.com</span>
            <span className="music_17_0582">+81 3-1234-5678</span>
          </div>
          
          {/* 关注我们 */}
          <div className="music_17_0357">
            <span className="music_17_0584">关注我们</span>
            <div className="music_17_0585">
              <span className="music_17_0981">Instagram</span>
              <span className="music_17_0982">Twitter</span>
              <span className="music_17_0983">LinkedIn</span>
            </div>
          </div>
          
          {/* 工作机会 */}
          <div className="music_17_0358">
            <span className="music_17_0587">工作机会</span>
            <div className="music_17_0588">
              <span className="music_17_0993">设计师</span>
              <span className="music_17_0994">项目经理</span>
              <span className="music_17_0995">实习生</span>
            </div>
          </div>
          
          {/* 订阅简报 */}
          <div className="music_17_0359">
            <span className="music_17_0590">订阅简报</span>
            <div className="music_17_0591">
              <input 
                type="email" 
                className="music_17_1005" 
                placeholder="请输入邮箱地址"
              />
              <button className="music_17_1006">订阅</button>
            </div>
          </div>
        </div>
        
        {/* 版权信息 */}
        <div className="music_17_0066">
          <span className="music_17_0367">© 2025 Than Studio. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;