// Generated from main/assin2.sc

import { $ } from "../utils/vars.mts";

async function mission_start_assin2() {


  Stat.RegisterMissionGiven();


  ONMISSION = 1;


  await asyncWait(0);


  Text.LoadMissionText("ASSIN2");

  //set any flags to zero

  $.playerinarea = 0;

  //starting position of wifes car

  $.wifecarstartx = 394.99157;
  $.wifecarstarty = 202.517593;
  $.wifecarstartz = 9.763453;

  //trigger point for player

  $.playertriggerx_a2 = 403.978;
  $.playertriggery_a2 = 222.629;
  $.playertriggerz_a2 = 10.761;


  //flags

  $.player_has_not_reached_shop = 0;
  $.wife_in_car = 0;
  $.next_cam_view_a2 = 0;
  $.car_has_been_rammed_into = 0;
  $.in_area_on_fire_check = 0;
  $.put_health_counter_onscreen_a2 = 0;
  $.playingaudio_a2 = 0;
  $.lastsample = 99999;
  $.sampletoplay = 0;
  $.playerinarea = 0;


  //requesting/loading models

  Streaming.RequestModel(COMET);
  Streaming.RequestModel(WFYRI);
  Streaming.RequestModel(cellphone);


  while (!(Streaming.HasModelLoaded(COMET)) || !(Streaming.HasModelLoaded(WFYRI)) || !(Streaming.HasModelLoaded(cellphone))) {
    await asyncWait(0);
  }


  ///////////////////////////////////////////////////////////////////////////////////////cutscene

  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SetPedDensityMultiplier(0.0);
  World.SetCarDensityMultiplier(0.0);


  World.ClearArea(482.4669, 244.3981, 10.0611, 1.0, false /* FALSE */);
  World.ClearAreaOfChars(467.323, 237.113, 5.992, 491.743, 252.845, 15.029);


  Hud.SwitchWidescreen(true /* ON */);


  $.player1.setCoordinates(482.462189, 244.590836, 10.101152);
  $.player1.setHeading(359.023682);


  Camera.SetFixedPosition(482.462, 242.743362, 12.794998, 0.0, 0.0, 0.0);
  World.ClearArea(482.462, 242.743362, 12.794998, 1.0, false /* FALSE */);
  Camera.PointAtPlayer($.player1, 4 /* FOLLOWPED */, 2 /* JUMP_CUT */);
  Camera.SetBehindPlayer();
  $.scplayer.setAnsweringMobile(true /* TRUE */);


  Audio.LoadMissionAudio(1, "job2_1b" as any);
  Audio.LoadMissionAudio(2, "job1_1c" as any);



  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Text.PrintNow("ASM2_A", 10000, 1);
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.scplayer))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endasm2cs (not lowered; manual jump required)
      throw new Error("unresolved GOTO endasm2cs"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("ASM2_A");
  Audio.ClearMissionAudio(1);



  Text.PrintNow("ASM1_C", 10000, 1);
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.scplayer))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endasm2cs (not lowered; manual jump required)
      throw new Error("unresolved GOTO endasm2cs"); // fallback: would break linear control flow
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
      // SCM GOTO → endasm2cs (not lowered; manual jump required)
      throw new Error("unresolved GOTO endasm2cs"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("ASM1_B");
  Audio.ClearMissionAudio(1);
}




async function endasm2cs() {


  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  Text.ClearSmallPrints();


  await asyncWait(500);


  $.scplayer.setAnsweringMobile(false /* FALSE */);
  Streaming.MarkModelAsNoLongerNeeded(cellphone);


  Camera.DoFade(1500, 0 /* FADE_OUT */);



  World.SetPedDensityMultiplier(1.0);
  World.SetCarDensityMultiplier(1.0);




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
}

//////////////////////////////////////////////////////////////////////////////////////


