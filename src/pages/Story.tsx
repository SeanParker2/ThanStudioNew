import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Story.css';
import storyBanner from '../assets/images/story_banner.png';
import storyAbout from '../assets/images/story-2.png';
import storyAdvantage1 from '../assets/images/story-3.png';
import storyAdvantage2 from '../assets/images/story-4.png';
import storyAdvantage3 from '../assets/images/story-5.png';

const Story: React.FC = () => {
  return (
    <div className="story-container">
      <Header />
      <div className="story-hero">
        <img
          className="story-hero-image"
          src={storyBanner}
          alt="Story Hero"
        />
      </div>
      <section className="story-about">
        <div className="story-about-content">
          <div className="story-about-text">
            <h2 className="story-about-title">关于我们</h2>
            <p className="story-about-description">
              Than Studio 成立于 2019 年，是一家专注于品牌设计与数字创意的工作室。我们服务过众多行业领先的企业，始终坚持以创新思维和专业态度，为客户提供最优质的设计解决方案。
            </p>
            <p className="story-about-description">
              我们的团队由经验丰富的设计师、策划师和技术专家组成，擅长将艺术创意与商业价值完美结合，帮助品牌在竞争激烈的市场中脱颖而出。
            </p>
          </div>
          <img
            className="story-about-image"
            src={storyAbout}
            alt="About Us"
          />
        </div>
      </section>
      <section className="story-advantages">
        <div className="story-advantages-content">
          <h2 className="story-advantages-title">核心优势</h2>
          <div className="story-advantages-grid">
            <div className="story-advantage-item">
              <img
                className="story-advantage-icon"
                src={storyAdvantage1}
                alt="创新思维"
              />
              <h3 className="story-advantage-title">创新思维</h3>
              <p className="story-advantage-description">突破传统设计思维局限，以创新视角解决设计难题</p>
            </div>
            <div className="story-advantage-item">
              <img
                className="story-advantage-icon"
                src={storyAdvantage2}
                alt="专业团队"
              />
              <h3 className="story-advantage-title">专业团队</h3>
              <p className="story-advantage-description">拥有多年行业经验的资深设计师团队，确保项目品质</p>
            </div>
            <div className="story-advantage-item">
              <img
                className="story-advantage-icon"
                src={storyAdvantage3}
                alt="全案服务"
              />
              <h3 className="story-advantage-title">全案服务</h3>
              <p className="story-advantage-description">从品牌策略到设计执行，提供一站式解决方案</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Story;