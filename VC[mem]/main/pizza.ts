// Generated from main/pizza.sc

import { $ } from "../utils/vars.mts";

async function mission_start_pizza() {


  Text.ClearThisPrint("M_FAIL");
  ONMISSION = 1;
  await asyncWait(0);
  if ($.flag_pizza_mission_passed == 0) {
    Stat.RegisterMissionGiven();
  }

  // stop path at the road


  Text.LoadMissionText("PIZZA");
  // *****************************************Set Flags/variables************************************

  $.pizza_goals = 1;
  $.customers_created = 0;
  $.customer1_created = 0;
  $.customer2_created = 0;
  $.customer3_created = 0;
  $.customer4_created = 0;
  $.customer5_created = 0;
  $.customer6_created = 0;
  $.customer7_created = 0;
  $.customer8_created = 0;
  $.customer9_created = 0;
  $.customer10_created = 0;
  $.pizza_delivered = 0;
  $.go_back_to_pizza_hut_flag = 0;
  $.total_pizzas_thrown = 6;
  $.pizza_has_been_thrown = 0;
  $.pizza_box_var = 0;
  $.where_is_player1 = 0;
  $.customer_complaint_time = 301000;
  $.customer_got_pizza = 0;
  $.customer_var = 0;
  $.mission_failed_flag = 0;
  $.which_pizza_to_del = 0;
  $.flag_player_not_in_pizza_moped = 0;
  $.flag_pizza_moped_upsidedown = 0;
  $.blob_flag = 0;
  $.pizza_help_text_played = 0;
  $.random_speech = 0;
  $.pizza_speech_played = 0;


  $.x_random = 0.0;
  $.y_random = 0.0;
  $.cust_coordx = 0.0;
  $.cust_coordy = 0.0;
  $.cust_coordz = 0.0;
  $.sum_dif_xy = 0.0;
  $.dif_plyr_cust_x = 0.0;
  $.dif_plyr_cust_y = 0.0;
  $.player1s_distance_from_customer = 0.0;
  $.dif_cust_shop_x = 0.0;
  $.dif_cust_shop_y = 0.0;
  $.customers_distance_from_pizza_shop = 0.0;
  $.random_customer_heading = 0.0;
  $.pizza_shopx = 0.0;
  $.pizza_shopy = 0.0;
  $.player1_facing_this_direction = 0.0;
  $.pizza_lobx = 0.0;
  $.pizza_loby = 0.0;
  $.pizzax = 0.0;
  $.pizzay = 0.0;
  $.pizzaz = 0.0;
  $.player_x = 0.0;
  $.player_y = 0.0;
  $.player_z = 0.0;
  $.add_pizza_score = 0;


  //impossible if comment

  if (ONMISSION == 0) {
    $.customer1 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.customer1_blip = Blip.AddForChar($.customer1);
    $.customer2 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.customer2_blip = Blip.AddForChar($.customer2);
    $.customer3 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.customer3_blip = Blip.AddForChar($.customer3);
    $.customer4 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.customer4_blip = Blip.AddForChar($.customer4);
    $.customer5 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.customer5_blip = Blip.AddForChar($.customer5);
    $.customer6 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.customer6_blip = Blip.AddForChar($.customer6);
    $.customer7 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.customer7_blip = Blip.AddForChar($.customer7);
    $.customer8 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.customer8_blip = Blip.AddForChar($.customer8);
    $.customer9 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.customer9_blip = Blip.AddForChar($.customer9);
    $.customer10 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.customer10_blip = Blip.AddForChar($.customer10);
    $.pizza_hut_blip = Blip.AddForCoord($.pizza_shopx, $.pizza_shopy, -100.0);
  }

  // *****************************************Start cutscene************************************
  // *****************************************End cutscene**************************************

  Streaming.RequestModel(pizzabox);


  while (!(Streaming.HasModelLoaded(pizzabox))) {
    await asyncWait(0);
  }


  $.gen_car6.switch(0);
  $.gen_car4.switch(0);
  $.gen_car2.switch(0);


  $.player1.setCanDoDriveBy(false /* FALSE */);


  if ($.player1.isInAnyCar()) {
    $.pizza_moped = $.player1.storeCarIsIn();
  }
  else {
    Text.PrintNow("PIZ1_32", 5000, 1); //Pizza's too hot to handle?
    // SCM GOTO → mission_failed_pizza (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_pizza"); // fallback: would break linear control flow
  }



  if (ONMISSION == 0) {
    $.pizza_moped_blip = Blip.AddForCar($.pizza_moped);
  }


  Hud.DisplayTimer($.$id.customer_complaint_time, 1 /* TIMER_DOWN */);
  Hud.DisplayCounterWithString($.$id.total_pizzas_thrown, 0, "PIZ1_12");


  //deciding where player1 is

  if ($.player1.isInZone("DTOWN")) {
    $.where_is_player1 = 1;
  }
  if ($.player1.isInZone("HAITI")) {
    $.where_is_player1 = 2;
  }
  if ($.player1.isInZone("BEACH3")) {
    $.where_is_player1 = 3;
  }
  /*
  IF IS_PLAYER_IN_ZONE player1 BEACH1
  where_is_player1 = 4
  ENDIF
  */

  Text.Print("PIZ1_01", 7000, 1); //Go deliver these pizzas, you must throw the pizza to the customers.  Do a drive-by to throw the pizzas.
  Text.Print("PIZ1_05", 7000, 1); //You have five minutes to deliver the orders before the customers phone another pizza shop.
  TIMERA = 0;
}



