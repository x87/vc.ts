// Generated from main/cap_1.sc

import { $ } from "../vars.mts";

// *****************************************************************************************
// ********************************* Finale mission 1 **************************************
// ******************************** Cap the Collectors *************************************
// *****************************************************************************************
// *** The player1 gets a pager message to go to the print works. There he finds the 	 ***
// *** lovely old man beaten up. Some mob collector turned up, got heavy, and left with  ***
// *** some cash.  The mob has started taxing the business.	 The player1 flies into a 	 ***
// *** rage and goes to track down the mob collector.									 ***
// *****************************************************************************************

async function body() {


  ONMISSION = 1;


  Stat.RegisterMissionGiven();
  // SCRIPT_NAME CAP_1


  await asyncWait(0);


  // LVAR_FLOAT collector1_goto_x collector1_goto_y collector1_goto_z collector1_stuck_x collector1_stuck_y
  // LVAR_FLOAT collector2_goto_x collector2_goto_y collector2_goto_z collector2_stuck_x collector2_stuck_y
  // LVAR_FLOAT collector3_goto_x collector3_goto_y collector3_goto_z collector3_stuck_x collector3_stuck_y


  Text.LoadMissionText("CAP_1");
  Shortcut.SetDropoffPointForMission(-1045.726, -292.454, 9.758, 97.607); // On road outside of Print Works

  //malibu_asset_acquired = 1 //debug!!!!!!
  //porn_asset_acquired	= 1 //debug!!!!!
  //icecream_asset_acquired = 1 //debug!!!!!!!
  //taxifirm_asset_acquired = 1 //debug!!!!!!!
  //boatyard_asset_acquired = 1 //debug!!!!!!
  //showroom_asset_acquired = 1 //debug!!!!!


  $.collector = -1;
  $.collector_car = -1;
  $.collector_dude1 = -1;
  $.collector_counter = 0;
  $.collector_in_car = 0;
  $.collector_stuck_timer = 0;
  $.collector_car_goto_coords_timer = 0;
  $.collector_cash = 0;
  $.collector_in_car_timer = 0;
  $.collector_goto_x = 0.0;
  $.collector_goto_y = 0.0;
  $.collector_goto_z = 0.0;
  $.collector_stuck_x = 0.0;
  $.collector_stuck_y = 0.0;


  $.collector1 = -1;
  $.collector1_car = -1;
  $.collector1_dude1 = -1;
  $.collector1_counter = 0;
  $.collector1_in_car = 0;
  $.collector1_stuck_timer = 0;
  $.collector1_car_goto_coords_timer = 0;
  $.collector1_cash = 0;
  $.collector1_in_car_timer = 0;
  collector1_goto_x = 0.0;
  collector1_goto_y = 0.0;
  collector1_goto_z = 0.0;
  collector1_stuck_x = 0.0;
  collector1_stuck_y = 0.0;


  $.collector2 = -1;
  $.collector2_car = -1;
  $.collector2_dude1 = -1;
  $.collector2_counter = 0;
  $.collector2_in_car = 0;
  $.collector2_stuck_timer = 0;
  $.collector2_car_goto_coords_timer = 0;
  $.collector2_cash = 0;
  $.collector2_in_car_timer = 0;
  collector2_goto_x = 0.0;
  collector2_goto_y = 0.0;
  collector2_goto_z = 0.0;
  collector2_stuck_x = 0.0;
  collector2_stuck_y = 0.0;


  $.collector3 = -1;
  $.collector3_car = -1;
  $.collector3_dude1 = -1;
  $.collector3_counter = 0;
  $.collector3_in_car = 0;
  $.collector3_stuck_timer = 0;
  $.collector3_car_goto_coords_timer = 0;
  $.collector3_cash = 0;
  $.collector3_in_car_timer = 0;
  collector3_goto_x = 0.0;
  collector3_goto_y = 0.0;
  collector3_goto_z = 0.0;
  collector3_stuck_x = 0.0;
  collector3_stuck_y = 0.0;


  $.malibu_done = 0;
  $.boatyard_done = 0;
  $.showroom_done = 0;
  $.porn_done = 0;
  $.icecream_done = 0;
  $.taxifirm_done = 0;


  $.range_int = 0;


  $.first_batch_done = 0;
  $.second_batch_done = 0;
  $.first_batch_lost = 0;
  $.second_batch_lost = 0;


  $.icecream_cash_pickup_removed = 0;
  $.taxifirm_cash_pickup_removed = 0;
  $.boatyard_cash_pickup_removed = 0;
  $.malibu_cash_pickup_removed = 0;
  $.showroom_cash_pickup_removed = 0;
  $.porn_cash_pickup_removed = 0;


  $.done_bike_cutscene = 0;


  $.is_audio_in_use = 0;
  $.audio_1_flag = 0;
  $.audio_2_flag = 0;
  $.audio_3_flag = 0;
  $.audio_4_flag = 0;
  $.audio_5_flag = 0;
  $.audio_6_flag = 0;
  $.audio_7_flag = 0;
  $.audio_8_flag = 0;
  $.audio_9_flag = 0;
  $.audio_10_flag = 0;
  $.audio_11_flag = 0;


  $.player_audio_timer = 0;
  $.player_audio_flag = 0;
  $.collector_audio_timer = 0;
  $.collector_audio_flag = 0;


  $.cutscene_timer = 0;


  $.coord_1_x = 0.0;
  $.coord_1_y = 0.0;
  $.coord_1_z = 0.0;


  $.audio_1_timeout = 0;
  $.audio_2_timeout = 0;
  $.audio_3_timeout = 0;
  $.audio_4_timeout = 0;
  $.audio_5_timeout = 0;
  $.audio_6_timeout = 0;
  $.audio_7_timeout = 0;
  $.audio_8_timeout = 0;
  $.audio_9_timeout = 0;
  $.audio_10_timeout = 0;
  $.audio_11_timeout = 0;


  $.collector2_flag = 0;
  $.collector3_flag = 0;


  $.no_obj_timer = 0;

  /////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////


  Streaming.LoadSpecialCharacter(1, "csplay");
  Streaming.LoadSpecialCharacter(2, "cskelly");
  Streaming.LoadSpecialCharacter(3, "printra");
  Streaming.LoadSpecialCharacter(4, "printrb");
  Streaming.LoadSpecialCharacter(5, "printrc");


  Streaming.SetAreaVisible(VIS_PRINT_WORKS);
  Streaming.LoadScene(-1071.5597, -278.9497, 12.3606);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5))) {
    await asyncWait(0);


  }


  Cutscene.Load("CAP_1");


  Camera.SetNearClip(0.1);


  Cutscene.SetOffset(-1064.103, -276.39, 11.066);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("csplay");


  $.cs_kelly = CutsceneObject.Create(SPECIAL02);
  $.cs_kelly.setAnim("cskelly");


  $.cs_buddy = CutsceneObject.Create(SPECIAL03);
  $.cs_buddy.setAnim("printra");


  $.cs_sonny = CutsceneObject.Create(SPECIAL04);
  $.cs_sonny.setAnim("printrb");


  $.cs_sgoona = CutsceneObject.Create(SPECIAL05);
  $.cs_sgoona.setAnim("printrc");


  World.ClearArea(-1059.8411, -278.7214, 10.4044, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-1059.8411, -278.7214, 10.4044);
  $.player1.setHeading(272.2088);


  Camera.SetFadingColor(0, 0, 1);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 2420) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAP_01", 10000, 1); //Ok, what's the emergency?


  while ($.cs_time < 5636) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAP_02", 10000, 1); //WHO?


  while ($.cs_time < 6065) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAP_03", 10000, 1); //Tommy...some mob thugs ...said they'd come to take their cut...


  while ($.cs_time < 10876) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAP_04", 10000, 1); //...said it was a Mr. Forello's money...I feel like crap.


  while ($.cs_time < 14640) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAP_05", 10000, 1); //Forelli? SONNY Forelli?


  while ($.cs_time < 17053) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAP_06", 10000, 1); //Yeah, that's the guy...I think...they were very insistent...


  while ($.cs_time < 20816) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAP_07", 10000, 1); //Don't you worry, pop, I'm not angry with you.


  while ($.cs_time < 22129) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAP_08", 10000, 1); //Get him to the hospital.


  while ($.cs_time < 24218) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAP_09", 10000, 1); //Tommy...rip that guy a new asshole for me...


  while ($.cs_time < 27085) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAP_10", 10000, 1); //I'm gonna rip him two.


  while ($.cs_time < 27367) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 0 /* FADE_OUT */);


  await asyncWait(1000);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.UnloadSpecialCharacter(5);


  Streaming.SetAreaVisible(VIS_MAIN_MAP);
  Streaming.LoadScene(-1059.8411, -278.7214, 10.4044);
  /////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////



  Streaming.LoadSpecialCharacter(1, "MBA");
  Streaming.LoadSpecialCharacter(2, "MBB");
  Streaming.RequestModel(M4);
  Streaming.RequestModel(CHROMEGUN);
  Streaming.RequestModel(SANCHEZ);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasModelLoaded(M4)) || !(Streaming.HasModelLoaded(CHROMEGUN)) || !(Streaming.HasModelLoaded(SANCHEZ)) || !(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }


  if ($.malibu_asset_acquired == 1) {
    //ADD_BLIP_FOR_COORD 499.7910 -63.8411 10.4539 malibu_blip //MALIBU BANK JOB CLUB	510.4471 -80.3717 9.4731
    $.malibu_blip = Blip.AddShortRangeSpriteForCoord(499.7910, -63.8411, 10.4539, RADAR_SPRITE_MALIBUCLUB);
    $.malibu_blip.changeScale(2);
    $.malibu_blip.changeColor(5 /* PURPLE */);
  }
  else {
    $.malibu_done = 2;
  }


  if ($.porn_asset_acquired == 1) {
    //ADD_BLIP_FOR_COORD 8.5461 968.7767 9.8996 porn_blip //PORN STUDIO  16.1665 962.5446 9.9069
    $.porn_blip = Blip.AddShortRangeSpriteForCoord(8.5461, 968.7767, 9.8996, RADAR_SPRITE_FILM);
    $.porn_north_gate_closed.delete();
  }
  else {
    $.porn_done = 2;
  }


  if ($.icecream_asset_acquired == 1) {
    //ADD_BLIP_FOR_COORD -863.9365 -576.4991 10.0646 icecream_blip //ICECREAM FACTORY	-852.5533 -568.4194 10.0567
    $.icecream_blip = Blip.AddShortRangeSpriteForCoord(-863.9365, -576.4991, 10.0646, 9 /* RADAR_SPRITE_ICE */);
  }
  else {
    $.icecream_done = 2;
  }


  if ($.taxifirm_asset_acquired == 1) {
    //ADD_BLIP_FOR_COORD -997.1398 189.8333 10.3916 taxifirm_blip //TAXI FIRM	-1016.2645 199.9105 10.2062
    $.taxifirm_blip = Blip.AddShortRangeSpriteForCoord(-997.1398, 189.8333, 10.3916, RADAR_SPRITE_KCABS);
  }
  else {
    $.taxifirm_done = 2;
  }


  if ($.boatyard_asset_acquired == 1) {
    //ADD_BLIP_FOR_COORD -640.8567 -1491.8431 12.7580 boatyard_blip //BOAT YARD -726.0752 -1494.4872 10.3799
    $.boatyard_blip = Blip.AddShortRangeSpriteForCoord(-640.8567, -1491.8431, 12.7580, RADAR_SPRITE_BOATYARD);
  }
  else {
    $.boatyard_done = 2;
  }


  if ($.showroom_asset_acquired == 1) {
    //ADD_BLIP_FOR_COORD -1014.4678 -833.3465 12.0452 showroom_blip //CAR SHOWROOM -1054.7959 -862.4898 12.1155
    $.showroom_blip = Blip.AddShortRangeSpriteForCoord(-1014.4678, -833.3465, 12.0452, RADAR_SPRITE_SUNYARD);
  }
  else {
    $.showroom_done = 2;
  }


  if (ONMISSION == 0) {
    $.taxifirm_cash_pickup = Pickup.CreateProtection($.x, $.y, $.z, $.porn_revenue, $.porn_revenue);
    $.porn_cash_pickup = Pickup.CreateProtection($.x, $.y, $.z, $.porn_revenue, $.porn_revenue);
    $.malibu_cash_pickup = Pickup.CreateProtection($.x, $.y, $.z, $.porn_revenue, $.porn_revenue);
    $.icecream_cash_pickup = Pickup.CreateProtection($.x, $.y, $.z, $.porn_revenue, $.porn_revenue);
    $.boatyard_cash_pickup = Pickup.CreateProtection($.x, $.y, $.z, $.porn_revenue, $.porn_revenue);
    $.showroom_cash_pickup = Pickup.CreateProtection($.x, $.y, $.z, $.porn_revenue, $.porn_revenue);
  }


  $.collector1_car = Car.Create(SANCHEZ, -866.8224, -448.5860, 9.8801);
  $.collector1_car.setHeading(198.0000);
  $.collector1_car.setOnlyDamagedByPlayer(true /* TRUE */);
  $.collector1_car.setChangeLane(false /* FALSE */);
  $.collector1_car.setForwardSpeed(10.0);


  $.collector1 = Char.CreateInsideCar($.collector1_car, 4 /* PEDTYPE_CIVMALE */, SPECIAL01);



  $.collector1.giveWeapon(WEAPONTYPE_M4, 9999);
  $.collector1.clearThreatSearch();
  $.collector1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.collector1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.collector1.setHealth(250);
  $.collector1.setCeaseAttackTimer(1150);
  $.collector1.setHeedThreats(true /* TRUE */);
  $.collector1.setStayInSamePlace(true /* TRUE */);
  $.collector1.setRunning(true /* TRUE */);


  $.collector1_dude1 = Char.CreateAsPassenger($.collector1_car, 4 /* PEDTYPE_CIVMALE */, SPECIAL02, 0);



  $.collector1_dude1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 9999);
  $.collector1_dude1.clearThreatSearch();
  $.collector1_dude1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.collector1_dude1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.collector1_dude1.setHealth(250);
  //SET_CHAR_CEASE_ATTACK_TIMER collector1_dude1 1000

  $.collector1_dude1.setHeedThreats(true /* TRUE */);
  $.collector1_dude1.setStayInSamePlace(true /* TRUE */);
  $.collector1_dude1.setRunning(true /* TRUE */);
  $.collector1_dude1.followChar($.collector1);


  await get_next_place();  // SCM GOSUB get_next_place
  collector1_goto_x = $.collector_goto_x;
  collector1_goto_y = $.collector_goto_y;
  collector1_goto_z = $.collector_goto_z;
  if (!(Car.IsDead($.collector1_car))) {
    $.collector1_car.gotoCoordinatesAccurate(collector1_goto_x, collector1_goto_y, collector1_goto_z);
    $.collector1_car.setCruiseSpeed(100.0);
    $.collector1_car.setDrivingStyle(2);
  }



  Char.SetEnterCarRangeMultiplier(10.0);
}



