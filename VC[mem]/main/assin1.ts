// Generated from main/assin1.sc

import { $ } from "../vars.mts";

async function mission_start_assin1() {


  Stat.RegisterMissionGiven();


  ONMISSION = 1;


  await asyncWait(0);


  Text.LoadMissionText("ASSIN1");


  Streaming.RequestModel(pizzaboy);
  Streaming.RequestModel(HMYRI);
  Streaming.RequestModel(pizzabox);
  Streaming.RequestModel(cellphone);


  while (!(Streaming.HasModelLoaded(pizzaboy)) || !(Streaming.HasModelLoaded(HMYRI)) || !(Streaming.HasModelLoaded(pizzabox)) || !(Streaming.HasModelLoaded(cellphone))) {
    await asyncWait(0);
  }

  ///////////////////////////////////////////////////////////////////////////////////////cutscene

  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SetPedDensityMultiplier(0.0);
  World.SetCarDensityMultiplier(0.0);


  World.ClearArea(37.6088, -1023.9865, 9.4108, 1.0, false /* FALSE */);
  World.ClearArea(36.868168, -1027.186523, 10.417089, 1.0, false /* FALSE */);


  World.ClearAreaOfChars(14.0, -1034.703, 5.02, 69.44, -1008.6639, 14.0);


  Hud.SwitchWidescreen(true /* ON */);


  $.player1.setCoordinates(36.8778, -1023.9880, 9.4108);
  $.player1.setHeading(-0.01);


  Camera.SetFixedPosition(36.868168, -1027.186523, 10.417089, 0.0, 0.0, 0.0);
  Camera.PointAtPlayer($.player1, 4 /* FOLLOWPED */, 2 /* JUMP_CUT */);
  Camera.SetBehindPlayer();
  $.scplayer.setAnsweringMobile(true /* TRUE */);


  Audio.LoadMissionAudio(1, "job1_1b" as any);
  Audio.LoadMissionAudio(2, "job1_1c" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Text.PrintNow("ASM1_D", 10000, 1);
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.scplayer))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endasm1cs (not lowered; manual jump required)
      throw new Error("unresolved GOTO endasm1cs"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("ASM1_D");
  Audio.ClearMissionAudio(1);



  Text.PrintNow("ASM1_C", 10000, 1);
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.scplayer))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endasm1cs (not lowered; manual jump required)
      throw new Error("unresolved GOTO endasm1cs"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("ASM1_C");
  Audio.ClearMissionAudio(2);


  Audio.LoadMissionAudio(1, "job1_1d" as any);


  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
  }


  Text.PrintNow("ASM1_B", 10000, 1);
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.scplayer))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endasm1cs (not lowered; manual jump required)
      throw new Error("unresolved GOTO endasm1cs"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("ASM1_B");
  Audio.ClearMissionAudio(1);
}




async function endasm1cs() {


  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  Text.ClearSmallPrints();


  await asyncWait(500);


  $.scplayer.setAnsweringMobile(false /* FALSE */);
  Streaming.MarkModelAsNoLongerNeeded(cellphone);


  Camera.DoFade(1500, 0 /* FADE_OUT */);



  World.SetPedDensityMultiplier(1.0);
  World.SetCarDensityMultiplier(1.0);


  TIMERA = 0;


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();


  Camera.DoFade(1500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }



  $.player1.setControl(true /* ON */);



  //////////////////////////////////////////////////////////////////////////////////////


  //Delivery vans starting point

  $.delvanstartx = 121.0519;
  $.delvanstarty = -1443.547;
  $.delvanstartz = 9.845;
  $.delvanheading = 150.0;

  //flags

  $.got_out_of_car_flag = 0;
  $.mission_assin1_started = 0;
  $.pizza_been_thrown = 0;
  $.delivery_status = 50;


  Char.SetEnterCarRangeMultiplier(3.0);
}