async function start_pizza_mission() {
  // SCM GOTO → start_pizza_mission lowered to endless loop
  while (true) {
    await asyncWait(0);

    //printing initial help text

    if ($.pizza_goals == 1) {
      if ($.pizza_help_text_played == 0) {
        if (TIMERA > 13999) {
          Text.PrintHelp("PIZ1_06"); //Press the~h~ R3 button~w~ when on the bike to cancel the mission.
          $.pizza_help_text_played = 1;
        }
      }
    }

    //reloading pizza's if player1 goes back to pizza shop

    if (!(Car.IsDead($.pizza_moped))) {
      if ($.player1.isInCar($.pizza_moped)) {
        if ($.player1.locateStoppedInCar3D($.pizza_shopx, $.pizza_shopy, $.pizza_shopz, 3.0, 3.0, 3.0, false /* FALSE */)) {
          if (TIMERA > 14000) {
            if ($.total_pizzas_thrown > 0) {
              Text.ClearPrints();
              $.total_pizzas_thrown = 6;
              await no_longer_needed_pizzas();  // SCM GOSUB no_longer_needed_pizzas
              $.blob_flag = 0;
              TIMERA = 0;
            }
          }
        }
      }
    }

    //failing mission if time runs out


    if ($.customer_complaint_time == 0) {
      Text.PrintNow("PIZ1_08", 5000, 1); //You are out of time.  You're fired.
      // SCM GOTO → mission_failed_pizza (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_pizza"); // fallback: would break linear control flow
    }


    //creating right number of customers


    while ($.customers_created < $.pizza_goals) {
      await asyncWait(0);
      await get_rnd_locations();  // SCM GOSUB get_rnd_locations
      await create_random_customer();  // SCM GOSUB create_random_customer
      $.customers_created++;
      if ($.mission_failed_flag == 1) {
        Text.PrintNow("PIZ1_07", 5000, 1); //You killed the customer!  You're fired.
      }
      if ($.mission_failed_flag == 2) {
        Text.PrintNow("PIZ1_09", 5000, 1); //You destroyed our bike! You're fired.
      }
      if ($.mission_failed_flag == 3) {
        Text.PrintNow("PIZ1_32", 5000, 1); //Pizza's too hot to handle?
      }
      if ($.mission_failed_flag == 1 || $.mission_failed_flag == 2 || $.mission_failed_flag == 3) {
        // SCM GOTO → mission_failed_pizza (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_pizza"); // fallback: would break linear control flow
      }
      await plyr_off_moped();  // SCM GOSUB plyr_off_moped
      await plyr_quit_game();  // SCM GOSUB plyr_quit_game
      await dying_customers();  // SCM GOSUB dying_customers
    }


    //stoping mission or failing if customer dies

    if ($.mission_failed_flag == 1) {
      Text.PrintNow("PIZ1_07", 5000, 1); //You killed the customer!  You're fired.
    }
    if ($.mission_failed_flag == 2) {
      Text.PrintNow("PIZ1_09", 5000, 1); //You destroyed our bike! You're fired.
    }
    if ($.mission_failed_flag == 3) {
      Text.PrintNow("PIZ1_32", 5000, 1); //Pizza's too hot to handle?
    }
    if ($.mission_failed_flag == 1 || $.mission_failed_flag == 2 || $.mission_failed_flag == 3) {
      // SCM GOTO → mission_failed_pizza (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_pizza"); // fallback: would break linear control flow
    }
    await plyr_off_moped();  // SCM GOSUB plyr_off_moped
    await plyr_quit_game();  // SCM GOSUB plyr_quit_game
    await dying_customers();  // SCM GOSUB dying_customers

    //telling player1 to throw pizzas, (if he runs out to get more at pizza hut) then to get back to pizza hut for more customers once all are satisfied


    if ($.go_back_to_pizza_hut_flag == 0) {
      if ($.pizza_delivered == $.pizza_goals) {
        if ($.flag_player_not_in_pizza_moped == 0) {
          Text.PrintNow("PIZ1_33", 7000, 1); //Return to the restaurant for more orders.
          $.pizza_hut_blip.remove();
          $.pizza_hut_blip = Blip.AddForCoord($.pizza_shopx, $.pizza_shopy, -100.0);
          $.go_back_to_pizza_hut_flag = 1;
        }
      }
      else {
        if ($.total_pizzas_thrown > 0) {
          await delivering_pizzas();  // SCM GOSUB delivering_pizzas
        }
        else {
          await delivering_pizzas();  // SCM GOSUB delivering_pizzas
          if ($.blob_flag == 0) {
            Text.PrintNow("PIZ1_02", 5000, 1); //You have thrown all your pizzas, go back and get some more
            $.blob_flag = 1;
          }
          $.customer1_blip.remove();
          $.customer2_blip.remove();
          $.customer3_blip.remove();
          $.customer4_blip.remove();
          $.customer5_blip.remove();
          $.customer6_blip.remove();
          $.customer7_blip.remove();
          $.customer8_blip.remove();
          $.customer9_blip.remove();
          $.customer10_blip.remove();
          $.pizza_hut_blip.remove();
          if ($.flag_player_not_in_pizza_moped == 0) {
            $.pizza_hut_blip.remove();
            $.pizza_hut_blip = Blip.AddForCoord($.pizza_shopx, $.pizza_shopy, -100.0);
            if ($.player1.locateStoppedInCar3D($.pizza_shopx, $.pizza_shopy, $.pizza_shopz, 5.0, 5.0, 5.0, true /* TRUE */)) {
              if (!(Char.IsDead($.customer1))) {
                $.customer1_blip = Blip.AddForChar($.customer1);
              }
              if (!(Char.IsDead($.customer2))) {
                $.customer2_blip = Blip.AddForChar($.customer2);
              }
              if (!(Char.IsDead($.customer3))) {
                $.customer3_blip = Blip.AddForChar($.customer3);
              }
              if (!(Char.IsDead($.customer4))) {
                $.customer4_blip = Blip.AddForChar($.customer4);
              }
              if (!(Char.IsDead($.customer5))) {
                $.customer5_blip = Blip.AddForChar($.customer5);
              }
              if (!(Char.IsDead($.customer6))) {
                $.customer6_blip = Blip.AddForChar($.customer6);
              }
              if (!(Char.IsDead($.customer7))) {
                $.customer7_blip = Blip.AddForChar($.customer7);
              }
              if (!(Char.IsDead($.customer8))) {
                $.customer8_blip = Blip.AddForChar($.customer8);
              }
              if (!(Char.IsDead($.customer9))) {
                $.customer9_blip = Blip.AddForChar($.customer9);
              }
              if (!(Char.IsDead($.customer10))) {
                $.customer10_blip = Blip.AddForChar($.customer10);
              }
              $.pizza_hut_blip.remove();
              $.pizza_speech_played = 0;
              $.total_pizzas_thrown = 6;
              await no_longer_needed_pizzas();  // SCM GOSUB no_longer_needed_pizzas
              $.blob_flag = 0;
            }
          }
        }
      }
    }
    else {
      if ($.player1.locateStoppedInCar3D($.pizza_shopx, $.pizza_shopy, $.pizza_shopz, 5.0, 5.0, 5.0, true /* TRUE */)) {
        if ($.pizza_goals == 10) {
          if ($.flag_pizza_mission_passed == 0) {
            // SCM GOTO → mission_passed_pizza (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_passed_pizza"); // fallback: would break linear control flow
          }
          else {
            $.pizza_goals = 9;
          }
        }
        else {
          $.pizza_hut_blip.remove();
          $.customer_complaint_time = 301000;
          $.pizza_speech_played = 0;
          $.total_pizzas_thrown = 6;
          await no_longer_needed_pizzas();  // SCM GOSUB no_longer_needed_pizzas
          $.blob_flag = 0;
          $.customers_created = 0;
          $.pizza_goals++;
          $.pizza_delivered = 0;
          $.go_back_to_pizza_hut_flag = 0;
        }
      }
      else {
        if ($.total_pizzas_thrown > 0) {
          await delivering_pizzas();  // SCM GOSUB delivering_pizzas
        }
      }
    }


  }
}


// Mission failed

async function mission_failed_pizza() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}




// mission passed

async function mission_passed_pizza() {


  Text.ClearPrints();
  $.player1.clearWantedLevel();
  Text.PrintWithNumberBig("M_PASS", 5000, 5000, 1); //"Mission Passed!"
  Audio.PlayMissionPassedTune(1);
  $.player1.addScore(5000);
  if ($.flag_pizza_mission_passed == 0) {
    $.gen_car5.switch(101);
    Stat.RegisterOddjobMissionPassed();
    Text.PrintNow("PIZ_WON", 5000, 1); //	Pizza Mission Complete.
    Stat.PlayerMadeProgress(1);
    //SET_PLAYER_NEVER_GETS_TIRED player1 TRUE
    $.player1.increaseMaxHealth(50);
    $.flag_pizza_mission_passed = 1;
  }
}




// mission cleanup

async function mission_cleanup_pizza() {
  ONMISSION = 0;


  $.player1.setControl(true /* on */);
  Streaming.MarkModelAsNoLongerNeeded(faggio);
  Streaming.MarkModelAsNoLongerNeeded(pizzabox);
  $.gen_car6.switch(101);
  $.gen_car4.switch(101);
  $.gen_car2.switch(101);
  Stat.AddPizzasDelivered($.add_pizza_score);
  $.customer1_blip.remove();
  $.customer2_blip.remove();
  $.customer3_blip.remove();
  $.customer4_blip.remove();
  $.customer5_blip.remove();
  $.customer6_blip.remove();
  $.customer7_blip.remove();
  $.customer8_blip.remove();
  $.customer9_blip.remove();
  $.customer10_blip.remove();
  $.pizza_hut_blip.remove();
  $.pizza_moped_blip.remove();
  $.player1.setCanDoDriveBy(true /* TRUE */);
  Hud.ClearCounter($.$id.total_pizzas_thrown);
  Hud.ClearTimer($.$id.customer_complaint_time);
  $.flag_pizza_trigger = 1;
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}


//////////////////////////////////////////////////////////////////////