async function cap1_mission_loop() {
  // SCM GOTO → cap1_mission_loop lowered to endless loop
  while (true) {


    await asyncWait(0);


    $.game_timer = Clock.GetGameTimer();


    if ($.done_bike_cutscene == 3) {
      if (!(Camera.GetFadingStatus())) {
        $.player1.setControl(true /* ON */);
        Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
        Hud.SwitchWidescreen(false /* OFF */);
        Game.SetAllCarsCanBeDamaged(true /* TRUE */);
        Camera.SetGenerateCarsAround(false /* FALSE */);
        Camera.SetBehindPlayer();
        Camera.RestoreJumpcut();
        const _res119 = $.player1.getCoordinates();
$.x = _res119.x;
$.y = _res119.y;
$.z = _res119.z;
        Streaming.LoadScene($.x, $.y, $.z);
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(1500, 1 /* FADE_IN */);
        if (!(Char.IsDead($.collector1))) {
          $.collector1_blip = Blip.AddForChar($.collector1);
          $.collector1_blip.changeColor(0 /* RED */);
        }
        $.player1.setMood(PLAYER_MOOD_ANGRY, 60000);
        $.done_bike_cutscene = 4;
      }
    }


    if ($.done_bike_cutscene == 2) {
      if ($.cutscene_timer < $.game_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(1500, 0 /* FADE_OUT */);
        $.done_bike_cutscene = 3;
      }
    }


    if ($.done_bike_cutscene == 1) {
      if ($.cutscene_timer < $.game_timer) {
        if (!(Car.IsDead($.collector1_car))) {
          Camera.PointAtCar($.collector1_car, 18 /* CAM_ON_A_STRING */, 2 /* JUMP_CUT */);
          $.cutscene_timer = $.game_timer + 2000;
        }
        $.done_bike_cutscene = 2;
      }
    }


    if ($.done_bike_cutscene == 0) {
      if ($.cutscene_timer < $.game_timer) {
        $.player1.setControl(false /* OFF */);
        Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
        Hud.SwitchWidescreen(true /* ON */);
        Game.SetAllCarsCanBeDamaged(false /* FALSE */);
        Camera.SetGenerateCarsAround(true /* TRUE */);
        Camera.SetFixedPosition(-856.1546, -497.3885, 10.7677, 0.0, 0.0, 0.0); //-862.8522 -475.8948 10.5281
        if (!(Car.IsDead($.collector1_car))) {
          Camera.PointAtCar($.collector1_car, 15 /* FIXED */, 2 /* JUMP_CUT */);
        }
        if (!(Char.IsDead($.collector1))) {
          const _res120 = $.collector1.getCoordinates();
$.x = _res120.x;
$.y = _res120.y;
$.z = _res120.z;
        }
        Streaming.LoadScene($.x, $.y, $.z);
        $.cutscene_timer = $.game_timer + 4000;
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(1500, 1 /* FADE_IN */);
        Text.PrintNow("CAP1_B1", 20000, 1); //"The mafia is taxing your businesses, find them and kill them."
        $.print_timer = $.game_timer + 20000;
        $.done_bike_cutscene = 1;
      }
    }


    if (!(Char.IsDead($.collector1))) {
      $.collector = $.collector1;
      $.collector_car = $.collector1_car;
      $.collector_counter = $.collector1_counter;
      $.collector_goto_x = collector1_goto_x;
      $.collector_goto_y = collector1_goto_y;
      $.collector_goto_z = collector1_goto_z;
      $.collector_in_car = $.collector1_in_car;
      $.collector_stuck_x = collector1_stuck_x;
      $.collector_stuck_y = collector1_stuck_y;
      $.collector_stuck_timer = $.collector1_stuck_timer;
      $.collector_car_goto_coords_timer = $.collector1_car_goto_coords_timer;
      $.collector_dude1 = $.collector1_dude1;
      $.collector_cash = $.collector1_cash;
      $.collector_in_car_timer = $.collector1_in_car_timer;
      await do_collectors_stuff();  // SCM GOSUB do_collectors_stuff
      $.collector1 = $.collector;
      $.collector1_car = $.collector_car;
      $.collector1_counter = $.collector_counter;
      collector1_goto_x = $.collector_goto_x;
      collector1_goto_y = $.collector_goto_y;
      collector1_goto_z = $.collector_goto_z;
      $.collector1_in_car = $.collector_in_car;
      collector1_stuck_x = $.collector_stuck_x;
      collector1_stuck_y = $.collector_stuck_y;
      $.collector1_stuck_timer = $.collector_stuck_timer;
      $.collector1_car_goto_coords_timer = $.collector_car_goto_coords_timer;
      $.collector1_dude1 = $.collector_dude1;
      $.collector1_cash = $.collector_cash;
      $.collector1_in_car_timer = $.collector_in_car_timer;
    }
    else {
      $.collector1_blip.remove();
      if (!(Char.IsDead($.collector1_dude1))) {
        if (Char.DoesExist($.collector1)) {
          const _res121 = World.GetDeadCharPickupCoords($.collector1);
$.x = _res121.x;
$.y = _res121.y;
$.z = _res121.z;
        }
        if ($.collector1_dude1.locateAnyMeans2D($.x, $.y, 30.0, 30.0, false)) {
          $.collector1 = $.collector1_dude1;
          $.collector1_dude1 = -1;
          $.collector1_cash = 0;
          $.collector1_blip = Blip.AddForChar($.collector1);
          $.collector1_blip.changeColor(0 /* RED */);
          //ELSE//PUT MORE GOONS HERE

        }
        else {
          $.collector1_dude1.markAsNoLongerNeeded();
          $.collector1_dude1 = -1;
        }
        //ELSE//PUT MORE GOONS HERE

      }
      else {
        if (!(collector1_goto_x == 999999999.0)) {
          if (collector1_goto_x == -852.5533) {
            if ($.icecream_done == 1) {
              $.icecream_done = 0;
            }
            if ($.icecream_cash_pickup_removed == 0 && $.icecream_done == 2) {
              $.icecream_done = 0;
            }
          }
          if (collector1_goto_x == -1016.2645) {
            if ($.taxifirm_done == 1) {
              $.taxifirm_done = 0;
            }
            if ($.taxifirm_cash_pickup_removed == 0 && $.taxifirm_done == 2) {
              $.taxifirm_done = 0;
            }
          }
          if (collector1_goto_x == -726.0752) {
            if ($.boatyard_done == 1) {
              $.boatyard_done = 0;
            }
            if ($.boatyard_cash_pickup_removed == 0 && $.boatyard_done == 2) {
              $.boatyard_done = 0;
            }
          }
          if (collector1_goto_x == -1025.1687) {
            if ($.showroom_done == 1) {
              $.showroom_done = 0;
            }
            if ($.showroom_cash_pickup_removed == 0 && $.showroom_done == 2) {
              $.showroom_done = 0;
            }
          }
          if (collector1_goto_x == 506.2871) {
            if ($.malibu_done == 1) {
              $.malibu_done = 0;
            }
            if ($.malibu_cash_pickup_removed == 0 && $.malibu_done == 2) {
              $.malibu_done = 0;
            }
          }
          if (collector1_goto_x == 17.6185) {
            if ($.porn_done == 1) {
              $.porn_done = 0;
            }
            if ($.porn_cash_pickup_removed == 0 && $.porn_done == 2) {
              $.porn_done = 0;
            }
          }
          collector1_goto_x = 999999999.0;
          Text.PrintNow("CAP1B10", 5000, 1); //You've capped the Collectors. More are on their way.
        }
      }
    }


    if ($.collector2_flag == 0) {
      if (Char.IsDead($.collector1)) {
        $.collector2_car = Car.Create(SANCHEZ, -830.2028, 756.1009, 9.8816);
        $.collector2_car.setHeading(264.7463);
        $.collector2_car.setOnlyDamagedByPlayer(true /* TRUE */);
        $.collector2_car.setChangeLane(false /* FALSE */);
        $.collector2_car.setForwardSpeed(10.0);
        $.collector2 = Char.CreateInsideCar($.collector2_car, 4 /* PEDTYPE_CIVMALE */, SPECIAL01);


        $.collector2.giveWeapon(WEAPONTYPE_M4, 9999);
        $.collector2.clearThreatSearch();
        $.collector2.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.collector2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.collector2.setHealth(250);
        $.collector2.setCeaseAttackTimer(1150);
        $.collector2.setHeedThreats(true /* TRUE */);
        $.collector2.setStayInSamePlace(true /* TRUE */);
        $.collector2.setRunning(true /* TRUE */);
        $.collector2_blip = Blip.AddForChar($.collector2);
        $.collector2_blip.changeColor(0 /* RED */);
        $.collector2_dude1 = Char.CreateAsPassenger($.collector2_car, 4 /* PEDTYPE_CIVMALE */, SPECIAL02, 0);


        $.collector2_dude1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 9999);
        $.collector2_dude1.clearThreatSearch();
        $.collector2_dude1.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.collector2_dude1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.collector2_dude1.setHealth(250);
        //SET_CHAR_CEASE_ATTACK_TIMER collector2_dude1 1000
        $.collector2_dude1.setHeedThreats(true /* TRUE */);
        $.collector2_dude1.setStayInSamePlace(true /* TRUE */);
        $.collector2_dude1.setRunning(true /* TRUE */);
        $.collector2_dude1.followChar($.collector2);
        await get_next_place();  // SCM GOSUB get_next_place
        collector2_goto_x = $.collector_goto_x;
        collector2_goto_y = $.collector_goto_y;
        collector2_goto_z = $.collector_goto_z;
        if (!(Car.IsDead($.collector2_car))) {
          $.collector2_car.gotoCoordinatesAccurate(collector2_goto_x, collector2_goto_y, collector2_goto_z);
          $.collector2_car.setCruiseSpeed(100.0);
          $.collector2_car.setDrivingStyle(2);
        }
        $.collector2_flag = 1;
      }
    }


    if (Char.IsDead($.collector1)) {
      if (!(Char.IsDead($.collector2))) {
        $.collector = $.collector2;
        $.collector_car = $.collector2_car;
        $.collector_counter = $.collector2_counter;
        $.collector_goto_x = collector2_goto_x;
        $.collector_goto_y = collector2_goto_y;
        $.collector_goto_z = collector2_goto_z;
        $.collector_in_car = $.collector2_in_car;
        $.collector_stuck_x = collector2_stuck_x;
        $.collector_stuck_y = collector2_stuck_y;
        $.collector_stuck_timer = $.collector2_stuck_timer;
        $.collector_car_goto_coords_timer = $.collector2_car_goto_coords_timer;
        $.collector_dude1 = $.collector2_dude1;
        $.collector_cash = $.collector2_cash;
        $.collector_in_car_timer = $.collector2_in_car_timer;
        await do_collectors_stuff();  // SCM GOSUB do_collectors_stuff
        $.collector2 = $.collector;
        $.collector2_car = $.collector_car;
        $.collector2_counter = $.collector_counter;
        collector2_goto_x = $.collector_goto_x;
        collector2_goto_y = $.collector_goto_y;
        collector2_goto_z = $.collector_goto_z;
        $.collector2_in_car = $.collector_in_car;
        collector2_stuck_x = $.collector_stuck_x;
        collector2_stuck_y = $.collector_stuck_y;
        $.collector2_stuck_timer = $.collector_stuck_timer;
        $.collector2_car_goto_coords_timer = $.collector_car_goto_coords_timer;
        $.collector2_dude1 = $.collector_dude1;
        $.collector2_cash = $.collector_cash;
        $.collector2_in_car_timer = $.collector_in_car_timer;
      }
      else {
        $.collector2_blip.remove();
        if (!(Char.IsDead($.collector2_dude1))) {
          if (Char.DoesExist($.collector2)) {
            const _res122 = World.GetDeadCharPickupCoords($.collector2);
$.x = _res122.x;
$.y = _res122.y;
$.z = _res122.z;
          }
          if ($.collector2_dude1.locateAnyMeans2D($.x, $.y, 30.0, 30.0, false)) {
            $.collector2 = $.collector2_dude1;
            $.collector2_dude1 = -1;
            $.collector2_cash = 0;
            $.collector2_blip = Blip.AddForChar($.collector2);
            $.collector2_blip.changeColor(0 /* RED */);
            //ELSE//PUT MORE GOONS HERE

          }
          else {
            $.collector2_dude1.markAsNoLongerNeeded();
            $.collector2_dude1 = -1;
          }
          //ELSE//PUT MORE GOONS HERE

        }
        else {
          if (!(collector2_goto_x == 999999999.0)) {
            if (collector2_goto_x == -852.5533) {
              if ($.icecream_done == 1) {
                $.icecream_done = 0;
              }
              if ($.icecream_cash_pickup_removed == 0 && $.icecream_done == 2) {
                $.icecream_done = 0;
              }
            }
            if (collector2_goto_x == -1016.2645) {
              if ($.taxifirm_done == 1) {
                $.taxifirm_done = 0;
              }
              if ($.taxifirm_cash_pickup_removed == 0 && $.taxifirm_done == 2) {
                $.taxifirm_done = 0;
              }
            }
            if (collector2_goto_x == -726.0752) {
              if ($.boatyard_done == 1) {
                $.boatyard_done = 0;
              }
              if ($.boatyard_cash_pickup_removed == 0 && $.boatyard_done == 2) {
                $.boatyard_done = 0;
              }
            }
            if (collector2_goto_x == -1025.1687) {
              if ($.showroom_done == 1) {
                $.showroom_done = 0;
              }
              if ($.showroom_cash_pickup_removed == 0 && $.showroom_done == 2) {
                $.showroom_done = 0;
              }
            }
            if (collector2_goto_x == 506.2871) {
              if ($.malibu_done == 1) {
                $.malibu_done = 0;
              }
              if ($.malibu_cash_pickup_removed == 0 && $.malibu_done == 2) {
                $.malibu_done = 0;
              }
            }
            if (collector2_goto_x == 17.6185) {
              if ($.porn_done == 1) {
                $.porn_done = 0;
              }
              if ($.porn_cash_pickup_removed == 0 && $.porn_done == 2) {
                $.porn_done = 0;
              }
            }
            collector2_goto_x = 999999999.0;
            Text.PrintNow("CAP1B10", 5000, 1); //You've capped the Collectors. More are on their way.
          }
        }
      }
    }


    if ($.collector3_flag == 0) {
      if (Char.IsDead($.collector1) && Char.IsDead($.collector2)) {
        $.collector3_car = Car.Create(SANCHEZ, -301.5698, 1245.7740, 9.8718);
        $.collector3_car.setHeading(181.6262);
        $.collector3_car.setOnlyDamagedByPlayer(true /* TRUE */);
        $.collector3_car.setChangeLane(false /* FALSE */);
        $.collector3_car.setForwardSpeed(10.0);
        $.collector3 = Char.CreateInsideCar($.collector3_car, 4 /* PEDTYPE_CIVMALE */, SPECIAL01);


        $.collector3.giveWeapon(WEAPONTYPE_M4, 9999);
        $.collector3.clearThreatSearch();
        $.collector3.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.collector3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.collector3.setHealth(250);
        $.collector3.setCeaseAttackTimer(1150);
        $.collector3.setHeedThreats(true /* TRUE */);
        $.collector3.setStayInSamePlace(true /* TRUE */);
        $.collector3.setRunning(true /* TRUE */);
        $.collector3_blip = Blip.AddForChar($.collector3);
        $.collector3_blip.changeColor(0 /* RED */);
        $.collector3_dude1 = Char.CreateAsPassenger($.collector3_car, 4 /* PEDTYPE_CIVMALE */, SPECIAL02, 0);


        $.collector3_dude1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 9999);
        $.collector3_dude1.clearThreatSearch();
        $.collector3_dude1.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.collector3_dude1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.collector3_dude1.setHealth(250);
        //SET_CHAR_CEASE_ATTACK_TIMER collector3_dude1 1000
        $.collector3_dude1.setHeedThreats(true /* TRUE */);
        $.collector3_dude1.setStayInSamePlace(true /* TRUE */);
        $.collector3_dude1.setRunning(true /* TRUE */);
        $.collector3_dude1.followChar($.collector3);
        await get_next_place();  // SCM GOSUB get_next_place
        collector3_goto_x = $.collector_goto_x;
        collector3_goto_y = $.collector_goto_y;
        collector3_goto_z = $.collector_goto_z;
        if (!(Car.IsDead($.collector3_car))) {
          $.collector3_car.gotoCoordinatesAccurate(collector3_goto_x, collector3_goto_y, collector3_goto_z);
          $.collector3_car.setCruiseSpeed(100.0);
          $.collector3_car.setDrivingStyle(2);
        }
        $.collector3_flag = 1;
      }
    }


    if (Char.IsDead($.collector1) && Char.IsDead($.collector2)) {
      if (!(Char.IsDead($.collector3))) {
        $.collector = $.collector3;
        $.collector_car = $.collector3_car;
        $.collector_counter = $.collector3_counter;
        $.collector_goto_x = collector3_goto_x;
        $.collector_goto_y = collector3_goto_y;
        $.collector_goto_z = collector3_goto_z;
        $.collector_in_car = $.collector3_in_car;
        $.collector_stuck_x = collector3_stuck_x;
        $.collector_stuck_y = collector3_stuck_y;
        $.collector_stuck_timer = $.collector3_stuck_timer;
        $.collector_car_goto_coords_timer = $.collector3_car_goto_coords_timer;
        $.collector_dude1 = $.collector3_dude1;
        $.collector_cash = $.collector3_cash;
        $.collector_in_car_timer = $.collector3_in_car_timer;
        await do_collectors_stuff();  // SCM GOSUB do_collectors_stuff
        $.collector3 = $.collector;
        $.collector3_car = $.collector_car;
        $.collector3_counter = $.collector_counter;
        collector3_goto_x = $.collector_goto_x;
        collector3_goto_y = $.collector_goto_y;
        collector3_goto_z = $.collector_goto_z;
        $.collector3_in_car = $.collector_in_car;
        collector3_stuck_x = $.collector_stuck_x;
        collector3_stuck_y = $.collector_stuck_y;
        $.collector3_stuck_timer = $.collector_stuck_timer;
        $.collector3_car_goto_coords_timer = $.collector_car_goto_coords_timer;
        $.collector3_dude1 = $.collector_dude1;
        $.collector3_cash = $.collector_cash;
        $.collector3_in_car_timer = $.collector_in_car_timer;
      }
      else {
        $.collector3_blip.remove();
        if (!(Char.IsDead($.collector3_dude1))) {
          if (Char.DoesExist($.collector3)) {
            const _res123 = World.GetDeadCharPickupCoords($.collector3);
$.x = _res123.x;
$.y = _res123.y;
$.z = _res123.z;
          }
          if ($.collector3_dude1.locateAnyMeans2D($.x, $.y, 30.0, 30.0, false)) {
            $.collector3 = $.collector3_dude1;
            $.collector3_dude1 = -1;
            $.collector3_cash = 0;
            $.collector3_blip = Blip.AddForChar($.collector3);
            $.collector3_blip.changeColor(0 /* RED */);
            //ELSE//PUT MORE GOONS HERE

          }
          else {
            $.collector3_dude1.markAsNoLongerNeeded();
            $.collector3_dude1 = -1;
          }
          //ELSE//PUT MORE GOONS HERE

        }
        else {
          // SCM GOTO → mission_finale1_passed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_finale1_passed"); // fallback: would break linear control flow
        }
      }
    }


    if ($.showroom_done == 2 && $.boatyard_done == 2 && $.icecream_done == 2 && $.taxifirm_done == 2) {
      $.first_batch_lost = 1;
    }
    else {
      $.first_batch_lost = 0;
    }
    if ($.malibu_done == 2 && $.porn_done == 2 && $.collector_counter == 0) {
      $.second_batch_lost = 1;
    }
    else {
      $.second_batch_lost = 0;
    }
    if ($.first_batch_lost == 1 && $.second_batch_lost == 1) {
      Text.PrintNow("CAP1_B8", 5000, 1); //~r~The collector has taxed all of your businesses.
      $.print_timer = $.game_timer + 5000;
      // SCM GOTO → mission_finale1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_finale1_failed"); // fallback: would break linear control flow
    }


    if ($.audio_1_flag > 0) {
      if ($.audio_1_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("CAP1_2");
          $.audio_1_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → cap1_mission_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO cap1_mission_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_1_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
          }
          $.audio_1_flag = 3;
        }
      }
      if ($.audio_1_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "CAP1_2" as any);
          $.audio_1_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_1_timeout) {
            $.audio_1_flag = 0;
          }
        }
      }
    }


    if ($.audio_2_flag > 0) {
      if ($.audio_2_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("CAP1_3");
          $.audio_2_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → cap1_mission_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO cap1_mission_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_2_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
          }
          $.audio_2_flag = 3;
        }
      }
      if ($.audio_2_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "CAP1_3" as any);
          $.audio_2_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_2_timeout) {
            $.audio_2_flag = 0;
          }
        }
      }
    }


    if ($.audio_3_flag > 0) {
      if ($.audio_3_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("CAP1_4");
          $.audio_3_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → cap1_mission_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO cap1_mission_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_3_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
          }
          $.audio_3_flag = 3;
        }
      }
      if ($.audio_3_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "CAP1_4" as any);
          $.audio_3_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_3_timeout) {
            $.audio_3_flag = 0;
          }
        }
      }
    }


    if ($.audio_4_flag > 0) {
      if ($.audio_4_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("CAP1_5");
          $.audio_4_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → cap1_mission_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO cap1_mission_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_4_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
          }
          $.audio_4_flag = 3;
        }
      }
      if ($.audio_4_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "CAP1_5" as any);
          $.audio_4_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_4_timeout) {
            $.audio_4_flag = 0;
          }
        }
      }
    }


    if ($.audio_5_flag > 0) {
      if ($.audio_5_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("CAP1_6");
          $.audio_5_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → cap1_mission_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO cap1_mission_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_5_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
          }
          $.audio_5_flag = 3;
        }
      }
      if ($.audio_5_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "CAP1_6" as any); //Vice City is MINE now, NOT his.
          $.audio_5_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_5_timeout) {
            $.audio_5_flag = 0;
          }
        }
      }
      if ($.audio_5_flag == 0) {
        $.audio_5_timeout = $.game_timer + 6000;
        $.audio_5_flag = 1;
      }
    }


    if ($.audio_6_flag > 0) {
      if ($.audio_6_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("CAP1_7");
          $.audio_6_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → cap1_mission_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO cap1_mission_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_6_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
          }
          $.audio_6_flag = 3;
        }
      }
      if ($.audio_6_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "CAP1_7" as any);
          $.audio_6_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_6_timeout) {
            $.audio_6_flag = 0;
          }
        }
      }
    }


    if ($.audio_7_flag > 0) {
      if ($.audio_7_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("CAP1_8");
          $.audio_7_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → cap1_mission_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO cap1_mission_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_7_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
          }
          $.audio_7_flag = 3;
        }
      }
      if ($.audio_7_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "CAP1_8" as any);
          $.audio_7_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_7_timeout) {
            $.audio_7_flag = 0;
          }
        }
      }
    }


    if ($.audio_8_flag > 0) {
      if ($.audio_8_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("CAP1_9");
          $.audio_8_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → cap1_mission_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO cap1_mission_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_8_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
          }
          $.audio_8_flag = 3;
        }
      }
      if ($.audio_8_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "CAP1_9" as any);
          $.audio_8_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_8_timeout) {
            $.audio_8_flag = 0;
          }
        }
      }
    }


    if ($.audio_9_flag > 0) {
      if ($.audio_9_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("CAP1_10");
          $.audio_9_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → cap1_mission_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO cap1_mission_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_9_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
          }
          $.audio_9_flag = 3;
        }
      }
      if ($.audio_9_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "CAP1_10" as any);
          $.audio_9_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_9_timeout) {
            $.audio_9_flag = 0;
          }
        }
      }
    }


    if ($.audio_10_flag > 0) {
      if ($.audio_10_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("CAP1_11");
          $.audio_10_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → cap1_mission_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO cap1_mission_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_10_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
          }
          $.audio_10_flag = 3;
        }
      }
      if ($.audio_10_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "CAP1_11" as any);
          $.audio_10_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_10_timeout) {
            $.audio_10_flag = 0;
          }
        }
      }
    }


    if ($.audio_11_flag > 0) {
      if ($.audio_11_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("CAP1_12");
          $.audio_11_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → cap1_mission_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO cap1_mission_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_11_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.print_timer < $.game_timer) {
          }
          $.audio_11_flag = 3;
        }
      }
      if ($.audio_11_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "CAP1_12" as any);
          $.audio_11_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_11_timeout) {
            $.audio_11_flag = 0;
          }
        }
      }
    }


  }
}




