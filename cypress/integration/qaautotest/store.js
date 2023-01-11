describe('Тестируем форму логина', function () {
    it('Позитивный тест на верный логин и пароль', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(5500)
         cy.get('.checkout').click();
         cy.get('#billing_first_name').type('Анастасия');
         cy.get('#billing_last_name').type('Нигматуллина');
         cy.get('#billing_address_1').type('Светлая, дом 9');
         cy.get('#billing_city').type('Москва');
         cy.get('#billing_state').type('Троицк');
         cy.get('#billing_postcode').type('108841');
         cy.get('#billing_phone').type('89775339207');
         cy.get('#billing_email').type('aaq-96@bk.ru');
         cy.get('#place_order').click();
         cy.contains('Ваш заказ принят. Благодарим вас.');
       
    })
    

















})