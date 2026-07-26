$(function () {

  /* =========================================================
     ÜRÜN VERİLERİ
     Gerçek fotoğrafları eklemek için: images/<slug>/1.png, 2.png, 3.png
     Fotoğraf bulunamazsa otomatik olarak renkli/ikonlu görünüme döner.
     (stor-perde ve fon-perde için henüz fotoğraf yok — ikonlu görünüm kullanılıyor)
     ========================================================= */
  var CURTAIN_ICON = '<span class="icon-badge"><svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="3" width="20" height="2" rx="1"/><path d="M4 5c3 2 3 6 1 8c-1.2 1.3-1.6 3-1 5h4c-1-2-.6-3.6.6-5c2-2.2 2-6-.6-8H4z"/><path d="M20 5c-3 2-3 6-1 8c1.2 1.3 1.6 3 1 5h-4c1-2 .6-3.6-.6-5c-2-2.2-2-6 .6-8H20z"/></svg></span>';

  var PRODUCTS = {
    'keten-fon-perde': { name: 'Keten Fon Perdeler', shortName: 'Keten Fon Perde', icon: CURTAIN_ICON, swatch: '1',
      desc: 'Doğal keten dokusu, kaliteli kumaşı ve modern görünümüyle salon ve oturma odalarına şıklık kazandıran özel üretim fon perdeler.',
      images: ['images/keten-fon-perde/1.png', 'images/keten-fon-perde/2.png', 'images/keten-fon-perde/3.png'],
      models: [
        { name: 'Toskana', price: { old: 449, sale: 389 }, badges: ['Ölçüye Özel', '1. Sınıf Kumaş'], colors: [
          { name: 'Bej', hex: '#d9c7a3' },
          { name: 'Krem', hex: '#ede2c8' },
          { name: 'Hardal', hex: '#c9982f' }
        ] },
        { name: 'Nordik', price: { old: 479, sale: 419 }, badges: ['Yeni Sezon', '1. Sınıf Kumaş'], colors: [
          { name: 'Gri', hex: '#9aa0a6' },
          { name: 'Antrasit', hex: '#3a3a3a' },
          { name: 'Beyaz', hex: '#f5f5f0' }
        ] }
      ] },
    'tul-perde': { name: 'Tül Perdeler', shortName: 'Tül Perde', icon: CURTAIN_ICON, swatch: '2',
      desc: 'Modern desenleri ve kaliteli dokusuyla ışığı en doğru şekilde dağıtan özel tasarım tül perdeler.',
      images: ['images/tul-perde/1.png', 'images/tul-perde/2.png', 'images/tul-perde/3.png'],
      models: [
        { name: 'Bulut', price: { old: 229, sale: 189 }, badges: ['Ölçüye Özel', 'Hafif Doku'], colors: [
          { name: 'Açık Gri', hex: '#c9c9c9' },
          { name: 'Beyaz', hex: '#f5f5f0' },
          { name: 'Bej', hex: '#d9c7a3' }
        ] },
        { name: 'İnci', price: { old: 259, sale: 219 }, badges: ['Parlak Doku', 'Yeni Sezon'], colors: [
          { name: 'Beyaz', hex: '#f5f5f0' },
          { name: 'Gri', hex: '#9aa0a6' },
          { name: 'Bordo', hex: '#6d1b2c' }
        ] }
      ] },
    'plise-perde': { name: 'Plise Perdeler', shortName: 'Plise Perde', icon: CURTAIN_ICON, swatch: '3',
      desc: 'Cam balkon, mutfak, ofis ve pimapen camlar için ölçüye özel üretilen kullanışlı plise perde sistemleri.',
      images: ['images/plise-perde/1.png', 'images/plise-perde/2.png', 'images/plise-perde/3.png'],
      models: [
        { name: 'Mutfak Serisi', price: { old: 349, sale: 299 }, badges: ['Silinebilir', 'Ölçüye Özel'], colors: [
          { name: 'Beyaz', hex: '#f2f2ee' },
          { name: 'Krem', hex: '#e8dcc4' },
          { name: 'Açık Gri', hex: '#c9c9c9' }
        ] },
        { name: 'Ofis Serisi', price: { old: 389, sale: 339 }, badges: ['Güneş Kontrolü', 'Ölçüye Özel'], colors: [
          { name: 'Antrasit', hex: '#3a3a3a' },
          { name: 'Gri', hex: '#9aa0a6' },
          { name: 'Siyah', hex: '#1c1c1c' }
        ] }
      ] },
    'zebra-perde': { name: 'Zebra Perdeler', shortName: 'Zebra Perde', icon: CURTAIN_ICON, swatch: '4',
      desc: 'Gündüz ve gece kullanımına uygun, modern yaşam alanları için pratik perde sistemleri.',
      images: ['images/zebra-perde/1.png', 'images/zebra-perde/2.png', 'images/zebra-perde/3.png'],
      models: [
        { name: 'Okyanus', price: { old: 329, sale: 279 }, badges: ['Gündüz/Gece', 'Ölçüye Özel'], colors: [
          { name: 'Yeşil', hex: '#3f6b4f' },
          { name: 'Mavi', hex: '#2f5d8a' },
          { name: 'Turkuaz', hex: '#2a7f7f' }
        ] },
        { name: 'Volkanik', price: { old: 349, sale: 299 }, badges: ['Gündüz/Gece', 'Yeni Sezon'], colors: [
          { name: 'Antrasit', hex: '#3a3a3a' },
          { name: 'Bordo', hex: '#6d1b2c' },
          { name: 'Siyah', hex: '#1c1c1c' }
        ] }
      ] },
    'stor-perde': { name: 'Stor Perdeler', shortName: 'Stor Perde', icon: CURTAIN_ICON, swatch: '5',
      desc: 'Minimal tasarım sevenler için sade, kullanışlı ve uzun ömürlü stor perde modelleri.',
      images: ['images/stor-perde/1.png', 'images/stor-perde/2.png', 'images/stor-perde/3.png'],
      models: [
        { name: 'Minimal', price: { old: 249, sale: 209 }, badges: ['1. Sınıf Kumaş', 'Ölçüye Özel'], colors: [
          { name: 'Beyaz', hex: '#f2f2ee' },
          { name: 'Krem', hex: '#e8dcc4' },
          { name: 'Açık Gri', hex: '#c9c9c9' }
        ] },
        { name: 'Karbon', price: { old: 269, sale: 229 }, badges: ['Silinebilir', 'İndirimli Ürün'], colors: [
          { name: 'Siyah', hex: '#1c1c1c' },
          { name: 'Antrasit', hex: '#3a3a3a' },
          { name: 'Gri', hex: '#9aa0a6' }
        ] }
      ] },
    'jaluzi-perde': { name: 'Jalüzi Perdeler', shortName: 'Jalüzi Perde', icon: CURTAIN_ICON, swatch: '6',
      desc: 'Alüminyum ve ahşap seçenekleriyle ofis ve evler için şık güneş kontrolü sağlayan perde sistemleri.',
      images: ['images/jaluzi-perde/1.png', 'images/jaluzi-perde/2.png', 'images/jaluzi-perde/3.png'],
      models: [
        { name: 'Klasik', price: { old: 289, sale: 249 }, badges: ['Silinebilir', 'Hızlı Montaj'], colors: [
          { name: 'Gümüş', hex: '#b0b4b8' },
          { name: 'Beyaz', hex: '#f2f2ee' },
          { name: 'Antrasit', hex: '#3a3a3a' }
        ] },
        { name: 'Ahşap', price: { old: 379, sale: 329 }, badges: ['Doğal Malzeme', 'Yeni Sezon'], colors: [
          { name: 'Ceviz', hex: '#6b4630' },
          { name: 'Beyaz', hex: '#f2f2ee' },
          { name: 'Venge', hex: '#2e211b' }
        ] }
      ] },
    'fon-perde': { name: 'Fon Perdeler', shortName: 'Fon Perde', icon: CURTAIN_ICON, swatch: '7',
      desc: 'Salon, yatak odası ve yaşam alanları için onlarca renk ve kumaş seçeneğiyle özel dikim fon perdeler.',
      images: ['images/fon-perde/1.png', 'images/fon-perde/2.png', 'images/fon-perde/3.png'],
      models: [
        { name: 'Prestij', price: { old: 459, sale: 399 }, badges: ['1. Sınıf Kumaş', 'Ölçüye Özel'], colors: [
          { name: 'Bordo', hex: '#6d1b2c' },
          { name: 'Antrasit', hex: '#3a3a3a' },
          { name: 'Petrol Mavisi', hex: '#1f4e4c' }
        ] },
        { name: 'Saten', price: { old: 489, sale: 429 }, badges: ['Parlak Doku', 'Yeni Sezon'], colors: [
          { name: 'Krem', hex: '#ede2c8' },
          { name: 'Gümüş', hex: '#b0b4b8' },
          { name: 'Altın', hex: '#c9a24b' }
        ] }
      ] },
    'celik-zirh-tul': { name: 'Çelik Zırh Tül', shortName: 'Çelik Zırh Tül', icon: CURTAIN_ICON, swatch: '8',
      desc: 'Dayanıklı örgü yapısı sayesinde uzun ömürlü kullanım sunan, modern görünümü ve özel dokusuyla öne çıkan yeni nesil tül perde modeli.',
      images: ['images/celik-zirh-tul/1.png', 'images/celik-zirh-tul/2.png', 'images/celik-zirh-tul/3.png'],
      models: [
        { name: 'Klasik', price: { old: 339, sale: 289 }, badges: ['Dayanıklı Doku', 'Ölçüye Özel'], colors: [
          { name: 'Beyaz', hex: '#f2f2ee' },
          { name: 'İnci', hex: '#ece6da' },
          { name: 'Krem', hex: '#e8dcc4' }
        ] },
        { name: 'Mat', price: { old: 359, sale: 309 }, badges: ['Dayanıklı Doku', 'Yeni Sezon'], colors: [
          { name: 'Krem', hex: '#e8dcc4' },
          { name: 'Gri', hex: '#9aa0a6' },
          { name: 'Antrasit', hex: '#3a3a3a' }
        ] }
      ] }
  };

  // Galeri: her grup gerçek uygulama fotoğrafına karşılık gelir (images/galeri/1.png ... 18.png)
  var GALLERY = [];
  [
    { group: 'Keten Fon Perde', swatch: '1', room: 'Salon Uygulaması', count: 3 },
    { group: 'Tül Perde', swatch: '2', room: 'Salon Uygulaması', count: 3 },
    { group: 'Plise Perde', swatch: '3', room: 'Mutfak Uygulaması', count: 3 },
    { group: 'Zebra Perde', swatch: '4', room: 'Yemek Odası Uygulaması', count: 3 },
    { group: 'Jalüzi Perde', swatch: '6', room: 'Çalışma Odası Uygulaması', count: 3 },
    { group: 'Çelik Zırh Tül', swatch: '8', room: 'Salon Uygulaması', count: 3 }
  ].forEach(function (g) {
    for (var i = 0; i < g.count; i++) {
      GALLERY.push({
        swatch: g.swatch,
        caption: g.group + ' — ' + g.room,
        img: 'images/galeri/' + (GALLERY.length + 1) + '.png'
      });
    }
  });


  /* =========================================================
     1) PERDE AÇILIŞ ANİMASYONU (Curtain Intro)
     ========================================================= */
  var $intro = $('#curtain-intro');
  $('body').addClass('no-scroll');

  function openCurtains() {
    $('#curtainCords').addClass('tense');
    setTimeout(function () {
      $('.curtain-glow').addClass('show');
      $('#curtainPanel').addClass('folded');
      setTimeout(function () {
        $intro.fadeOut(400, function () {
          $intro.remove();
          $('body').removeClass('no-scroll');
        });
      }, 1400);
    }, 300);
  }

  $(window).on('load', function () {
    setTimeout(openCurtains, 700);
  });
  setTimeout(function () {
    if ($('#curtain-intro').length) openCurtains();
  }, 3000);


  /* =========================================================
     2) NAVBAR: scroll efekti + mobil menü + aktif link
     ========================================================= */
  var $navbar = $('#navbar');

  function handleNavbarScroll() {
    if ($(window).scrollTop() > 60) {
      $navbar.addClass('scrolled');
    } else {
      $navbar.removeClass('scrolled');
    }
  }
  handleNavbarScroll();
  $(window).on('scroll', handleNavbarScroll);

  $('#nav-toggle').on('click', function () {
    $(this).toggleClass('open');
    $('.nav-links').toggleClass('open');
  });

  $('.nav-links a').on('click', function () {
    $('#nav-toggle').removeClass('open');
    $('.nav-links').removeClass('open');
  });

  var $sections = $('section[id]');
  function updateActiveLink() {
    var scrollPos = $(window).scrollTop() + 140;
    var currentId = '';
    $sections.each(function () {
      var top = $(this).offset().top;
      var height = $(this).outerHeight();
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = $(this).attr('id');
      }
    });
    $('.nav-link').removeClass('active');
    if (currentId) {
      $('.nav-link[href="#' + currentId + '"]').addClass('active');
    }
  }
  $(window).on('scroll', updateActiveLink);
  updateActiveLink();


  /* =========================================================
     3) SMOOTH SCROLL
     ========================================================= */
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this).attr('href');
    if (target.length > 1 && $(target).length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(target).offset().top - 90
      }, 700, 'swing');
    }
  });


  /* =========================================================
     4) SCROLL REVEAL
     ========================================================= */
  function revealOnScroll() {
    var windowBottom = $(window).scrollTop() + $(window).height();
    $('[data-reveal]:not(.revealed)').each(function () {
      var elTop = $(this).offset().top;
      if (windowBottom > elTop + 60) {
        $(this).addClass('revealed');
      }
    });
  }
  revealOnScroll();
  $(window).on('scroll resize', revealOnScroll);


  /* =========================================================
     5) SAYAÇ ANİMASYONU
     ========================================================= */
  var countersStarted = false;
  function startCounters() {
    if (countersStarted) return;
    var whyTop = $('#neden-biz').offset();
    if (!whyTop) return;
    var windowBottom = $(window).scrollTop() + $(window).height();
    if (windowBottom < whyTop.top + 80) return;

    countersStarted = true;
    $('.counter').each(function () {
      var $this = $(this);
      var target = parseInt($this.data('target'), 10);
      $({ val: 0 }).animate({ val: target }, {
        duration: 1400,
        easing: 'swing',
        step: function (now) {
          $this.text(Math.floor(now));
        },
        complete: function () {
          $this.text(target);
        }
      });
    });
  }
  $(window).on('scroll', startCounters);
  startCounters();


  /* =========================================================
     6) SEPET (CART) — localStorage destekli
     ========================================================= */
  var cart = [];

  function loadCart() {
    try {
      var saved = JSON.parse(localStorage.getItem('ozdemirPerdeCart') || '[]');
      if (Array.isArray(saved)) cart = saved;
    } catch (e) { cart = []; }
  }

  function saveCart() {
    localStorage.setItem('ozdemirPerdeCart', JSON.stringify(cart));
  }

  function addToCart(slug, modelIndex, colorIndex) {
    var product = PRODUCTS[slug];
    if (!product) return;
    var model = product.models[modelIndex || 0];
    var color = model.colors[colorIndex || 0];
    cart.push({
      id: 'item_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
      slug: slug,
      name: product.name + ' — ' + model.name + ' (' + color.name + ')',
      hex: color.hex,
      icon: product.icon,
      width: '',
      height: '',
      length: ''
    });
    saveCart();
    renderCart();
  }

  function removeFromCart(id) {
    cart = cart.filter(function (item) { return item.id !== id; });
    saveCart();
    renderCart();
  }

  function renderCart() {
    $('#cart-count').text(cart.length);
    var $items = $('#cart-items').empty();

    if (cart.length === 0) {
      $('#cart-empty').removeClass('hide');
      return;
    }
    $('#cart-empty').addClass('hide');

    cart.forEach(function (item) {
      var $row = $(
        '<div class="cart-item" data-id="' + item.id + '">' +
          '<div class="cart-item-visual" style="background:' + item.hex + '">' + item.icon + '</div>' +
          '<div class="cart-item-info">' +
            '<h4>' + item.name + '</h4>' +
            '<div class="cart-item-measure">' +
              '<div class="measure-field"><label>Genişlik (cm)</label><input type="number" min="1" class="cart-width" value="' + item.width + '"></div>' +
              '<div class="measure-field"><label>Yükseklik (cm)</label><input type="number" min="1" class="cart-height" value="' + item.height + '"></div>' +
              '<div class="measure-field"><label>Uzunluk (cm)</label><input type="number" min="1" class="cart-length" value="' + item.length + '"></div>' +
            '</div>' +
          '</div>' +
          '<button class="cart-item-remove" aria-label="Kaldır">&times;</button>' +
        '</div>'
      );
      $items.append($row);
    });
  }

  function openCart() {
    $('#cart-drawer, #cart-overlay').addClass('open');
    $('body').addClass('no-scroll');
  }
  function closeCart() {
    $('#cart-drawer, #cart-overlay').removeClass('open');
    $('body').removeClass('no-scroll');
  }

  $('#cart-toggle').on('click', openCart);
  $('#cart-close, #cart-overlay').on('click', closeCart);

  $('#cart-items').on('input', '.cart-width, .cart-height, .cart-length', function () {
    var id = $(this).closest('.cart-item').data('id');
    var item = cart.filter(function (it) { return it.id === id; })[0];
    if (!item) return;
    $(this).removeClass('invalid');
    if ($(this).hasClass('cart-width')) item.width = $(this).val();
    else if ($(this).hasClass('cart-height')) item.height = $(this).val();
    else item.length = $(this).val();
    saveCart();
  });

  $('#cart-items').on('click', '.cart-item-remove', function () {
    var id = $(this).closest('.cart-item').data('id');
    removeFromCart(id);
  });

  $('#cart-checkout').on('click', function () {
    if (cart.length === 0) return;

    var missing = false;
    var $firstInvalid = null;
    cart.forEach(function (item) {
      var $row = $('.cart-item[data-id="' + item.id + '"]');
      var widthOk = item.width && parseFloat(item.width) > 0;
      var heightOk = item.height && parseFloat(item.height) > 0;
      var lengthOk = item.length && parseFloat(item.length) > 0;
      $row.find('.cart-width').toggleClass('invalid', !widthOk);
      $row.find('.cart-height').toggleClass('invalid', !heightOk);
      $row.find('.cart-length').toggleClass('invalid', !lengthOk);
      if (!widthOk || !heightOk || !lengthOk) {
        missing = true;
        if (!$firstInvalid) {
          $firstInvalid = !widthOk ? $row.find('.cart-width') : (!heightOk ? $row.find('.cart-height') : $row.find('.cart-length'));
        }
      }
    });

    if (missing) {
      if ($firstInvalid) $firstInvalid.focus();
      return;
    }

    var parts = cart.map(function (item) {
      return item.name + ' modelinden ' + item.width + 'x' + item.height + 'x' + item.length + ' cm';
    });
    var message = 'Merhaba, ' + parts.join(' ve ') + ' ölçülerinde teklif almak istiyorum.';

    var text = encodeURIComponent(message);
    window.open('https://wa.me/905366232310?text=' + text, '_blank');

    cart = [];
    saveCart();
    renderCart();
    closeCart();
  });

  loadCart();
  renderCart();


  /* =========================================================
     7) ÜRÜN MODALI (Model Slider + Renk Seçimi + Sepete Ekle)
     Slider kaydıkça MODEL değişir (ör. Bulut -> İnci).
     Her modelin altında o modele ait renk çipleri gösterilir.
     ========================================================= */
  var currentSlug = null;
  var currentSlide = 0;
  var currentColor = 0;

  function openProductModal(slug, modelIndex, colorIndex) {
    var product = PRODUCTS[slug];
    if (!product) return;
    currentSlug = slug;
    currentSlide = modelIndex || 0;
    currentColor = colorIndex || 0;

    $('#product-modal-title').text(product.name);
    $('#product-modal-desc').text(product.desc);

    renderProductDots(product.models.length);
    renderColorChips();
    showProductSlide();

    $('#product-modal').addClass('open');
    $('body').addClass('no-scroll');
  }

  function closeProductModal() {
    $('#product-modal').removeClass('open');
    $('body').removeClass('no-scroll');
  }

  function renderProductDots(count) {
    var $dots = $('#product-dots').empty();
    for (var i = 0; i < count; i++) {
      $dots.append('<span data-i="' + i + '"></span>');
    }
  }

  function renderColorChips() {
    var model = PRODUCTS[currentSlug].models[currentSlide];
    var $chips = $('#product-colors').empty();
    model.colors.forEach(function (c, i) {
      $chips.append('<button type="button" class="color-chip" data-i="' + i + '" style="background:' + c.hex + '" title="' + c.name + '"></button>');
    });
  }

  function showProductSlide() {
    var product = PRODUCTS[currentSlug];
    if (!product) return;
    var model = product.models[currentSlide];
    var color = model.colors[currentColor];
    $('#product-slide-viewport').css('background', color.hex);
    $('#product-slide-icon').html(product.icon);
    $('#product-slide-label').text(model.name + ' — ' + color.name);
    $('#product-dots span').removeClass('active').eq(currentSlide).addClass('active');
    $('#product-colors .color-chip').removeClass('active').eq(currentColor).addClass('active');
    $('#product-modal-price').html(
      '<span class="listing-price-old">' + formatPrice(model.price.old) + '</span>' +
      '<span class="listing-price-new">' + formatPrice(model.price.sale) + '</span>'
    );
  }

  $('#product-modal-close, #product-modal').on('click', function (e) {
    if (e.target.id === 'product-modal-close' || e.target.id === 'product-modal') {
      closeProductModal();
    }
  });

  $('.product-prev').on('click', function () {
    var count = PRODUCTS[currentSlug].models.length;
    currentSlide = (currentSlide - 1 + count) % count;
    currentColor = 0;
    renderColorChips();
    showProductSlide();
  });
  $('.product-next').on('click', function () {
    var count = PRODUCTS[currentSlug].models.length;
    currentSlide = (currentSlide + 1) % count;
    currentColor = 0;
    renderColorChips();
    showProductSlide();
  });
  $('#product-dots').on('click', 'span', function () {
    currentSlide = parseInt($(this).data('i'), 10);
    currentColor = 0;
    renderColorChips();
    showProductSlide();
  });
  $('#product-colors').on('click', '.color-chip', function () {
    currentColor = parseInt($(this).data('i'), 10);
    showProductSlide();
  });

  $('#product-add-cart').on('click', function () {
    if (!currentSlug) return;
    addToCart(currentSlug, currentSlide, currentColor);
    var $btn = $(this);
    var original = $btn.text();
    $btn.text('Eklendi ✓');
    setTimeout(function () { $btn.text(original); }, 1300);
  });

  /* =========================================================
     7b) KATEGORİ -> ÜRÜN LİSTESİ (e-ticaret tarzı, fiyatlı kartlar)
     ========================================================= */
  function formatPrice(n) {
    return n.toLocaleString('tr-TR') + ' TL';
  }

  function renderCategoryListing(slug) {
    var product = PRODUCTS[slug];
    if (!product) return;

    $('#listing-category-name').text(product.name);
    $('#listing-title').text(product.name);
    $('#listing-desc').text(product.desc);

    var $grid = $('#listing-grid').empty();
    product.models.forEach(function (model, modelIndex) {
      model.colors.forEach(function (color, colorIndex) {
        var cardName = model.name + ' ' + color.name + ' ' + product.shortName;
        var $card = $(
          '<article class="listing-card" data-slug="' + slug + '" data-model="' + modelIndex + '" data-color="' + colorIndex + '">' +
            '<div class="listing-card-visual" style="background:' + color.hex + '">' +
              '<div class="listing-badges">' +
                '<span class="listing-badge b1">' + model.badges[0] + '</span>' +
                '<span class="listing-badge b2">' + model.badges[1] + '</span>' +
              '</div>' +
              product.icon +
            '</div>' +
            '<div class="listing-info">' +
              '<h4 class="listing-name">' + cardName + '</h4>' +
              '<div class="listing-price">' +
                '<span class="listing-price-old">' + formatPrice(model.price.old) + '</span>' +
                '<span class="listing-price-new">' + formatPrice(model.price.sale) + '</span>' +
              '</div>' +
              '<span class="listing-price-note">Ölçüye özel üretim, m² başlangıç fiyatı</span>' +
            '</div>' +
          '</article>'
        );
        $grid.append($card);
      });
    });
  }

  function showCategoryListing(slug) {
    renderCategoryListing(slug);
    $('#category-grid-view').addClass('hidden');
    $('#product-listing-view').removeClass('hidden');
    $('[data-reveal]', '#product-listing-view').addClass('revealed');
    $('html, body').animate({ scrollTop: $('#urunler').offset().top - 90 }, 500, 'swing');
  }

  function showCategoryGrid() {
    $('#product-listing-view').addClass('hidden');
    $('#category-grid-view').removeClass('hidden');
  }

  // Kategori kartı tıklanınca -> o kategorinin ürün listesi açılır
  $('.product-card').on('click', function () {
    var slug = $(this).data('slug');
    showCategoryListing(slug);
  });

  // Listedeki ürün kartı tıklanınca -> ilgili model/renk seçili modal açılır
  $('#listing-grid').on('click', '.listing-card', function () {
    var $card = $(this);
    openProductModal($card.data('slug'), parseInt($card.data('model'), 10), parseInt($card.data('color'), 10));
  });

  // "Ana Sayfa" / kategorilere dön
  $('#listing-back-link').on('click', function (e) {
    e.preventDefault();
    showCategoryGrid();
    $('html, body').animate({ scrollTop: $('#urunler').offset().top - 90 }, 500, 'swing');
  });


  /* =========================================================
     8) GALERİ SLIDER + LIGHTBOX (ok tuşlarıyla gezinme)
     ========================================================= */
  var galleryIndex = 0;
  var visiblePerView = 4;

  function renderGalleryItems() {
    var $track = $('#gallery-track').empty();
    GALLERY.forEach(function (item, i) {
      var $el = $(
        '<div class="gallery-item" data-index="' + i + '" data-swatch="' + item.swatch + '">' +
          '<img src="' + item.img + '" alt="' + item.caption + '" onerror="this.style.display=\'none\'">' +
          '<span>' + item.caption + '</span>' +
        '</div>'
      );
      $track.append($el);
    });
  }
  renderGalleryItems();

  function getVisiblePerView() {
    var w = $(window).width();
    if (w <= 760) return 1;
    if (w <= 980) return 2;
    return 4;
  }

  function renderGalleryDots() {
    visiblePerView = getVisiblePerView();
    var pages = Math.max(1, GALLERY.length - visiblePerView + 1);
    var $dots = $('#gallery-dots').empty();
    for (var i = 0; i < pages; i++) {
      $dots.append('<span data-i="' + i + '"></span>');
    }
    updateGalleryDots();
  }

  function updateGalleryDots() {
    $('#gallery-dots span').removeClass('active').eq(galleryIndex).addClass('active');
  }

  function slideGalleryTo(index) {
    visiblePerView = getVisiblePerView();
    var maxIndex = Math.max(0, GALLERY.length - visiblePerView);
    if (index < 0) index = maxIndex;
    if (index > maxIndex) index = 0;
    galleryIndex = index;

    var itemWidth = $('.gallery-item').first().outerWidth(true);
    $('#gallery-track').css('transform', 'translateX(' + (-itemWidth * galleryIndex) + 'px)');
    updateGalleryDots();
  }

  $('.gallery-next').on('click', function () { slideGalleryTo(galleryIndex + 1); });
  $('.gallery-prev').on('click', function () { slideGalleryTo(galleryIndex - 1); });
  $('#gallery-dots').on('click', 'span', function () {
    slideGalleryTo(parseInt($(this).data('i'), 10));
  });

  $(window).on('resize', function () {
    renderGalleryDots();
    slideGalleryTo(0);
  });
  renderGalleryDots();

  // Lightbox
  var lightboxIndex = 0;

  function showLightboxSlide() {
    var item = GALLERY[lightboxIndex];
    $('.lightbox-fallback-icon').attr('data-swatch', item.swatch).text('');
    $('.lightbox-visual').attr('data-swatch', item.swatch);
    var $img = $('.lightbox-img');
    $img.attr('style', '').show();
    $img.attr('src', item.img);
    $('.lightbox-caption').text(item.caption);
  }

  $('#gallery-track').on('click', '.gallery-item', function () {
    lightboxIndex = parseInt($(this).data('index'), 10);
    showLightboxSlide();
    $('#lightbox').addClass('open');
    $('body').addClass('no-scroll');
  });

  $('.lightbox-prev').on('click', function (e) {
    e.stopPropagation();
    lightboxIndex = (lightboxIndex - 1 + GALLERY.length) % GALLERY.length;
    showLightboxSlide();
  });
  $('.lightbox-next').on('click', function (e) {
    e.stopPropagation();
    lightboxIndex = (lightboxIndex + 1) % GALLERY.length;
    showLightboxSlide();
  });

  $('#lightbox-close, #lightbox').on('click', function (e) {
    if (e.target.id === 'lightbox-close' || e.target.id === 'lightbox') {
      $('#lightbox').removeClass('open');
      $('body').removeClass('no-scroll');
    }
  });

  $(document).on('keydown', function (e) {
    if ($('#lightbox').hasClass('open')) {
      if (e.key === 'ArrowLeft') $('.lightbox-prev').trigger('click');
      if (e.key === 'ArrowRight') $('.lightbox-next').trigger('click');
      if (e.key === 'Escape') $('#lightbox').removeClass('open');
    }
    if ($('#product-modal').hasClass('open')) {
      if (e.key === 'ArrowLeft') $('.product-prev').trigger('click');
      if (e.key === 'ArrowRight') $('.product-next').trigger('click');
      if (e.key === 'Escape') closeProductModal();
    }
  });


  /* =========================================================
     9) İLETİŞİM FORMU (front-end doğrulama + WhatsApp'a yönlendirme)
     ========================================================= */
  $('#contact-form').on('submit', function (e) {
    e.preventDefault();
    var name = $('#cf-name').val().trim();
    var phone = $('#cf-phone').val().trim();
    var product = $('#cf-product').val();
    var message = $('#cf-message').val().trim();

    if (!name || !phone) return;

    var lines = [
      'Merhaba, Özdemir Perde web sitesinden yazıyorum.',
      'Ad Soyad: ' + name,
      'Telefon: ' + phone
    ];
    if (product) lines.push('Ürün: ' + product);
    if (message) lines.push('Mesaj: ' + message);
    var text = encodeURIComponent(lines.join('\n'));

    $('.form-success').addClass('show');
    this.reset();

    setTimeout(function () {
      window.open('https://wa.me/905366232310?text=' + text, '_blank');
    }, 900);

    setTimeout(function () {
      $('.form-success').removeClass('show');
    }, 6000);
  });


  /* =========================================================
     10) BACK TO TOP
     ========================================================= */
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 500) {
      $('#back-to-top').addClass('show');
    } else {
      $('#back-to-top').removeClass('show');
    }
  });
  $('#back-to-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 700, 'swing');
  });


  /* =========================================================
     11) FOOTER YIL
     ========================================================= */
  $('#year').text(new Date().getFullYear());

});
