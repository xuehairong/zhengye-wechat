import list from './data/index';

const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
];
Page({
  data: {
    current: 0,
    autoplay: false,
    duration: 500,
    interval: 5000,
    swiperList,
    list,
    img1: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
    img2: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
    img3: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
    border: {
      color: '#f5f5f5',
    },
  },
  onLoad(options) {
    const {
      path,
      q
    } = options;
    console.log(path);
    if (q) {
      const str = this.getQueryByUrl(decodeURIComponent(q));
      console.log(str, str.page);
      wx.navigateTo({
        url: `/pages/${str.page}/${str.page}`,
      });
    }
  },
  handlePopup(e) {
    this.setData({
      visible: true
    });
  },
  onVisibleChange(e) {
    this.setData({
      visible: e.detail.visible,
    });
  },
});