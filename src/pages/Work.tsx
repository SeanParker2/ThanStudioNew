import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Work.css';

// 导入图片资源
import workBanner from '../assets/images/work_banner.png';
import work2 from '../assets/images/work-2.png';
import work3 from '../assets/images/work-3.png';
import work4 from '../assets/images/work-4.png';
import work5 from '../assets/images/work-5.png';
import work6 from '../assets/images/work-6.png';
import work7 from '../assets/images/work-7.png';

interface WorkItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

const Work: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const workItems: WorkItem[] = [
    { id: 1, image: work2, title: '品牌设计项目 A', category: 'web' },
    { id: 2, image: work3, title: '商品目录设计', category: 'catalog' },
    { id: 3, image: work4, title: '宣传视频制作', category: 'video' },
    { id: 4, image: work5, title: '平面设计作品', category: 'graphic' },
    { id: 5, image: work6, title: '广告设计', category: 'ad' },
    { id: 6, image: work7, title: '包装设计', category: 'package' },
  ];

  const filteredWorks = selectedCategory === 'all' 
    ? workItems 
    : workItems.filter(item => item.category === selectedCategory);

  return (
    <div className="music_17_4002">
      <div className="music_17_4007">
        <Header />
        <div className="music_17_4029">
          <span className="music_17_4047">WORKS</span>
        </div>
        <div className="music_17_4049">
          <span 
            className={`category-item ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            全部
          </span>
          <span 
            className={`category-item ${selectedCategory === 'web' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('web')}
          >
            Web/App
          </span>
          <span 
            className={`category-item ${selectedCategory === 'catalog' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('catalog')}
          >
            商品目录/编辑
          </span>
          <span 
            className={`category-item ${selectedCategory === 'video' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('video')}
          >
            视频
          </span>
          <span 
            className={`category-item ${selectedCategory === 'graphic' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('graphic')}
          >
            平面图像
          </span>
          <span 
            className={`category-item ${selectedCategory === 'ad' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('ad')}
          >
            广告
          </span>
          <span 
            className={`category-item ${selectedCategory === 'package' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('package')}
          >
            包装
          </span>
        </div>
        <div className="work-gallery">
          <img src={workBanner} alt="Work Banner" className="work-banner" />
          <motion.div 
            className="work-grid"
            layout
          >
            <AnimatePresence>
              {filteredWorks.map((item) => (
                <motion.div
                  key={item.id}
                  className="work-item"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Work;