// Mission Finale 1 failed


async function onFailed() {
  Text.PrintBig("M_FAIL", 5000, 1);
}




// mission Finale 1 passed


async function mission_finale1_passed() {


  $.flag_finale_mission1_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 30000, 5000, 1);
  $.player1.addScore(30000);
  $.player1.clearWantedLevel();
  Audio.PlayMissionPassedTune(1);
  Stat.RegisterMissionPassed("CAP_1");
  Stat.PlayerMadeProgress(1);
  $.counter_contact_blip.remove();
  $.counter_contact_blip = Blip.AddShortRangeSpriteForCoord($.counterX, $.counterY, $.counterZ, $.the_counter_blip);
  $.printworks_cash_pickup.remove();
  $.printworks_cash_pickup = Pickup.CreateProtection($.printbuyX, $.printbuyY, $.printbuyZ, $.printworks_revenue, $.printworks_revenue);
  //START_NEW_SCRIPT finale_mission2_loop
}




// mission cleanup


async function cleanup() {


  if ($.icecream_cash_pickup_removed == 1) {
    $.icecream_cash_pickup.remove();
    $.icecream_cash_pickup = Pickup.CreateProtection($.icebuyX, $.icebuyY, $.icebuyZ, $.icecream_revenue, $.icecream_revenue);
  }


  if ($.taxifirm_cash_pickup_removed == 1) {
    $.taxifirm_cash_pickup.remove();
    $.taxifirm_cash_pickup = Pickup.CreateProtection($.taxicashX, $.taxicashY, $.taxicashZ, $.taxifirm_revenue, $.taxifirm_revenue);
  }


  if ($.boatyard_cash_pickup_removed == 1) {
    $.boatyard_cash_pickup.remove();
    $.boatyard_cash_pickup = Pickup.CreateProtection($.boatcashX, $.boatcashY, $.boatcashZ, $.boatyard_revenue, $.boatyard_revenue);
  }


  if ($.malibu_cash_pickup_removed == 1) {
    $.malibu_cash_pickup.remove();
    $.malibu_cash_pickup = Pickup.CreateProtection($.bankbuyX, $.bankbuyY, $.bankbuyZ, $.malibu_revenue, $.malibu_revenue);
  }


  if ($.showroom_cash_pickup_removed == 1) {
    $.showroom_cash_pickup.remove();
    $.showroom_cash_pickup = Pickup.CreateProtection($.carbuyX, $.carbuyY, $.carbuyZ, $.showroom_revenue, $.showroom_revenue);
  }


  if ($.porn_cash_pickup_removed == 1) {
    $.porn_cash_pickup.remove();
    $.porn_cash_pickup = Pickup.CreateProtection($.porncashX, $.porncashY, $.porncashZ, $.porn_revenue, $.porn_revenue);
  }


  $.collector1.removeElegantly();
  $.collector1_dude1.removeElegantly();
  $.collector2.removeElegantly();
  $.collector2_dude1.removeElegantly();
  $.collector3.removeElegantly();
  $.collector3_dude1.removeElegantly();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(M4);
  Streaming.MarkModelAsNoLongerNeeded(CHROMEGUN);
  Streaming.MarkModelAsNoLongerNeeded(SANCHEZ);


  $.collector1_blip.remove();
  $.collector2_blip.remove();
  $.collector3_blip.remove();


  $.icecream_blip.remove();
  $.taxifirm_blip.remove();
  $.boatyard_blip.remove();
  $.showroom_blip.remove();
  $.malibu_blip.remove();
  $.porn_blip.remove();


  Camera.SetGenerateCarsAround(false /* FALSE */);
  StuckCarCheck.Remove($.collector1_car);


  $.timer_mobile_start = Clock.GetGameTimer();


  ONMISSION = 0;


  Mission.Finish();
}




