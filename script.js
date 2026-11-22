const HANOI_DISHES = [
  {
    id: "pho-ha-noi",
    name: "Phở Hà Nội",
    category: "mon-nuoc",
    categoryLabel: "Món nước truyền thống",
    price: "50.000đ - 75.000đ",
    baseImg: "assets/images/pho-ha-noi-base.svg",
    floatImg: "assets/images/pho-ha-noi-float.svg",
    shortDesc: "Nước dùng thanh ngọt từ xương bò/gà, bánh phở mềm, ăn kèm thịt bò hoặc gà và hành, rau thơm.",
    ingredients: ["Xương ống bò hầm 12 tiếng", "Bánh phở tươi thái tay", "Thịt bò tái / nạm gầu", "Quế, hồi, thảo quả, gừng nướng", "Hành lá, rau mùi, chanh ớt"],
    address: "Phở Thìn Bờ Hồ (61 Đinh Tiên Hoàng) hoặc Phở Bát Đàn (49 Bát Đàn)"
  },
  {
    id: "bun-cha",
    name: "Bún Chả Hà Nội",
    category: "mon-kho",
    categoryLabel: "Món nướng & Bún",
    price: "45.000đ - 65.000đ",
    baseImg: "assets/images/bun-cha-base.svg",
    floatImg: "assets/images/bun-cha-float.svg",
    shortDesc: "Thịt lợn băm và thịt ba chỉ nướng than hoa ăn cùng bún tươi, rau sống và nước mắm chua ngọt có đu đủ, cà rốt.",
    ingredients: ["Thịt ba chỉ & nạc vai băm", "Bún rối sợi nhỏ", "Đu đủ xanh, cà rốt ngâm giấm", "Nước mắm cốt pha chua ngọt", "Xà lách, kinh giới, tía tô"],
    address: "Bún chả Hàng Quạt (Ngõ 74 Hàng Quạt) hoặc Bún chả Hương Liên"
  },
  {
    id: "cha-ca-la-vong",
    name: "Chả Cá Lã Vọng",
    category: "mon-kho",
    categoryLabel: "Đặc sản tiến vua",
    price: "150.000đ - 220.000đ",
    baseImg: "assets/images/cha-ca-la-vong-base.svg",
    floatImg: "assets/images/cha-ca-la-vong-float.svg",
    shortDesc: "Cá lăng tẩm riềng, nghệ, mẻ, mắm tôm, nướng rồi đảo nóng với thì là, hành lá; ăn cùng bún, lạc rang và mắm tôm pha.",
    ingredients: ["Cá lăng tươi chắc thịt", "Riềng giã, nghệ tươi, mẻ chua", "Rau thì là & hành hoa chẻ", "Lạc rang giòn, bún tươi", "Mắm tôm đánh bông với chanh ớt"],
    address: "Chả Cá Lã Vọng (14 Phố Chả Cá) hoặc Chả Cá Thăng Long (Đường Thành)"
  },
  {
    id: "bun-thang",
    name: "Bún Thang",
    category: "mon-nuoc",
    categoryLabel: "Món nước cầu kỳ",
    price: "55.000đ - 70.000đ",
    baseImg: "assets/images/bun-thang-base.svg",
    floatImg: "assets/images/bun-thang-float.svg",
    shortDesc: "Món bún cầu kỳ với trứng tráng thái chỉ, giò, gà xé, nấm hương và nước dùng thanh tao.",
    ingredients: ["Nước dùng gà & tôm khô thanh trong", "Trứng vịt tráng mỏng thái chỉ", "Giò lụa & thịt gà ta xé phay", "Nấm hương rừng, củ cải dầm", "Rau răm, hành lá, tinh dầu cà cuống"],
    address: "Bún thang Bà Đức (48 Cầu Gỗ) hoặc Bún thang Hàng Hành"
  },
  {
    id: "com-ha-noi",
    name: "Cốm Làng Vòng",
    category: "qua-chieu",
    categoryLabel: "Quà chiều thanh tao",
    price: "35.000đ - 120.000đ",
    baseImg: "assets/images/com-ha-noi-base.svg",
    floatImg: "assets/images/com-ha-noi-float.svg",
    shortDesc: "Hạt nếp non dẻo thơm gói lá sen, ăn mộc hoặc chế biến thành chả cốm, xôi cốm, bánh cốm.",
    ingredients: ["Lúa nếp cái hoa vàng non", "Lá sen tươi Hồ Tây ướp hương", "Lạt rơm nếp vàng buộc gói", "Dừa nạo sợi & đậu xanh (cho xôi cốm)", "Chuối tiêu chín trứng cuốc ăn kèm"],
    address: "Làng Cốm Vòng (Dịch Vọng Hậu, Cầu Giấy) hoặc Phố Hàng Than"
  },
  {
    id: "banh-tom-ho-tay",
    name: "Bánh Tôm Hồ Tây",
    category: "qua-chieu",
    categoryLabel: "Món chiên giòn",
    price: "60.000đ - 100.000đ",
    baseImg: "assets/images/banh-tom-ho-tay-base.svg",
    floatImg: "assets/images/banh-tom-ho-tay-float.svg",
    shortDesc: "Bánh chiên giòn vàng với lớp bột và tôm tươi, ăn kèm rau sống và nước chấm chua ngọt.",
    ingredients: ["Tôm nước ngọt Hồ Tây tươi", "Bột mì, bột năng & khoai lang thái sợi", "Nước chấm tỏi ớt dưa góp", "Rau xà lách, rau mùi, húng quế"],
    address: "Bánh tôm Hồ Tây (Số 1 Thanh Niên, Tây Hồ)"
  }
];

