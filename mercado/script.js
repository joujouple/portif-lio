// ============== Dados de Produtos (60 itens) ==============
    // Cada produto: id, nome, categoria, preço, rating, promo(bool)
    const PRODUCTS = [
      // Mercearia
      {id:'p001', name:'Arroz Branco 5kg', cat:'Mercearia', price:27.90, rating:4.7, promo:true},
      {id:'p002', name:'Feijão Carioca 1kg', cat:'Mercearia', price:8.99, rating:4.6, promo:false},
      {id:'p003', name:'Macarrão Espaguete 500g', cat:'Mercearia', price:4.49, rating:4.5, promo:false},
      {id:'p004', name:'Azeite de Oliva 500ml', cat:'Mercearia', price:29.90, rating:4.8, promo:true},
      {id:'p005', name:'Açúcar Cristal 1kg', cat:'Mercearia', price:4.79, rating:4.4, promo:false},
      {id:'p006', name:'Farinha de Trigo 1kg', cat:'Mercearia', price:5.59, rating:4.5, promo:false},
      {id:'p007', name:'Molho de Tomate 340g', cat:'Mercearia', price:3.99, rating:4.3, promo:true},
      {id:'p008', name:'Sal Refinado 1kg', cat:'Mercearia', price:2.89, rating:4.2, promo:false},
      {id:'p009', name:'Café Torrado 500g', cat:'Mercearia', price:18.90, rating:4.7, promo:true},
      {id:'p010', name:'Óleo de Soja 900ml', cat:'Mercearia', price:7.49, rating:4.5, promo:false},
      // Bebidas
      {id:'p011', name:'Água Mineral 1,5L', cat:'Bebidas', price:2.99, rating:4.2, promo:false},
      {id:'p012', name:'Refrigerante Cola 2L', cat:'Bebidas', price:8.49, rating:4.1, promo:false},
      {id:'p013', name:'Suco de Laranja 1L', cat:'Bebidas', price:7.99, rating:4.4, promo:true},
      {id:'p014', name:'Chá Gelado 1,5L', cat:'Bebidas', price:6.49, rating:4.0, promo:false},
      {id:'p015', name:'Leite UHT Integral 1L', cat:'Bebidas', price:4.99, rating:4.6, promo:true},
      {id:'p016', name:'Cerveja Pilsen 350ml', cat:'Bebidas', price:3.49, rating:4.3, promo:false},
      {id:'p017', name:'Água Tônica 1L', cat:'Bebidas', price:5.99, rating:4.0, promo:false},
      {id:'p018', name:'Energético 250ml', cat:'Bebidas', price:7.49, rating:4.1, promo:true},
      {id:'p019', name:'Vinho Tinto Seco 750ml', cat:'Bebidas', price:39.90, rating:4.6, promo:true},
      {id:'p020', name:'Coco Verde 1un', cat:'Bebidas', price:5.49, rating:4.2, promo:false},
      // Frios e Laticínios
      {id:'p021', name:'Queijo Mussarela 500g', cat:'Frios', price:24.90, rating:4.7, promo:false},
      {id:'p022', name:'Presunto Cozido 200g', cat:'Frios', price:8.90, rating:4.5, promo:false},
      {id:'p023', name:'Iogurte Natural 170g', cat:'Frios', price:2.99, rating:4.4, promo:true},
      {id:'p024', name:'Manteiga 200g', cat:'Frios', price:12.90, rating:4.6, promo:false},
      {id:'p025', name:'Requeijão 200g', cat:'Frios', price:7.99, rating:4.5, promo:true},
      {id:'p026', name:'Queijo Parmesão 100g', cat:'Frios', price:9.90, rating:4.7, promo:false},
      {id:'p027', name:'Leite Fermentado 80ml 6un', cat:'Frios', price:7.49, rating:4.4, promo:false},
      {id:'p028', name:'Creme de Leite 200g', cat:'Frios', price:4.49, rating:4.3, promo:false},
      {id:'p029', name:'Ricota 300g', cat:'Frios', price:8.49, rating:4.2, promo:false},
      {id:'p030', name:'Queijo Prato 500g', cat:'Frios', price:25.90, rating:4.6, promo:true},
      // Hortifruti
      {id:'p031', name:'Banana Nanica 1kg', cat:'Hortifruti', price:5.99, rating:4.6, promo:false},
      {id:'p032', name:'Maçã Gala 1kg', cat:'Hortifruti', price:7.49, rating:4.5, promo:true},
      {id:'p033', name:'Tomate Italiano 1kg', cat:'Hortifruti', price:8.99, rating:4.2, promo:false},
      {id:'p034', name:'Alface Crespa 1un', cat:'Hortifruti', price:2.99, rating:4.1, promo:false},
      {id:'p035', name:'Cebola 1kg', cat:'Hortifruti', price:6.49, rating:4.3, promo:false},
      {id:'p036', name:'Batata 1kg', cat:'Hortifruti', price:7.49, rating:4.4, promo:false},
      {id:'p037', name:'Laranja Pera 1kg', cat:'Hortifruti', price:6.99, rating:4.4, promo:true},
      {id:'p038', name:'Cenoura 1kg', cat:'Hortifruti', price:5.99, rating:4.3, promo:false},
      {id:'p039', name:'Manga Palmer 1kg', cat:'Hortifruti', price:9.49, rating:4.5, promo:false},
      {id:'p040', name:'Abacaxi 1un', cat:'Hortifruti', price:7.99, rating:4.2, promo:false},
      // Limpeza
      {id:'p041', name:'Detergente 500ml', cat:'Limpeza', price:2.99, rating:4.5, promo:true},
      {id:'p042', name:'Sabão em Pó 1kg', cat:'Limpeza', price:12.90, rating:4.6, promo:false},
      {id:'p043', name:'Amaciante 2L', cat:'Limpeza', price:14.90, rating:4.4, promo:false},
      {id:'p044', name:'Desinfetante 2L', cat:'Limpeza', price:9.90, rating:4.3, promo:false},
      {id:'p045', name:'Esponja Multiuso 3un', cat:'Limpeza', price:4.99, rating:4.5, promo:false},
      {id:'p046', name:'Vassoura Nylon', cat:'Limpeza', price:15.90, rating:4.2, promo:false},
      {id:'p047', name:'Saco de Lixo 50L 20un', cat:'Limpeza', price:12.49, rating:4.4, promo:true},
      {id:'p048', name:'Álcool 70% 1L', cat:'Limpeza', price:8.49, rating:4.6, promo:false},
      {id:'p049', name:'Limpador Multiuso 500ml', cat:'Limpeza', price:7.99, rating:4.3, promo:false},
      {id:'p050', name:'Luva de Limpeza', cat:'Limpeza', price:6.99, rating:4.1, promo:false},
      // Cuidados Pessoais
      {id:'p051', name:'Shampoo 400ml', cat:'Pessoais', price:13.90, rating:4.5, promo:false},
      {id:'p052', name:'Condicionador 400ml', cat:'Pessoais', price:14.90, rating:4.5, promo:false},
      {id:'p053', name:'Sabonete 90g', cat:'Pessoais', price:2.49, rating:4.4, promo:true},
      {id:'p054', name:'Creme Dental 90g', cat:'Pessoais', price:5.99, rating:4.6, promo:false},
      {id:'p055', name:'Desodorante Aerosol', cat:'Pessoais', price:12.49, rating:4.3, promo:false},
      {id:'p056', name:'Fio Dental 50m', cat:'Pessoais', price:6.49, rating:4.2, promo:false},
      {id:'p057', name:'Lâmina de Barbear 4un', cat:'Pessoais', price:10.90, rating:4.1, promo:false},
      {id:'p058', name:'Hidratante 200ml', cat:'Pessoais', price:16.90, rating:4.5, promo:true},
      {id:'p059', name:'Protetor Solar FPS50 200ml', cat:'Pessoais', price:39.90, rating:4.6, promo:false},
      {id:'p060', name:'Álcool em Gel 500ml', cat:'Pessoais', price:7.49, rating:4.5, promo:false},
    ];
    // ============== Estado e Utilitários ==============
    const qs = sel => document.querySelector(sel);
    const qsa = sel => Array.from(document.querySelectorAll(sel));
    const money = v => v.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
    const state = {
      search: '',
      category: 'Todas',
      onlyPromo: false,
      sort: 'relevance',
      cart: {} // {id: {id, qty}}
    };
    // Carregar carrinho de localStorage ou da URL (compartilhamento)
    function loadCartFromLocal(){
      try{
        const raw = localStorage.getItem('mm.cart');
        if(raw){ state.cart = JSON.parse(raw) || {}; }
      }catch(e){ console.warn('localStorage', e); }
    }
    function saveCartLocal(){
      try{ localStorage.setItem('mm.cart', JSON.stringify(state.cart)); }catch(e){}
    }
    function encodeCartToURL(){
      const compact = Object.values(state.cart).map(it => [it.id, it.qty]);
      const b64 = btoa(JSON.stringify(compact));
      const url = new URL(window.location.href);
      url.searchParams.set('cart', b64);
      history.replaceState({}, '', url.toString());
      return url.toString();
    }
    function tryLoadCartFromURL(){
      const url = new URL(window.location.href);
      const c = url.searchParams.get('cart');
      if(c){
        try{
          const arr = JSON.parse(atob(c));
          const next = {};
          for(const [id, qty] of arr){
            if(PRODUCTS.find(p=>p.id===id) && qty>0){ next[id] = {id, qty}; }
          }
          if(Object.keys(next).length){
            state.cart = next;
            saveCartLocal();
          }
        }catch(e){ console.warn('cart url parse', e); }
      }
    }
    // ============== Renderização ==============
    const catalogEl = qs('#catalog');
    const itemsCountEl = qs('#itemsCount');
    const catListEl = qs('#catList');
    function buildCategories(){
      const cats = ['Todas', ...Array.from(new Set(PRODUCTS.map(p=>p.cat)))];
      catListEl.innerHTML = '';
      cats.forEach(cat=>{
        const el = document.createElement('button');
        el.type='button';
        el.className = 'cat-item'+(state.category===cat?' active':'');
        el.textContent = cat;
        el.addEventListener('click', ()=>{
          state.category = cat;
          qsa('.cat-item').forEach(x=>x.classList.remove('active'));
          el.classList.add('active');
          renderCatalog();
        });
        catListEl.appendChild(el);
      });
    }
    function filterSortProducts(){
      let list = PRODUCTS.slice();
      // filtro busca
      if(state.search.trim()){
        const s = state.search.toLowerCase();
        list = list.filter(p=> p.name.toLowerCase().includes(s) || p.cat.toLowerCase().includes(s));
      }
      // filtro categoria
      if(state.category !== 'Todas'){
        list = list.filter(p=> p.cat === state.category);
      }
      // promo
      if(state.onlyPromo){
        list = list.filter(p=> p.promo);
      }
      // sort
      switch(state.sort){
        case 'price-asc': list.sort((a,b)=>a.price-b.price); break;
        case 'price-desc': list.sort((a,b)=>b.price-a.price); break;
        case 'name-asc': list.sort((a,b)=>a.name.localeCompare(b.name,'pt-BR')); break;
        case 'name-desc': list.sort((a,b)=>b.name.localeCompare(a.name,'pt-BR')); break;
        default:
          // relevância simples: promo primeiro, depois rating
          list.sort((a,b)=> (b.promo - a.promo) || (b.rating - a.rating));
      }
      return list;
    }
    function renderCatalog(){
      const list = filterSortProducts();
      itemsCountEl.textContent = `${list.length} itens`;
      catalogEl.innerHTML = '';
      if(!list.length){
        catalogEl.innerHTML = `<div class="card" style="grid-column: 1/-1; padding:24px;">
          <div class="title">Nenhum item encontrado</div>
          <div class="content">Ajuste sua busca ou filtros.</div>
        </div>`;
        return;
      }
      const frag = document.createDocumentFragment();
      list.forEach(p=>{
        const inCart = state.cart[p.id]?.qty || 0;
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
          <div class="thumb" aria-hidden="true">
            <div class="img">${p.cat}</div>
          </div>
          <div class="content">
            <div class="title">${p.name}</div>
            <div class="meta">
              <span class="price">${money(p.price)}</span>
              <span class="rate">★ ${p.rating.toFixed(1)}</span>
            </div>
            <div class="add">
              <button class="btn" data-add="${p.id}">Adicionar</button>
              <button class="btn sec" data-minus="${p.id}" ${inCart? '' : 'disabled'} title="Remover 1">−</button>
              <span class="tiny" id="qty-${p.id}">${inCart? inCart : 0}</span>
            </div>
            ${p.promo? `<div class="tiny" style="color:#86efac; margin-top:6px;">Em oferta</div>`:''}
          </div>
        `;
        frag.appendChild(card);
      });
      catalogEl.appendChild(frag);
      // attach eventos add/minus
      qsa('[data-add]').forEach(btn=>{
        btn.onclick = ()=> addToCart(btn.getAttribute('data-add'), 1);
      });
      qsa('[data-minus]').forEach(btn=>{
        btn.onclick = ()=> addToCart(btn.getAttribute('data-minus'), -1);
      });
    }
    // ============== Carrinho ==============
    const cartDrawer = qs('#cartDrawer');
    const cartList = qs('#cartList');
    const cartCount = qs('#cartCount');
    const cartItemsQty = qs('#cartItemsQty');
    const cartSubtotal = qs('#cartSubtotal');
    function openCart(){ cartDrawer.classList.add('open'); }
    function closeCart(){ cartDrawer.classList.remove('open'); }
    function addToCart(id, delta){
      const prod = PRODUCTS.find(p=>p.id===id);
      if(!prod) return;
      const cur = state.cart[id]?.qty || 0;
      let next = cur + delta;
      if(next < 0) next = 0;
      if(next === 0) delete state.cart[id];
      else state.cart[id] = {id, qty: next};
      saveCartLocal();
      updateCartUI();
      // Atualiza badge no card
      const qtyEl = qs(`#qty-${id}`);
      if(qtyEl) qtyEl.textContent = state.cart[id]?.qty || 0;
      const minusBtn = qs(`[data-minus="${id}"]`);
      if(minusBtn) minusBtn.disabled = !(state.cart[id]?.qty > 0);
    }
    function setQty(id, qty){
      qty = Math.max(0, Math.min(999, parseInt(qty||0,10)));
      if(qty===0){ delete state.cart[id]; } else { state.cart[id] = {id, qty}; }
      saveCartLocal();
      updateCartUI();
      const qtyEl = qs(`#qty-${id}`); if(qtyEl) qtyEl.textContent = state.cart[id]?.qty || 0;
      const minusBtn = qs(`[data-minus="${id}"]`); if(minusBtn) minusBtn.disabled = !(state.cart[id]?.qty > 0);
    }
    function removeItem(id){
      delete state.cart[id];
      saveCartLocal();
      updateCartUI();
      const qtyEl = qs(`#qty-${id}`); if(qtyEl) qtyEl.textContent = 0;
      const minusBtn = qs(`[data-minus="${id}"]`); if(minusBtn) minusBtn.disabled = true;
    }
    function calcTotals(){
      let items = 0, total = 0;
      for(const {id, qty}