////////////////////////////////////////////////////////////////////////////

async function do_collectors_stuff() {
  ////////////////////////////////////////////////////////////////////////////

  if ($.collector.isSittingInAnyCar()) {
    $.collector_car = $.collector.storeCarIsInNoSave();
    $.collector_car.setOnlyDamagedByPlayer(true /* TRUE */);
    $.collector_car.setChangeLane(false /* FALSE */);
    if ($.showroom_done == 2 && $.boatyard_done == 2 && $.icecream_done == 2 && $.taxifirm_done == 2) {
      $.first_batch_done = 1;
    }
    else {
      $.first_batch_done = 0;
    }
    if ($.malibu_done == 2 && $.porn_done == 2 && $.collector_counter == 0) {
      $.second_batch_done = 1;
    }
    else {
      $.second_batch_done = 0;
    }
    if (!(Char.IsDead($.collector_dude1))) {
      if (!($.collector.locateAnyMeansChar2D($.collector_dude1, 20.0, 20.0, false))) {
        if ($.collector_dude1.isInCharsGroup($.collector)) {
          $.collector_dude1.leaveGroup();
          $.collector_dude1.setObjKillPlayerAnyMeans($.player1);
          $.collector_dude1.setCeaseAttackTimer(0);
        }
      }
    }
    else {
      $.collector_dude1.markAsNoLongerNeeded();
    }
    if ($.collector_counter == 100) {
      if ($.first_batch_done == 1 && $.second_batch_done == 1) {
        $.collector_car.wanderRandomly();
      }
      else {
        $.collector_car.gotoCoordinatesAccurate($.collector_goto_x, $.collector_goto_y, $.collector_goto_z);
        if ($.collector_goto_x == -852.5533) {
          Text.PrintNow("CAP1_D3", 5000, 1); //~g~The Mafia is leaving the Ice Cream Factory!
          $.print_timer = $.game_timer + 5000;
        }
        if ($.collector_goto_x == -1016.2645) {
          Text.PrintNow("CAP1_D5", 5000, 1); //~g~The Mafia is leaving the Taxi Firm!
          $.print_timer = $.game_timer + 5000;
        }
        if ($.collector_goto_x == -726.0752) {
          Text.PrintNow("CAP1_D2", 5000, 1); //~g~The Mafia is leaving the Boatyard!
          $.print_timer = $.game_timer + 5000;
        }
        if ($.collector_goto_x == -1025.1687) {
          Text.PrintNow("CAP1_D4", 5000, 1); //~g~The Mafia is leaving the Car Showroom!
          $.print_timer = $.game_timer + 5000;
        }
        if ($.collector_goto_x == 506.2871) {
          Text.PrintNow("CAP1_D9", 5000, 1); //~g~The mafia is leaving The Malibu!
          $.print_timer = $.game_timer + 5000;
        }
        if ($.collector_goto_x == 17.6185) {
          Text.PrintNow("CAP1_D0", 5000, 1); //~g~The mafia is leaving the film studio!
          $.print_timer = $.game_timer + 5000;
        }
        await get_next_place();  // SCM GOSUB get_next_place
        $.collector_car.setMission(8 /* MISSION_GOTOCOORDS */);
        $.collector_car.gotoCoordinatesAccurate($.collector_goto_x, $.collector_goto_y, $.collector_goto_z);
      }
      //IF NOT range_int = 5
      //ELSE
      //	CAR_WANDER_RANDOMLY	collector_car
      //ENDIF
      $.collector_car.setCruiseSpeed(100.0);
      $.collector_car.setDrivingStyle(2);
      $.collector_counter = 0;
    }
    if ($.collector_in_car == 1) {
      if ($.first_batch_done == 1 && $.second_batch_done == 1) {
        $.collector_car.wanderRandomly();
      }
      else {
        $.collector_car.gotoCoordinatesAccurate($.collector_goto_x, $.collector_goto_y, $.collector_goto_z);
      }
      $.collector_car.setCruiseSpeed(100.0);
      $.collector_car.setDrivingStyle(2);
    }
    $.collector_in_car = 0;
    if ($.collector.locateAnyMeans3D($.collector_goto_x, $.collector_goto_y, $.collector_goto_z, 35.0, 35.0, 35.0, false)) {
      $.collector_car.setCruiseSpeed(8.0);
      if ($.collector_counter == 0) {
        if ($.collector.locateAnyMeans3D($.collector_goto_x, $.collector_goto_y, $.collector_goto_z, 6.0, 6.0, 6.0, false)) {
          $.collector_car.setTempAction(1 /* TEMPACT_WAIT */, 400);
        }
        if ($.collector.locateStoppedAnyMeans3D($.collector_goto_x, $.collector_goto_y, $.collector_goto_z, 6.0, 6.0, 6.0, false)) {
          $.collector_car.setTempAction(1 /* TEMPACT_WAIT */, 200);
          if ($.icecream_done == 1) {
            if ($.collector_goto_x == -852.5533) {
              Text.PrintNow("CAP1_C3", 5000, 1); //~g~The Mafia has arrived at the Ice Cream Factory!
              $.print_timer = $.game_timer + 5000;
              $.collector_counter = 1;
              $.collector.setObjLeaveAnyCar();
              $.icecream_done = 2;
            }
          }
          if ($.taxifirm_done == 1) {
            if ($.collector_goto_x == -1016.2645) {
              Text.PrintNow("CAP1_C5", 5000, 1); //~g~The Mafia has arrived at the Taxi Firm!
              $.print_timer = $.game_timer + 5000;
              $.collector_counter = 2;
              $.collector.setObjLeaveAnyCar();
              $.taxifirm_done = 2;
            }
          }
          if ($.boatyard_done == 1) {
            if ($.collector_goto_x == -726.0752) {
              Text.PrintNow("CAP1_C2", 5000, 1); //~g~The Mafia has arrived at the Boatyard!
              $.print_timer = $.game_timer + 5000;
              $.collector_counter = 3;
              $.collector.setObjLeaveAnyCar();
              $.boatyard_done = 2;
            }
          }
          if ($.showroom_done == 1) {
            if ($.collector_goto_x == -1025.1687) {
              Text.PrintNow("CAP1_C4", 5000, 1); //~g~The Mafia has arrived at the Car Showroom!
              $.print_timer = $.game_timer + 5000;
              $.collector_counter = 4;
              $.collector.setObjLeaveAnyCar();
              $.showroom_done = 2;
            }
          }
          if ($.malibu_done == 1) {
            if ($.collector_goto_x == 506.2871) {
              Text.PrintNow("CAP1_C9", 5000, 1); //~g~The mafia has arrived at The Malibu!
              $.print_timer = $.game_timer + 5000;
              $.collector_counter = 5;
              $.collector.setObjLeaveAnyCar();
              $.malibu_done = 2;
            }
          }
          if ($.porn_done == 1) {
            if ($.collector_goto_x == 17.6185) {
              Text.PrintNow("CAP1_C0", 5000, 1); //~g~The mafia has arrived at the film studio!
              $.print_timer = $.game_timer + 5000;
              $.collector_counter = 6;
              $.collector.setObjLeaveAnyCar();
              $.porn_done = 2;
            }
          }
          //				ELSE
          //					CAR_GOTO_COORDINATES_ACCURATE collector_car collector_goto_x collector_goto_y collector_goto_z

        }
      }
    }
    else {
      if ($.collector_counter == 0) {
        if ($.collector.locateAnyMeans2D($.collector_stuck_x, $.collector_stuck_y, 4.0, 4.0, false)) {
          if ($.collector_stuck_timer < $.game_timer) {
            if (!($.collector_car.isOnScreen())) {
              const _res124 = $.collector_car.getCoordinates();
$.car_x = _res124.x;
$.car_y = _res124.y;
$.car_z = _res124.z;
              const _res125 = Path.GetClosestCarNode($.car_x, $.car_y, $.car_z);
$.car_x = _res125.nodeX;
$.car_y = _res125.nodeY;
$.car_z = _res125.nodeZ;
              if (!(World.IsPointObscuredByAMissionEntity($.car_x, $.car_y, $.car_z, 4.0, 4.0, 3.0))) {
                if (!(Camera.IsPointOnScreen($.car_x, $.car_y, $.car_z, 4.0))) {
                  $.collector_car.setCoordinates($.car_x, $.car_y, $.car_z);
                  $.collector_car.turnToFaceCoord($.collector_goto_x, $.collector_goto_y);
                  $.collector_car.setCruiseSpeed(100.0);
                  $.collector_car.setDrivingStyle(2);
                  $.collector_stuck_timer = $.game_timer + 4000;
                  if ($.first_batch_done == 1 && $.second_batch_done == 1) {
                    $.collector_car.wanderRandomly();
                  }
                  else {
                    $.collector_car.gotoCoordinatesAccurate($.collector_goto_x, $.collector_goto_y, $.collector_goto_z);
                  }
                }
              }
            }
          }
        }
        else {
          const _res126 = $.collector_car.getCoordinates();
$.collector_stuck_x = _res126.x;
$.collector_stuck_y = _res126.y;
$.z = _res126.z;
          $.collector_stuck_timer = $.game_timer + 4000;
        }
        if ($.game_timer > $.collector_car_goto_coords_timer) {
          $.collector_car.setCruiseSpeed(100.0);
          $.collector_car.setDrivingStyle(2);
          if ($.first_batch_done == 1 && $.second_batch_done == 1) {
            $.collector_car.wanderRandomly();
          }
          else {
            $.collector_car.gotoCoordinatesAccurate($.collector_goto_x, $.collector_goto_y, $.collector_goto_z);
          }
          $.collector_car_goto_coords_timer = $.game_timer + 2000;
        }
      }
    }
  }
  else {
    if ($.no_obj_timer < $.game_timer) {
      $.collector.setObjNoObj();
      $.no_obj_timer = $.game_timer + 1500;
    }
    if ($.collector_counter == 0 || $.collector_counter == 100) {
      if ($.collector_in_car == 0) {
        if ($.collector.locateAnyMeans3D($.collector_goto_x, $.collector_goto_y, $.collector_goto_z, 6.0, 6.0, 6.0, false) && $.collector_counter == 0) {
          //SET_CAR_TEMP_ACTION	collector_car TEMPACT_WAIT 200
          if ($.icecream_done == 1) {
            if ($.collector_goto_x == -852.5533) {
              Text.PrintNow("CAP1_C3", 5000, 1); //~g~The Mafia has arrived at the Ice Cream Factory!
              $.print_timer = $.game_timer + 5000;
              $.collector_counter = 1;
              //SET_CHAR_OBJ_LEAVE_ANY_CAR collector
              $.icecream_done = 2;
            }
          }
          if ($.taxifirm_done == 1) {
            if ($.collector_goto_x == -1016.2645) {
              Text.PrintNow("CAP1_C5", 5000, 1); //~g~The Mafia has arrived at the Taxi Firm!
              $.print_timer = $.game_timer + 5000;
              $.collector_counter = 2;
              //SET_CHAR_OBJ_LEAVE_ANY_CAR collector
              $.taxifirm_done = 2;
            }
          }
          if ($.boatyard_done == 1) {
            if ($.collector_goto_x == -726.0752) {
              Text.PrintNow("CAP1_C2", 5000, 1); //~g~The Mafia has arrived at the Boatyard!
              $.print_timer = $.game_timer + 5000;
              $.collector_counter = 3;
              //SET_CHAR_OBJ_LEAVE_ANY_CAR collector
              $.boatyard_done = 2;
            }
          }
          if ($.showroom_done == 1) {
            if ($.collector_goto_x == -1025.1687) {
              Text.PrintNow("CAP1_C4", 5000, 1); //~g~The Mafia has arrived at the Car Showroom!
              $.print_timer = $.game_timer + 5000;
              $.collector_counter = 4;
              //SET_CHAR_OBJ_LEAVE_ANY_CAR collector
              $.showroom_done = 2;
            }
          }
          if ($.malibu_done == 1) {
            if ($.collector_goto_x == 506.2871) {
              Text.PrintNow("CAP1_C9", 5000, 1); //~g~The mafia has arrived at The Malibu!
              $.print_timer = $.game_timer + 5000;
              $.collector_counter = 5;
              //SET_CHAR_OBJ_LEAVE_ANY_CAR collector
              $.malibu_done = 2;
            }
          }
          if ($.porn_done == 1) {
            if ($.collector_goto_x == 17.6185) {
              Text.PrintNow("CAP1_C0", 5000, 1); //~g~The mafia has arrived at the film studio!
              $.print_timer = $.game_timer + 5000;
              $.collector_counter = 6;
              //SET_CHAR_OBJ_LEAVE_ANY_CAR collector
              $.porn_done = 2;
            }
          }
        }
        else {
          if (!($.player1.locateAnyMeansChar2D($.collector, 30.0, 30.0, false))) {
            if (!(Car.IsDead($.collector_car))) {
              if (!($.collector_car.isInWater())) {
                if ($.collector.locateOnFootCar2D($.collector_car, 30.0, 30.0, false)) {
                  $.collector.setObjEnterCarAsDriver($.collector_car);
                  $.collector_in_car_timer = $.game_timer + 8000;
                  $.collector_in_car = 1;
                }
                else {
                  $.gosub_ped = $.collector;
                  await collector_steal_a_car();  // SCM GOSUB collector_steal_a_car
                }
              }
              else {
                $.gosub_ped = $.collector;
                await collector_steal_a_car();  // SCM GOSUB collector_steal_a_car
              }
            }
            else {
              $.gosub_ped = $.collector;
              await collector_steal_a_car();  // SCM GOSUB collector_steal_a_car
            }
          }
          else {
            $.collector.setObjKillPlayerAnyMeans($.player1);
          }
        }
      }
      if ($.collector_in_car == 1) {
        if (!($.player1.locateAnyMeansChar2D($.collector, 30.0, 30.0, false))) {
          if (!(Car.IsDead($.collector_car))) {
            if (!($.collector_car.isInWater())) {
              if ($.collector.locateOnFootCar2D($.collector_car, 30.0, 30.0, false)) {
                $.collector.setObjEnterCarAsDriver($.collector_car);
                if ($.game_timer > $.collector_in_car_timer) {
                  if (!($.collector_car.isOnScreen())) {
                    if (!($.collector.isOnScreen())) {
                      $.collector.setObjNoObj();
                      const _res127 = $.collector_car.getCoordinates();
$.x = _res127.x;
$.y = _res127.y;
$.z = _res127.z;
                      $.heading = $.collector_car.getHeading();
                      $.collector_car.delete();
                      $.collector_car = Car.Create(SANCHEZ, $.x, $.y, $.z);
                      $.collector_car.setHeading($.heading);
                      $.collector_car.setOnlyDamagedByPlayer(true /* TRUE */);
                      $.collector_car.setChangeLane(false /* FALSE */);
                      $.collector.warpIntoCar($.collector_car);
                      if (!(Char.IsDead($.collector_dude1))) {
                        if ($.collector_car.isPassengerSeatFree(0)) {
                          $.collector_dude1 = Char.CreateAsPassenger($.collector_car, 4 /* PEDTYPE_CIVMALE */, SPECIAL02, 0);


                          $.collector_dude1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 9999);
                          $.collector_dude1.clearThreatSearch();
                          $.collector_dude1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                          $.collector_dude1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                          $.collector_dude1.setHealth(250);
                          //SET_CHAR_CEASE_ATTACK_TIMER collector_dude1 1000
                          $.collector_dude1.setHeedThreats(true /* TRUE */);
                          $.collector_dude1.setStayInSamePlace(true /* TRUE */);
                          $.collector_dude1.setRunning(true /* TRUE */);
                          $.collector_dude1.followChar($.collector);
                          //WARP_CHAR_INTO_CAR_AS_PASSENGER	collector_dude1	collector_car 0

                        }
                      }
                    }
                  }
                }
              }
              else {
                $.gosub_ped = $.collector;
                await collector_steal_a_car();  // SCM GOSUB collector_steal_a_car
              }
            }
            else {
              $.gosub_ped = $.collector;
              await collector_steal_a_car();  // SCM GOSUB collector_steal_a_car
            }
          }
          else {
            $.gosub_ped = $.collector;
            await collector_steal_a_car();  // SCM GOSUB collector_steal_a_car
          }
        }
        else {
          $.collector.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }
    else {
      if (!(Car.IsDead($.collector_car))) {
        $.collector_car.setTempAction(1 /* TEMPACT_WAIT */, 17);
      }

      //ICECREAM
      if ($.collector_counter == 1) {
        $.collector.setObjRunToCoord($.icebuyX, $.icebuyY);
        $.collector.setUsePednodeSeek(false /* FALSE */);
        $.collector_counter = 30;
      }
      if ($.collector_counter == 30) {
        if ($.collector.isStuck()) {
          if (!($.player1.locateAnyMeansChar2D($.collector, 120.0, 120.0, false))) {
            $.collector.setCoordinates($.icebuyX, $.icebuyY, 10.5);
          }
        }
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord($.icebuyX, $.icebuyY);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D($.icebuyX, $.icebuyY, 1.0, 1.0, false)) {
          Text.PrintNow("CAP1_B3", 5000, 1); //~g~The mafia has taxed the icecream factory!
          $.print_timer = $.game_timer + 5000;
          $.icecream_blip.remove();
          $.collector_cash += $.icecream_revenue;
          $.collector.setMoney($.collector_cash);
          $.icecream_cash_pickup_removed = 1;
          $.icecream_cash_pickup.remove();
          $.collector_in_car = 0;
          $.collector_counter = 100;
        }
      }

      //TAXIFIRM
      if ($.collector_counter == 2) {
        $.collector.setObjRunToCoord(-1009.2858, 196.7185);
        $.collector.setUsePednodeSeek(false /* FALSE */);
        $.timer = $.game_timer + 5000;
        $.collector_counter = 7;
      }
      if ($.collector_counter == 7) {
        if ($.collector.isStuck()) {
          if (!($.player1.locateAnyMeansChar2D($.collector, 120.0, 120.0, false))) {
            $.collector.setCoordinates(-1009.2858, 196.7185, 10.5);
          }
        }
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(-1009.2858, 196.7185);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(-1009.2858, 196.7185, 1.0, 1.0, false)) {
          $.collector.setObjRunToCoord($.taxicashX, $.taxicashY);
          $.collector.setUsePednodeSeek(false /* FALSE */);
          $.collector_counter = 8;
        }
      }
      if ($.collector_counter == 8) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord($.taxicashX, $.taxicashY);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D($.taxicashX, $.taxicashY, 1.0, 1.0, false)) {
          Text.PrintNow("CAP1_B5", 5000, 1); //~g~The mafia has taxed the taxi firm!
          $.print_timer = $.game_timer + 5000;
          $.taxifirm_blip.remove();
          $.collector_cash += $.taxifirm_revenue;
          $.collector.setMoney($.collector_cash);
          $.taxifirm_cash_pickup_removed = 1;
          $.taxifirm_cash_pickup.remove();
          $.collector.setObjRunToCoord(-1009.2858, 196.7185);
          $.collector_counter = 9;
        }
      }
      if ($.collector_counter == 9) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(-1009.2858, 196.7185);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(-1009.2858, 196.7185, 1.0, 1.0, false)) {
          $.collector_in_car = 0;
          $.collector_counter = 100;
        }
      }

      //BOATYARD
      if ($.collector_counter == 3) {
        $.collector.setObjRunToCoord(-725.3655, -1501.6598);
        $.collector.setUsePednodeSeek(false /* FALSE */);
        $.collector_counter = 10;
      }
      if ($.collector_counter == 10) {
        if ($.collector.isStuck()) {
          if (!($.player1.locateAnyMeansChar2D($.collector, 120.0, 120.0, false))) {
            $.collector.setCoordinates(-725.3655, -1501.6598, 10.8);
          }
        }
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(-725.3655, -1501.6598);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(-725.3655, -1501.6598, 1.0, 1.0, false)) {
          $.collector.setObjRunToCoord(-681.0613, -1490.4276);
          $.collector.setUsePednodeSeek(false /* FALSE */);
          $.collector_counter = 11;
        }
      }
      if ($.collector_counter == 11) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(-681.0613, -1490.4276);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(-681.0613, -1490.4276, 1.0, 1.0, false)) {
          $.collector.setObjRunToCoord(-636.2616, -1500.1516);
          $.collector.setUsePednodeSeek(false /* FALSE */);
          $.collector_counter = 12;
        }
      }
      if ($.collector_counter == 12) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(-636.2616, -1500.1516);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(-636.2616, -1500.1516, 1.0, 1.0, false)) {
          $.collector.setObjRunToCoord(-642.8112, -1496.4293);
          $.collector.setUsePednodeSeek(false /* FALSE */);
          $.collector_counter = 13;
        }
      }
      if ($.collector_counter == 13) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(-642.8112, -1496.4293);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(-642.8112, -1496.4293, 1.0, 1.0, false)) {
          $.collector.setObjRunToCoord($.boatcashX, $.boatcashY);
          $.collector.setUsePednodeSeek(false /* FALSE */);
          $.collector_counter = 14;
        }
      }
      if ($.collector_counter == 14) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord($.boatcashX, $.boatcashY);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D($.boatcashX, $.boatcashY, 1.0, 1.0, false)) {
          $.collector.setObjRunToCoord(-642.8112, -1496.4293);
          Text.PrintNow("CAP1_B2", 5000, 1); //~g~The mafia has taxed the boat yard!
          $.print_timer = $.game_timer + 5000;
          $.boatyard_cash_pickup.remove();
          $.boatyard_cash_pickup_removed = 1;
          $.collector_cash += $.boatyard_revenue;
          $.collector.setMoney($.collector_cash);
          $.boatyard_blip.remove();
          $.collector_counter = 15;
        }
      }
      if ($.collector_counter == 15) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(-642.8112, -1496.4293);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(-642.8112, -1496.4293, 1.0, 1.0, false)) {
          $.collector.setObjRunToCoord(-636.2616, -1500.1516);
          $.collector.setUsePednodeSeek(false /* FALSE */);
          $.collector_counter = 16;
        }
      }
      if ($.collector_counter == 16) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(-636.2616, -1500.1516);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(-636.2616, -1500.1516, 1.0, 1.0, false)) {
          $.collector.setObjRunToCoord(-681.0613, -1490.4276);
          $.collector.setUsePednodeSeek(false /* FALSE */);
          $.collector_counter = 17;
        }
      }
      if ($.collector_counter == 17) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(-681.0613, -1490.4276);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(-681.0613, -1490.4276, 1.0, 1.0, false)) {
          $.collector.setObjRunToCoord(-725.3655, -1501.6598);
          $.collector.setUsePednodeSeek(false /* FALSE */);
          $.collector_counter = 18;
        }
      }
      if ($.collector_counter == 18) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(-725.3655, -1501.6598);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(-725.3655, -1501.6598, 1.0, 1.0, false)) {
          $.collector_in_car = 0;
          $.collector_counter = 100;
        }
      }

      //SHOWROOM
      if ($.collector_counter == 4) {
        $.collector.setObjRunToCoord(-1023.7896, -901.9847);
        $.collector.setUsePednodeSeek(false /* FALSE */);
        $.collector_counter = 40;
      }
      if ($.collector_counter == 40) {
        if ($.collector.isStuck()) {
          if (!($.player1.locateAnyMeansChar2D($.collector, 120.0, 120.0, false))) {
            $.collector.setCoordinates(-1023.7896, -901.9847, 13.8);
          }
        }
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(-1023.7896, -901.9847);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(-1023.7896, -901.9847, 1.0, 1.0, false)) {
          $.collector.setObjRunToCoord($.carbuyX, $.carbuyY);
          $.collector.setUsePednodeSeek(false /* FALSE */);
          $.collector_counter = 41;
        }
      }
      //-1023.7896 -901.9847
      if ($.collector_counter == 41) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord($.carbuyX, $.carbuyY);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D($.carbuyX, $.carbuyY, 1.0, 1.0, false)) {
          $.collector.setObjRunToCoord(-1023.7896, -901.9847);
          Text.PrintNow("CAP1_B4", 5000, 1); //~g~The mafia has taxed the car showroom!
          $.print_timer = $.game_timer + 5000;
          $.showroom_cash_pickup.remove();
          $.showroom_cash_pickup_removed = 1;
          $.collector_cash += $.showroom_revenue;
          $.collector.setMoney($.collector_cash);
          $.showroom_blip.remove();
          $.collector_in_car = 0;
          $.collector_counter = 42;
        }
      }
      if ($.collector_counter == 42) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(-1023.7896, -901.9847);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(-1023.7896, -901.9847, 1.0, 1.0, false)) {
          $.collector_in_car = 0;
          $.collector_counter = 100;
        }
      }

      //MALIBU
      if ($.collector_counter == 5) {
        $.collector.setObjRunToCoord(501.5787, -81.7690);
        $.collector.setUsePednodeSeek(false /* FALSE */);
        $.timer = $.game_timer + 5000;
        $.collector_counter = 20;
      }
      if ($.collector_counter == 20) {
        if ($.collector.isStuck()) {
          if (!($.player1.locateAnyMeansChar2D($.collector, 120.0, 120.0, false))) {
            $.collector.setCoordinates(501.5787, -81.7690, 9.5);
          }
        }
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(501.5787, -81.7690);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(501.5787, -81.7690, 1.0, 1.0, false)) {
          $.collector.setObjRunToCoord(491.7617, -78.5777);
          $.collector.setUsePednodeSeek(false /* FALSE */);
          $.collector_counter = 21;
        }
      }
      if ($.collector_counter == 21) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(491.7617, -78.5777);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(491.7617, -78.5777, 1.0, 1.0, false)) {
          $.collector.setObjRunToCoord($.bankbuyX, $.bankbuyY);
          $.collector.setUsePednodeSeek(false /* FALSE */);
          $.collector_counter = 23;
        }
      }
      if ($.collector_counter == 23) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord($.bankbuyX, $.bankbuyY);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D($.bankbuyX, $.bankbuyY, 1.0, 1.0, false)) {
          Text.PrintNow("CAP1_B9", 5000, 1); //~g~The mafia has taxed The Malibu!
          $.print_timer = $.game_timer + 5000;
          $.malibu_blip.remove();
          $.malibu_cash_pickup.remove();
          $.collector_cash += $.malibu_revenue;
          $.collector.setMoney($.collector_cash);
          $.malibu_cash_pickup_removed = 1;
          $.collector.setObjRunToCoord(491.7617, -78.5777);
          $.collector.setUsePednodeSeek(false /* FALSE */);
          $.collector_counter = 25;
        }
      }
      if ($.collector_counter == 25) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(491.7617, -78.5777);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(491.7617, -78.5777, 1.0, 1.0, false)) {
          $.collector.setObjRunToCoord(501.5787, -81.7690);
          $.collector.setUsePednodeSeek(false /* FALSE */);
          $.collector_counter = 26;
        }
      }
      if ($.collector_counter == 26) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(501.5787, -81.7690);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(501.5787, -81.7690, 1.0, 1.0, false)) {
          $.collector_in_car = 0;
          $.collector_counter = 100;
        }
      }

      //PORN
      if ($.collector_counter == 6) {
        $.collector.setObjRunToCoord(12.2850, 963.0108);
        $.collector.setUsePednodeSeek(false /* FALSE */);
        $.timer = $.game_timer + 5000;
        $.collector_counter = 27;
      }
      if ($.collector_counter == 27) {
        if ($.collector.isStuck()) {
          if (!($.player1.locateAnyMeansChar2D($.collector, 120.0, 120.0, false))) {
            $.collector.setCoordinates(12.2850, 963.0108, 10.5);
          }
        }
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(12.2850, 963.0108);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(12.2850, 963.0108, 1.0, 1.0, false)) {
          $.collector.setObjRunToCoord($.porncashX, $.porncashY);
          $.collector.setUsePednodeSeek(false /* FALSE */);
          $.collector_counter = 28;
        }
      }
      if ($.collector_counter == 28) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord($.porncashX, $.porncashY);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D($.porncashX, $.porncashY, 1.0, 1.0, false)) {
          Text.PrintNow("CAP1_B0", 5000, 1); //~g~The mafia has taxed the film studio!
          $.print_timer = $.game_timer + 5000;
          $.collector_cash += $.porn_revenue;
          $.collector.setMoney($.collector_cash);
          $.porn_blip.remove();
          $.porn_cash_pickup.remove();
          $.porn_cash_pickup_removed = 1;
          $.collector.setObjRunToCoord(12.2850, 963.0108);
          $.collector.setUsePednodeSeek(false /* FALSE */);
          $.collector_counter = 29;
        }
      }
      if ($.collector_counter == 29) {
        if ($.collector.isObjNoObj()) {
          $.collector.setObjRunToCoord(12.2850, 963.0108);
          $.collector.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.collector.locateOnFoot2D(12.2850, 963.0108, 1.0, 1.0, false)) {
          $.collector_in_car = 0;
          $.collector_counter = 100;
        }
      }
    }
  }


  if ($.player1.locateOnFootChar2D($.collector, 40.0, 40.0, false)) {
    if ($.player1.isShooting()) {
      if ($.player_audio_timer < $.game_timer) {
        if ($.player_audio_flag == 1) {
          if ($.audio_5_flag == 0) {
            $.audio_5_flag = 1;
            $.audio_5_timeout = $.game_timer + 6000;
          }
          $.player_audio_flag++;
          $.player_audio_timer = $.game_timer + 3000;
        }
        if ($.player_audio_flag == 0) {
          if ($.audio_4_flag == 0) {
            $.audio_4_flag = 1;
            $.audio_4_timeout = $.game_timer + 6000;
          }
          $.player_audio_flag++;
          $.player_audio_timer = $.game_timer + 3000;
        }
      }
    }
    if ($.collector.isShooting()) {
      if ($.collector_audio_timer < $.game_timer) {
        if ($.collector_audio_flag == 8) {
          if ($.audio_10_flag == 0) {
            $.audio_10_flag = 1;
            $.audio_10_timeout = $.game_timer + 6000;
          }
          $.collector_audio_flag++;
          $.collector_audio_timer = $.game_timer + 3000;
        }
        if ($.collector_audio_flag == 7) {
          if ($.audio_9_flag == 0) {
            $.audio_9_flag = 1;
            $.audio_9_timeout = $.game_timer + 6000;
          }
          $.collector_audio_flag++;
          $.collector_audio_timer = $.game_timer + 3000;
        }
        if ($.collector_audio_flag == 6) {
          if ($.audio_6_flag == 0) {
            $.audio_6_flag = 1;
            $.audio_6_timeout = $.game_timer + 6000;
          }
          $.collector_audio_flag++;
          $.collector_audio_timer = $.game_timer + 3000;
        }
        if ($.collector_audio_flag == 5) {
          if ($.audio_8_flag == 0) {
            $.audio_8_flag = 1;
            $.audio_8_timeout = $.game_timer + 6000;
          }
          $.collector_audio_flag++;
          $.collector_audio_timer = $.game_timer + 3000;
        }
        if ($.collector_audio_flag == 4) {
          if ($.audio_7_flag == 0) {
            $.audio_7_flag = 1;
            $.audio_7_timeout = $.game_timer + 6000;
          }
          $.collector_audio_flag++;
          $.collector_audio_timer = $.game_timer + 3000;
        }
        if ($.collector_audio_flag == 3) {
          if ($.audio_2_flag == 0) {
            $.audio_2_flag = 1;
            $.audio_2_timeout = $.game_timer + 6000;
          }
          $.collector_audio_flag++;
          $.collector_audio_timer = $.game_timer + 3000;
        }
        if ($.collector_audio_flag == 2) {
          if ($.audio_1_flag == 0) {
            $.audio_1_flag = 1;
            $.audio_1_timeout = $.game_timer + 6000;
          }
          $.collector_audio_flag++;
          $.collector_audio_timer = $.game_timer + 3000;
        }
        if ($.collector_audio_flag == 1) {
          if ($.audio_11_flag == 0) {
            $.audio_11_flag = 1;
            $.audio_11_timeout = $.game_timer + 6000;
          }
          $.collector_audio_flag++;
          $.collector_audio_timer = $.game_timer + 3000;
        }
        if ($.collector_audio_flag == 0) {
          if ($.audio_3_flag == 0) {
            $.audio_3_flag = 1;
            $.audio_3_timeout = $.game_timer + 6000;
          }
          $.collector_audio_flag++;
          $.collector_audio_timer = $.game_timer + 3000;
        }
      }
    }
  }
  ////////////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////