async function get_rnd_locations() {
  //////////////////////////////////////////////////////////////////////

  await asyncWait(0);


  const _res417 = $.player1.getCoordinates();
$.player_x = _res417.x;
$.player_y = _res417.y;
$.player_z = _res417.z;

  //player1 is downtown

  if ($.where_is_player1 == 1) {
    $.x_random = Math.RandomFloatInRange(-1050.4, -160.9);
    $.y_random = Math.RandomFloatInRange(-160.0, 1600.7);
    $.pizza_shopx = -908.0;
    $.pizza_shopy = 809.3;
    $.pizza_shopz = 10.5;
  }

  //player1 is in Little Haiti

  if ($.where_is_player1 == 2) {
    $.x_random = Math.RandomFloatInRange(-1200.4, -800.9);
    $.y_random = Math.RandomFloatInRange(-660.0, 300.7);
    $.pizza_shopx = -1028.9;
    $.pizza_shopy = 82.7;
    $.pizza_shopz = 10.7;
  }

  //player1 is near Big Mall and Club

  if ($.where_is_player1 == 3) {
    $.x_random = Math.RandomFloatInRange(-100.9, 1000.4);
    $.y_random = Math.RandomFloatInRange(-300.7, 800.5);
    $.pizza_shopx = 411.6;
    $.pizza_shopy = 97.8;
    $.pizza_shopz = 10.4;
  }

  /*
  //player1 is near Small mall
  IF where_is_player1 = 4
  GENERATE_RANDOM_FLOAT_IN_RANGE -330.9 500.4 x_random
  GENERATE_RANDOM_FLOAT_IN_RANGE -1700.5 -730.7 y_random
  pizza_shopx = 115.3
  pizza_shopy = -987.1
  ENDIF
  */


  const _res418 = Path.GetClosestCharNode($.x_random, $.y_random, $.player_z);
$.cust_coordx = _res418.nodeX;
$.cust_coordy = _res418.nodeY;
$.cust_coordz = _res418.nodeZ;

  //if char node is too high or too low

  if ($.cust_coordz < 8.0 || $.cust_coordz > 12.0) {
    // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
  }

  //POLICE STATION BEACH SOUTH

  if ($.cust_coordx > 333.358 && $.cust_coordx < 435.544 && $.cust_coordy > -557.261 && $.cust_coordy < -433.179) {
    // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
  }
  //MALL BEACH SOUTH

  if ($.cust_coordx > -64.434 && $.cust_coordx < 81.544 && $.cust_coordy > -995.198 && $.cust_coordy < -896.662) {
    // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
  }
  //MALIBU

  if ($.cust_coordx > 446.491 && $.cust_coordx < 599.769 && $.cust_coordy > -92.564 && $.cust_coordy < 53.415) {
    // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
  }
  //GOLF COURSE

  if ($.cust_coordx > -82.682 && $.cust_coordx < 234.821 && $.cust_coordy > -272.607 && $.cust_coordy < 406.194) {
    // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
  }
  //GOLF COURSE

  if ($.cust_coordx > -290.702 && $.cust_coordx < 282.265 && $.cust_coordy > 398.714 && $.cust_coordy < 661.476) {
    // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
  }
  //BRIDGE

  if ($.cust_coordx > -728.193 && $.cust_coordx < -67.639 && $.cust_coordy > -20.866 && $.cust_coordy < 99.566) {
    // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
  }
  //MANSION

  if ($.cust_coordx > -516.97 && $.cust_coordx < -188.518 && $.cust_coordy > -667.97 && $.cust_coordy < -507.393) {
    // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
  }
  //TANKER

  if ($.cust_coordx > -710.393 && $.cust_coordx < -579.012 && $.cust_coordy > -1416.112 && $.cust_coordy < -1211.742) {
    // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
  }
  //BIG MALL

  if ($.cust_coordx > 333.358 && $.cust_coordx < 493.934 && $.cust_coordy > 991.328 && $.cust_coordy < 1261.389) {
    // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
  }
  //BEHIND AMMUNATION DOWNTOWN

  if ($.cust_coordx > -790.682 && $.cust_coordx < -626.456 && $.cust_coordy > 1196.908 && $.cust_coordy < 1306.392) {
    // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
  }
  //PHILS YARD

  if ($.cust_coordx > -1173.877 && $.cust_coordx < -1027.898 && $.cust_coordy > 237.098 && $.cust_coordy < 415.922) {
    // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
  }
  //BUDDY YARD

  if ($.cust_coordx > -1389.195 && $.cust_coordx < -1199.422 && $.cust_coordy > -47.561 && $.cust_coordy < 229.799) {
    // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
  }
  //AIPORT TEMINAL

  if ($.cust_coordx > -1571.667 && $.cust_coordx < -1290.658 && $.cust_coordy > -1007.371 && $.cust_coordy < -784.753) {
    // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
  }

  //if player1s too close to customers


  $.dif_plyr_cust_x = $.player_x - $.cust_coordx;
  $.dif_plyr_cust_y = $.player_y - $.cust_coordy;
  $.dif_plyr_cust_x = $.dif_plyr_cust_x * $.dif_plyr_cust_x;
  $.dif_plyr_cust_y = $.dif_plyr_cust_y * $.dif_plyr_cust_y;
  $.sum_dif_xy = $.dif_plyr_cust_x + $.dif_plyr_cust_y;
  $.player1s_distance_from_customer = Math.Sqrt($.sum_dif_xy);


  if ($.player1s_distance_from_customer < 120.0) {
    // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
  }

  //if customers to close to pizza shop


  $.dif_cust_shop_x = $.pizza_shopx - $.cust_coordx;
  $.dif_cust_shop_y = $.pizza_shopy - $.cust_coordy;
  $.dif_cust_shop_x = $.dif_cust_shop_x * $.dif_cust_shop_x;
  $.dif_cust_shop_y = $.dif_cust_shop_y * $.dif_cust_shop_y;
  $.sum_dif_xy = $.dif_cust_shop_x + $.dif_cust_shop_y;
  $.customers_distance_from_pizza_shop = Math.Sqrt($.sum_dif_xy);


  if ($.customers_distance_from_pizza_shop < 100.0) {
    // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
  }

  //if cust is too near to other custs



  if ($.customer1_created == 1) {
    if (!(Char.IsDead($.customer1))) {
      if ($.customer1.locateAnyMeans2D($.cust_coordx, $.cust_coordy, 25.0, 25.0, false)) {
        // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
        throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
      }
    }
  }


  if ($.customer2_created == 1) {
    if (!(Char.IsDead($.customer2))) {
      if ($.customer2.locateAnyMeans2D($.cust_coordx, $.cust_coordy, 25.0, 25.0, false)) {
        // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
        throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
      }
    }
  }


  if ($.customer3_created == 1) {
    if (!(Char.IsDead($.customer3))) {
      if ($.customer3.locateAnyMeans2D($.cust_coordx, $.cust_coordy, 25.0, 25.0, false)) {
        // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
        throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
      }
    }
  }


  if ($.customer4_created == 1) {
    if (!(Char.IsDead($.customer4))) {
      if ($.customer4.locateAnyMeans2D($.cust_coordx, $.cust_coordy, 25.0, 25.0, false)) {
        // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
        throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
      }
    }
  }


  if ($.customer5_created == 1) {
    if (!(Char.IsDead($.customer5))) {
      if ($.customer5.locateAnyMeans2D($.cust_coordx, $.cust_coordy, 25.0, 25.0, false)) {
        // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
        throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
      }
    }
  }


  if ($.customer6_created == 1) {
    if (!(Char.IsDead($.customer6))) {
      if ($.customer6.locateAnyMeans2D($.cust_coordx, $.cust_coordy, 25.0, 25.0, false)) {
        // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
        throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
      }
    }
  }


  if ($.customer7_created == 1) {
    if (!(Char.IsDead($.customer7))) {
      if ($.customer7.locateAnyMeans2D($.cust_coordx, $.cust_coordy, 25.0, 25.0, false)) {
        // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
        throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
      }
    }
  }


  if ($.customer8_created == 1) {
    if (!(Char.IsDead($.customer8))) {
      if ($.customer8.locateAnyMeans2D($.cust_coordx, $.cust_coordy, 25.0, 25.0, false)) {
        // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
        throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
      }
    }
  }


  if ($.customer9_created == 1) {
    if (!(Char.IsDead($.customer9))) {
      if ($.customer9.locateAnyMeans2D($.cust_coordx, $.cust_coordy, 25.0, 25.0, false)) {
        // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
        throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
      }
    }
  }


  if ($.customer10_created == 1) {
    if (!(Char.IsDead($.customer10))) {
      if ($.customer10.locateAnyMeans2D($.cust_coordx, $.cust_coordy, 25.0, 25.0, false)) {
        // SCM GOTO → get_rnd_locations (not lowered; manual jump required)
        throw new Error("unresolved GOTO get_rnd_locations"); // fallback: would break linear control flow
      }
    }
  }
  //////////////////////////////////////////////////////////////////////
}

//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////

