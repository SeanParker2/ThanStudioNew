import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Store.css';

// 导入商品图片
import store1 from '../assets/images/store.png';
import store2 from '../assets/images/store-2.png';
import store3 from '../assets/images/store-3.png';
import store4 from '../assets/images/store-4.png';
import store5 from '../assets/images/store-5.png';
import store6 from '../assets/images/store-6.png';
import store7 from '../assets/images/store-7.png';
import store8 from '../assets/images/store-8.png';

// 导入图标
import iconAll from '../assets/logo/icon-all.png';
import iconHot from '../assets/logo/icon-hot.png';
import iconNew from '../assets/logo/icon-new.png';
import iconSearch from '../assets/logo/icon-search.png';
import iconCart from '../assets/logo/icon-cart.png';

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  isNew?: boolean;
  isHot?: boolean;
}

const products: Product[] = [
  { id: 1, image: store1, title: "设计师限定款笔记本", price: "¥99", originalPrice: "¥129", discount: "7.6折", isHot: true },
  { id: 2, image: store2, title: "创意设计马克杯", price: "¥199", isNew: true },
  { id: 3, image: store3, title: "艺术家联名帆布包", price: "¥299", originalPrice: "¥399", discount: "7.5折", isHot: true },
  { id: 4, image: store4, title: "简约设计台历", price: "¥399", isNew: true },
  { id: 5, image: store5, title: "限量版艺术海报", price: "¥499", originalPrice: "¥599", discount: "8.3折" },
  { id: 6, image: store6, title: "设计师签名明信片", price: "¥599", isNew: true },
  { id: 7, image: store7, title: "艺术收藏画册", price: "¥699", originalPrice: "¥899", discount: "7.8折", isHot: true },
  { id: 8, image: store8, title: "创意文具套装", price: "¥799", isNew: true }
];

const Store: React.FC = () => {
  return (
    <div className="store-container">
      <Header />
      <div className="store-content">
        <nav className="store-nav">
          <div className="nav-item">
            <img src={iconAll} alt="全部商品" />
            <span>全部商品</span>
          </div>
          <div className="nav-item">
            <img src={iconHot} alt="热门商品" />
            <span>热门商品</span>
          </div>
          <div className="nav-item">
            <img src={iconNew} alt="新品上市" />
            <span>新品上市</span>
          </div>
          <div className="nav-item">
            <img src={iconSearch} alt="搜索" />
            <span>搜索</span>
          </div>
        </nav>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" />
                {product.isNew && <span className="product-tag new-tag">NEW</span>}
                {product.isHot && <span className="product-tag hot-tag">HOT</span>}
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <div className="product-price-container">
                  <div className="price-info">
                    <span className="current-price">{product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">{product.originalPrice}</span>
                    )}
                    {product.discount && (
                      <span className="discount-tag">{product.discount}</span>
                    )}
                  </div>
                  <button className="cart-button">
                    <img src={iconCart} alt="加入购物车" className="cart-icon" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Store;