$(document).ready(function(){
    //$('body').css('background-color','red')

    $(`#checking .deposit`).on({
        click: function(){
        //click listener to the checking account's "Deposit" button
        //When you click the element it should console.log("hello")  
        //console.log("hello")

        //On clicking checking "Deposit", it should get the user input and console.log it
        var checkingDeposit = $(`#checking .input`).val()
        //logs inut gotten
        console.log(checkingDeposit)
        }
    })

    $(`#savings .deposit`).on({
        click: function(){
        //click listener to the savings account's "Deposit" button
        //When you click the element it should console.log("hello")  
        //console.log("hello")

        //On clicking savings "Deposit", it should get the user input and console.log it
        var savingsDeposit = $(`#savings .input`).val()
        //logs inut gotten
        console.log(savingsDeposit)        
        }
    })

    $(`#checking .withdraw`).on({
        click: function(){
        //click listener to the chercking account's "Withdraw" button
        //When you click the element it should console.log("hello")  
        //console.log("hello")

        //On clicking checking "Withdraw", it should get the user input and console.log it
        var checkingWithdraw = $(`#checking .input`).val()        
        //logs inut gotten
        console.log(checkingWithdraw)  
        }
    })

    $(`#savings .withdraw`).on({
        click: function(){
        //click listener to the savings account's "Withdraw" button
        //When you click the element it should console.log("hello")  
        //console.log("hello")

        //On clicking savings "Withdraw", it should get the user input and console.log it
        var savingsWithdraw = $(`#savings .input`).val()
        //logs inut gotten
        console.log(savingsWithdraw)
        }
    })

    $(`#checking .balance`).on({
        click: function(){
        //click listener to the checking account's "balance"
        //When you click the element it should console.log("hello")  
        //console.log("hello")
        console.log("checking balance")
        }
    })

    $(`#savings .balance`).on({
        click: function(){
        //click listener to the savings account's "balance"
        //When you click the elemewnt it should console.log("hello")  
        //console.log("hello")
        }
    })

    $(`#checking .input`).on({
        focus: function(){
        //click listener to the checking account's input field
        //When you click the element it should console.log("hello")  
        //console.log("hello")
        }
    })

    $(`#savings .input`).on({
        focus: function(){
        //click listener to the savings account's input field
        //When you click the element it should console.log("hello")  
        //console.log("hello")      
        }
    })
});