async function create_random_customer() {
  //////////////////////////////////////////////////////////////////////

  if ($.pizza_goals > 0 && $.customer1_created == 0) {
    $.customer1 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.random_customer_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.customer1.setHeading($.random_customer_heading);
    $.customer1.clearThreatSearch();
    $.customer1.setObjWaitOnFoot();
    $.customer1_blip = Blip.AddForChar($.customer1);
    $.customer1_created = 1;
    return;
  }


  if ($.pizza_goals > 1 && $.customer2_created == 0) {
    $.customer2 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.random_customer_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.customer2.setHeading($.random_customer_heading);
    $.customer2.clearThreatSearch();
    $.customer2.setObjWaitOnFoot();
    $.customer2_blip = Blip.AddForChar($.customer2);
    $.customer2_created = 1;
    return;
  }



  if ($.pizza_goals > 2 && $.customer3_created == 0) {
    $.customer3 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.random_customer_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.customer3.setHeading($.random_customer_heading);
    $.customer3.clearThreatSearch();
    $.customer3.setObjWaitOnFoot();
    $.customer3_blip = Blip.AddForChar($.customer3);
    $.customer3_created = 1;
    return;
  }



  if ($.pizza_goals > 3 && $.customer4_created == 0) {
    $.customer4 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.random_customer_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.customer4.setHeading($.random_customer_heading);
    $.customer4.clearThreatSearch();
    $.customer4.setObjWaitOnFoot();
    $.customer4_blip = Blip.AddForChar($.customer4);
    $.customer4_created = 1;
    return;
  }



  if ($.pizza_goals > 4 && $.customer5_created == 0) {
    $.customer5 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.random_customer_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.customer5.setHeading($.random_customer_heading);
    $.customer5.clearThreatSearch();
    $.customer5.setObjWaitOnFoot();
    $.customer5_blip = Blip.AddForChar($.customer5);
    $.customer5_created = 1;
    return;
  }



  if ($.pizza_goals > 5 && $.customer6_created == 0) {
    $.customer6 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.random_customer_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.customer6.setHeading($.random_customer_heading);
    $.customer6.clearThreatSearch();
    $.customer6.setObjWaitOnFoot();
    $.customer6_blip = Blip.AddForChar($.customer6);
    $.customer6_created = 1;
    return;
  }



  if ($.pizza_goals > 6 && $.customer7_created == 0) {
    $.customer7 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.random_customer_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.customer7.setHeading($.random_customer_heading);
    $.customer7.clearThreatSearch();
    $.customer7.setObjWaitOnFoot();
    $.customer7_blip = Blip.AddForChar($.customer7);
    $.customer7_created = 1;
    return;
  }



  if ($.pizza_goals > 7 && $.customer8_created == 0) {
    $.customer8 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.random_customer_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.customer8.setHeading($.random_customer_heading);
    $.customer8.clearThreatSearch();
    $.customer8.setObjWaitOnFoot();
    $.customer8_blip = Blip.AddForChar($.customer8);
    $.customer8_created = 1;
    return;
  }



  if ($.pizza_goals > 8 && $.customer9_created == 0) {
    $.customer9 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.random_customer_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.customer9.setHeading($.random_customer_heading);
    $.customer9.clearThreatSearch();
    $.customer9.setObjWaitOnFoot();
    $.customer9_blip = Blip.AddForChar($.customer9);
    $.customer9_created = 1;
    return;
  }



  if ($.pizza_goals > 9 && $.customer10_created == 0) {
    $.customer10 = Char.CreateRandom($.cust_coordx, $.cust_coordy, $.cust_coordz);
    $.random_customer_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.customer10.setHeading($.random_customer_heading);
    $.customer10.clearThreatSearch();
    $.customer10.setObjWaitOnFoot();
    $.customer10_blip = Blip.AddForChar($.customer10);
    $.customer10_created = 1;
    return;
  }
  //////////////////////////////////////////////////////////////////////
}

//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////

async function pizza_throw_right() {
  //////////////////////////////////////////////////////////////////////

  if ($.pizza_has_been_thrown == 0) {
    $.pizza_box_var = ScriptObject.CreateNoOffset(pizzabox, 0.0, 0.0, 100.0);
    $.pizza_box_var.placeRelativeToCar($.pizza_moped, 0.7, 0.0, 0.7);
    $.pizza_box_var.setCollision(true /* TRUE */);
    $.pizza_box_var.setDynamic(true /* TRUE */);
    $.player1_facing_this_direction = $.player1.getHeading();
    $.pizza_lobx -= 90.0;
    $.pizza_loby -= 90.0;
    $.pizza_lobx = Math.Cos($.player1_facing_this_direction);
    $.pizza_loby = Math.Sin($.player1_facing_this_direction);
    $.pizza_lobx *= 12.0;
    $.pizza_loby *= 12.0;
    $.pizza_box_var.addToVelocity($.pizza_lobx, $.pizza_loby, 5.0);
    $.total_pizzas_thrown--;
    $.pizza_has_been_thrown = 1;
  }
  //////////////////////////////////////////////////////////////////////
}

//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////

async function pizza_throw_left() {
  //////////////////////////////////////////////////////////////////////

  if ($.pizza_has_been_thrown == 0) {
    $.pizza_box_var = ScriptObject.CreateNoOffset(pizzabox, 0.0, 0.0, 100.0);
    $.pizza_box_var.placeRelativeToCar($.pizza_moped, -0.7, 0.0, 0.7);
    $.pizza_box_var.setCollision(true /* TRUE */);
    $.pizza_box_var.setDynamic(true /* TRUE */);
    $.player1_facing_this_direction = $.player1.getHeading();
    $.pizza_lobx -= 90.0;
    $.pizza_loby -= 90.0;
    $.pizza_lobx = Math.Cos($.player1_facing_this_direction);
    $.pizza_loby = Math.Sin($.player1_facing_this_direction);
    $.pizza_lobx *= -12.0;
    $.pizza_loby *= -12.0;
    $.pizza_box_var.addToVelocity($.pizza_lobx, $.pizza_loby, 5.0);
    $.total_pizzas_thrown--;
    $.pizza_has_been_thrown = 1;
  }
  //////////////////////////////////////////////////////////////////////
}

//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////

