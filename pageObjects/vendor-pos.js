class vendorPos {
    Email(){
        return cy.get('#email')
    }
     Password(){
        return cy.get('#password')
    }
    submitBtn(){
        return cy.get('.pt-6 > .flex > .ant-btn-primary')
    }

     notificationModal(){
        return cy.get('.ant-notification-notice')
    }

}
export default vendorPos;