/* 1. RENDER THẺ MÓN ĂN & HIỆU ỨNG 3D PARALLAX */
function renderFoodCards(containerId, dishesList) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (dishesList.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 30px;">Không tìm thấy món ăn phù hợp với từ khóa của bạn.</p>`;
    return;
  }

  container.innerHTML = dishesList.map(dish => `
    <article class="food-card" data-id="${dish.id}">
      <div class="dish-stage">
        <img src="${dish.baseImg}" alt="Bát đĩa ${dish.name}" class="dish-layer-base">
        <img src="${dish.floatImg}" alt="Thành phần nổi ${dish.name}" class="dish-layer-float">
      </div>
      <span class="food-tag">${dish.categoryLabel}</span>
      <h3>${dish.name}</h3>
      <p>${dish.shortDesc}</p>
      <div class="card-footer">
        <span class="price-tag">${dish.price}</span>
        <button class="btn-detail" onclick="openDishModal('${dish.id}')">Soi nguyên liệu</button>
      </div>
    </article>
  `).join("");

  attach3DHoverEffect();
}

function attach3DHoverEffect() {
  const cards = document.querySelectorAll(".food-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -12;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 12;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
  });
}

/* 2. MODAL XEM NHANH NGUYÊN LIỆU */
function openDishModal(dishId) {
  const dish = HANOI_DISHES.find(item => item.id === dishId);
  const modal = document.getElementById("dishModal");
  const modalBody = document.getElementById("modalBody");
  if (!dish || !modal || !modalBody) return;

  modalBody.innerHTML = `
    <span class="food-tag">${dish.categoryLabel}</span>
    <h2 style="font-family: var(--font-heading); color: var(--primary-color); margin-bottom: 10px;">${dish.name}</h2>
    <p style="margin-bottom: 14px;">${dish.shortDesc}</p>
    <h4 style="margin-bottom: 8px;">Thành phần tinh túy:</h4>
    <ul style="padding-left: 20px; margin-bottom: 14px; color: var(--text-muted);">
      ${dish.ingredients.map(ing => `<li>${ing}</li>`).join("")}
    </ul>
    <p><strong>Địa chỉ gợi ý:</strong> ${dish.address}</p>
  `;
  modal.classList.add("open");
}

function closeDishModal() {
  const modal = document.getElementById("dishModal");
  if (modal) modal.classList.remove("open");
}

/* 3. LỌC DANH MỤC & TÌM KIẾM */
function setupMenuFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("searchInput");
  if (!filterBtns.length && !searchInput) return;

  let currentCategory = "all";
  let currentKeyword = "";

  function applyFilter() {
    const filtered = HANOI_DISHES.filter(dish => {
      const matchCat = currentCategory === "all" || dish.category === currentCategory;
      const matchKey = dish.name.toLowerCase().includes(currentKeyword) ||
                       dish.shortDesc.toLowerCase().includes(currentKeyword);
      return matchCat && matchKey;
    });
    renderFoodCards("menuGrid", filtered);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      applyFilter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentKeyword = e.target.value.trim().toLowerCase();
      applyFilter();
    });
  }
}