async function get_next_place() {
  ////////////////////////////////////////////////////////////////////////////


  if ($.boatyard_done == 0) {
    $.collector_goto_x = -726.0752;
    $.collector_goto_y = -1494.4872;
    $.collector_goto_z = 10.3799;
    $.boatyard_done = 1;
    return;
  }
  if ($.showroom_done == 0) {
    $.collector_goto_x = -1025.1687;
    $.collector_goto_y = -904.9712;
    $.collector_goto_z = 13.2096;
    $.showroom_done = 1;
    return;
  }
  if ($.malibu_done == 0) {
    $.collector_goto_x = 506.2871;
    $.collector_goto_y = -82.8296;
    $.collector_goto_z = 9.2532;
    $.malibu_done = 1;
    return;
  }
  if ($.icecream_done == 0) {
    $.collector_goto_x = -852.5533;
    $.collector_goto_y = -568.4194;
    $.collector_goto_z = 10.0567;
    $.icecream_done = 1;
    return;
  }
  if ($.taxifirm_done == 0) {
    $.collector_goto_x = -1016.2645;
    $.collector_goto_y = 199.9105;
    $.collector_goto_z = 10.2062;
    $.taxifirm_done = 1;
    return;
  }
  if ($.porn_done == 0) {
    $.collector_goto_x = 17.6185;
    $.collector_goto_y = 962.1060;
    $.collector_goto_z = 9.727;
    $.porn_done = 1;
    return;
  }
  $.range_int = 5;

  ////////////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

async function collector_steal_a_car() {
  ////////////////////////////////////////////////////////////////////////////


  if (!(Char.IsDead($.gosub_ped))) {
    if ($.heading == 919.9) {
      $.car = Car.Create(SANCHEZ, $.coord_1_x, $.coord_1_y, $.coord_1_z);
    }
    const _res128 = $.gosub_ped.getCoordinates();
$.coord_1_x = _res128.x;
$.coord_1_y = _res128.y;
$.coord_1_z = _res128.z;
    if ($.player1.locateAnyMeansChar2D($.gosub_ped, 30.0, 30.0, false)) {
      $.coord_2_x = $.coord_1_x + 40.0;
      $.coord_2_y = $.coord_1_y + 40.0;
      $.coord_1_x = $.coord_1_x - 40.0;
      $.coord_1_y = $.coord_1_y - 40.0;
      $.car.markAsNoLongerNeeded();
      $.car = -1;
      $.car = World.GetRandomCarOfTypeInArea($.coord_1_x, $.coord_1_y, $.coord_2_x, $.coord_2_y, -1);
      if ($.car == -1 || $.collector1_car == $.car) {
        $.gosub_ped.setObjKillPlayerAnyMeans($.player1);
      }
      else {
        if ($.car.isHealthGreater(400)) {
          $.num_of_followers = $.gosub_ped.getNumberOfFollowers();
          $.max_passengers = $.car.getMaximumNumberOfPassengers();
          $.car.lockDoors(1 /* CARLOCK_UNLOCKED */);
          $.car.setCruiseSpeed(0.0);
          $.gosub_ped.setObjEnterCarAsDriver($.car);
        }
        else {
          $.gosub_ped.setObjKillPlayerAnyMeans($.player1);
          $.car.markAsNoLongerNeeded();
          $.car = -1;
        }
      }
    }
    else {
      const _res129 = Path.GetClosestCarNodeWithHeading($.coord_1_x, $.coord_1_y, $.coord_1_z);
$.coord_1_x = _res129.nodeX;
$.coord_1_y = _res129.nodeY;
$.coord_1_z = _res129.nodeZ;
$.heading = _res129.angle;
      if (!(Camera.IsPointOnScreen($.coord_1_x, $.coord_1_y, $.coord_1_z, 3.0))) {
        if (!(World.IsPointObscuredByAMissionEntity($.coord_1_x, $.coord_1_y, $.coord_1_z, 3.0, 3.0, 2.0))) {
          if (Streaming.HasModelLoaded(SANCHEZ)) {
            $.car.markAsNoLongerNeeded();
            $.car = Car.Create(SANCHEZ, $.coord_1_x, $.coord_1_y, $.coord_1_z);
            $.car.setHeading($.heading);
            $.gosub_ped.setObjEnterCarAsDriver($.car);
          }
        }
        else {
          if ($.gosub_ped.locateOnFoot3D($.coord_1_x, $.coord_1_y, $.coord_1_z, 3.0, 3.0, 2.0, false)) {
            const _res130 = Path.GetClosestCharNode($.coord_1_x, $.coord_1_y, $.coord_1_z);
$.coord_1_x = _res130.nodeX;
$.coord_1_y = _res130.nodeY;
$.coord_1_z = _res130.nodeZ;
            $.gosub_ped.setObjRunToCoord($.coord_1_x, $.coord_1_y);
          }
        }
      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////

  return;
  ////////////////////////////////////////////////////////////////////////////



}

export async function cap_1() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_finale1


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_finale1_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_finale1



  // Variables for mission

  //PEDS CARS ETC

  // VAR_INT collector collector_car collector_dude1
  // VAR_INT collector1 collector1_car collector1_dude1
  // VAR_INT collector2 collector2_car collector2_dude1
  // VAR_INT collector3 collector3_car collector3_dude1
  //BLIPS

  // VAR_INT collector1_blip collector2_blip collector3_blip
  // VAR_INT icecream_blip taxifirm_blip boatyard_blip showroom_blip malibu_blip porn_blip
  //FLAGS TIMERS COUNTERS

  // VAR_INT malibu_done boatyard_done showroom_done porn_done icecream_done taxifirm_done
  // VAR_INT range_int done_bike_cutscene no_obj_timer
  // VAR_INT first_batch_done second_batch_done first_batch_lost second_batch_lost
  // VAR_INT icecream_cash_pickup_removed taxifirm_cash_pickup_removed boatyard_cash_pickup_removed
  // VAR_INT malibu_cash_pickup_removed showroom_cash_pickup_removed porn_cash_pickup_removed
  // VAR_INT player_audio_timer player_audio_flag collector_audio_timer collector_audio_flag max_passengers
  // VAR_INT collector_counter collector_in_car collector_stuck_timer collector_car_goto_coords_timer collector_cash collector_in_car_timer
  // VAR_INT collector1_counter collector1_in_car collector1_stuck_timer collector1_car_goto_coords_timer collector1_cash collector1_in_car_timer
  // VAR_INT collector2_counter collector2_in_car collector2_stuck_timer collector2_car_goto_coords_timer collector2_cash collector2_in_car_timer collector2_flag
  // VAR_INT collector3_counter collector3_in_car collector3_stuck_timer collector3_car_goto_coords_timer collector3_cash collector3_in_car_timer collector3_flag
  //COORD MATHS

  // VAR_FLOAT collector_goto_x collector_goto_y collector_goto_z collector_stuck_x collector_stuck_y

  //LOAD_AND_LAUNCH_MISSION_EXCLUSIVE stuff
  //VAR_INT timer game_timer cutscene_timer
  //VAR_FLOAT car_x car_y car_z heading	coord_1_x coord_1_y coord_1_z coord_2_x	coord_2_y
  //VAR_INT audio_1_flag audio_2_flag audio_3_flag audio_4_flag audio_5_flag
  //VAR_INT audio_6_flag audio_7_flag audio_8_flag audio_9_flag audio_10_flag
  //VAR_INT audio_11_flag is_audio_in_use print_timer
  //VAR_INT audio_1_timeout audio_2_timeout audio_3_timeout audio_4_timeout audio_5_timeout
  //VAR_INT audio_6_timeout audio_7_timeout audio_8_timeout audio_9_timeout audio_10_timeout
  //VAR_INT audio_11_timeout gosub_ped num_of_followers

  // ****************************************Mission Start************************************


}
