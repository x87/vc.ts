// Generated from main/assin3.sc

import { $ } from "../utils/vars.mts";

async function mission_start_assin3() {


  Stat.RegisterMissionGiven();
  ONMISSION = 1;



  await asyncWait(0);


  Text.LoadMissionText("ASSIN3");
  ///////////////////////////////////////////////////////////////////////////////////////cutscene


  Streaming.RequestModel(WMYCW); //construction worker - painter
  Streaming.RequestModel(GDa); // security guard
  Streaming.RequestModel(HMYAP); //airport worker
  Streaming.RequestModel(JMOTO); //tourist
  Streaming.RequestModel(BOBCAT);
  Streaming.RequestModel(tropic);
  Streaming.RequestModel(PCJ600);
  Streaming.RequestModel(securica);
  Streaming.RequestModel(buddyshot);
  Streaming.RequestModel(cellphone);


  while (!(Streaming.HasModelLoaded(WMYCW)) || !(Streaming.HasModelLoaded(BOBCAT)) || !(Streaming.HasModelLoaded(tropic)) || !(Streaming.HasModelLoaded(PCJ600)) || !(Streaming.HasModelLoaded(buddyshot))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(GDa)) || !(Streaming.HasModelLoaded(securica)) || !(Streaming.HasModelLoaded(HMYAP)) || !(Streaming.HasModelLoaded(JMOTO)) || !(Streaming.HasModelLoaded(cellphone))) {
    await asyncWait(0);
  }


  Streaming.LoadSpecialCharacter(1, "MBb");


  while (!(Streaming.HasSpecialCharacterLoaded(1))) {
    await asyncWait(0);
  }


  World.SetPedDensityMultiplier(0.0);
  World.SetCarDensityMultiplier(0.0);


  World.ClearArea(38.396473, -1026.226807, 9.660453, 4.0, false /* FALSE */);
  World.ClearAreaOfChars(14.0, -1034.703, 5.02, 69.44, -1008.6639, 14.0);


  Hud.SwitchWidescreen(true /* ON */);


  $.player1.setCoordinates(38.396473, -1023.987854, 9.450843);
  $.player1.setHeading(9.008627);


  Camera.SetFixedPosition(38.396473, -1026.226807, 9.660453, 0.0, 0.0, 0.0);
  Camera.PointAtPlayer($.player1, 4 /* FOLLOWPED */, 2 /* JUMP_CUT */);
  Camera.SetBehindPlayer();
  $.scplayer.setAnsweringMobile(true /* TRUE */);


  Audio.LoadMissionAudio(1, "job3_1" as any);
  Audio.LoadMissionAudio(2, "job3_2" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  Camera.DoFade(1000, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Text.PrintNow("ASM3_C", 10000, 1);
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.scplayer))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endasm3cs (not lowered; manual jump required)
      throw new Error("unresolved GOTO endasm3cs"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("ASM3_C");
  Audio.ClearMissionAudio(1);


  Text.PrintNow("ASM3_D", 10000, 1);
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.scplayer))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endasm3cs (not lowered; manual jump required)
      throw new Error("unresolved GOTO endasm3cs"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("ASM3_D");
  Audio.ClearMissionAudio(2);


  Audio.LoadMissionAudio(1, "job3_3" as any);


  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
  }



  Text.PrintNow("ASM3_E", 10000, 1);
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.scplayer))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endasm3cs (not lowered; manual jump required)
      throw new Error("unresolved GOTO endasm3cs"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("ASM3_E");
  Audio.ClearMissionAudio(1);
}



async function endasm3cs() {


  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  Text.ClearSmallPrints();


  await asyncWait(500);


  $.scplayer.setAnsweringMobile(false /* FALSE */);
  Streaming.MarkModelAsNoLongerNeeded(cellphone);


  Camera.DoFade(1000, 0 /* FADE_OUT */);



  World.SetPedDensityMultiplier(1.0);
  World.SetCarDensityMultiplier(1.0);


  TIMERA = 0;


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();


  Camera.DoFade(1000, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }



  $.player1.setControl(true /* ON */);



  //////////////////////////////////////////////////////////////////////////////////////



  ///////////////////////////////////////////////////////////		VARIABLES		///////////////////////////////////////////////////



  //sniper rifle location

  $.sniper_a3x = -42.959793;
  $.sniper_a3y = -1049.275269;
  $.sniper_a3z = 10.463915;

  //locations for guys

  $.firstguy_a3x = -52.033546;
  $.firstguy_a3y = -885.064392;
  $.firstguy_a3z = 26.449224;
  $.firstguy_a4heading = 278.496242;


  $.secondguy_a3x = 353.931;
  $.secondguy_a3y = -729.856;
  $.secondguy_a3z = 10.426;
  $.secondguy_a4heading = 336.07;


  $.thirdguy_a3x = 406.6844;
  $.thirdguy_a3y = 210.52;
  $.thirdguy_a3z = 10.79;
  $.thirdguy_a4heading = 52.8;


  $.fourthguy_a3x = 36.2;
  $.fourthguy_a3y = -668.4;
  $.fourthguy_a3z = 4.95;
  $.fourthguy_a4heading = 131.2;


  $.fifthguy_a3x = 31.4084;
  $.fifthguy_a3y = -1388.6462;
  $.fifthguy_a3z = 9.2868;
  $.fifthguy_a4heading = 152.6697;


  $.timer_a3 = 540000;

  //flags values

  $.gotophoneblip = 0;
  $.getfirstguy = 0;
  $.getsecondguy = 0;
  $.getthirdguy = 0;
  $.getfourthguy = 0;
  $.getfifthguy = 0;



  $.locateplayer2 = 0;
  $.locateplayer3 = 0;
  $.locateplayer4 = 0;
  $.locateplayer5 = 0;


  $.secondguygotshot = 0;
  $.thirdguygotshot = 0;
  $.fourthguygotshot = 0;
  $.fifthguygotshot = 0;
  $.everyoneisdead_a3 = 0;


  $.got_out_of_car_flag_a3 = 0;
  //check if sniper bullet in area

  $.playerhasmissed1 = 0;
  $.playerhasmissed4 = 0;


  $.thirdguytold = 0;


  Char.SetEnterCarRangeMultiplier(3.5);
}





