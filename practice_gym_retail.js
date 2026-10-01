let chon;
let maDon = "";
let hopLe = false;
do {
  console.log("\n===== MENU PHÒNG GYM =====");
  console.log("1. Nhập mã đơn hàng");
  console.log("2. Tính tiền và in hóa đơn");
  console.log("3. Thoát");
  chon = prompt("Nhập lựa chọn: ");
  switch (chon) {
    case "1":
      maDon = prompt("Nhập mã đơn hàng: ");
      maDon = maDon.trim();
      maDon = maDon.toUpperCase();
      if (maDon.length >= 8 && maDon.startsWith("DH")) {
        hopLe = true;
        console.log("Mã đơn hợp lệ: " + maDon);
      } else {
        hopLe = false;
        console.log("Mã đơn không hợp lệ!");
      }
      break;
    case "2":
      if (hopLe == false) {
        console.log("Vui lòng nhập mã đơn hợp lệ trước!");
        break;
      }
      let donHang = prompt("Nhập đơn hàng (VD: SHAKER-2,GLOVES-1,STRAP-1): ");
      let danhSach = donHang.split(",");
      let tongTien = 0;
      console.log("\n" + "-".repeat(40));
      console.log("          HÓA ĐƠN PHÒNG GYM");
      console.log("-".repeat(40));
      console.log(
        "Sản phẩm".padEnd(15) + "SL".padStart(5) + "Thành tiền".padStart(15),
      );
      console.log("-".repeat(40));
      for (let i = 0; i < danhSach.length; i++) {
        let sanPham = danhSach[i].trim();
        let viTri = sanPham.indexOf("-");
        let maSP = sanPham.slice(0, viTri);
        let soLuong = Number(sanPham.slice(viTri + 1));
        let tenSP = "";
        let gia = 0;
        if (maSP == "SHAKER") {
          tenSP = "Bình lắc";
          gia = 120000;
        } else if (maSP == "GLOVES") {
          tenSP = "Găng tay";
          gia = 180000;
        } else if (maSP == "STRAP") {
          tenSP = "Dây kéo lưng";
          gia = 150000;
        }
        let thanhTien = gia * soLuong;
        tongTien = tongTien + thanhTien;
        console.log(
          tenSP.padEnd(15) +
            String(soLuong).padStart(5) +
            thanhTien.toLocaleString("vi-VN").padStart(15),
        );
      }
      console.log("-".repeat(40));
      let vip = prompt("Khách có thẻ VIP không? (Y/N): ");
      vip = vip.trim();
      vip = vip.toUpperCase();
      let giamGia = 0;
      if (vip == "Y") {
        giamGia = (tongTien * 10) / 100;
      }
      let thanhToan = tongTien - giamGia;
      console.log("Tổng tiền: " + tongTien.toLocaleString("vi-VN") + " VNĐ");
      console.log("Giảm giá: " + giamGia.toLocaleString("vi-VN") + " VNĐ");
      console.log("Thanh toán: " + thanhToan.toLocaleString("vi-VN") + " VNĐ");
      console.log("-".repeat(40));
      break;
    case "3":
      console.log("Đã thoát chương trình!");
      break;
    default:
      console.log("Lựa chọn không hợp lệ!");
  }
} while (chon != "3");
