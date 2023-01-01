import express from "express";
import { Request, Response } from "express";
import path from "path";

const app = express();
const port = 3000;
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "assets")));
app.set('views', path.join(__dirname, './views'))

app.get("/", async (req: Request, res: Response) => {
  const sliders = [
    { id: 1, name: "slider 1", imgSrc: "images/slider_1.jpg" },
    { id: 2, name: "slider 2", imgSrc: "images/slider_2.jpg" },
    { id: 3, name: "slider 3", imgSrc: "images/slider_3.jpg" },
  ];

  const overview = {
    description: "Tại <span class=\"fw-bold\" style=\"color: #FF0000\">KLK PHỤC THỊNH</span>, Vai trò Thiết Kế Kiến Trúc Nội Thất của chúng tôi không đơn thuần chỉ là tạo nên không gian chức năng mà còn là nghệ thuật sáng tạo vận hành, truyền cảm hứng đến người khác, đưa yếu tố con người hòa nhập vào môi trường thiên nhiên. Chúng tôi đầu từ vào nghiên cứu con người đã biết lắng nghe, cảm nhận, nhìn thấy điều mong muốn của bạn và đó là cách chúng tôi tôn trọng sự đam mê nghề nghiệp của chính mình.",
    images: [
      { id: 1, name: "img 1", imgSrc: "images/img_nha_tam.jpg" },
      { id: 2, name: "img 1", imgSrc: "images/img_sofa.jpg" },
      { id: 3, name: "img 1", imgSrc: "images/img_noi_that.jpg" },
      { id: 4, name: "img 1", imgSrc: "images/img_phong_khach.jpg" },
      { id: 5, name: "img 1", imgSrc: "images/img_van_phong.jpg" },
    ]
  };

  const popularProducts = [
    { id: 1, name: "SF0013", description: "Ghế sofa da mà SFD013 chính là sự lựa chọn hoàn hảo dành cho gia đình của bạn. Thiết kế tinh tế và sang trọng sẽ làm cho không gian của bạn trở nên độc đáo hơn.", imgSrc: "images/sp_moi_1.jpg", href: "#" },
    { id: 2, name: "SF0014", description: "Ghế sofa da mà SFD014 chính là sự lựa chọn hoàn hảo dành cho gia đình của bạn. Thiết kế tinh tế và sang trọng sẽ làm cho không gian của bạn trở nên độc đáo hơn.", imgSrc: "images/sp_moi_2.jpg", href: "#" },
    { id: 3, name: "SFOOTS", description: "Ghế sofa da mà SFOOTS chính là sự lựa chọn hoàn hảo dành cho gia đình của bạn Thiết kế tinh tế và sang trọng sẽ làm cho không gian của bạn trở nên độc đáo hơn.", imgSrc: "images/sp_moi_3.jpg", href: "#" },
    { id: 4, name: "SFD013", description: "Ghế sofa da MÀ SFD013 chính là sự hướn chọn hoàn hảo dành cho gia đình của bạn. Thiết kế tinh tế và sang trọng sẽ làm cho không gian của bạn trở nên độc đáo hơn.", imgSrc: "images/sp_moi_4.jpg", href: "#" },
  ];

  const services = [
    { id: 1, iconSrc: "images/services_1.png", name: "Dịch vụ bảo hành", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: 2, iconSrc: "images/services_2.png", name: "Thiết kế nội thất", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: 3, iconSrc: "images/services_3.png", name: "Đội ngũ nhân viên", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  ];

  await res.render("index", {
    sliders: sliders,
    overview: overview,
    popularProducts: popularProducts,
    services: services
  });
});

app.get("/products", async (req: Request, res: Response) => {
  const sliders = [
    { id: 1, name: "slider 1", imgSrc: "images/slider_1.jpg" },
    { id: 2, name: "slider 2", imgSrc: "images/slider_2.jpg" },
    { id: 3, name: "slider 3", imgSrc: "images/slider_3.jpg" },
  ];

  const products = [
    { id: 1, name: "product 1", imgSrc: "images/sp_1.jpg", href: "#" },
    { id: 2, name: "product 2", imgSrc: "images/sp_2.jpg", href: "#" },
    { id: 3, name: "product 3", imgSrc: "images/sp_3.jpg", href: "#" },
    { id: 4, name: "product 4", imgSrc: "images/sp_4.jpg", href: "#" },
    { id: 5, name: "product 5", imgSrc: "images/sp_5.jpg", href: "#" },
    { id: 6, name: "product 6", imgSrc: "images/sp_6.jpg", href: "#" },
    { id: 7, name: "product 7", imgSrc: "images/sp_7.jpg", href: "#" },
    { id: 8, name: "product 8", imgSrc: "images/sp_8.jpg", href: "#" },
    { id: 9, name: "product 9", imgSrc: "images/sp_9.jpg", href: "#" },
  ];

  await res.render("product-list", {
    sliders: sliders,
    products: products
  });
});

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});