async function delivering_pizzas() {
  //////////////////////////////////////////////////////////////////////

  if (!(Car.IsDead($.pizza_moped))) {
    if ($.player1.isInCar($.pizza_moped)) {

      //firing pizza right

      if (Pad.IsButtonPressed(0 /* PAD1 */, 7 /* RIGHTSHOULDER2 */)) {
        if (Pad.IsButtonPressed(0 /* PAD1 */, 12 /* CIRCLE */)) {
          if ($.total_pizzas_thrown == 6) {
            await pizza_throw_right();  // SCM GOSUB pizza_throw_right
            $.pizza_box11 = $.pizza_box_var;
          }
          if ($.total_pizzas_thrown == 5) {
            await pizza_throw_right();  // SCM GOSUB pizza_throw_right
            $.pizza_box2 = $.pizza_box_var;
          }
          if ($.total_pizzas_thrown == 4) {
            await pizza_throw_right();  // SCM GOSUB pizza_throw_right
            $.pizza_box3 = $.pizza_box_var;
          }
          if ($.total_pizzas_thrown == 3) {
            await pizza_throw_right();  // SCM GOSUB pizza_throw_right
            $.pizza_box4 = $.pizza_box_var;
          }
          if ($.total_pizzas_thrown == 2) {
            await pizza_throw_right();  // SCM GOSUB pizza_throw_right
            $.pizza_box5 = $.pizza_box_var;
          }
          if ($.total_pizzas_thrown == 1) {
            await pizza_throw_right();  // SCM GOSUB pizza_throw_right
            $.pizza_box6 = $.pizza_box_var;
          }
        }
        else {
          $.pizza_has_been_thrown = 0;
        }
      }

      //firing pizza left

      if (Pad.IsButtonPressed(0 /* PAD1 */, 5 /* LEFTSHOULDER2 */)) {
        if (Pad.IsButtonPressed(0 /* PAD1 */, 12 /* CIRCLE */)) {
          if ($.total_pizzas_thrown == 6) {
            await pizza_throw_left();  // SCM GOSUB pizza_throw_left
            $.pizza_box11 = $.pizza_box_var;
          }
          if ($.total_pizzas_thrown == 5) {
            await pizza_throw_left();  // SCM GOSUB pizza_throw_left
            $.pizza_box2 = $.pizza_box_var;
          }
          if ($.total_pizzas_thrown == 4) {
            await pizza_throw_left();  // SCM GOSUB pizza_throw_left
            $.pizza_box3 = $.pizza_box_var;
          }
          if ($.total_pizzas_thrown == 3) {
            await pizza_throw_left();  // SCM GOSUB pizza_throw_left
            $.pizza_box4 = $.pizza_box_var;
          }
          if ($.total_pizzas_thrown == 2) {
            await pizza_throw_left();  // SCM GOSUB pizza_throw_left
            $.pizza_box5 = $.pizza_box_var;
          }
          if ($.total_pizzas_thrown == 1) {
            await pizza_throw_left();  // SCM GOSUB pizza_throw_left
            $.pizza_box6 = $.pizza_box_var;
          }
        }
        else {
          $.pizza_has_been_thrown = 0;
        }
      }
    }
  }

  //if pizza is in range of customer


  if ($.customer1_created == 1) {
    if (!(Char.IsDead($.customer1))) {
      $.customer_var = $.customer1;
      await catch_da_pizza();  // SCM GOSUB catch_da_pizza
      if ($.customer_got_pizza == 1) {
        if (!(Char.IsDead($.customer1))) {
          $.customer1.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 500);
        }
        else {
          $.mission_failed_flag = 1;
        }
        await asyncWait(500);
        await del_pizzas();  // SCM GOSUB del_pizzas
        $.customer1.markAsNoLongerNeeded();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("PIZ1_34", 5000, 1); //Pizza delivered, here's your cash.
        $.player1.addScore(10);
        $.customer1_blip.remove();
        $.customer1_created = 0;
        $.pizza_delivered++;
        $.add_pizza_score++;



        $.customer_got_pizza = 0;
      }
    }
    else {
      $.mission_failed_flag = 1;
    }
  }


  if ($.customer2_created == 1) {
    if (!(Char.IsDead($.customer2))) {
      $.customer_var = $.customer2;
      await catch_da_pizza();  // SCM GOSUB catch_da_pizza
      if ($.customer_got_pizza == 1) {
        if (!(Char.IsDead($.customer2))) {
          $.customer2.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 500);
        }
        else {
          $.mission_failed_flag = 1;
        }
        await asyncWait(500);
        await del_pizzas();  // SCM GOSUB del_pizzas
        $.customer2.markAsNoLongerNeeded();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("PIZ1_34", 5000, 1); //Pizza delivered, here's your cash.
        $.player1.addScore(10);
        $.customer2_blip.remove();
        $.customer2_created = 0;
        $.pizza_delivered++;
        $.add_pizza_score++;
        $.customer_got_pizza = 0;
      }
    }
    else {
      $.mission_failed_flag = 1;
    }
  }


  if ($.customer3_created == 1) {
    if (!(Char.IsDead($.customer3))) {
      $.customer_var = $.customer3;
      await catch_da_pizza();  // SCM GOSUB catch_da_pizza
      if ($.customer_got_pizza == 1) {
        if (!(Char.IsDead($.customer3))) {
          $.customer3.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 500);
        }
        else {
          $.mission_failed_flag = 1;
        }
        await asyncWait(500);
        await del_pizzas();  // SCM GOSUB del_pizzas
        $.customer3.markAsNoLongerNeeded();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("PIZ1_34", 5000, 1); //Pizza delivered, here's your cash.
        $.player1.addScore(10);
        $.customer3_blip.remove();
        $.customer3_created = 0;
        $.pizza_delivered++;
        $.add_pizza_score++;
        $.customer_got_pizza = 0;
      }
    }
    else {
      $.mission_failed_flag = 1;
    }
  }


  if ($.customer4_created == 1) {
    if (!(Char.IsDead($.customer4))) {
      $.customer_var = $.customer4;
      await catch_da_pizza();  // SCM GOSUB catch_da_pizza
      if ($.customer_got_pizza == 1) {
        if (!(Char.IsDead($.customer4))) {
          $.customer4.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 500);
        }
        else {
          $.mission_failed_flag = 1;
        }
        await asyncWait(500);
        await del_pizzas();  // SCM GOSUB del_pizzas
        $.customer4.markAsNoLongerNeeded();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("PIZ1_34", 5000, 1); //Pizza delivered, here's your cash.
        $.player1.addScore(10);
        $.customer4_blip.remove();
        $.customer4_created = 0;
        $.pizza_delivered++;
        $.add_pizza_score++;
        $.customer_got_pizza = 0;
      }
    }
    else {
      $.mission_failed_flag = 1;
    }
  }


  if ($.customer5_created == 1) {
    if (!(Char.IsDead($.customer5))) {
      $.customer_var = $.customer5;
      await catch_da_pizza();  // SCM GOSUB catch_da_pizza
      if ($.customer_got_pizza == 1) {
        if (!(Char.IsDead($.customer5))) {
          $.customer5.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 500);
        }
        else {
          $.mission_failed_flag = 1;
        }
        await asyncWait(500);
        await del_pizzas();  // SCM GOSUB del_pizzas
        $.customer5.markAsNoLongerNeeded();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("PIZ1_34", 5000, 1); //Pizza delivered, here's your cash.
        $.player1.addScore(10);
        $.customer5_blip.remove();
        $.customer5_created = 0;
        $.pizza_delivered++;
        $.add_pizza_score++;
        $.customer_got_pizza = 0;
      }
    }
    else {
      $.mission_failed_flag = 1;
    }
  }


  if ($.customer6_created == 1) {
    if (!(Char.IsDead($.customer6))) {
      $.customer_var = $.customer6;
      await catch_da_pizza();  // SCM GOSUB catch_da_pizza
      if ($.customer_got_pizza == 1) {
        if (!(Char.IsDead($.customer6))) {
          $.customer6.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 500);
        }
        else {
          $.mission_failed_flag = 1;
        }
        await asyncWait(500);
        await del_pizzas();  // SCM GOSUB del_pizzas
        $.customer6.markAsNoLongerNeeded();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("PIZ1_34", 5000, 1); //Pizza delivered, here's your cash.
        $.player1.addScore(10);
        $.customer6_blip.remove();
        $.customer6_created = 0;
        $.pizza_delivered++;
        $.add_pizza_score++;
        $.customer_got_pizza = 0;
      }
    }
    else {
      $.mission_failed_flag = 1;
    }
  }


  if ($.customer7_created == 1) {
    if (!(Char.IsDead($.customer7))) {
      $.customer_var = $.customer7;
      await catch_da_pizza();  // SCM GOSUB catch_da_pizza
      if ($.customer_got_pizza == 1) {
        if (!(Char.IsDead($.customer7))) {
          $.customer7.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 500);
        }
        else {
          $.mission_failed_flag = 1;
        }
        await asyncWait(500);
        await del_pizzas();  // SCM GOSUB del_pizzas
        $.customer7.markAsNoLongerNeeded();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("PIZ1_34", 5000, 1); //Pizza delivered, here's your cash.
        $.player1.addScore(10);
        $.customer7_blip.remove();
        $.customer7_created = 0;
        $.pizza_delivered++;
        $.add_pizza_score++;
        $.customer_got_pizza = 0;
      }
    }
    else {
      $.mission_failed_flag = 1;
    }
  }


  if ($.customer8_created == 1) {
    if (!(Char.IsDead($.customer8))) {
      $.customer_var = $.customer8;
      await catch_da_pizza();  // SCM GOSUB catch_da_pizza
      if ($.customer_got_pizza == 1) {
        if (!(Char.IsDead($.customer8))) {
          $.customer8.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 500);
        }
        else {
          $.mission_failed_flag = 1;
        }
        await asyncWait(500);
        await del_pizzas();  // SCM GOSUB del_pizzas
        $.customer8.markAsNoLongerNeeded();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("PIZ1_34", 5000, 1); //Pizza delivered, here's your cash.
        $.player1.addScore(10);
        $.customer8_blip.remove();
        $.customer8_created = 0;
        $.pizza_delivered++;
        $.add_pizza_score++;
        $.customer_got_pizza = 0;
      }
    }
    else {
      $.mission_failed_flag = 1;
    }
  }


  if ($.customer9_created == 1) {
    if (!(Char.IsDead($.customer9))) {
      $.customer_var = $.customer9;
      await catch_da_pizza();  // SCM GOSUB catch_da_pizza
      if ($.customer_got_pizza == 1) {
        if (!(Char.IsDead($.customer9))) {
          $.customer9.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 500);
        }
        else {
          $.mission_failed_flag = 1;
        }
        await asyncWait(500);
        await del_pizzas();  // SCM GOSUB del_pizzas
        $.customer9.markAsNoLongerNeeded();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("PIZ1_34", 5000, 1); //Pizza delivered, here's your cash.
        $.player1.addScore(10);
        $.customer9_blip.remove();
        $.customer9_created = 0;
        $.pizza_delivered++;
        $.add_pizza_score++;
        $.customer_got_pizza = 0;
      }
    }
    else {
      $.mission_failed_flag = 1;
    }
  }


  if ($.customer10_created == 1) {
    if (!(Char.IsDead($.customer10))) {
      $.customer_var = $.customer10;
      await catch_da_pizza();  // SCM GOSUB catch_da_pizza
      if ($.customer_got_pizza == 1) {
        if (!(Char.IsDead($.customer10))) {
          $.customer10.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 500);
        }
        else {
          $.mission_failed_flag = 1;
        }
        await asyncWait(500);
        await del_pizzas();  // SCM GOSUB del_pizzas
        $.customer10.markAsNoLongerNeeded();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("PIZ1_34", 5000, 1); //Pizza delivered, here's your cash.
        $.player1.addScore(10);
        $.customer10_blip.remove();
        $.customer10_created = 0;
        $.pizza_delivered++;
        $.add_pizza_score++;
        $.customer_got_pizza = 0;
      }
    }
    else {
      $.mission_failed_flag = 1;
    }
  }
  await plyr_off_moped();  // SCM GOSUB plyr_off_moped
  //////////////////////////////////////////////////////////////////////
}

