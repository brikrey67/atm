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
        $(`#checking .balance`).html("$"+checkingBalance)       
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
        $(`#savings .balance`).html("$"+savingsBalance)
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


        if (parseInt($(`#checking .input`).val()) < checkingBalance) {
            checkingBalance = checkingBalance - parseInt($(`#checking .input`).val()) // without overdraft protection
        }
        else if (parseInt($(`#checking .input`).val())< (checkingBalance + savingsBalance)) {
             savingsBalance = savingsBalance - (parseInt($(`#checking .input`).val()) - checkingBalance)
             $(`#savings .balance`).html("$"+savingsBalance)
             checkingBalance = 0
        }

        $(`#checking .balance`).val(checkingBalance)
        //console.log(checkingBalance)
        //console.log($(`#checking .balance`).val())

        //update page display with balance
        $(`#checking .balance`).html("$"+checkingBalance)
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
        //savingsBalance = savingsBalance - parseInt($(`#savings .input`).val())   
        // console.log("savings balance: " + savingsBalance)
        // console.log("input: " +parseInt($(`#savings .input`).val()))

        if(parseInt($(`#savings .input`).val()) < savingsBalance) {
            savingsBalance = savingsBalance - parseInt($(`#savings .input`).val()) // without overdraft protection
        }
        else if(parseInt($(`#savings .input`).val())< (checkingBalance + savingsBalance)) {
            checkingBalance = checkingBalance - (parseInt($(`#savings .input`).val()) - savingsBalance)
            $(`#checking .balance`).html("$"+checkingBalance)
            savingsBalance = 0
        }


        $(`#savings .balance`).val(savingsBalance)
        //console.log(savingsBalance)
        //console.log($(`#savings .balance`).val())

        //update page display with balance
        $(`#savings .balance`).html("$"+savingsBalance)
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