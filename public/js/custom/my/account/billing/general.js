"use strict";var AccountBillingGeneral=function(){var t;return{init:function(){(t=document.querySelector("#account_billing_cancel_subscription_btn"))&&t.addEventListener("click",(function(t){t.preventDefault(),swal.fire({text:"Are you sure you would like to cancel your subscription ?",icon:"warning",buttonsStyling:!1,showDenyButton:!0,confirmButtonText:"Yes",denyButtonText:"No",customClass:{confirmButton:"btn btn-primary",denyButton:"btn btn-light-danger"}}).then((t=>{t.isConfirmed&&Swal.fire({text:"Your subscription has been canceled.",icon:"success",confirmButtonText:"Ok",buttonsStyling:!1,customClass:{confirmButton:"btn btn-light-primary"}})}))})),Util.on(document.body,'[data-billing-action="card-delete"]',"click",(function(t){t.preventDefault();var n=this;swal.fire({text:"Are you sure you would like to delete selected card ?",icon:"warning",buttonsStyling:!1,showDenyButton:!0,confirmButtonText:"Yes",denyButtonText:"No",customClass:{confirmButton:"btn btn-primary",denyButton:"btn btn-light-danger"}}).then((t=>{t.isConfirmed&&(n.setAttribute("data-indicator","on"),n.disabled=!0,setTimeout((function(){Swal.fire({text:"Your selected card has been successfully deleted",icon:"success",confirmButtonText:"Ok",buttonsStyling:!1,customClass:{confirmButton:"btn btn-light-primary"}}).then((t=>{n.closest('[data-billing-element="card"]').remove()}))}),2e3))}))})),Util.on(document.body,'[data-billing-action="address-delete"]',"click",(function(t){t.preventDefault();var n=this;swal.fire({text:"Are you sure you would like to delete selected address ?",icon:"warning",buttonsStyling:!1,showDenyButton:!0,confirmButtonText:"Yes",denyButtonText:"No",customClass:{confirmButton:"btn btn-primary",denyButton:"btn btn-light-danger"}}).then((t=>{t.isConfirmed&&(n.setAttribute("data-indicator","on"),n.disabled=!0,setTimeout((function(){Swal.fire({text:"Your selected address has been successfully deleted",icon:"success",confirmButtonText:"Ok",buttonsStyling:!1,customClass:{confirmButton:"btn btn-light-primary"}}).then((t=>{n.closest('[data-billing-element="address"]').remove()}))}),2e3))}))}))}}}();Util.onDOMContentLoaded((function(){AccountBillingGeneral.init()}));
//# sourceMappingURL=general.js.map