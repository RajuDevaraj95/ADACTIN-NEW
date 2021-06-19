$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter The \"\u003cusername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enter The Password In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click On The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application;login-page;;1"
    },
    {
      "cells": [
        "abc"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;login-page;;2"
    },
    {
      "cells": [
        "123"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;login-page;;3"
    },
    {
      "cells": [
        "RajuDevaraj"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;login-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter The \"abc\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enter The Password In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click On The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 4851866500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 211859600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Password_In_Password_Field()"
});
formatter.result({
  "duration": 131140700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel()"
});
formatter.result({
  "duration": 701589300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter The \"123\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enter The Password In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click On The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 581005600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 127660400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Password_In_Password_Field()"
});
formatter.result({
  "duration": 170878800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel()"
});
formatter.result({
  "duration": 500024500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter The \"RajuDevaraj\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enter The Password In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click On The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 415016100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RajuDevaraj",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 132465600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Password_In_Password_Field()"
});
formatter.result({
  "duration": 86340200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel()"
});
formatter.result({
  "duration": 3054168900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Hotel Search",
  "description": "",
  "id": "hotel-booking-in-adactin-application;hotel-search",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@sanitytest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User Enters The Location In Location Field",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User Enters  Hotel In Hotel Field",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User Enters  Roomtype In Roomtype Field",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User Enters  Numberofrooms In Numberofrooms Field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Enters Checkindate  In Checkindate Field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User Enters Checkoutdate  In Checkoutdate Field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User Enters Adultsperroom  In Adultsperroom Field",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User Enters childrenperroom  In childrenperroom Field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User Click On The Search Button And It Navigates To The Select Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Enters_The_Location_In_Location_Field()"
});
formatter.result({
  "duration": 3232105700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_Hotel_In_Hotel_Field()"
});
formatter.result({
  "duration": 103754900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_Roomtype_In_Roomtype_Field()"
});
formatter.result({
  "duration": 102125500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_Numberofrooms_In_Numberofrooms_Field()"
});
formatter.result({
  "duration": 80494000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_Checkindate_In_Checkindate_Field()"
});
formatter.result({
  "duration": 106786500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_Checkoutdate_In_Checkoutdate_Field()"
});
formatter.result({
  "duration": 79739000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_Adultsperroom_In_Adultsperroom_Field()"
});
formatter.result({
  "duration": 79941000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_childrenperroom_In_childrenperroom_Field()"
});
formatter.result({
  "duration": 109273000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Search_Button_And_It_Navigates_To_The_Select_Hotel()"
});
formatter.result({
  "duration": 1121831600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Hotel Search2",
  "description": "",
  "id": "hotel-booking-in-adactin-application;hotel-search2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@sanitytest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User Click the Checkbox",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User Click On The Continue Button And It Navigates To Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_the_Checkbox()"
});
formatter.result({
  "duration": 170366800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Continue_Button_And_It_Navigates_To_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 995568800,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Booking",
  "description": "",
  "id": "hotel-booking-in-adactin-application;booking",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@sanitytest"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "User Enters Firstname In Firstname Field",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User Enters  Lastname In Lastname Field",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Enters  Billing Address In Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User Enters  Creditcard Number  In Creditcard Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User Enters  Creditcard Type In Creditcard Type Field",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User Enters  Creditcard Expirymonth In Creditcard Expirymonth Field",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User Enters  Creditcard Expiryyear In Creditcard Expiryyear Field",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User Enters The Cvv Number In Cvv Field",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User Click On The Book Now Button And It Navigates To Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Enters_Firstname_In_Firstname_Field()"
});
formatter.result({
  "duration": 222302600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_Lastname_In_Lastname_Field()"
});
formatter.result({
  "duration": 203007600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_Billing_Address_In_Billing_Address_Field()"
});
formatter.result({
  "duration": 138920300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_Creditcard_Number_In_Creditcard_Number_Field()"
});
formatter.result({
  "duration": 137369700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_Creditcard_Type_In_Creditcard_Type_Field()"
});
formatter.result({
  "duration": 170518100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_Creditcard_Expirymonth_In_Creditcard_Expirymonth_Field()"
});
formatter.result({
  "duration": 181181700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_Creditcard_Expiryyear_In_Creditcard_Expiryyear_Field()"
});
formatter.result({
  "duration": 154885500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_The_Cvv_Number_In_Cvv_Field()"
});
formatter.result({
  "duration": 197831700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Book_Now_Button_And_It_Navigates_To_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 133966200,
  "status": "passed"
});
});