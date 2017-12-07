var checkingBalance = 0
var savingsBalance = 0

$(document).ready(function(){
    //$('body').css('background-color','red')

    $(`#checking .deposit`).on({
        click: function(){
        //click listener to the checking account's "Deposit" button
        //When you click the element it should console.log("hello")  
        //console.log("hello")
        
        //On clicking checking "Deposit", it should get the user input and console.log it       
        //checkingBalance = $(`#checking .input`).val()
        //console.log(checkingBalance)

        //On clicking checking "Deposit", it should update balance with input
        checkingBalance = checkingBalance + parseInt($(`#checking .input`).val())
        $(`#checking .balance`).val(checkingBalance)
        //console.log(checkingBalance)
        //console.log($(`#checking .balance`).val())

        //update page display with balance
        displayBalance = "$"+checkingBalance
        //console.log(displayCheckingBalance)
        $(`#checking .balance`).html(displayBalance)
        }
    })

    $(`#savings .deposit`).on({
        click: function(){
        //click listener to the savings account's "Deposit" button
        //When you click the element it should console.log("hello")  
        //console.log("hello")
        
        //On clicking savings "Deposit", it should get the user input and console.log it       
        //savingsBalance = $(`#savings .input`).val()
        //console.log(savingsBalance)

        //On clicking savings "Deposit", it should update balance with input
        savingsBalance = savingsBalance + parseInt($(`#savings .input`).val())   
        $(`#savings .balance`).val(savingsBalance)
        //console.log(savingsBalance)
        //console.log($(`#savings .balance`).val())

        //update page display with balance
        displayBalance = "$"+savingsBalance
        //console.log(displaySavingsBalance)
        $(`#savings .balance`).html(displayBalance)
        }
    })

    $(`#checking .withdraw`).on({
        click: function(){
        //click listener to the checking account's "Withdraw" button
        //When you click the element it should console.log("hello")  
        //console.log("hello")
        
        //On clicking checking "Withdraw", it should get the user input and console.log it       
        //checkingBalance = $(`#checking .input`).val()
        //console.log(checkingBalance)

        //On clicking checking "Withdraw", it should update balance with input
        checkingBalance = checkingBalance - parseInt($(`#checking .input`).val())
        $(`#checking .balance`).val(checkingBalance)
        //console.log(checkingBalance)
        //console.log($(`#checking .balance`).val())

        //update page display with balance
        displayBalance = "$"+checkingBalance
        //console.log(displayCheckingBalance)
        $(`#checking .balance`).html(displayBalance)
        }
    })

    $(`#savings .withdraw`).on({
        click: function(){
        //click listener to the savings account's "Withdraw" button
        //When you click the element it should console.log("hello")  
        //console.log("hello")
        
        //On clicking savings "Withdraw", it should get the user input and console.log it       
        //savingsBalance = $(`#savings .input`).val()
        //console.log(savingsBalance)

        //On clicking savings "Withdraw", it should update balance with input
        savingsBalance = savingsBalance - parseInt($(`#savings .input`).val())   
        $(`#savings .balance`).val(savingsBalance)
        //console.log(savingsBalance)
        //console.log($(`#savings .balance`).val())
        
        //update page display with balance
        displayBalance = "$"+savingsBalance
        //console.log(displaySavingsBalance)
        $(`#savings .balance`).html(displayBalance)
        }
    })

    // $(`#checking .balance`).on({
    //     click: function(){
        //click listener to the checking account's "balance"
        //When you click the element it should console.log("hello")  
        //console.log("hello")
        //console.log("hello")
    //     }
    // })

    // $(`#savings .balance`).on({
    //     click: function(){
        //click listener to the savings account's "balance"
        //When you click the elemewnt it should console.log("hello")  
        //console.log("hello")
    //     }
    // })

    // $(`#checking .input`).on({
    //     focus: function(){
        //click listener to the checking account's input field
        //When you click the element it should console.log("hello")  
        //console.log("hello")
    //     }
    // })

    // $(`#savings .input`).on({
    //     focus: function(){
        //click listener to the savings account's input field
        //When you click the element it should console.log("hello")  
        //console.log("hello")      
    //     }
    // })
});