async function assin1_loop() {
  // SCM GOTO → assin1_loop lowered to endless loop
  while (true) {


    await asyncWait(0);

    //start the actual mission

    if ($.mission_assin1_started == 0) {
      Text.PrintNow("ASM1_7", 10000, 2);
      $.mission_assin1_started = 2;
      $.player1.setMood(PLAYER_MOOD_ANGRY, 350000);

      //bar
      Hud.DisplayCounterWithString($.$id.delivery_status, 0 /* COUNTER_DISPLAY_NUMBER */, "ASM1_6");
      World.ClearArea($.delvanstartx, $.delvanstarty, $.delvanstartz, 5.0, false /* FALSE */);
      //Create Carl Pearsons delivery van
      $.delvan = Car.Create(pizzaboy, $.delvanstartx, $.delvanstarty, $.delvanstartz);
      $.delvan.setHeading($.delvanheading);
      //Put Carl inside this van
      $.carlpearson = Char.CreateInsideCar($.delvan, 4 /* PEDTYPE_CIVMALE */, HMYRI);


      $.carlpearson.setOnlyDamagedByPlayer(true /* TRUE */);
      $.carlpearson.addArmor(50);
      //Driving behaviour
      $.delvan.wanderRandomly();
      $.delvan.setCruiseSpeed(32.0);
      $.delvan.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
      $.delvan.setOnlyDamagedByPlayer(true /* TRUE */);

      //Give his car a blip
      $.carlblip = Blip.AddForChar($.carlpearson);
      $.mission_assin1_started = 1;
    }





    if ($.mission_assin1_started == 1) {

      //mission passed
      if (Char.IsDead($.carlpearson)) {
        // SCM GOTO → mission_assin1_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_assin1_passed"); // fallback: would break linear control flow
      }

      //mission failed
      if (!(Char.IsDead($.carlpearson))) {
        if ($.delivery_status == 0) {
          Hud.ClearCounter($.$id.delivery_status);
          Text.PrintNow("ASM1_5", 5000, 1);
          // SCM GOTO → mission_assin1_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_assin1_failed"); // fallback: would break linear control flow
        }
      }


      if (!(Char.IsDead($.carlpearson))) {
        if ($.got_out_of_car_flag < 2) {
          if (!(Car.IsDead($.delvan))) {
            if (!($.player1.isInCar($.delvan))) {
              if ($.delvan.isInWater()) {
                $.got_out_of_car_flag = 2;
              }
            }
            else {
              $.got_out_of_car_flag = 2;
            }
          }
          else {
            $.got_out_of_car_flag = 2;
          }
        }
        if ($.got_out_of_car_flag == 0) {
          if (!($.carlpearson.isInAnyCar())) {
            $.carlpearson.setObjEnterCarAsDriver($.delvan);
            $.carlpearson.setRunning(true /* TRUE */);
            $.got_out_of_car_flag = 1;
          }
        }


        if ($.got_out_of_car_flag == 1) {
          if ($.carlpearson.isSittingInCar($.delvan)) {
            $.delvan.setCruiseSpeed(32.0);
            $.delvan.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
            $.delvan.wanderRandomly();
            $.got_out_of_car_flag = 0;
          }
        }


        if ($.got_out_of_car_flag == 2) {
          if ($.carlpearson.isOnFoot() || Car.IsDead($.delvan)) {
            $.carlpearson.setObjNoObj();
            $.carlpearson.setObjFleePlayerOnFootAlways($.player1);
            $.got_out_of_car_flag = 3;
          }
          else {
            if ($.carlpearson.isSittingInAnyCar()) {
              $.carlpearson.setObjLeaveAnyCar();
            }
          }
        }




      }


      if ($.pizza_been_thrown == 0) {
        if (!(Car.IsDead($.delvan))) {
          if (!(Char.IsDead($.carlpearson))) {
            if ($.carlpearson.isSittingInCar($.delvan)) {
              $.delvan_speed = $.delvan.getSpeed();
              if ($.delvan_speed > 10.0) {
                $.pizza_box_var_a1 = ScriptObject.CreateNoOffset(pizzabox, 0.0, 0.0, 100.0);
                $.pizza_box_var_a1.placeRelativeToCar($.delvan, 0.5, 0.0, 0.7);
                $.pizza_box_var_a1.setCollision(true /* TRUE */);
                $.pizza_box_var_a1.setDynamic(true /* TRUE */);
                $.carlpearson_facing_this_direction = $.carlpearson.getHeading();
                $.pizza_lobx_a1 -= 90.0;
                $.pizza_loby_a1 -= 90.0;
                $.pizza_lobx_a1 = Math.Cos($.carlpearson_facing_this_direction);
                $.pizza_loby_a1 = Math.Sin($.carlpearson_facing_this_direction);
                $.pizza_lobx_a1 *= 11.0;
                $.pizza_loby_a1 *= 11.0;
                $.pizza_box_var_a1.addToVelocity($.pizza_lobx_a1, $.pizza_loby_a1, 6.0);
                $.pizza_been_thrown = 1;
                TIMERA = 0;
              }
            }
          }
        }
      }


      if ($.pizza_been_thrown == 1) {
        if (TIMERA > 5000) {
          $.pizza_box_var_a1.delete();
          $.delivery_status = $.delivery_status - 1;
          $.pizza_been_thrown = 0;
        }
      }






    }




  }
}