async function missionloopassin2() {
  // SCM GOTO → missionloopassin2 lowered to endless loop
  while (true) {



    await asyncWait(0);



    ////////////////////////////////////////////	GET TO LOCATION			///////////////////////////////////


    //player must reach location

    if ($.player_has_not_reached_shop == 0) {
      //create wifes car

      Text.PrintNow("ASM2_1", 10000, 2); //Mrs Dawson will be leaving...
      $.triggerblip_a2 = Blip.AddForCoord($.playertriggerx_a2, $.playertriggery_a2, $.playertriggerz_a2);
      Path.SwitchRoadsOff(397.0, 220.0, -9.71, 402.61, 191.618, 9.89);
      Path.SwitchPedRoadsOff(306.885, 179.0982, -10.0907, 413.129, 203.139, 10.89);
      TIMERA = 0;
      $.player_has_not_reached_shop = 1;


    }


    ////////////////////////////////////////////   CUTSCENE		///////////////////////////////////



    //cutscene of wife getting in car

    if ($.player_has_not_reached_shop == 1) {
      if ($.wife_in_car == 0) {
        if ($.player1.locateStoppedAnyMeans3D($.playertriggerx_a2, $.playertriggery_a2, $.playertriggerz_a2, 2.0, 2.0, 3.0, true /* TRUE */)) {
          if ($.player1.isSittingInAnyCar()) {
            $.triggerblip_a2.remove();
            $.player1.setControl(false /* OFF */);
            Hud.SwitchWidescreen(true /* ON */);
            World.ClearArea($.wifecarstartx, $.wifecarstarty, $.wifecarstartz, 30.0, true /* TRUE */);
            $.wife = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYRI, 379.342560, 203.490821, 11.392508);
            $.wife.shutUp(true /* TRUE */);
            $.wife.setHeading(268.973480);
            Camera.SetFixedPosition(390.952, 212.377, 16.131, 0.0, 0.0, 0.0);
            Camera.PointAtPlayer($.player1, 15 /* FIXED */, 2 /* JUMP_CUT */);
            World.ClearArea($.wifecarstartx, $.wifecarstarty, $.wifecarstartz, 15.0, true /* TRUE */);
            $.wifecar = Car.Create(COMET, $.wifecarstartx, $.wifecarstarty, $.wifecarstartz);
            $.wifecar.changeColor(6 /* CARCOLOUR_TAXIYELLOW */, 6 /* CARCOLOUR_TAXIYELLOW */);
            $.wifecar.setHeading(178.226822);
            $.wifecar.setCruiseSpeed(0.0);
            $.wifecar.setDrivingStyle(0);
            $.wifecar.setHealth(893); //899
            $.wifecar.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
            while (!($.next_cam_view_a2 == 5)) {
              await asyncWait(0);
              if (!(Car.IsDead($.wifecar))) {
                if (!(Char.IsDead($.wife))) {
                  if ($.next_cam_view_a2 == 0) {
                    $.wife.setObjEnterCarAsDriver($.wifecar);
                    TIMERA = 0;
                    $.next_cam_view_a2 = 1;
                  }
                }
              }
              if (!(Char.IsDead($.wife))) {
                if (!(Car.IsDead($.wifecar))) {
                  if ($.next_cam_view_a2 == 1) {
                    if (TIMERA > 1000) {
                      //LOAD_SCENE 378.606445 203.746796 11.028813
                      Camera.SetFixedPosition(378.606445, 203.746796, 11.028813, 0.0, 0.0, 0.0); //0.377258 -0.123169 0.172617
                      Camera.PointAtPoint(379.583679, 203.623627, 11.19348, 2 /* JUMP_CUT */);
                      Text.PrintNow("ASM2_8", 6000, 2); //second brief hint...
                      Text.Print("ASM2_10", 6000, 2);
                      TIMERA = 0;
                      $.next_cam_view_a2 = 2;
                    }
                  }
                }
              }
              if ($.next_cam_view_a2 == 2) {
                if (!(Char.IsDead($.wife))) {
                  if (!(Car.IsDead($.wifecar))) {
                    if ($.wife.locateOnFoot3D(384.399414, 203.401169, 10.392508, 1.5, 1.5, 1.5, false /* FALSE */)) {
                      World.ClearArea($.wifecarstartx, $.wifecarstarty, $.wifecarstartz, 50.0, true /* TRUE */);
                      Camera.SetFixedPosition(390.022021, 205.203796, 10.932952, 0.0, 0.0, 0.0);
                      $.wife.setCoordinates(390.811462, 202.591766, 10.070621);
                      $.wife.setHeading(270.790283);
                      $.wife.setObjEnterCarAsDriver($.wifecar);
                      Camera.PointAtCar($.wifecar, 15 /* FIXED */, 2 /* JUMP_CUT */);
                      $.next_cam_view_a2 = 3;
                    }
                    else {
                      if (TIMERA > 14000) {
                        $.wife.setCoordinates(384.399414, 203.401169, 10.392508); //safety timer
                        $.wife.setHeading(270.0); //safety timer
                        TIMERA = 0;
                      }
                    }
                  }
                }
              }


              if ($.next_cam_view_a2 == 3) {
                if (!(Char.IsDead($.wife))) {
                  if (!(Car.IsDead($.wifecar))) {
                    if ($.wife.isSittingInCar($.wifecar)) {
                      $.wifeblip = Blip.AddForChar($.wife);
                      $.wifecar.lockDoors(2 /* CARLOCK_LOCKED */);
                      $.wifecar.setCruiseSpeed(15.0);
                      $.wifecar.wanderRandomly();
                      $.wifecar.setDrivingStyle(1 /* DRIVINGMODE_SLOWDOWNFORCARS */);
                      $.wifecar.setOnlyDamagedByPlayer(true /* TRUE */);
                      // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
                      // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
                      // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
                      $.wife.setCanBeShotInVehicle(false /* FALSE */);
                      // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
                      // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
                      // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
                      TIMERA = 0;
                      $.next_cam_view_a2 = 4;
                    }
                  }
                }
              }
              if ($.next_cam_view_a2 == 4) {
                if (TIMERA > 4000) {
                  Camera.RestoreJumpcut();
                  Camera.SetBehindPlayer();
                  Text.ClearThisPrint("ASM2_10");
                  Hud.SwitchWidescreen(false /* OFF */);
                  $.player1.setControl(true /* ON */);
                  $.next_cam_view_a2 = 5;
                }
              }



            }
            $.wife_in_car = 1;
            $.player_has_not_reached_shop = 2;
            StuckCarCheck.Add($.wifecar, 0.5, 1000);
            $.wifecar.addUpsidedownCheck();
            $.player1.shutUp(true /* TRUE */);
            TIMERA = 0;



          }
          else {
            Text.PrintNow("ASM2_9", 3000, 2); //get to location x...
            //you need a car for this mission


          }
        }
      }
    }


    ////////////////////////////////////////////////////////  CAR STUCK 	//////////////////////////////////////////////



    if ($.wife_in_car == 1) {
      if (!(Car.IsDead($.wifecar))) {
        if (!($.wifecar.isInWater())) {
          if (!($.wifecar.isOnFire())) {
            if (StuckCarCheck.IsCarStuck($.wifecar) || $.wifecar.isStuckOnRoof()) {
              if (!($.wifecar.isOnScreen())) {
                const _res26 = $.wifecar.getCoordinates();
$.wifecar_x = _res26.x;
$.wifecar_y = _res26.y;
$.wifecar_z = _res26.z;
                const _res27 = Path.GetClosestCarNode($.wifecar_x, $.wifecar_y, $.wifecar_z);
$.wifecar_x = _res27.nodeX;
$.wifecar_y = _res27.nodeY;
$.wifecar_z = _res27.nodeZ;
                if (!(World.IsPointObscuredByAMissionEntity($.wifecar_x, $.wifecar_y, $.wifecar_z, 4.0, 4.0, 3.0))) {
                  if (!(Camera.IsPointOnScreen($.wifecar_x, $.wifecar_y, $.wifecar_z, 3.0))) {
                    $.wifecar.setCruiseSpeed(30.0);
                    $.wifecar.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
                    $.wifecar.wanderRandomly();
                  }
                }
              }
            }
          }
        }
      }
    }
    ////////////////////////////////////////////////////////  UPDATE COUNTER ONSCREEN 	//////////////////////////////////////////////


    //health counter onscreen

    if (!(Car.IsDead($.wifecar))) {
      $.wifecarhealth = $.wifecar.getHealth();
      $.wifecarhealth -= 243;
      $.wifecarhealth = $.wifecarhealth * 10;
      $.wifecarhealth = $.wifecarhealth / 65;
      if ($.wifecarhealth <= 0) {
        Hud.ClearCounter($.$id.wifecarhealth);
      }
    }
    else {
      $.wifecarhealth = 0;
    }




    if ($.player_has_not_reached_shop == 2) {
      if ($.put_health_counter_onscreen_a2 == 0) {
        Hud.DisplayCounterWithString($.$id.wifecarhealth, 1 /* COUNTER_DISPLAY_BAR */, "ASM2_2");
        $.put_health_counter_onscreen_a2 = 1;
      }
    }



    ////////////////////////////////////////////////////	WIFE IS IN CAR		//////////////////////////////////////////////////////

    //wife is now in car

    if ($.wife_in_car == 1) {
      if ($.player_has_not_reached_shop == 2) {
        if (!(Char.IsDead($.wife))) {
          if (!(Car.IsDead($.wifecar))) {
            if ($.car_has_been_rammed_into == 0) {
              if (!($.wifecar.isHealthGreater(892))) {
                $.wifecar.setCruiseSpeed(29.0);
                $.wifecar.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
                $.car_has_been_rammed_into = 1;
              }
            }


          }
        }
      }
    }
    ////////////////////////////////////////	AUDIO	////////////////////////////////////

    ///////////////////////////////////////wife1..oh my god...somebody help me


    if (!(Char.IsDead($.wife))) {
      if ($.playingaudio_a2 == 0) {
        if (!(Car.IsDead($.wifecar))) {
          if ($.wifecar.isOnFire()) {
            if ($.lastsample > 1) {
              $.sampletoplay = 1;
              $.playingaudio_a2 = 1;
              Audio.LoadMissionAudio(1, "job2_9" as any); ///sample
            }
          }
          else {
            if ($.wifecarhealth < 14) {
              if ($.lastsample > 2) {
                $.sampletoplay = 2;
                $.playingaudio_a2 = 1;
                Audio.LoadMissionAudio(1, "job2_8" as any); ///sample
              }
            }
            else {
              if ($.wifecarhealth < 28) {
                if ($.lastsample > 3) {
                  $.sampletoplay = 3;
                  $.playingaudio_a2 = 1;
                  Audio.LoadMissionAudio(1, "job2_7" as any); ///sombody help me
                }
              }
              else {
                if ($.wifecarhealth < 45) {
                  if ($.lastsample > 4) {
                    $.sampletoplay = 4;
                    $.playingaudio_a2 = 1;
                    Audio.LoadMissionAudio(1, "job2_6" as any); ///sample
                  }
                }
                else {
                  if ($.wifecarhealth < 59) {
                    if ($.lastsample > 5) {
                      $.sampletoplay = 5;
                      $.playingaudio_a2 = 1;
                      Audio.LoadMissionAudio(1, "job2_5" as any); ///sample
                    }
                  }
                  else {
                    if ($.wifecarhealth < 72) {
                      if ($.lastsample > 6) {
                        $.sampletoplay = 6;
                        $.playingaudio_a2 = 1;
                        Audio.LoadMissionAudio(1, "job2_4" as any); ///help me
                      }
                    }
                    else {
                      if ($.wifecarhealth < 88) {
                        if ($.lastsample > 7) {
                          $.sampletoplay = 7;
                          $.playingaudio_a2 = 1;
                          Audio.LoadMissionAudio(1, "job2_3" as any); ///sample
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }


      }
      else {
        if ($.playingaudio_a2 == 1) {
          if (Audio.HasMissionAudioLoaded(1)) {
            Audio.PlayMissionAudio(1);
            if ($.sampletoplay == 2 || $.sampletoplay == 4 || $.sampletoplay == 5 || $.sampletoplay == 7) {
              Text.PrintNow("ASM2_13", 3000, 1); //Oh my God!
            }
            if ($.sampletoplay == 3) {
              Text.PrintNow("ASM2_12", 3000, 1); //Somebody help me!
            }
            if ($.sampletoplay == 6) {
              Text.PrintNow("ASM2_11", 3000, 1); //Help me!
            }
            $.playingaudio_a2 = 2;
          }
        }
        else {
          if ($.playingaudio_a2 == 2) {
            if (Audio.HasMissionAudioFinished(1)) {
              $.playingaudio_a2 = 0;
              Audio.ClearMissionAudio(1);
              if ($.sampletoplay == 2 || $.sampletoplay == 4 || $.sampletoplay == 5 || $.sampletoplay == 7) {
                Text.ClearThisPrint("ASM2_13"); //Oh my God!
              }
              if ($.sampletoplay == 3) {
                Text.ClearThisPrint("ASM2_12"); //Somebody help me!
              }
              if ($.sampletoplay == 6) {
                Text.ClearThisPrint("ASM2_11"); //Help me!
              }
              $.lastsample = $.sampletoplay;
            }
          }
        }
      }


    }
    else {
      $.playingaudio_a2 = 0;
      Audio.ClearMissionAudio(1);
    }



    //////////////////////////////////////////////	CAR ON FIRE CHECK	///////////////////////////////////////////////


    // If the car is on fire do the check as to whether the player is out of the area

    if (!(Car.IsDead($.wifecar))) {
      if (!(Char.IsDead($.wife))) {
        if ($.wifecar.isOnFire()) {
          if ($.player1.locateAnyMeansCar2D($.wifecar, 20.0, 20.0, false /* FALSE */)) {
            $.playerinarea = 1;
            if ($.in_area_on_fire_check == 0) {
              Text.PrintNow("ASM2_3", 3000, 2); //Her cars gonna blow! get out of there...
              $.in_area_on_fire_check = 1;
            }
          }
          else {
            $.playerinarea = 0;
            if ($.in_area_on_fire_check == 0) {
              Text.PrintNow("ASM2_3", 3000, 2); //Her cars gonna blow! get out of there...
              $.in_area_on_fire_check = 1;
            }
          }
        }
      }
    }



    //////////////////////////////////////////////		MISSION PASS		///////////////////////////////////////////////


    //mission passes if she is dead and has not been killed by using any weapons

    if ($.wife_in_car > 0) {
      if (Car.IsDead($.wifecar) && Char.IsDead($.wife)) {
        if (!($.wifecar.hasBeenDamagedByWeapon(47 /* WEAPONTYPE_ANYWEAPON */))) {
          if (!($.wife.hasBeenDamagedByWeapon(47 /* WEAPONTYPE_ANYWEAPON */)) && $.playerinarea == 0) {
            // SCM GOTO → mission_assin2_passed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_assin2_passed"); // fallback: would break linear control flow
          }
          else {
            Text.PrintNow("ASM2_6", 5000, 1); //You were too near the accident scene!
            // SCM GOTO → mission_assin2_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_assin2_failed"); // fallback: would break linear control flow
          }
        }
      }
    }


    //////////////////////////////////////////////		MISSION FAIL - out of range	///////////////////////////////////////////////

    //out of range

    if ($.wife_in_car > 0) {
      if (!(Car.IsDead($.wifecar))) {
        if (!(Char.IsDead($.wife))) {
          if (!($.player1.locateAnyMeansChar2D($.wife, 250.0, 250.0, false /* FALSE */))) {
            if (!($.wife.isOnScreen())) {
              Text.PrintNow("ASM2_5", 5000, 1);
              // SCM GOTO → mission_assin2_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_assin2_failed"); // fallback: would break linear control flow
            }
          }
        }
      }
    }


    ////////////////////////////////////////////	IF PLAYER HAS DAMAGED CAR WHILE WIFE IN		///////////////////////////////////

    //Checking whether car has been hit by any weapon WHILE WIFE NOT IN

    if ($.wife_in_car > 0) {
      if (!(Car.IsDead($.wifecar))) {
        if (!(Char.IsDead($.wife))) {
          if ($.wife.isInCar($.wifecar)) {
            if ($.wifecar.hasBeenDamagedByWeapon(47 /* WEAPONTYPE_ANYWEAPON */)) {
              Text.PrintNow("ASM2_7", 5000, 1); //It's got to look like an accident dont use weapons!
              // SCM GOTO → mission_assin2_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_assin2_failed"); // fallback: would break linear control flow
            }
          }
        }
      }
    }




  }
}






// **************************************** Mission haitian3 failed ************************


async function mission_assin2_failed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}




// **************************************** mission haitian3 passed ************************


async function mission_assin2_passed() {


  $.flag_assin_mission2_passed = 1;
  Stat.RegisterMissionPassed("JOB_2");
  Text.PrintWithNumberBig("M_PASS", 2000, 5000, 1); //"Mission Passed!"
  Audio.PlayMissionPassedTune(1);
  Stat.PlayerMadeProgress(1);
  Stat.AddNumberOfAssassinations(1);
  $.player1.clearWantedLevel();
  $.player1.addScore(2000);
  $.assasin_contact_blip.remove();
}




// ********************************** mission cleanup **************************************


async function mission_cleanup_assin2() {


  ONMISSION = 0;
  $.player1.shutUp(false /* FALSE */);
  Path.SwitchRoadsOn(397.0, 220.0, -9.71, 402.61, 191.618, 9.89);
  Path.SwitchPedRoadsOn(306.885, 179.0982, -10.0907, 413.129, 203.139, 10.89);
  Streaming.MarkModelAsNoLongerNeeded(WFYRI);
  Streaming.MarkModelAsNoLongerNeeded(COMET);
  Streaming.MarkModelAsNoLongerNeeded(cellphone);
  $.wifeblip.remove();
  $.triggerblip_a2.remove();
  Hud.ClearCounter($.$id.wifecarhealth);
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}

export async function assin2() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // ****************************	assin2 - Job 'Waste the Wife'  *****************************
  // ***********Target will not leave car must kill her by ramming into car*******************
  // ***********wanted bar will go up one for every five collision****************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************



  // SCRIPT_NAME assin2

  // Mission start stuff

  await mission_start_assin2();  // SCM GOSUB mission_start_assin2


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_assin2_failed();  // SCM GOSUB mission_assin2_failed
  }


  await mission_cleanup_assin2();  // SCM GOSUB mission_cleanup_assin2


  // MissionBoundary

  // Variables for mission

  // VAR_INT wife wifecar wifeblip wifecarhealth playerinarea


  // VAR_FLOAT wifecarstartx wifecarstarty wifecarstartz


  // VAR_FLOAT playertriggerx_a2 playertriggery_a2 playertriggerz_a2


  // VAR_INT player_has_not_reached_shop
  // VAR_INT wife_in_car triggerblip_a2 next_cam_view_a2
  // VAR_INT car_has_been_rammed_into in_area_on_fire_check
  // VAR_INT put_health_counter_onscreen_a2
  // VAR_FLOAT wifecar_x wifecar_y wifecar_z


  // VAR_INT lastsample sampletoplay
  // VAR_INT playingaudio_a2






  // **************************************** Mission Start **********************************


}