/* 4. NÚT VIÊN THUỐC SÁNG/TỐI (MẶT TRỜI / MẶT TRĂNG) & GIỌT NƯỚC ĐIỀU HƯỚNG NHANH */
function setupThemeAndDroplet() {
  const themeBtn = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  function syncThemeUI(isDark) {
    if (isDark) {
      document.body.classList.add("dark-mode");
      if (themeIcon) themeIcon.textContent = "🌙";
    } else {
      document.body.classList.remove("dark-mode");
      if (themeIcon) themeIcon.textContent = "☀️";
    }
  }

  syncThemeUI(localStorage.getItem("hanoi_theme") === "dark");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const willBeDark = !document.body.classList.contains("dark-mode");
      localStorage.setItem("hanoi_theme", willBeDark ? "dark" : "light");
      syncThemeUI(willBeDark);
    });
  }

  // Giọt nước rơi xuống -> Bấm vào mở/đóng bảng điều hướng nhanh & hiện tọa độ
  const dropletWrapper = document.getElementById("dropletWrapper");
  const dropletBtn = document.getElementById("waterDroplet");
  const coordDisplay = document.getElementById("dropletCoord");

  if (dropletWrapper && dropletBtn) {
    dropletBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropletWrapper.classList.toggle("open");
      if (coordDisplay) {
        const rect = dropletWrapper.getBoundingClientRect();
        coordDisplay.textContent = `Tọa độ: Left ${Math.round(rect.left)}px | Top ${Math.round(rect.top)}px`;
      }
    });

    document.addEventListener("click", (e) => {
      if (!dropletWrapper.contains(e.target)) {
        dropletWrapper.classList.remove("open");
      }
    });
  }
}

/* 5. KIỂM TRA BIỂU MẪU ĐẶT TRẢI NGHIỆM */
function setupContactForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1574039077467062435/g--UkTFbw7Lf1vzcx50a86dS62HOsbB1flivpagTGafNgGqiuv__n-floYgrsER5AdRL";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let isValid = true;

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const dishSelect = document.getElementById("dishSelect");

    if (fullName.value.trim().length < 2) {
      document.getElementById("errName").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("errName").style.display = "none";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      document.getElementById("errEmail").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("errEmail").style.display = "none";
    }

    if (!dishSelect.value) {
      document.getElementById("errDish").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("errDish").style.display = "none";
    }

    if (isValid) {
   // Lấy thêm tên hiển thị của món ăn được chọn
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      const selectedOption = dishSelect.options[dishSelect.selectedIndex];
      const dishName = selectedOption ? selectedOption.text : dishSelect.value;
      const cleanName = fullName.value.trim().slice(0, 200) || "Không có";
      const cleanEmail = email.value.trim().slice(0, 200) || "Không có";
      const cleanDish = (dishName || "Chưa chọn").slice(0, 200);

      // Dữ liệu gửi về Discord (dạng thẻ Embed nhìn cho đẹp)
      const payload = {
        username: "Ẩm Thực Hà Nội - Đặt Trải Nghiệm",
        embeds: [
          {
            title: "🍜 CÓ KHÁCH ĐĂNG KÝ TRẢI NGHIỆM MỚI!",
            color: 15105570, // Màu cam nổi bật
            fields: [
              { name: "👤 Họ và tên", value: cleanName, inline: true },
              { name: "📧 Email", value: cleanEmail, inline: true },
              { name: "🥢 Món/Gói đăng ký", value: cleanDish, inline: false }
            ],
            timestamp: new Date().toISOString()
          }
        ]
      };

      try {
        const res = await fetch(DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          document.getElementById("formSuccess").style.display = "block";
          form.reset();
        } else {
          alert("Lỗi gửi thông báo về Discord! Hãy kiểm tra lại Webhook URL.");
        }
      } catch (error) {
        console.error("Lỗi kết nối:", error);
        alert("Không thể kết nối mạng để gửi thông tin.");
      }
      finally {
      if (submitBtn) submitBtn.disabled = false;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFoodCards("featuredGrid", HANOI_DISHES.slice(0, 3));
  renderFoodCards("menuGrid", HANOI_DISHES);
  setupMenuFilters();
  setupThemeAndDroplet();
  setupContactForm();
});