async function missionloopassin3() {
  // SCM GOTO → missionloopassin3 lowered to endless loop
  while (true) {


    await asyncWait(0);

    //locate player at phone

    if ($.gotophoneblip == 0) {
      Hud.DisplayTimerWithString($.$id.timer_a3, 1 /* TIMER_DOWN */, "ASM3_11"); ///change
      $.gotophoneblip = 1;
    }


    if ($.gotophoneblip == 1) {
      $.sniper_a3 = Pickup.CreateWithAmmo(7 /* SNIPER */, 3 /* PICKUP_ONCE */, 12, $.sniper_a3x, $.sniper_a3y, $.sniper_a3z);
      $.uzi_a3 = Pickup.CreateWithAmmo(UZI, 3 /* PICKUP_ONCE */, 180, -43.075539, -1052.055786, 10.471653);
      $.sniper_a3blip = Blip.AddForPickup($.sniper_a3);
      $.sniper_a3blip.changeColor(6 /* CYAN */);
      World.ClearArea(-41.6449, -1039.3809, 9.4545, 1.5, false /* FALSE */);
      $.motorbike_am3 = Car.Create(PCJ600, -41.6449, -1039.3809, 9.4545);
      $.motorbike_am3.changeColor(1 /* CARCOLOUR_WHITE */, 1 /* CARCOLOUR_WHITE */);
      $.motorbike_am3.setHeading(79.1594);
      Text.PrintNow("ASM3_12", 8000, 2);
      TIMERA = 0;
      $.gotophoneblip = 2;
    }

    //if been picked up or player not in area remove blip

    if ($.gotophoneblip == 2) {
      if ($.sniper_a3.hasBeenCollected() || !($.player1.locateAnyMeans2D($.sniper_a3x, $.sniper_a3y, 130.0, 130.0, false /* FALSE */))) {
        $.sniper_a3blip.remove();
        $.gotophoneblip = 3;
      }
    }

    //If timer is greater than 10 seconds or if the player has picked up his weapons remove blip

    if ($.getfirstguy == 0) {
      if (TIMERA > 9999 || $.gotophoneblip == 3) {
        $.getfirstguy = 1;
      }
    }


    /////////////////////////////////////////////////////////////////////		FIRST GUY THE PAINTER

    if ($.getfirstguy == 1) {
      World.ClearArea($.firstguy_a3x, $.firstguy_a3y, $.firstguy_a3z, 1.0, false /* FALSE */);
      $.firstguy_a3 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYCW, $.firstguy_a3x, $.firstguy_a3y, $.firstguy_a3z);


      $.firstguy_a3.clearThreatSearch();
      $.firstguy_a3.setHeading($.firstguy_a4heading);
      $.firstguyblip = Blip.AddForChar($.firstguy_a3);
      $.firstguy_a3.setStayInSamePlace(true /* TRUE */);
      Text.PrintNow("ASM3_13", 8000, 2);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.setMood(2 /* PLAYER_MOOD_ANGRY */, 350000);
      $.getfirstguy = 2;
    }


    if (!(Char.IsDead($.firstguy_a3))) {
      if (World.IsSniperBulletInArea(-30.3157, -896.563, 17.367552, -55.192, -880.0, 37.84)) {
        $.playerhasmissed1 = 1;
        if ($.playerhasmissed1 == 1) {
          $.firstguy_a3.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 60000);
          $.playerhasmissed1 = 2;
        }
      }
      else {
        if ($.playerhasmissed1 == 0) {
          $.firstguy_a3.setWaitState(25 /* WAITSTATE_USE_ATM */, 60000);
        }


      }
    }




    if ($.getfirstguy > 1) {
      if ($.getfirstguy < 3) {
        if (Char.IsDead($.firstguy_a3)) {
          $.getfirstguy = 3;
          $.getsecondguy = 1;
          $.firstguyblip.remove();
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        }
      }
    }


    /////////////////////////////////////////////////////////////////////	SECOND GUY STATIONARY IN CAR

    if ($.getsecondguy == 1) {
      Streaming.MarkModelAsNoLongerNeeded(WMYCW);
      $.firstguy_a3.markAsNoLongerNeeded();
      World.ClearArea($.secondguy_a3x, $.secondguy_a3y, $.secondguy_a3z, 3.0, false /* FALSE */);
      $.secondguyscar = Car.Create(securica, $.secondguy_a3x, $.secondguy_a3y, $.secondguy_a3z);
      $.secondguyscar.setHeading($.secondguy_a4heading);
      $.secondguy_a3 = Char.CreateInsideCar($.secondguyscar, 4 /* PEDTYPE_CIVMALE */, GDa);
      $.secondguy_a3.clearThreatSearch();
      $.secondguyscar.setIdle();
      $.secondguyblip = Blip.AddForChar($.secondguy_a3);
      $.secondguyscar.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
      $.secondguyscar.setHealth(2200);
      $.secondguyscar.setOnlyDamagedByPlayer(true /* TRUE */);
      $.secondguyscar.setHeavy(true /* TRUE */);
      Text.PrintNow("ASM3_14", 8000, 2);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
      $.getsecondguy = 2;
    }



    if ($.getsecondguy == 2) {
      if ($.secondguygotshot == 0) {
        if (TIMERA > 799) {
          if (!(Char.IsDead($.secondguy_a3))) {
            if ($.player1.locateAnyMeansChar3D($.secondguy_a3, 20.0, 20.0, 2.0, false /* FALSE */)) {
              if (!(Car.IsDead($.secondguyscar))) {
                if ($.secondguyscar.isOnScreen()) {
                  if (!($.secondguy_a3.isLeavingVehicleToDie())) {
                    Text.PrintNow("ASM3_18", 2000, 2);
                    TIMERA = 0;
                    $.locateplayer2++;
                  }
                }
              }
            }
          }
        }
      }
    }


    if ($.getsecondguy == 2) {
      if ($.secondguygotshot == 0) {
        if (!(Char.IsDead($.secondguy_a3))) {
          if ($.secondguy_a3.isOnScreen()) {
            if ($.player1.locateAnyMeansChar3D($.secondguy_a3, 11.0, 11.0, 2.0, false /* FALSE */)) {
              if ($.player1.isCurrentWeapon(47 /* WEAPONTYPE_ANYWEAPON */)) {
                if (!(Car.IsDead($.secondguyscar))) {
                  if ($.secondguyscar.isOnScreen()) {
                    if (!($.secondguy_a3.isLeavingVehicleToDie())) {
                      $.locateplayer2 = 20;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }



    if ($.getsecondguy == 2) {
      if ($.secondguygotshot == 0) {
        if (!(Car.IsDead($.secondguyscar))) {
          if ($.secondguyscar.isTireBurst(4 /* ANY_WHEEL */)) {
            $.locateplayer2 = 20;
          }
        }
      }
    }



    //driving style

    if ($.getsecondguy == 2) {
      if ($.secondguygotshot == 0) {
        if (!(Car.IsDead($.secondguyscar))) {
          $.secondguyhealth = $.secondguyscar.getHealth();
          if ($.secondguyhealth < 2200 || $.locateplayer2 > 3) {
            if (!(Char.IsDead($.secondguy_a3))) {
              if (!(Car.IsDead($.secondguyscar))) {
                if ($.secondguy_a3.isInCar($.secondguyscar)) {
                  if (!($.secondguy_a3.isLeavingVehicleToDie())) {
                    $.secondguyscar.setCruiseSpeed(38.0);
                    $.secondguyscar.wanderRandomly();
                    $.secondguyscar.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
                    Text.PrintNow("ASM3_19", 5000, 2);
                    StuckCarCheck.Add($.secondguyscar, 0.5, 1000);
                    $.secondguyscar.addUpsidedownCheck();
                    $.secondguygotshot = 1;
                  }
                }
              }
            }
          }
        }
      }
    }


    //stuck checks

    if ($.secondguygotshot == 1) {
      if ($.getsecondguy < 3) {
        if (!(Char.IsDead($.secondguy_a3))) {
          if (!(Car.IsDead($.secondguyscar))) {
            if ($.secondguy_a3.isInCar($.secondguyscar)) {
              if (!($.secondguyscar.isInWater())) {
                if (!($.secondguyscar.isOnFire())) {
                  if (StuckCarCheck.IsCarStuck($.secondguyscar) || $.secondguyscar.isStuckOnRoof()) {
                    if (!($.secondguyscar.isOnScreen())) {
                      const _res28 = $.secondguyscar.getCoordinates();
$.secondguyscarx = _res28.x;
$.secondguyscary = _res28.y;
$.secondguyscarz = _res28.z;
                      const _res29 = Path.GetClosestCarNode($.secondguyscarx, $.secondguyscary, $.secondguyscarz);
$.secondguyscarx = _res29.nodeX;
$.secondguyscary = _res29.nodeY;
$.secondguyscarz = _res29.nodeZ;
                      if (!(World.IsPointObscuredByAMissionEntity($.secondguyscarx, $.secondguyscary, $.secondguyscarz, 4.0, 4.0, 3.0))) {
                        if (!(Camera.IsPointOnScreen($.secondguyscarx, $.secondguyscary, $.secondguyscarz, 3.0))) {
                          $.secondguyscar.setCruiseSpeed(38.0);
                          $.secondguyscar.wanderRandomly();
                          $.secondguyscar.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
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
    }




    //if van becomes damaged guy gets out and legs it

    if ($.secondguygotshot == 1) {
      if (!(Char.IsDead($.secondguy_a3))) {
        if (!(Car.IsDead($.secondguyscar))) {
          $.secondguyhealth = $.secondguyscar.getHealth();
          if ($.secondguyhealth < 450) {
            $.secondguyscar.setIdle();
            $.secondguy_a3.setObjFleePlayerOnFootAlways($.player1);
            $.secondguygotshot = 2;
          }


        }
      }
    }


    //move onto next guy

    if ($.getsecondguy > 1) {
      if ($.getsecondguy < 3) {
        if (Char.IsDead($.secondguy_a3)) {
          $.getsecondguy = 3;
          $.getthirdguy = 1;
          $.secondguyblip.remove();
        }
      }
    }


    ////////////////////////////////////////////////////////////////////// THIRD GUY AT JEWELRY SHOP, 2 guys

    if ($.getthirdguy == 1) {
      Streaming.MarkModelAsNoLongerNeeded(GDa); // security guard
      $.secondguy_a3.markAsNoLongerNeeded();
      Streaming.MarkModelAsNoLongerNeeded(securica);
      $.secondguyscar.markAsNoLongerNeeded();
      World.ClearArea($.thirdguy_a3x, $.thirdguy_a3y, $.thirdguy_a3z, 3.0, false /* FALSE */);
      $.thirdguyscar = Car.Create(BOBCAT, $.thirdguy_a3x, $.thirdguy_a3y, $.thirdguy_a3z);
      $.thirdguyscar.changeColor(0 /* CARCOLOUR_BLACK */, 15 /* CARCOLOUR_RED6 */);
      $.thirdguyscar.setHeading($.thirdguy_a4heading);
      $.thirdguyscar.setHealth(1000);

      //driver
      $.thirdguy_a3 = Char.CreateInsideCar($.thirdguyscar, 4 /* PEDTYPE_CIVMALE */, HMYAP);


      $.thirdguy_a3.clearThreatSearch();
      $.thirdguyscar.setIdle();
      $.thirdguyblip = Blip.AddForChar($.thirdguy_a3);
      $.thirdguy_a3.setOnlyDamagedByPlayer(true /* TRUE */);

      //passenger
      $.thirdguy2_a3 = Char.CreateAsPassenger($.thirdguyscar, 4 /* PEDTYPE_CIVMALE */, HMYAP, 0);
      $.thirdguy2blip = Blip.AddForChar($.thirdguy2_a3);
      $.thirdguy2_a3.giveWeapon(21 /* WEAPONTYPE_STUBBY_SHOTGUN */, 30000);
      $.thirdguy2_a3.setAccuracy(95);
      $.thirdguy2_a3.clearThreatSearch();
      $.thirdguy2_a3.setThreatSearch(1 /* THREAT_PLAYER1 */);
      $.thirdguy2_a3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.thirdguy2_a3.setOnlyDamagedByPlayer(true /* TRUE */);
      $.thirdguyscar.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
      $.thirdguyscar.setOnlyDamagedByPlayer(true /* TRUE */);
      Text.PrintNow("ASM3_15", 8000, 2);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
      $.getthirdguy = 2;
    }

    //seen you counter

    if ($.getthirdguy == 2) {
      if ($.thirdguygotshot == 0) {
        if (TIMERA > 799) {
          if (!(Char.IsDead($.thirdguy_a3))) {
            if ($.player1.locateAnyMeansChar3D($.thirdguy_a3, 36.0, 36.0, 2.0, false /* FALSE */)) {
              if (!(Car.IsDead($.thirdguyscar))) {
                if ($.thirdguyscar.isOnScreen()) {
                  if (!($.locateplayer3 > 2)) {
                    if (!($.thirdguy_a3.isLeavingVehicleToDie())) {
                      Text.PrintNow("ASM3_22", 2000, 2);
                      TIMERA = 0;
                      $.locateplayer3++;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }


    if ($.getthirdguy == 2) {
      if ($.thirdguygotshot == 0) {
        if (!(Char.IsDead($.thirdguy_a3))) {
          if ($.thirdguy_a3.isOnScreen()) {
            if ($.player1.locateAnyMeansChar3D($.thirdguy_a3, 20.0, 20.0, 2.0, false /* FALSE */)) {
              if ($.player1.isCurrentWeapon(47 /* WEAPONTYPE_ANYWEAPON */)) {
                $.locateplayer3 = 20;
              }
            }
          }
        }
      }
    }



    if ($.getthirdguy == 2) {
      if ($.thirdguygotshot == 0) {
        if (!(Car.IsDead($.thirdguyscar))) {
          if ($.thirdguyscar.isTireBurst(4 /* ANY_WHEEL */)) {
            $.locateplayer3 = 20;
          }
        }
      }
    }


    //seen player

    if ($.getthirdguy == 2) {
      if ($.thirdguygotshot == 0) {
        if (!(Car.IsDead($.thirdguyscar))) {
          $.thirdguyhealth = $.thirdguyscar.getHealth();
          if ($.thirdguyhealth < 1000 || $.locateplayer3 > 2 || Char.IsDead($.thirdguy_a3)) {
            Text.PrintNow("ASM3_20", 5000, 2);
            if (!(Char.IsDead($.thirdguy2_a3))) {
              $.thirdguy2_a3.setObjLeaveAnyCar();
            }
            $.thirdguygotshot = 1;


          }
        }
      }
    }

    //passenger get out and kill player

    if ($.thirdguygotshot == 1) {
      if (!(Char.IsDead($.thirdguy2_a3))) {
        if (!($.thirdguy2_a3.isInAnyCar())) {
          $.thirdguy2_a3.setObjKillPlayerOnFoot($.player1);
          $.thirdguygotshot = 2;
        }
      }
      else {
        $.thirdguygotshot = 2;
      }
    }

    //drive

    if ($.thirdguygotshot == 2 || Char.IsDead($.thirdguy2_a3)) {
      if (!(Char.IsDead($.thirdguy_a3))) {
        if (!(Car.IsDead($.thirdguyscar))) {
          if ($.thirdguy_a3.isInCar($.thirdguyscar)) {
            if (!($.thirdguy_a3.isLeavingVehicleToDie())) {
              if ($.thirdguytold == 0) {
                Text.PrintNow("ASM3_20", 5000, 2);
                $.thirdguyscar.setCruiseSpeed(34.0);
                $.thirdguyscar.wanderRandomly();
                $.thirdguyscar.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
                StuckCarCheck.Add($.thirdguyscar, 0.5, 1000);
                $.thirdguyscar.addUpsidedownCheck();
                $.thirdguygotshot = 3;
                $.thirdguytold = 1;
              }
            }
          }
        }
      }
    }

    //get out and kill player

    if ($.thirdguygotshot == 3) {
      if (!(Char.IsDead($.thirdguy_a3))) {
        if (!(Car.IsDead($.thirdguyscar))) {
          $.thirdguyhealth = $.thirdguyscar.getHealth();
          if ($.thirdguyhealth < 500) {
            if (!($.player1.locateAnyMeansCar2D($.thirdguyscar, 40.0, 40.0, false /* FALSE */))) {
              $.thirdguyscar.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
              $.thirdguygotshot = 4;
            }
          }
        }
      }
    }

    //stuck checks

    if ($.thirdguygotshot > 2) {
      if ($.getthirdguy < 3) {
        if (!(Char.IsDead($.thirdguy_a3))) {
          if (!(Car.IsDead($.thirdguyscar))) {
            if ($.thirdguy_a3.isInCar($.thirdguyscar)) {
              if (!($.thirdguyscar.isInWater())) {
                if (!($.thirdguyscar.isOnFire())) {
                  if (StuckCarCheck.IsCarStuck($.thirdguyscar) || $.thirdguyscar.isStuckOnRoof()) {
                    if (!($.thirdguyscar.isOnScreen())) {
                      const _res30 = $.thirdguyscar.getCoordinates();
$.thirdguyscarx = _res30.x;
$.thirdguyscary = _res30.y;
$.thirdguyscarz = _res30.z;
                      const _res31 = Path.GetClosestCarNode($.thirdguyscarx, $.thirdguyscary, $.thirdguyscarz);
$.thirdguyscarx = _res31.nodeX;
$.thirdguyscary = _res31.nodeY;
$.thirdguyscarz = _res31.nodeZ;
                      if (!(World.IsPointObscuredByAMissionEntity($.thirdguyscarx, $.thirdguyscary, $.thirdguyscarz, 4.0, 4.0, 3.0))) {
                        if (!(Camera.IsPointOnScreen($.thirdguyscarx, $.thirdguyscary, $.thirdguyscarz, 3.0))) {
                          $.thirdguyscar.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
                          $.thirdguyscar.setCruiseSpeed(35.0);
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
    }



    //remove blips

    if ($.getthirdguy > 1) {
      if ($.getthirdguy < 3) {
        if (Char.IsDead($.thirdguy_a3)) {
          $.thirdguyblip.remove();
        }
        if (Char.IsDead($.thirdguy2_a3)) {
          $.thirdguy2blip.remove();
        }


      }
    }

    //create next guy

    if ($.getthirdguy > 1) {
      if ($.getthirdguy < 3) {
        if (Char.IsDead($.thirdguy_a3)) {
          if (Char.IsDead($.thirdguy2_a3)) {
            $.getthirdguy = 3;
            $.thirdguyblip.remove();
            $.thirdguy2blip.remove();
            $.getfourthguy = 1;
          }
        }
      }
    }




    //////////////////////////////////////////////////////////////////////////////////////// FOURTH GUY ON BOAT

    if ($.getfourthguy == 1) {
      Streaming.MarkModelAsNoLongerNeeded(HMYAP); //airport worker
      Streaming.MarkModelAsNoLongerNeeded(BOBCAT);
      Streaming.MarkModelAsNoLongerNeeded(buddyshot);
      $.thirdguy_a3.markAsNoLongerNeeded();
      $.thirdguy2_a3.markAsNoLongerNeeded();
      $.thirdguyscar.markAsNoLongerNeeded();
      World.ClearArea($.fourthguy_a3x, $.fourthguy_a3y, $.fourthguy_a3z, 3.0, false /* FALSE */);
      $.fourthguyscar = Car.Create(tropic, $.fourthguy_a3x, $.fourthguy_a3y, $.fourthguy_a3z);
      $.fourthguyscar.setHeading($.fourthguy_a4heading);
      $.fourthguy_a3 = Char.Create(4 /* PEDTYPE_CIVMALE */, JMOTO, 50.916, -640.893, 8.3173);
      $.fourthguy_a3.attachToCar($.fourthguyscar, 0.0, -4.0, 1.2, 0 /* FACING_FORWARD */, 360.0, 0 /* WEAPONTYPE_UNARMED */);
      $.fourthguyblip = Blip.AddForChar($.fourthguy_a3);
      $.fourthguyscar.setOnlyDamagedByPlayer(true /* TRUE */);
      $.fourthguy_a3.setStayInSamePlace(true /* TRUE */);
      $.fourthguy_a3.setWaitState(13 /* WAITSTATE_LOOK_ABOUT */, 800000);
      Text.PrintNow("ASM3_16", 8000, 2);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
      $.fourthguy_a3.clearThreatSearch();
      $.getfourthguy = 2;
    }



    if ($.getfourthguy == 2) {
      if ($.fourthguygotshot == 0) {
        if (TIMERA > 999) {
          if (!(Char.IsDead($.fourthguy_a3))) {
            if ($.player1.locateAnyMeansChar3D($.fourthguy_a3, 30.0, 30.0, 5.0, false /* FALSE */)) {
              if (!(Car.IsDead($.fourthguyscar))) {
                if ($.fourthguyscar.isOnScreen()) {
                  Text.PrintNow("ASM3_18", 2000, 2);
                  TIMERA = 0;
                  $.locateplayer4++;
                }
              }
            }
          }
        }
      }
    }


    if (!(Char.IsDead($.fourthguy_a3))) {
      if (World.IsSniperBulletInArea(4.66, -711.711, 5.474, 8.897, -684.8, 11.77)) {
        if ($.playerhasmissed4 == 0) {
          $.fourthguy_a3.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 600000);
          $.playerhasmissed4 = 2;
        }
      }
    }



    if ($.getfourthguy == 2) {
      if ($.fourthguygotshot == 0) {
        if (!(Car.IsDead($.fourthguyscar))) {
          if ($.playerhasmissed4 == 2 || $.locateplayer4 > 10) {
            if (!(Char.IsDead($.fourthguy_a3))) {
              if ($.player1.locateAnyMeansChar2D($.fourthguy_a3, 120.0, 120.0, false /* FALSE */)) {
                $.fourthguy_a3.setStayInSamePlace(true /* TRUE */);
                $.fourthguygotshot = 1;
              }
            }
          }
        }
      }
    }



    if ($.getfourthguy > 1) {
      if ($.getfourthguy < 3) {
        if (Char.IsDead($.fourthguy_a3)) {
          $.getfourthguy = 3;
          $.getfifthguy = 1;
          $.fourthguyblip.remove();
        }
      }
    }

    //////////////////////////////////////////////////////////////////////////////////////// FIFTH DRIVING ON HIS MOTORBIKE

    if ($.getfifthguy == 1) {
      Streaming.MarkModelAsNoLongerNeeded(tropic);
      Streaming.MarkModelAsNoLongerNeeded(JMOTO); //tourist
      $.fourthguy_a3.markAsNoLongerNeeded();
      $.fourthguyscar.markAsNoLongerNeeded();
      World.ClearArea($.fifthguy_a3x, $.fifthguy_a3y, $.fifthguy_a3z, 10.0, false /* FALSE */);
      $.fifthguyscar = Car.Create(PCJ600, $.fifthguy_a3x, $.fifthguy_a3y, $.fifthguy_a3z);
      $.fifthguyscar.changeColor(7 /* CARCOLOUR_STRIKINGBLUE */, 7 /* CARCOLOUR_STRIKINGBLUE */);
      $.fifthguyscar.setHeading($.fifthguy_a4heading);
      $.fifthguy_a3 = Char.CreateInsideCar($.fifthguyscar, 21 /* PEDTYPE_SPECIAL */, SPECIAL01);


      $.fifthguy_a3.clearThreatSearch();
      $.fifthguyblip = Blip.AddForChar($.fifthguy_a3);
      $.fifthguyscar.lockDoors(2 /* CARLOCK_LOCKED */);
      $.fifthguyscar.setOnlyDamagedByPlayer(true /* TRUE */);
      $.fifthguy_a3.setOnlyDamagedByPlayer(true /* TRUE */);
      $.fifthguyscar.setCruiseSpeed(12.0);
      $.fifthguyscar.wanderRandomly();
      $.fifthguyscar.setDrivingStyle(1 /* DRIVINGMODE_SLOWDOWNFORCARS */);
      $.fifthguyscar.setOnlyDamagedByPlayer(true /* TRUE */);
      Text.PrintNow("ASM3_17", 8000, 2);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
      $.getfifthguy = 2;
    }



    if ($.getfifthguy == 2) {
      if ($.fifthguygotshot == 0) {
        if (TIMERA > 999) {
          if (!(Char.IsDead($.fifthguy_a3))) {
            if ($.player1.locateAnyMeansChar3D($.fifthguy_a3, 90.0, 90.0, 5.0, false /* FALSE */)) {
              if ($.fifthguy_a3.isOnScreen()) {
                Text.PrintNow("ASM3_18", 5000, 2);
                TIMERA = 0;
                $.locateplayer5++;
              }
            }
          }
        }
      }
    }




    if ($.getfifthguy == 2) {
      if ($.fifthguygotshot == 0) {
        if (!(Char.IsDead($.fifthguy_a3))) {
          if ($.fifthguy_a3.isOnScreen()) {
            if ($.player1.locateAnyMeansChar3D($.fifthguy_a3, 70.0, 70.0, 5.0, false /* FALSE */)) {
              $.locateplayer5 = 20;
            }
          }
        }
      }
    }




    if ($.getfifthguy == 2) {
      if ($.fifthguygotshot == 0) {
        if (!(Car.IsDead($.fifthguyscar))) {
          $.fifthguyhealth = $.fifthguyscar.getHealth();
          if ($.fifthguyhealth < 1000 || $.locateplayer5 > 1) {
            if ($.fifthguy_a3.isInAnyCar()) {
              $.got_out_of_car_flag_a3 = 1;
              $.fifthguygotshot = 1;
              Text.PrintNow("ASM3_19", 5000, 2);
            }
            else {
              $.got_out_of_car_flag_a3 = 0;
              $.fifthguygotshot = 1;
              Text.PrintNow("ASM3_19", 5000, 2);
            }
          }
        }
      }
    }



    if ($.fifthguygotshot == 1) {
      if (!(Char.IsDead($.fifthguy_a3))) {
        if ($.got_out_of_car_flag_a3 == 0) {
          if (!($.fifthguy_a3.isInAnyCar())) {
            if (!(Car.IsDead($.fifthguyscar))) {
              if (!($.player1.isInCar($.fifthguyscar))) {
                $.fifthguy_a3.setObjEnterCarAsDriver($.fifthguyscar);
                $.fifthguy_a3.setRunning(true /* TRUE */);
                $.got_out_of_car_flag_a3 = 1;
              }
              else {
                $.fifthguy_a3.setObjFleePlayerOnFootAlways($.player1);
              }
            }
            else {
              $.fifthguy_a3.setObjFleePlayerOnFootAlways($.player1);
            }
          }
        }


        if ($.got_out_of_car_flag_a3 == 1) {
          if (!(Car.IsDead($.fifthguyscar))) {
            if ($.fifthguy_a3.isInCar($.fifthguyscar)) {
              $.fifthguyscar.setCruiseSpeed(42.0);
              $.fifthguyscar.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
              $.fifthguyscar.wanderRandomly();
              $.got_out_of_car_flag_a3 = 0;
            }
            else {
              $.fifthguy_a3.setObjFleePlayerOnFootAlways($.player1);
            }
          }
        }


      }
    }






    if ($.getfifthguy > 1) {
      if ($.getfifthguy < 3) {
        if (Char.IsDead($.fifthguy_a3)) {
          $.getfifthguy = 3;
          $.everyoneisdead_a3 = 1;
          $.fifthguyblip.remove();
        }
      }
    }

    /////////////////////////////////////////////////////  MISSION PASS AND FAIL CONDITIONS


    //mission pass

    if ($.everyoneisdead_a3 == 1 && $.timer_a3 > 0) {
      // SCM GOTO → mission_assin3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_assin3_passed"); // fallback: would break linear control flow
    }

    //mission fail

    if ($.everyoneisdead_a3 == 0 && $.timer_a3 < 1) {
      Text.PrintNow("ASM3_21", 5000, 1);
      // SCM GOTO → mission_assin3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_assin3_failed"); // fallback: would break linear control flow
    }



  }
}

// **************************************** Mission assin3 failed ************************


async function mission_assin3_failed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}




// **************************************** mission assin3 passed ************************


async function mission_assin3_passed() {


  $.flag_assin_mission3_passed = 1;
  Stat.RegisterMissionPassed("JOB_3");
  Text.PrintWithNumberBig("M_PASS", 4000, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(4000);
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  Stat.PlayerMadeProgress(1);
  Stat.AddNumberOfAssassinations(1);
  $.assasin_contact_blip.remove();
}




// ********************************** mission cleanup **************************************


async function mission_cleanup_assin3() {


  ONMISSION = 0;


  $.sniper_a3.remove();
  $.uzi_a3.remove();


  $.firstguyblip.remove();
  $.secondguyblip.remove();
  $.thirdguyblip.remove();
  $.thirdguy2blip.remove();
  $.fourthguyblip.remove();
  $.fifthguyblip.remove();
  $.sniper_a3blip.remove();
  $.fifthguy_a3.removeElegantly();


  Streaming.MarkModelAsNoLongerNeeded(tropic);
  Streaming.MarkModelAsNoLongerNeeded(PCJ600);
  Streaming.MarkModelAsNoLongerNeeded(WMYCW);
  Streaming.MarkModelAsNoLongerNeeded(GDa); // security guard
  Streaming.MarkModelAsNoLongerNeeded(HMYAP); //airport worker
  Streaming.MarkModelAsNoLongerNeeded(JMOTO); //tourist
  Streaming.MarkModelAsNoLongerNeeded(BOBCAT);
  Streaming.MarkModelAsNoLongerNeeded(securica);
  Streaming.MarkModelAsNoLongerNeeded(cellphone);
  Streaming.MarkModelAsNoLongerNeeded(buddyshot);


  Streaming.UnloadSpecialCharacter(1);
  Hud.ClearTimer($.$id.timer_a3);
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}

export async function assin3() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // **********************************    ASSASSIN 3	  **************************************
  // **********************************     Autocide	  **************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************




  // SCRIPT_NAME assin3

  // Mission start stuff


  await mission_start_assin3();  // SCM GOSUB mission_start_assin3


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_assin3_failed();  // SCM GOSUB mission_assin3_failed
  }


  await mission_cleanup_assin3();  // SCM GOSUB mission_cleanup_assin3


  // MissionBoundary


  // Variables for mission


  // VAR_INT firstguy_a3
  // VAR_FLOAT firstguy_a3x
  // VAR_FLOAT firstguy_a3y
  // VAR_FLOAT firstguy_a3z
  // VAR_FLOAT firstguy_a4heading
  // VAR_INT firstguyblip playerhasmissed1



  // VAR_INT secondguy_a3
  // VAR_FLOAT secondguy_a3x
  // VAR_FLOAT secondguy_a3y
  // VAR_FLOAT secondguy_a3z
  // VAR_FLOAT secondguy_a4heading
  // VAR_INT secondguyblip
  // VAR_INT secondguyscar
  // VAR_INT secondguygotshot secondguyhealth locateplayer2


  // VAR_INT thirdguy_a3
  // VAR_FLOAT thirdguy_a3x
  // VAR_FLOAT thirdguy_a3y
  // VAR_FLOAT thirdguy_a3z
  // VAR_FLOAT thirdguy_a4heading
  // VAR_INT thirdguyblip
  // VAR_INT thirdguyscar thirdguygotshot thirdguyhealth locateplayer3


  // VAR_INT thirdguy2_a3
  // VAR_INT thirdguy2blip




  // VAR_INT fourthguy_a3
  // VAR_FLOAT fourthguy_a3x
  // VAR_FLOAT fourthguy_a3y
  // VAR_FLOAT fourthguy_a3z
  // VAR_FLOAT fourthguy_a4heading
  // VAR_INT fourthguyblip
  // VAR_INT fourthguyscar fourthguygotshot playerhasmissed4 locateplayer4


  // VAR_INT fifthguy_a3
  // VAR_FLOAT fifthguy_a3x
  // VAR_FLOAT fifthguy_a3y
  // VAR_FLOAT fifthguy_a3z
  // VAR_FLOAT fifthguy_a4heading
  // VAR_INT fifthguyblip
  // VAR_INT fifthguygotshot everyoneisdead_a3 fifthguyscar locateplayer5 fifthguyhealth


  // VAR_INT sniper_a3
  // VAR_FLOAT sniper_a3x
  // VAR_FLOAT sniper_a3y
  // VAR_FLOAT sniper_a3z
  // VAR_INT sniper_a3blip


  // VAR_INT uzi_a3 motorbike_am3

  //flags

  // VAR_INT gotophoneblip
  // VAR_INT getfirstguy
  // VAR_INT getsecondguy
  // VAR_INT getthirdguy
  // VAR_INT getfourthguy
  // VAR_INT getfifthguy got_out_of_car_flag_a3



  // VAR_INT timer_a3


  //car stuck


  // VAR_FLOAT thirdguyscarx thirdguyscary thirdguyscarz
  // VAR_FLOAT secondguyscarx secondguyscary secondguyscarz

  //flag

  // VAR_INT thirdguytold


  // **************************************** Mission Start **********************************


}