//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////

async function catch_da_pizza() {
  //////////////////////////////////////////////////////////////////////

  if (ScriptObject.DoesExist($.pizza_box11)) {
    if (!(Char.IsDead($.customer_var))) {
      if ($.customer_var.locateOnFootObject2D($.pizza_box11, 2.0, 2.0, false /* FALSE */)) {
        $.which_pizza_to_del = 1;
        await asyncWait(20);
        TIMERB = 0;
        // SCM label box1a
        await asyncWait(0);
        if (TIMERB > 3000) {
          // SCM GOTO → box1b (not lowered; manual jump required)
          throw new Error("unresolved GOTO box1b"); // fallback: would break linear control flow
        }
        if (!(Char.IsDead($.customer_var))) {
          if (ScriptObject.DoesExist($.pizza_box11)) {
            const _res419 = $.pizza_box11.getCoordinates();
$.pizzax = _res419.x;
$.pizzay = _res419.y;
$.pizzaz = _res419.z;
            $.customer_var.setObjRunToCoord($.pizzax, $.pizzay);
            if ($.customer_var.locateOnFootObject2D($.pizza_box11, 2.0, 2.0, false /* FALSE */)) {
              // SCM GOTO → box1b (not lowered; manual jump required)
              throw new Error("unresolved GOTO box1b"); // fallback: would break linear control flow
            }
          }
        }
        else {
          $.mission_failed_flag = 1;
        }
        await plyr_off_moped();  // SCM GOSUB plyr_off_moped
        await plyr_quit_game();  // SCM GOSUB plyr_quit_game
        // SCM GOTO → box1a (not lowered; manual jump required)
        throw new Error("unresolved GOTO box1a"); // fallback: would break linear control flow
        // SCM label box1b
        $.customer_got_pizza = 1;
      }
    }
    else {
      $.mission_failed_flag = 1;
    }
  }
  if (ScriptObject.DoesExist($.pizza_box2)) {
    if (!(Char.IsDead($.customer_var))) {
      if ($.customer_var.locateOnFootObject2D($.pizza_box2, 2.0, 2.0, false /* FALSE */)) {
        $.which_pizza_to_del = 2;
        await asyncWait(20);
        TIMERB = 0;
        // SCM label box2a
        await asyncWait(0);
        if (TIMERB > 3000) {
          // SCM GOTO → box2b (not lowered; manual jump required)
          throw new Error("unresolved GOTO box2b"); // fallback: would break linear control flow
        }
        if (!(Char.IsDead($.customer_var))) {
          if (ScriptObject.DoesExist($.pizza_box2)) {
            const _res420 = $.pizza_box2.getCoordinates();
$.pizzax = _res420.x;
$.pizzay = _res420.y;
$.pizzaz = _res420.z;
            $.customer_var.setObjRunToCoord($.pizzax, $.pizzay);
            if ($.customer_var.locateOnFootObject2D($.pizza_box2, 2.0, 2.0, false /* FALSE */)) {
              // SCM GOTO → box2b (not lowered; manual jump required)
              throw new Error("unresolved GOTO box2b"); // fallback: would break linear control flow
            }
          }
        }
        else {
          $.mission_failed_flag = 1;
        }
        await plyr_off_moped();  // SCM GOSUB plyr_off_moped
        await plyr_quit_game();  // SCM GOSUB plyr_quit_game
        // SCM GOTO → box2a (not lowered; manual jump required)
        throw new Error("unresolved GOTO box2a"); // fallback: would break linear control flow
        // SCM label box2b
        $.customer_got_pizza = 1;
      }
    }
    else {
      $.mission_failed_flag = 1;
    }
  }
  if (ScriptObject.DoesExist($.pizza_box3)) {
    if (!(Char.IsDead($.customer_var))) {
      if ($.customer_var.locateOnFootObject2D($.pizza_box3, 2.0, 2.0, false /* FALSE */)) {
        $.which_pizza_to_del = 3;
        await asyncWait(20);
        TIMERB = 0;
        // SCM label box3a
        await asyncWait(0);
        if (TIMERB > 3000) {
          // SCM GOTO → box3b (not lowered; manual jump required)
          throw new Error("unresolved GOTO box3b"); // fallback: would break linear control flow
        }
        if (!(Char.IsDead($.customer_var))) {
          if (ScriptObject.DoesExist($.pizza_box3)) {
            const _res421 = $.pizza_box3.getCoordinates();
$.pizzax = _res421.x;
$.pizzay = _res421.y;
$.pizzaz = _res421.z;
            $.customer_var.setObjRunToCoord($.pizzax, $.pizzay);
            if ($.customer_var.locateOnFootObject2D($.pizza_box3, 2.0, 2.0, false /* FALSE */)) {
              // SCM GOTO → box3b (not lowered; manual jump required)
              throw new Error("unresolved GOTO box3b"); // fallback: would break linear control flow
            }
          }
        }
        else {
          $.mission_failed_flag = 1;
        }
        await plyr_off_moped();  // SCM GOSUB plyr_off_moped
        await plyr_quit_game();  // SCM GOSUB plyr_quit_game
        // SCM GOTO → box3a (not lowered; manual jump required)
        throw new Error("unresolved GOTO box3a"); // fallback: would break linear control flow
        // SCM label box3b
        $.customer_got_pizza = 1;
      }
    }
    else {
      $.mission_failed_flag = 1;
    }
  }
  if (ScriptObject.DoesExist($.pizza_box4)) {
    if (!(Char.IsDead($.customer_var))) {
      if ($.customer_var.locateOnFootObject2D($.pizza_box4, 2.0, 2.0, false /* FALSE */)) {
        $.which_pizza_to_del = 4;
        await asyncWait(20);
        TIMERB = 0;
        // SCM label box4a
        await asyncWait(0);
        if (TIMERB > 3000) {
          // SCM GOTO → box4b (not lowered; manual jump required)
          throw new Error("unresolved GOTO box4b"); // fallback: would break linear control flow
        }
        if (!(Char.IsDead($.customer_var))) {
          if (ScriptObject.DoesExist($.pizza_box4)) {
            const _res422 = $.pizza_box4.getCoordinates();
$.pizzax = _res422.x;
$.pizzay = _res422.y;
$.pizzaz = _res422.z;
            $.customer_var.setObjRunToCoord($.pizzax, $.pizzay);
            if ($.customer_var.locateOnFootObject2D($.pizza_box4, 2.0, 2.0, false /* FALSE */)) {
              // SCM GOTO → box4b (not lowered; manual jump required)
              throw new Error("unresolved GOTO box4b"); // fallback: would break linear control flow
            }
          }
        }
        else {
          $.mission_failed_flag = 1;
        }
        await plyr_off_moped();  // SCM GOSUB plyr_off_moped
        await plyr_quit_game();  // SCM GOSUB plyr_quit_game
        // SCM GOTO → box4a (not lowered; manual jump required)
        throw new Error("unresolved GOTO box4a"); // fallback: would break linear control flow
        // SCM label box4b
        $.customer_got_pizza = 1;
      }
    }
    else {
      $.mission_failed_flag = 1;
    }
  }
  if (ScriptObject.DoesExist($.pizza_box5)) {
    if (!(Char.IsDead($.customer_var))) {
      if ($.customer_var.locateOnFootObject2D($.pizza_box5, 2.0, 2.0, false /* FALSE */)) {
        $.which_pizza_to_del = 5;
        await asyncWait(20);
        TIMERB = 0;
        // SCM label box5a
        await asyncWait(0);
        if (TIMERB > 3000) {
          // SCM GOTO → box5b (not lowered; manual jump required)
          throw new Error("unresolved GOTO box5b"); // fallback: would break linear control flow
        }
        if (!(Char.IsDead($.customer_var))) {
          if (ScriptObject.DoesExist($.pizza_box5)) {
            const _res423 = $.pizza_box5.getCoordinates();
$.pizzax = _res423.x;
$.pizzay = _res423.y;
$.pizzaz = _res423.z;
            $.customer_var.setObjRunToCoord($.pizzax, $.pizzay);
            if ($.customer_var.locateOnFootObject2D($.pizza_box5, 2.0, 2.0, false /* FALSE */)) {
              // SCM GOTO → box5b (not lowered; manual jump required)
              throw new Error("unresolved GOTO box5b"); // fallback: would break linear control flow
            }
          }
        }
        else {
          $.mission_failed_flag = 1;
        }
        await plyr_off_moped();  // SCM GOSUB plyr_off_moped
        await plyr_quit_game();  // SCM GOSUB plyr_quit_game
        // SCM GOTO → box5a (not lowered; manual jump required)
        throw new Error("unresolved GOTO box5a"); // fallback: would break linear control flow
        // SCM label box5b
        $.customer_got_pizza = 1;
      }
    }
    else {
      $.mission_failed_flag = 1;
    }
  }
  if (ScriptObject.DoesExist($.pizza_box6)) {
    if (!(Char.IsDead($.customer_var))) {
      if ($.customer_var.locateOnFootObject2D($.pizza_box6, 2.0, 2.0, false /* FALSE */)) {
        $.which_pizza_to_del = 6;
        await asyncWait(20);
        TIMERB = 0;
        // SCM label box6a
        await asyncWait(0);
        if (TIMERB > 3000) {
          // SCM GOTO → box6b (not lowered; manual jump required)
          throw new Error("unresolved GOTO box6b"); // fallback: would break linear control flow
        }
        if (!(Char.IsDead($.customer_var))) {
          if (ScriptObject.DoesExist($.pizza_box6)) {
            const _res424 = $.pizza_box6.getCoordinates();
$.pizzax = _res424.x;
$.pizzay = _res424.y;
$.pizzaz = _res424.z;
            $.customer_var.setObjRunToCoord($.pizzax, $.pizzay);
            if ($.customer_var.locateOnFootObject2D($.pizza_box6, 2.0, 2.0, false /* FALSE */)) {
              // SCM GOTO → box6b (not lowered; manual jump required)
              throw new Error("unresolved GOTO box6b"); // fallback: would break linear control flow
            }
          }
        }
        else {
          $.mission_failed_flag = 1;
        }
        await plyr_off_moped();  // SCM GOSUB plyr_off_moped
        await plyr_quit_game();  // SCM GOSUB plyr_quit_game
        // SCM GOTO → box6a (not lowered; manual jump required)
        throw new Error("unresolved GOTO box6a"); // fallback: would break linear control flow
        // SCM label box6b
        $.customer_got_pizza = 1;
      }
    }
    else {
      $.mission_failed_flag = 1;
    }
  }
  //////////////////////////////////////////////////////////////////////
}

