import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import './Home.css';

// 导入图片资源
import homeHeroBanner from '../assets/images/home_hero_banner.png';
import homeBanner from '../assets/images/home_banner.png';
import homeWork1 from '../assets/images/home_work_1.png';
import homeWork2 from '../assets/images/home_work_2.png';
import homeWork3 from '../assets/images/home_work_3.png';
import homeWork4 from '../assets/images/home_work_4.png';
import homeWork5 from '../assets/images/home_work_5.png';
import homeWork6 from '../assets/images/home_work_6.png';
import homeTeammate1 from '../assets/images/home_teammate_1.png';
import homeTeammate2 from '../assets/images/home_teammate_2.png';
import homeTeammate3 from '../assets/images/home_teammate_3.png';
import homeTeammate4 from '../assets/images/home_teammate_4.png';

const scrollVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -2
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

const Home: React.FC = () => {
  return (
    <div className="music_17_889">
      <LoadingScreen />
      <Header />
      <div className="home-content">
        <motion.div 
          className="hero-banner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
        >
          <img src={homeHeroBanner} alt="Hero Banner" />
          <motion.div className="hero-banner-content">
            <motion.h1 
              className="hero-banner-title"
              variants={scrollVariants}
            >创造永恒的设计价值</motion.h1>
            <motion.p 
              className="hero-banner-description"
              variants={scrollVariants}
            >我们是一家专注于品牌设计与创新的设计工作室，致力于将日本传统美学与现代设计理念完美融合。</motion.p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="banner-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
        >
          <div className="banner-content">
            <motion.img 
              src={homeBanner} 
              alt="Banner" 
              className="banner-image" 
              variants={imageVariants}
            />
          </div>
        </motion.div>

        <motion.div 
          className="featured-works"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
        >
          <div className="featured-works-content">
            <h2 className="section-title">精选作品</h2>
            <div className="works-grid">
              <motion.div className="work-item" variants={scrollVariants}>
                <img src={homeWork1} alt="THAN品牌设计" />
                <h3>THAN品牌设计</h3>
                <p>品牌视觉系统设计 / 2023</p>
              </motion.div>
              <motion.div className="work-item" variants={scrollVariants}>
                <img src={homeWork2} alt="THAN品牌设计" />
                <h3>THAN品牌设计</h3>
                <p>品牌视觉系统设计 / 2023</p>
              </motion.div>
              <motion.div className="work-item" variants={scrollVariants}>
                <img src={homeWork3} alt="THAN品牌设计" />
                <h3>THAN品牌设计</h3>
                <p>品牌视觉系统设计 / 2023</p>
              </motion.div>
              <motion.div className="work-item" variants={scrollVariants}>
                <img src={homeWork4} alt="THAN品牌设计" />
                <h3>THAN品牌设计</h3>
                <p>品牌视觉系统设计 / 2023</p>
              </motion.div>
              <motion.div className="work-item" variants={scrollVariants}>
                <img src={homeWork5} alt="THAN品牌设计" />
                <h3>THAN品牌设计</h3>
                <p>品牌视觉系统设计 / 2023</p>
              </motion.div>
              <motion.div className="work-item" variants={scrollVariants}>
                <img src={homeWork6} alt="THAN品牌设计" />
                <h3>THAN品牌设计</h3>
                <p>品牌视觉系统设计 / 2023</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="news-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
        >
          <div className="news-content">
            <h2 className="section-title">最新动态</h2>
            <div className="news-grid">
              <motion.div className="news-item" variants={scrollVariants}>
                <div className="news-item-date">2024.01.15</div>
                <div className="news-item-content">
                  <h3 className="news-item-title">东京设计周展览圆满结束</h3>
                  <p className="news-item-description">我们很荣幸参与了本次东京设计周的展览，展示了最新的设计作品与理念。</p>
                </div>
              </motion.div>
              <motion.div className="news-item" variants={scrollVariants}>
                <div className="news-item-date">2024.01.08</div>
                <div className="news-item-content">
                  <h3 className="news-item-title">新增设计总监岗位招聘</h3>
                  <p className="news-item-description">寻找对日式设计有独特见解，具备丰富经验的设计人才。</p>
                </div>
              </motion.div>
              <motion.div className="news-item" variants={scrollVariants}>
                <div className="news-item-date">2024.01.02</div>
                <div className="news-item-content">
                  <h3 className="news-item-title">2024年度设计趋势分享会</h3>
                  <p className="news-item-description">1月15日，我们将举办线上分享会，探讨新一年的设计趋势与创新方向。</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="team-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
        >
          <div className="team-content">
            <h2 className="section-title">团队成员</h2>
            <div className="team-grid">
              <motion.div className="team-member" variants={scrollVariants}>
                <img src={homeTeammate1} alt="佐藤雅彦" />
                <h3 className="team-member-name">佐藤雅彦</h3>
                <p className="team-member-role">创意总监</p>
              </motion.div>
              <motion.div className="team-member" variants={scrollVariants}>
                <img src={homeTeammate2} alt="山田真子" />
                <h3 className="team-member-name">山田真子</h3>
                <p className="team-member-role">设计总监</p>
              </motion.div>
              <motion.div className="team-member" variants={scrollVariants}>
                <img src={homeTeammate3} alt="铃木健一" />
                <h3 className="team-member-name">铃木健一</h3>
                <p className="team-member-role">高级设计师</p>
              </motion.div>
              <motion.div className="team-member" variants={scrollVariants}>
                <img src={homeTeammate4} alt="田中美咲" />
                <h3 className="team-member-name">田中美咲</h3>
                <p className="team-member-role">UI设计师</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;