// **************************************** Mission haitian3 failed ************************


async function mission_assin1_failed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}




// **************************************** mission haitian3 passed ************************


async function mission_assin1_passed() {


  $.flag_assin_mission1_passed = 1;
  Stat.RegisterMissionPassed("JOB_1");
  Text.PrintWithNumberBig("M_PASS", 500, 5000, 1); //"Mission Passed!"
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  Stat.PlayerMadeProgress(1);
  Stat.AddNumberOfAssassinations(1);
  $.player1.addScore(500);
  $.assasin_contact_blip.remove();
}



// ********************************** mission cleanup **************************************


async function mission_cleanup_assin1() {


  ONMISSION = 0;
  Streaming.MarkModelAsNoLongerNeeded(pizzabox);
  Streaming.MarkModelAsNoLongerNeeded(HMYRI);
  Streaming.MarkModelAsNoLongerNeeded(pizzaboy);
  Streaming.MarkModelAsNoLongerNeeded(cellphone);
  Hud.ClearCounter($.$id.delivery_status);
  $.timer_mobile_start = Clock.GetGameTimer();
  $.carlblip.remove();
  Mission.Finish();
}

export async function assin1() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // ****************************		Assin1 - Job 'Road Kill'	  **************************
  // *********Carl Pearson, delivery man.  He must not complete his deliveries.***************
  // *********blip on radar for bloke driving a van. Player must kill him before he completes*
  // *********deliveries. Set car to wander randomly, then after a set time, set car to goto**
  // *********coordinates. If he reaches location successfully, mission fails*****************
  // ******************************(discuss mechanics of this?).******************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************



  // SCRIPT_NAME assin1

  // Mission start stuff

  await mission_start_assin1();  // SCM GOSUB mission_start_assin1


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_assin1_failed();  // SCM GOSUB mission_assin1_failed
  }


  await mission_cleanup_assin1();  // SCM GOSUB mission_cleanup_assin1


  // MissionBoundary

  // Variables for mission

  // VAR_INT carlpearson delvan carlblip countdown vanblip


  // VAR_FLOAT delvanstartx delvanstarty delvanstartz delvanheading

  //flags

  // VAR_INT got_out_of_car_flag delivery_status pizza_been_thrown mission_assin1_started

  //pizza stuff

  // VAR_FLOAT pizza_lobx_a1 pizza_loby_a1 delvan_speed carlpearson_facing_this_direction
  // VAR_INT pizza_box_var_a1


  // **************************************** Mission Start **********************************


}