//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////

async function del_pizzas() {
  //////////////////////////////////////////////////////////////////////

  if ($.which_pizza_to_del == 1) {
    $.pizza_box11.delete();
  }
  if ($.which_pizza_to_del == 2) {
    $.pizza_box2.delete();
  }
  if ($.which_pizza_to_del == 3) {
    $.pizza_box3.delete();
  }
  if ($.which_pizza_to_del == 4) {
    $.pizza_box4.delete();
  }
  if ($.which_pizza_to_del == 5) {
    $.pizza_box5.delete();
  }
  if ($.which_pizza_to_del == 6) {
    $.pizza_box6.delete();
  }
  //////////////////////////////////////////////////////////////////////
}

//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////

async function no_longer_needed_pizzas() {
  //////////////////////////////////////////////////////////////////////

  $.pizza_box11.markAsNoLongerNeeded();
  $.pizza_box2.markAsNoLongerNeeded();
  $.pizza_box3.markAsNoLongerNeeded();
  $.pizza_box4.markAsNoLongerNeeded();
  $.pizza_box5.markAsNoLongerNeeded();
  $.pizza_box6.markAsNoLongerNeeded();



  $.random_speech = Math.RandomIntInRange(1, 20);


  if ($.pizza_speech_played == 0) {
    if ($.random_speech == 1) {
      Audio.LoadMissionAudio(1, "piss_01" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_13", 4000, 1); //Get these delivered nice and hot.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_13");
    }
    if ($.random_speech == 2) {
      Audio.LoadMissionAudio(1, "piss_02" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_14", 4000, 1); //Pal, pizza's for you.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_14");
    }
    if ($.random_speech == 3) {
      Audio.LoadMissionAudio(1, "piss_03" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_15", 4000, 1); //Hey, come on Mister, deliver these quick.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_15");
    }
    if ($.random_speech == 4) {
      Audio.LoadMissionAudio(1, "piss_04" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_16", 4000, 1); //What are you waiting around for Mister?  You got pizza's to deliver.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_16");
    }
    if ($.random_speech == 5) {
      Audio.LoadMissionAudio(1, "piss_05" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_17", 4000, 1); //I know you didn't want to be a pizza boy, well I don't give a damn.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_17");
    }
    if ($.random_speech == 6) {
      Audio.LoadMissionAudio(1, "piss_06" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_18", 4000, 1); //Deliver these.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_18");
    }
    if ($.random_speech == 7) {
      Audio.LoadMissionAudio(1, "piss_07" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_19", 4000, 1); //These need delivering.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_19");
    }
    if ($.random_speech == 8) {
      Audio.LoadMissionAudio(1, "piss_08" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_20", 4000, 1); //Come on Mister, deliver these things or you're sacked.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_20");
    }
    if ($.random_speech == 9) {
      Audio.LoadMissionAudio(1, "piss_09" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_21", 4000, 1); //We got people waiting pal.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_21");
    }
    if ($.random_speech == 10) {
      Audio.LoadMissionAudio(1, "piss_10" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_22", 4000, 1); //What are you waiting around for?  These need delivering!
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_22");
    }
    if ($.random_speech == 11) {
      Audio.LoadMissionAudio(1, "piss_11" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_23", 4000, 1); //Deliver the damn food Mister.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_23");
    }
    if ($.random_speech == 12) {
      Audio.LoadMissionAudio(1, "piss_12" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_24", 4000, 1); //These need delivering pal.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_24");
    }
    if ($.random_speech == 13) {
      Audio.LoadMissionAudio(1, "piss_13" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_25", 4000, 1); //Man, can you take these?
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_25");
    }
    if ($.random_speech == 14) {
      Audio.LoadMissionAudio(1, "piss_14" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_26", 4000, 1); //Mister, deliver these pronto, avamos amigo.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_26");
    }
    if ($.random_speech == 15) {
      Audio.LoadMissionAudio(1, "piss_15" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_27", 4000, 1); //Come on, we're in a rush, deliver these.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_27");
    }
    if ($.random_speech == 16) {
      Audio.LoadMissionAudio(1, "piss_16" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_28", 4000, 1); //You again?  well deliver these quick pal.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_28");
    }
    if ($.random_speech == 17) {
      Audio.LoadMissionAudio(1, "piss_17" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_29", 4000, 1); //No wasting time this time pal.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_29");
    }
    if ($.random_speech == 18) {
      Audio.LoadMissionAudio(1, "piss_18" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_30", 4000, 1); //Come on you lazy bastard, deliver this crap on time.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_30");
    }
    if ($.random_speech == 19) {
      Audio.LoadMissionAudio(1, "piss_19" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("PIZ1_31", 4000, 1); //You'll never get a promotion unless you move faster this time.
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("PIZ1_31");
    }
    $.pizza_speech_played = 1;
  }
  //////////////////////////////////////////////////////////////////////
}

//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////

async function dying_customers() {
  //////////////////////////////////////////////////////////////////////

  if ($.customer1_created == 1) {
    if (Char.IsDead($.customer1)) {
      $.mission_failed_flag = 1;
    }
  }
  if ($.customer2_created == 1) {
    if (Char.IsDead($.customer2)) {
      $.mission_failed_flag = 1;
    }
  }
  if ($.customer3_created == 1) {
    if (Char.IsDead($.customer3)) {
      $.mission_failed_flag = 1;
    }
  }
  if ($.customer4_created == 1) {
    if (Char.IsDead($.customer4)) {
      $.mission_failed_flag = 1;
    }
  }
  if ($.customer5_created == 1) {
    if (Char.IsDead($.customer5)) {
      $.mission_failed_flag = 1;
    }
  }
  if ($.customer6_created == 1) {
    if (Char.IsDead($.customer6)) {
      $.mission_failed_flag = 1;
    }
  }
  if ($.customer7_created == 1) {
    if (Char.IsDead($.customer7)) {
      $.mission_failed_flag = 1;
    }
  }
  if ($.customer8_created == 1) {
    if (Char.IsDead($.customer8)) {
      $.mission_failed_flag = 1;
    }
  }
  if ($.customer9_created == 1) {
    if (Char.IsDead($.customer9)) {
      $.mission_failed_flag = 1;
    }
  }
  if ($.customer10_created == 1) {
    if (Char.IsDead($.customer10)) {
      $.mission_failed_flag = 1;
    }
  }
  //////////////////////////////////////////////////////////////////////
}

//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////

async function plyr_off_moped() {
  //////////////////////////////////////////////////////////////////////

  if (!(Car.IsDead($.pizza_moped))) {
    if ($.pizza_moped.isUpsidedown() && $.pizza_moped.isStopped()) {
      $.flag_pizza_moped_upsidedown = 1;
    }
    if (!($.player1.isInCar($.pizza_moped)) && $.flag_player_not_in_pizza_moped == 0 && $.flag_pizza_moped_upsidedown == 0) {
      Text.PrintNow("PIZ1_11", 5000, 1); //Hey! Get back on the bike!
      $.pizza_moped_blip = Blip.AddForCar($.pizza_moped);
      $.customer1_blip.remove();
      $.customer2_blip.remove();
      $.customer3_blip.remove();
      $.customer4_blip.remove();
      $.customer5_blip.remove();
      $.customer6_blip.remove();
      $.customer7_blip.remove();
      $.customer8_blip.remove();
      $.customer9_blip.remove();
      $.customer10_blip.remove();
      $.pizza_hut_blip.remove();
      $.flag_player_not_in_pizza_moped = 1;
    }
    if ($.player1.isInCar($.pizza_moped) && $.flag_player_not_in_pizza_moped == 1) {
      $.pizza_moped_blip.remove();
      if ($.go_back_to_pizza_hut_flag == 0) {
        if ($.customer1_created == 1) {
          if (!(Char.IsDead($.customer1))) {
            $.customer1_blip = Blip.AddForChar($.customer1);
          }
        }
        if ($.customer2_created == 1) {
          if (!(Char.IsDead($.customer2))) {
            $.customer2_blip = Blip.AddForChar($.customer2);
          }
        }
        if ($.customer3_created == 1) {
          if (!(Char.IsDead($.customer3))) {
            $.customer3_blip = Blip.AddForChar($.customer3);
          }
        }
        if ($.customer4_created == 1) {
          if (!(Char.IsDead($.customer4))) {
            $.customer4_blip = Blip.AddForChar($.customer4);
          }
        }
        if ($.customer5_created == 1) {
          if (!(Char.IsDead($.customer5))) {
            $.customer5_blip = Blip.AddForChar($.customer5);
          }
        }
        if ($.customer6_created == 1) {
          if (!(Char.IsDead($.customer6))) {
            $.customer6_blip = Blip.AddForChar($.customer6);
          }
        }
        if ($.customer7_created == 1) {
          if (!(Char.IsDead($.customer7))) {
            $.customer7_blip = Blip.AddForChar($.customer7);
          }
        }
        if ($.customer8_created == 1) {
          if (!(Char.IsDead($.customer8))) {
            $.customer8_blip = Blip.AddForChar($.customer8);
          }
        }
        if ($.customer9_created == 1) {
          if (!(Char.IsDead($.customer9))) {
            $.customer9_blip = Blip.AddForChar($.customer9);
          }
        }
        if ($.customer10_created == 1) {
          if (!(Char.IsDead($.customer10))) {
            $.customer10_blip = Blip.AddForChar($.customer10);
          }
        }
      }
      else {
        $.pizza_hut_blip.remove();
        $.pizza_hut_blip = Blip.AddForCoord($.pizza_shopx, $.pizza_shopy, -100.0);
      }
      Text.ClearPrints();
      $.flag_player_not_in_pizza_moped = 0;
    }
  }
  else {
    $.mission_failed_flag = 2;
  }
  //////////////////////////////////////////////////////////////////////
}

//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////

async function plyr_quit_game() {
  //////////////////////////////////////////////////////////////////////


  if ($.flag_player_not_in_pizza_moped == 0) {
    if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
      Text.ClearPrints();
      $.mission_failed_flag = 3;
    }
  }
  //////////////////////////////////////////////////////////////////////

  return;
  //////////////////////////////////////////////////////////////////////






}

export async function pizza() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************Pizza Delivery Boy******************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************

  // SCRIPT_NAME pizza
  // Mission start stuff

  await mission_start_pizza();  // SCM GOSUB mission_start_pizza
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_failed_pizza();  // SCM GOSUB mission_failed_pizza
  }
  await mission_cleanup_pizza();  // SCM GOSUB mission_cleanup_pizza
  // MissionBoundary
  // Variables for mission
  //people, cars and objects

  // VAR_INT pizza_moped
  // VAR_INT customer1
  // VAR_INT customer2
  // VAR_INT customer3
  // VAR_INT customer4
  // VAR_INT customer5
  // VAR_INT customer6
  // VAR_INT customer7
  // VAR_INT customer8
  // VAR_INT customer9
  // VAR_INT customer10
  // VAR_INT pizza_box11
  // VAR_INT pizza_box2
  // VAR_INT pizza_box3
  // VAR_INT pizza_box4
  // VAR_INT pizza_box5
  // VAR_INT pizza_box6

  //blips

  // VAR_INT customer1_blip
  // VAR_INT customer2_blip
  // VAR_INT customer3_blip
  // VAR_INT customer4_blip
  // VAR_INT customer5_blip
  // VAR_INT customer6_blip
  // VAR_INT customer7_blip
  // VAR_INT customer8_blip
  // VAR_INT customer9_blip
  // VAR_INT customer10_blip
  // VAR_INT pizza_hut_blip
  // VAR_INT pizza_moped_blip

  //flags

  // VAR_INT pizza_goals
  // VAR_INT customers_created
  // VAR_INT customer1_created
  // VAR_INT customer2_created
  // VAR_INT customer3_created
  // VAR_INT customer4_created
  // VAR_INT customer5_created
  // VAR_INT customer6_created
  // VAR_INT customer7_created
  // VAR_INT customer8_created
  // VAR_INT customer9_created
  // VAR_INT customer10_created
  // VAR_INT pizza_delivered
  // VAR_INT go_back_to_pizza_hut_flag
  // VAR_INT total_pizzas_thrown
  // VAR_INT pizza_has_been_thrown
  // VAR_INT pizza_box_var
  // VAR_INT where_is_player1
  // VAR_INT customer_complaint_time
  // VAR_INT customer_got_pizza
  // VAR_INT customer_var
  // VAR_INT mission_failed_flag
  // VAR_INT which_pizza_to_del
  // VAR_INT flag_player_not_in_pizza_moped
  // VAR_INT flag_pizza_moped_upsidedown
  // VAR_INT pizza_help_text_played
  // VAR_INT add_pizza_score
  // VAR_INT random_speech
  // VAR_INT pizza_speech_played

  //coordinates

  // VAR_FLOAT x_random
  // VAR_FLOAT y_random
  // VAR_FLOAT cust_coordx
  // VAR_FLOAT cust_coordy
  // VAR_FLOAT cust_coordz
  // VAR_FLOAT sum_dif_xy
  // VAR_FLOAT dif_plyr_cust_x
  // VAR_FLOAT dif_plyr_cust_y
  // VAR_FLOAT player1s_distance_from_customer
  // VAR_FLOAT dif_cust_shop_x
  // VAR_FLOAT dif_cust_shop_y
  // VAR_FLOAT customers_distance_from_pizza_shop
  // VAR_FLOAT random_customer_heading
  // VAR_FLOAT pizza_shopx
  // VAR_FLOAT pizza_shopy
  // VAR_FLOAT pizza_shopz
  // VAR_FLOAT player1_facing_this_direction
  // VAR_FLOAT pizza_lobx
  // VAR_FLOAT pizza_loby
  // VAR_FLOAT pizzax
  // VAR_FLOAT pizzay
  // VAR_FLOAT pizzaz

  // ****************************************Mission Start************************************

}
