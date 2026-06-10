// Generated from main/porn3.sc

import { $ } from "../vars.mts";

async function mission_start_porn3() {
  Text.ClearThisPrint("M_FAIL");
  ONMISSION = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  Text.LoadMissionText("PORN3");
  Shortcut.SetDropoffPointForMission(21.489, 966.28, 9.5, 172.7);
  // *****************************************Set Flags/variables************************************

  $.locator_flag = 0;
  $.slut_in_car = 0;
  $.deadslut = 0;
  $.lookoutleader_moved = 0;
  $.lookout_1_moved = 0;
  $.lookout_2_moved = 0;
  $.lookout_3_moved = 0;
  $.candy_out_count = 0;
  $.hotel_california_flag = 0;
  $.speech_played_porn3 = 0;
  $.where_candy = 0;
  $.where_alex = 0;
  $.cam_audio1 = 0;
  $.cam_audio2 = 0;
  $.porn_fbi_created = 0;
  $.pictures_taken = 0;
  // ****************************************START OF CUTSCENE********************************


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSdirec");
  Streaming.LoadSpecialCharacter(3, "CSCandy");
  Streaming.LoadSpecialCharacter(4, "mporna");
  Streaming.LoadSpecialCharacter(5, "cmraman");


  Streaming.LoadSpecialModel(CUTOBJ01, "cs_cam");
  Streaming.LoadSpecialModel(CUTOBJ02, "drchair");


  Streaming.LoadScene(-86.0, 929.0, 9.764);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);
  }


  Cutscene.Load("porn_3");
  Cutscene.SetOffset(-69.128, 920.965, 9.764);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_direc = CutsceneObject.Create(SPECIAL02);
  $.cs_direc.setAnim("CSdirec");


  $.cs_candy = CutsceneObject.Create(SPECIAL03);
  $.cs_candy.setAnim("CSCandy");


  $.cs_mporna = CutsceneObject.Create(SPECIAL04);
  $.cs_mporna.setAnim("mporna");


  $.cs_cmraman = CutsceneObject.Create(SPECIAL05);
  $.cs_cmraman.setAnim("cmraman");


  $.cs_camera = CutsceneObject.Create(CUTOBJ01);
  $.cs_camera.setAnim("cs_cam");


  $.cs_drchair = CutsceneObject.Create(CUTOBJ02);
  $.cs_drchair.setAnim("drchair");


  World.ClearArea(-66.0, 933.04, 10.2, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-66.0, 933.04, 10.2);
  $.player1.setHeading(275.6);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 5363) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_A", 10000, 1); // Ok, what's the problem now?


  while ($.cs_time < 7267) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_B", 10000, 1); // SSShhhh!


  while ($.cs_time < 8405) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_C", 10000, 1); // Well after his close encounter with the nympho-invaders,


  while ($.cs_time < 11940) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_D", 10000, 1); // our hero finds himself unable to think of anything but this huge phallic mountain -


  while ($.cs_time < 17623) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_E", 10000, 1); // and that's when we want to do the scene with the vat of mashed potato, but then we -


  while ($.cs_time < 20572) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_F", 10000, 1); // I don't give a crap about that,


  while ($.cs_time < 23405) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_G", 10000, 1); // J J Just keep going, keep going, keep going


  while ($.cs_time < 24264) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }

  //PRINT_NOW POR3_H 10000 1 // Hey Tommy...


  while ($.cs_time < 25472) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_I", 10000, 1); //you mentioned something about some legal problem on the phone?


  while ($.cs_time < 29817) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_J", 10000, 1); //Oh yeah! Congressman Alex Shrub has jumped on the pre-election bandwagon and he's going after the puritan vote.


  while ($.cs_time < 35410) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_K", 10000, 1); //Rumours are he's going to support measures to restrict, shall we say,


  while ($.cs_time < 38788) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_L", 10000, 1); //the more fleshy aspects of this great nation's entertainment industry.


  while ($.cs_time < 44773) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_M", 10000, 1); //Great.


  while ($.cs_time < 47875) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_N", 10000, 1); //Candy! You know Shrub,


  while ($.cs_time < 50039) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_O", 10000, 1); //do you guys get up to anything kinky?


  while ($.cs_time < 53487) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_P", 10000, 1); //Oh yeah, Oh yeah! Yes yes yes YES!


  while ($.cs_time < 62879) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_Q", 10000, 1); //Please tell me you got that.


  while ($.cs_time < 64505) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_R", 10000, 1); //Was that part of the uh... or was she talking to


  while ($.cs_time < 66734) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_S", 10000, 1); //Hey, I can never tell.


  while ($.cs_time < 69061) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_T", 10000, 1); //You're probably best following her after the shoot,


  while ($.cs_time < 72018) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_U", 10000, 1); //see if she'll lead you to their new love nest.


  while ($.cs_time < 74686) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_V", 10000, 1); //You got a camera?


  while ($.cs_time < 76802) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR3_X", 10000, 1); //Get him a camera


  while ($.cs_time < 77802) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 78976) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.UnloadSpecialCharacter(5);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  World.SetCarDensityMultiplier(0.75);
  World.SetPedDensityMultiplier(1.0);
  // ******************************************END OF CUTSCENE********************************

  Camera.SetFadingColor(0, 0, 0);
  await asyncWait(500);
  Streaming.LoadScene(-67.000, 939.297, 10.940);
  Camera.SetBehindPlayer();
  //------------------REQUEST_MODELS ------------------------------

  $.player1.setMood(PLAYER_MOOD_CALM, 60000);


  Streaming.LoadSpecialCharacter(1, "IGCandy");
  Streaming.LoadSpecialCharacter(2, "IGalscb");
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }
  Streaming.LoadAllModelsNow();


  Streaming.RequestModel(HMYRI);
  Streaming.RequestModel(camera);
  Streaming.RequestModel(fbi);
  Streaming.RequestModel(GDa);
  Streaming.RequestModel(178 /* uzi */);


  Streaming.RequestModel(sparrow);
  Streaming.RequestModel(stretch);
  Streaming.RequestModel(rancher);
  Streaming.RequestModel(m4);



  while (!(Streaming.HasModelLoaded(HMYRI)) || !(Streaming.HasModelLoaded(camera)) || !(Streaming.HasModelLoaded(fbi)) || !(Streaming.HasModelLoaded(GDa)) || !(Streaming.HasModelLoaded(178 /* uzi */))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(sparrow)) || !(Streaming.HasModelLoaded(stretch)) || !(Streaming.HasModelLoaded(rancher)) || !(Streaming.HasModelLoaded(m4))) {
    await asyncWait(0);
  }

  //opening sex pad roof door

  $.middle_sexpad_doors.delete();
  $.middle_sexpad_doors_open2 = ScriptObject.CreateNoOffset(spad_dr_open2, 461.961, 31.436, 31.24);
  $.middle_sexpad_doors_open2.dontRemove();



  //opening the WK chariot hotel doors

  $.photobuilding_closed.delete();
  // VAR_INT photobuilding_open
  $.photobuilding_open = ScriptObject.CreateNoOffset(ph_build_dr_open, 569.33, 52.737, 14.616);
  $.photobuilding_open.dontRemove();
  $.photobuilding_open.rotate(350.0, 350.0, false /* FALSE */);



  //switching peds nodes off on sex pad

  Path.SwitchPedRoadsOff(479.9, -1.4, 11.0, 450.3, 59.5, 40.0); //test



  //giving player weapons

  $.player1.giveWeapon(WEAPONTYPE_CAMERA, 12);
  $.camera_film = 12;


  //creating candy

  $.slut = Char.Create(5 /* PEDTYPE_CIVFEMALE */, SPECIAL01, -40.4, 945.0, 9.9);
  $.slut.setAsPlayerFriend($.player1, true /* TRUE */);
  $.slut.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  $.slut.clearThreatSearch();
  $.slut.setHeading(296.8);
  $.slut.setOnlyDamagedByPlayer(true /* TRUE */);
  $.slut.setObjGotoCoordOnFoot(9.2, 964.4);
  $.slut_blip = Blip.AddForChar($.slut);
  $.slut.setNeverTargeted(true /* TRUE */);

  //creating car

  $.stretch_limo = Car.Create(stretch, 18.8, 961.6, 10.6);
  $.stretch_limo.setHeading(360.1);
  $.stretch_limo.changeColor(34 /* CARCOLOUR_YELLOW5 */, 34 /* CARCOLOUR_YELLOW5 */);
  $.stretch_limo.setDrivingStyle(2);
  $.limo_driver = Char.CreateInsideCar($.stretch_limo, 4 /* PEDTYPE_CIVMALE */, HMYRI);
  $.stretch_limo.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  $.stretch_limo.setIdle();
  $.stretch_limo.setOnlyDamagedByPlayer(true /* TRUE */);


  //creating car

  $.fake_heli = Car.Create(sparrow, -61.7, 1019.0, 9.9);
  $.fake_heli.setHeading(356.2);
  $.fake_heli_blip = Blip.AddForCar($.fake_heli);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  //creating congressman

  $.congressman = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL02, 471.3, 27.0, 29.6);
  $.congressman.clearThreatSearch();
  $.congressman.setStayInSamePlace(true /* TRUE */);
  $.congressman.setHeading(90.5);

  //lookouts

  $.lookoutleader = Char.Create(4 /* PEDTYPE_CIVMALE */, fbi, 477.6, 30.1, 29.9);
  $.lookoutleader.setHeading(286.6);
  $.lookoutleader.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
  $.lookoutleader.clearThreatSearch();
  $.lookoutleader.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.lookoutleader.setHeedThreats(true /* TRUE */);
  $.lookoutleader.setStayInSamePlace(true /* TRUE */);
  $.lookoutleader.setOnlyDamagedByPlayer(true /* TRUE */);


  $.lookout_1 = Char.Create(4 /* PEDTYPE_CIVMALE */, fbi, 458.8, 18.1, 32.0);
  $.lookout_1.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
  $.lookout_1.clearThreatSearch();
  $.lookout_1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.lookout_1.setHeedThreats(true /* TRUE */);
  Path.AddRoutePoint(1, 458.8, 18.1, 32.0);
  Path.AddRoutePoint(1, 472.0, 18.1, 32.0);
  Path.AddRoutePoint(1, 458.8, 18.1, 32.0);
  $.lookout_1.setObjFollowRoute(1, 3);
  $.lookout_1.setOnlyDamagedByPlayer(true /* TRUE */);


  $.lookout_2 = Char.Create(4 /* PEDTYPE_CIVMALE */, fbi, 458.4, 42.9, 32.0);
  $.lookout_2.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
  $.lookout_2.clearThreatSearch();
  $.lookout_2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.lookout_2.setHeedThreats(true /* TRUE */);
  Path.AddRoutePoint(2, 458.4, 42.9, 32.0);
  Path.AddRoutePoint(2, 472.0, 42.9, 32.0);
  Path.AddRoutePoint(2, 458.4, 42.9, 32.0);
  $.lookout_2.setObjFollowRoute(2, 3);
  $.lookout_2.setOnlyDamagedByPlayer(true /* TRUE */);


  $.lookout_3 = Char.Create(4 /* PEDTYPE_CIVMALE */, fbi, 455.0, 37.6, 33.8);
  $.lookout_3.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
  $.lookout_3.clearThreatSearch();
  $.lookout_3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.lookout_3.setHeedThreats(true /* TRUE */);
  Path.AddRoutePoint(3, 455.0, 37.6, 33.8);
  Path.AddRoutePoint(3, 455.0, 23.8, 33.8);
  Path.AddRoutePoint(3, 455.0, 37.6, 33.8);
  $.lookout_3.setObjFollowRoute(3, 3);
  $.lookout_3.setOnlyDamagedByPlayer(true /* TRUE */);

  //doormen

  $.doorman_1 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, 474.9, 31.9, 11.0);
  $.doorman_1.setHeading(269.6);
  $.doorman_1.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
  $.doorman_1.clearThreatSearch();
  $.doorman_1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.doorman_1.setHeedThreats(true /* TRUE */);
  $.doorman_1.setStayInSamePlace(true /* TRUE */);
  $.doorman_1.setOnlyDamagedByPlayer(true /* TRUE */);


  $.doorman_2 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, 474.9, 28.9, 11.0);
  $.doorman_2.setHeading(269.6);
  $.doorman_2.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
  $.doorman_2.clearThreatSearch();
  $.doorman_2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.doorman_2.setHeedThreats(true /* TRUE */);
  $.doorman_2.setStayInSamePlace(true /* TRUE */);
  $.doorman_2.setOnlyDamagedByPlayer(true /* TRUE */);


  TIMERA = 0;
  $.controlmode = Pad.GetControllerMode();
}


//following slut to hotel

async function following_slut_to_hotel_loop() {
  // SCM GOTO → following_slut_to_hotel_loop lowered to endless loop
  while (true) {
    await asyncWait(0);



    /*
    ///////////////////////////TESTJHFDJSHFSJKFHSJKFHSJFHKL????????////////////////////////////////
    IF slut_in_car = 1
    IF IS_BUTTON_PRESSED PAD1 RIGHTSHOCK
    IF NOT IS_CAR_DEAD stretch_limo
    SET_CAR_COORDINATES stretch_limo 497.5 135.6 9.6
    SET_CAR_HEADING stretch_limo 175.3
    ENDIF
    ENDIF
    ENDIF
    ///////////////////////////TESTJHFDJSHFSJKFHSJKFHSJFHKL????????////////////////////////////////
    */


    //camera help text

    if ($.help_cam == 0) {
      if (TIMERA < 7000) {
        if ($.help_cam_msg == 0) {
          if ($.controlmode == 0) {
            Text.PrintHelp("POR3_08"); //"Press and hold the R1 button to target with the camera."
            $.help_cam_msg = 1;
          }
          if ($.controlmode == 1) {
            Text.PrintHelp("POR3_08"); //"Press and hold the R1 button to target with the camera."
            $.help_cam_msg = 1;
          }
          if ($.controlmode == 2) {
            Text.PrintHelp("POR3_08"); //"Press and hold the R1 button to target with the camera."
            $.help_cam_msg = 1;
          }
          if ($.controlmode == 3) {
            Text.PrintHelp("POR3_09"); //"Press and hold the R1 button to target with the camera."
            $.help_cam_msg = 1;
          }
        }
      }
      else {
        $.controlmode = Pad.GetControllerMode();
        $.help_cam = 1;
        TIMERA = 0;
        $.help_cam_msg = 0;
      }
    }


    if ($.help_cam == 1) {
      if (TIMERA < 7000) {
        if ($.help_cam_msg == 0) {
          if ($.controlmode == 0) {
            Text.PrintHelp("POR3_10"); //"Press the ^ button to zoom in with the camera and the / button to zoom out again."
            $.help_cam_msg = 1;
          }
          if ($.controlmode == 1) {
            Text.PrintHelp("POR3_10"); //"Press the ^ button to zoom in with the camera and the / button to zoom out again."
            $.help_cam_msg = 1;
          }
          if ($.controlmode == 2) {
            Text.PrintHelp("POR3_11"); //"Press the ^ button to zoom in with the camera and the / button to zoom out again."
            $.help_cam_msg = 1;
          }
          if ($.controlmode == 3) {
            Text.PrintHelp("POR3_10"); //"Press the ^ button to zoom in with the camera and the / button to zoom out again."
            $.help_cam_msg = 1;
          }
        }
      }
      else {
        $.controlmode = Pad.GetControllerMode();
        $.help_cam = 2;
        TIMERA = 0;
        $.help_cam_msg = 0;
      }
    }


    if ($.help_cam == 2) {
      if (TIMERA < 7000) {
        if ($.help_cam_msg == 0) {
          if ($.controlmode == 0) {
            Text.PrintHelp("POR3_12"); //"Press the | button to fire the camera."
            $.help_cam_msg = 1;
          }
          if ($.controlmode == 1) {
            Text.PrintHelp("POR3_12"); //"Press the | button to fire the camera."
            $.help_cam_msg = 1;
          }
          if ($.controlmode == 2) {
            Text.PrintHelp("POR3_13"); //"Press the | button to fire the camera."
            $.help_cam_msg = 1;
          }
          if ($.controlmode == 3) {
            Text.PrintHelp("POR3_14"); //"Press the | button to fire the camera."
            $.help_cam_msg = 1;
          }
        }
      }
      else {
        $.help_cam = 3;
        TIMERA = 0;
        $.help_cam_msg = 0;
      }
    }


    if ($.help_cam == 3) {
      if (TIMERA > 1000) {
        Text.PrintNow("POR3_01", 7000, 1); //Follow Candy's Stretch.
        Text.Print("POR3_20", 5000, 1); //If you need transport, use the ~h~sparrow~g~ round the back.
        $.help_cam = 4;
      }
    }


    //letting player use heli

    if (!(Car.IsDead($.fake_heli))) {
      if ($.player1.isInAnyCar()) {
        $.fake_heli_blip.remove();
        Text.ClearThisPrint("POR3_20");
      }
    }
    else {
      $.fake_heli_blip.remove();
      Text.ClearThisPrint("POR3_20");
    }


    //waiting for cnady to reach sexpad

    if (!(Char.IsDead($.slut))) {
      if (!(Car.IsDead($.stretch_limo))) {
        if (!(Char.IsDead($.limo_driver))) {
          if ($.slut_in_car == 0) {
            if ($.slut.isInCar($.stretch_limo)) {
              $.slut.warpFromCarToCoord(-862.0, -607.4, 11.1);
              $.slut.delete();
              $.slut = Char.CreateAsPassenger($.stretch_limo, 5 /* PEDTYPE_CIVFEMALE */, SPECIAL01, 2);
              $.slut.setAsPlayerFriend($.player1, true /* TRUE */);
              $.slut.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
              $.slut.clearThreatSearch();
              $.slut.setOnlyDamagedByPlayer(true /* TRUE */);
              $.stretch_limo.gotoCoordinates(485.9, 31.3, 10.7);
              $.stretch_limo.setCruiseSpeed(20.0);
              $.slut_blip.remove();
              $.slut_blip = Blip.AddForChar($.slut);
              TIMERA = 0;
              $.slut_in_car = 1;
            }
            else {
              if ($.slut.locateOnFoot2D(9.2, 964.4, 1.0, 1.0, false /* FALSE */)) {
                $.slut.setObjEnterCarAsPassenger($.stretch_limo);
                $.slut.setRunning(true /* TRUE */);
              }
            }
          }
          else {




            //////////////////////TESTJKHFJKHDJFHDJKFHSJKF?/////////////////////////////////////////

            if (!($.stretch_limo.isOnScreen()) && !($.player1.locateAnyMeansCar2D($.stretch_limo, 170.0, 170.0, false /* FALSE */))) {
              Text.PrintNow("POR3_21", 5000, 1); //You lost Candy's Stretch!
              // SCM GOTO → mission_failed_porn3 (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_failed_porn3"); // fallback: would break linear control flow
            }


            //////////////////////TESTJKHFJKHDJFHDJKFHSJKF?/////////////////////////////////////////





            if ($.stretch_limo.locate2D(485.9, 31.3, 15.0, 15.0, false /* FALSE */)) {
              // SCM GOTO → slut_entering_building_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO slut_entering_building_loop"); // fallback: would break linear control flow
            }
          }
        }
        else {
          Text.PrintNow("POR3_15", 5000, 1); //You trashed Candy's ride!
          // SCM GOTO → mission_failed_porn3 (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_failed_porn3"); // fallback: would break linear control flow
        }
      }
      else {
        Text.PrintNow("POR3_15", 5000, 1); //You trashed Candy's ride!
        // SCM GOTO → mission_failed_porn3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_porn3"); // fallback: would break linear control flow
      }
    }
    else {
      Text.PrintNow("POR1_03", 5000, 1); //Candy is dead!
      // SCM GOTO → mission_failed_porn3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn3"); // fallback: would break linear control flow
    }



    await health_check();  // SCM GOSUB health_check
    if ($.deadslut == 1) {
      Text.PrintNow("POR1_03", 5000, 1); //Candy is dead!
      // SCM GOTO → mission_failed_porn3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn3"); // fallback: would break linear control flow
    }
    if ($.deadslut == 2) {
      Text.PrintNow("POR3_02", 5000, 1); //You've killed the Congressman!  There's no way you can blackmail him now.
      // SCM GOTO → mission_failed_porn3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn3"); // fallback: would break linear control flow
    }
    if ($.deadslut == 3) {
      Text.PrintNow("POR3_03", 5000, 1); //You've alerted the Congressman's protection, they will get him out of there immediately.
      // SCM GOTO → mission_failed_porn3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn3"); // fallback: would break linear control flow
    }


    await hotel_california();  // SCM GOSUB hotel_california
    await camera_check();  // SCM GOSUB camera_check
    if ($.deadslut == 4) {
      Text.PrintNow("POR3_19", 5000, 1); //You ran out of film!
      // SCM GOTO → mission_failed_porn3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn3"); // fallback: would break linear control flow
    }


  }
}




//slut entering building

async function slut_entering_building_loop() {

  // *****************************START OF CUTSCENE - slut going up to see congressman***********

  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  if (!(Car.IsDead($.stretch_limo))) {
    $.stretch_limo.setCoordinates(485.9, 31.3, 9.8);
    $.stretch_limo.setHeading(196.8);
  }


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  $.cam_audio1 = 0;
  $.cam_audio2 = 0;


  if (!(Car.IsDead($.fake_heli))) {
    if ($.player1.isInCar($.fake_heli)) {
      $.fake_heli.freezePosition(true /* TRUE */);
    }
  }


  Streaming.LoadScene(478.4, 30.4, 11.0);
  World.ClearAreaOfCars(487.5, 24.2, 0.0, 479.3, 36.11, 15.0);


  Camera.DoFade(500, 1 /* FADE_IN */);


  Camera.SetFixedPosition(473.99, 27.96, 13.03, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(484.0, 31.4, 10.1, 2 /* JUMP_CUT */);


  await asyncWait(500);


  if (!(Char.IsDead($.slut))) {
    if (!(Car.IsDead($.stretch_limo))) {
      $.slut.setObjLeaveCar($.stretch_limo);
    }
  }
}



async function getting_the_whore_out_the_car() {
  // SCM GOTO → getting_the_whore_out_the_car lowered to endless loop
  while (true) {
    await asyncWait(0);
    if (!(Car.IsDead($.stretch_limo))) {
      $.candy_out_count = $.stretch_limo.getNumberOfPassengers();
      if ($.candy_out_count == 0) {
        if (!(Char.IsDead($.slut))) {
          if (!(Car.IsDead($.stretch_limo))) {
            $.stretch_limo.gotoCoordinates(479.0, -174.4, 9.0);
            $.stretch_limo.setCruiseSpeed(20.0);
          }
          $.slut.setRunning(false /* FALSE */);
          $.slut.setObjGotoCoordOnFoot(475.9, 30.2);
          TIMERA = 0;
          // SCM GOTO → mini_pron3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mini_pron3_loop"); // fallback: would break linear control flow
        }
      }
      else {
        // SCM GOTO → getting_the_whore_out_the_car (not lowered; manual jump required)
        throw new Error("unresolved GOTO getting_the_whore_out_the_car"); // fallback: would break linear control flow
      }
    }
  }
}



async function mini_pron3_loop() {
  // SCM GOTO → mini_pron3_loop lowered to endless loop
  while (true) {
    await asyncWait(0);
    if (!(Char.IsDead($.slut))) {
      if ($.slut.locateAnyMeans2D(475.9, 30.2, 1.0, 1.0, false /* FALSE */) || TIMERA > 7000) {
        $.slut.setObjWaitOnFoot();
        // SCM GOTO → mini_pron3_loop2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mini_pron3_loop2"); // fallback: would break linear control flow
      }
    }


  }
}

async function mini_pron3_loop2() {


  $.slut.setCoordinates(457.6, 30.6, 30.1);
  $.slut.setHeading(270.0);


  Camera.SetFixedPosition(471.75, 25.95, 30.53, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(429.69, 57.30, 24.51, 2 /* JUMP_CUT */);


  TIMERA = 0;
}



async function waiting_for_candy_to_reach_alex() {
  // SCM GOTO → waiting_for_candy_to_reach_alex lowered to endless loop
  while (true) {
    await asyncWait(0);


    if (TIMERA > 12000) {
      // SCM GOTO → candy_with_alex (not lowered; manual jump required)
      throw new Error("unresolved GOTO candy_with_alex"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.slut))) {
      if (!(Char.IsDead($.congressman))) {
        if ($.where_candy == 0) {
          if ($.slut.locateAnyMeans2D(463.8, 31.4, 1.0, 1.0, false /* FALSE */)) {
            $.slut.setObjWalkToChar($.congressman);
            Audio.LoadMissionAudio(1, "PRN1_12" as any);
            while (!(Audio.HasMissionAudioLoaded(1))) {
              await asyncWait(0);
            }
            Text.PrintNow("POR1_19", 4000, 1); //Hey!
            Audio.PlayMissionAudio(1);
            while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.slut))) {
              await asyncWait(0);
            }
            Audio.ClearMissionAudio(1);
            Text.ClearThisPrint("POR1_19");
            $.where_candy = 1;
          }
          else {
            $.slut.setObjGotoCoordOnFoot(463.8, 31.4);
          }
        }
        if ($.where_candy == 1) {
          if (!(Char.IsDead($.slut))) {
            if (!(Char.IsDead($.congressman))) {
              if ($.slut.locateAnyMeansChar2D($.congressman, 2.0, 2.0, false /* FALSE */)) {
                $.slut.setObjWaitOnFoot();
                // SCM GOTO → candy_with_alex (not lowered; manual jump required)
                throw new Error("unresolved GOTO candy_with_alex"); // fallback: would break linear control flow
              }
              else {
                $.slut.setObjWalkToChar($.congressman);
              }
            }
          }
        }
      }
    }


  }
}

async function candy_with_alex() {



  Audio.LoadMissionAudio(1, "PORN3_1" as any);
  Audio.LoadMissionAudio(2, "PORN3_2" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  if (!(Char.IsDead($.congressman))) {
    $.congressman.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
  }


  Text.PrintNow("POR3_04", 4000, 1); //Candy, could you call me Martha?
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.congressman))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("POR3_04");


  if (!(Char.IsDead($.congressman))) {
    $.congressman.setWaitState(0 /* WAITSTATE_FALSE */, 10);
  }


  if (!(Char.IsDead($.slut))) {
    $.slut.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
  }


  Text.PrintNow("POR3_05", 4000, 1); //Oh Alex, I mean Martha. Whatever you say
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.slut))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(2);
  Text.ClearThisPrint("POR3_05");


  if (!(Char.IsDead($.slut))) {
    $.slut.setWaitState(0 /* WAITSTATE_FALSE */, 10);
  }


  await asyncWait(1000);
  if ($.cam_audio1 == 0) {
    Audio.LoadMissionAudio(1, "caml" as any);
    while (!(Audio.HasMissionAudioLoaded(1))) {
      await asyncWait(0);
    }
    $.cam_audio1 = 1;
  }
  if ($.cam_audio2 == 0) {
    Audio.LoadMissionAudio(2, "camr" as any);
    while (!(Audio.HasMissionAudioLoaded(2))) {
      await asyncWait(0);
    }
    $.cam_audio2 = 1;
  }


  const _res429 = $.player1.getCoordinates();
$.player_x = _res429.x;
$.player_y = _res429.y;
$.player_z = _res429.z;
  Streaming.LoadScene($.player_x, $.player_y, $.player_z);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  if (!(Car.IsDead($.fake_heli))) {
    if ($.player1.isInCar($.fake_heli)) {
      $.fake_heli.freezePosition(false /* FALSE */);
    }
  }


  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.DoFade(500, 1 /* FADE_IN */);
  // *****************************END OF CUTSCENE - slut going up to see congressman*************



  if (!(Char.IsDead($.congressman))) {
    $.congressman.setCoordinates(463.3, 31.7, 29.9);
    $.congressman.setHeading(245.8);
    if (!(Char.IsDead($.slut))) {
      $.slut.setCoordinates(463.9, 30.3, 29.9);
      $.slut.setHeading(44.8);
    }
  }
  $.congressman.setObjNoObj();
  $.slut.setObjNoObj();
  Game.SetCharsChatting($.congressman, $.slut, 86400000);


  $.pic_blip = Blip.AddForCoord(559.0, 17.6, 51.7);


  Text.PrintNow("POR3_16", 7000, 1); //You need three good blackmail picture of Alex Shrub with Candy.
  Text.Print("POR3_22", 7000, 1); //The WK Chariot Hotel across from his balcony should provide an ideal photo-grabbing location.
  Text.Print("POR3_23", 7000, 1); //There is a side door that will allow you access to the hotel.
  Hud.DisplayCounterWithString($.$id.pictures_taken, 0 /* COUNTER_DISPLAY_NUMBER */, "POR3_24");
  World.SetCarDensityMultiplier(1.0);
}



async function taking_picture_loop() {
  // SCM GOTO → taking_picture_loop lowered to endless loop
  while (true) {


    await asyncWait(0);



    if (!(Char.IsDead($.congressman))) {
      if ($.congressman.hasBeenPhotographed()) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.pictures_taken++;
      }
      if ($.pictures_taken > 2) {
        Hud.ClearCounter($.$id.pictures_taken);
        if (!(Char.IsDead($.doorman_1))) {
          $.doorman_1.setCoordinates(571.4, 49.3, 13.3);
          $.doorman_1.setHeading(185.6);
          $.doorman_1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.doorman_1.setObjKillPlayerOnFoot($.player1);
          $.doorman_1.setAccuracy(90);
          $.doorman_1.setHealth(150);
        }
        if (!(Char.IsDead($.doorman_2))) {
          $.doorman_2.setCoordinates(569.9, 49.0, 13.3);
          $.doorman_2.setHeading(185.6);
          $.doorman_2.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.doorman_2.setObjKillPlayerOnFoot($.player1);
          $.doorman_2.setAccuracy(90);
          $.doorman_2.setHealth(150);
        }
        if ($.speech_played_porn3 == 0) {
          $.cam_audio1 = 0;
          Audio.LoadMissionAudio(1, "PORN3_3" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          Text.PrintNow("POR3_06", 4000, 1); //Martha, someone's watching.. how kinky.
          Audio.PlayMissionAudio(1);
          while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.slut))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("POR3_06");
          if ($.cam_audio1 == 0) {
            Audio.LoadMissionAudio(1, "caml" as any);
            while (!(Audio.HasMissionAudioLoaded(1))) {
              await asyncWait(0);
            }
            $.cam_audio1 = 1;
          }
          $.pic_blip.remove();
          $.speech_played_porn3 = 1;
        }
        $.slut_blip.remove();
        $.porn_studio = Blip.AddForCoord(-52.5, 941.9, 9.9);
        $.player1.alterWantedLevelNoDrop(5);
        Text.PrintNow("POR3_17", 7000, 1); //Get back to the Porn Studios with the film.
        $.where_candy = 0;
        // SCM GOTO → getting_away_with_it (not lowered; manual jump required)
        throw new Error("unresolved GOTO getting_away_with_it"); // fallback: would break linear control flow
      }
    }


    await health_check();  // SCM GOSUB health_check
    if ($.deadslut == 1) {
      Text.PrintNow("POR1_03", 5000, 1); //Candy is dead!
      // SCM GOTO → mission_failed_porn3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn3"); // fallback: would break linear control flow
    }
    if ($.deadslut == 2) {
      Text.PrintNow("POR3_02", 5000, 1); //You've killed the Congressman!  There's no way you can blackmail him now.
      // SCM GOTO → mission_failed_porn3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn3"); // fallback: would break linear control flow
    }
    if ($.deadslut == 3) {
      Text.PrintNow("POR3_03", 5000, 1); //You've alerted the Congressman's protection, they will get him out of there immediately.
      // SCM GOTO → mission_failed_porn3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn3"); // fallback: would break linear control flow
    }
    await camera_check();  // SCM GOSUB camera_check
    if ($.deadslut == 4) {
      Text.PrintNow("POR3_19", 5000, 1); //You ran out of film!
      // SCM GOTO → mission_failed_porn3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn3"); // fallback: would break linear control flow
    }


    await hotel_california();  // SCM GOSUB hotel_california


  }
}



async function getting_away_with_it() {
  // SCM GOTO → getting_away_with_it lowered to endless loop
  while (true) {


    await asyncWait(0);

    //mission passed

    if ($.player1.locateAnyMeans3D(-52.5, 941.9, 9.9, 5.0, 5.0, 5.0, true /* TRUE */)) {
      // SCM GOTO → mission_passed_porn3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_passed_porn3"); // fallback: would break linear control flow
    }

    //creating extra guys at porn studios

    if ($.porn_fbi_created == 0) {
      if ($.player1.isInZone("PORNI")) {
        $.lookoutleader.markAsNoLongerNeeded();
        $.lookout_1.markAsNoLongerNeeded();
        $.lookout_2.markAsNoLongerNeeded();
        $.lookout_3.markAsNoLongerNeeded();
        $.doorman_1.markAsNoLongerNeeded();
        $.doorman_2.markAsNoLongerNeeded();

        //north entrance to porn islands
        $.porn_fbi1 = Char.Create(4 /* PEDTYPE_CIVMALE */, fbi, 14.3, 966.0, 9.9);
        $.porn_fbi1.setHeading(327.1);
        $.porn_fbi1.giveWeapon(WEAPONTYPE_M4, 30000);
        $.porn_fbi1.clearThreatSearch();
        $.porn_fbi1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.porn_fbi1.setHeedThreats(true /* TRUE */);
        $.porn_fbi1.setStayInSamePlace(true /* TRUE */);
        $.porn_fbi1.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.porn_fbi1.setObjKillPlayerOnFoot($.player1);
        $.porn_fbi1.setAccuracy(90);
        $.porn_fbi1.setHealth(150);
        $.porn_fbi2 = Char.Create(4 /* PEDTYPE_CIVMALE */, fbi, 13.2, 960.4, 9.9);
        $.porn_fbi2.setHeading(191.9);
        $.porn_fbi2.giveWeapon(WEAPONTYPE_M4, 30000);
        $.porn_fbi2.clearThreatSearch();
        $.porn_fbi2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.porn_fbi2.setHeedThreats(true /* TRUE */);
        $.porn_fbi2.setStayInSamePlace(true /* TRUE */);
        $.porn_fbi2.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.porn_fbi2.setObjKillPlayerOnFoot($.player1);
        $.porn_fbi2.setAccuracy(90);
        $.porn_fbi2.setHealth(150);
        $.porn_fbi5 = Char.Create(4 /* PEDTYPE_CIVMALE */, fbi, 10.1, 965.7, 9.9);
        $.porn_fbi5.setHeading(121.8);
        $.porn_fbi5.giveWeapon(WEAPONTYPE_M4, 30000);
        $.porn_fbi5.clearThreatSearch();
        $.porn_fbi5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.porn_fbi5.setHeedThreats(true /* TRUE */);
        $.porn_fbi5.setStayInSamePlace(true /* TRUE */);
        $.porn_fbi5.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.porn_fbi5.setObjKillPlayerOnFoot($.player1);
        $.porn_fbi5.setAccuracy(90);
        $.porn_fbi5.setHealth(150);
        $.porn_fbicar1 = Car.Create(rancher, 15.5, 962.7, 10.0);
        $.porn_fbicar1.setHeading(352.8);

        //south entrance to porn islands
        $.porn_fbi3 = Char.Create(4 /* PEDTYPE_CIVMALE */, fbi, -6.9, 883.8, 9.7);
        $.porn_fbi3.setHeading(254.8);
        $.porn_fbi3.giveWeapon(WEAPONTYPE_M4, 30000);
        $.porn_fbi3.clearThreatSearch();
        $.porn_fbi3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.porn_fbi3.setHeedThreats(true /* TRUE */);
        $.porn_fbi3.setStayInSamePlace(true /* TRUE */);
        $.porn_fbi3.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.porn_fbi3.setObjKillPlayerOnFoot($.player1);
        $.porn_fbi3.setAccuracy(90);
        $.porn_fbi3.setHealth(150);
        $.porn_fbi4 = Char.Create(4 /* PEDTYPE_CIVMALE */, fbi, -12.6, 877.7, 9.8);
        $.porn_fbi4.setHeading(222.4);
        $.porn_fbi4.giveWeapon(WEAPONTYPE_M4, 30000);
        $.porn_fbi4.clearThreatSearch();
        $.porn_fbi4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.porn_fbi4.setHeedThreats(true /* TRUE */);
        $.porn_fbi4.setStayInSamePlace(true /* TRUE */);
        $.porn_fbi4.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.porn_fbi4.setObjKillPlayerOnFoot($.player1);
        $.porn_fbi4.setAccuracy(90);
        $.porn_fbi4.setHealth(150);
        $.porn_fbicar2 = Car.Create(rancher, -5.8, 887.2, 9.8);
        $.porn_fbicar2.setHeading(187.0);
        $.porn_fbicar3 = Car.Create(rancher, -8.5, 880.2, 9.8);
        $.porn_fbicar3.setHeading(311.2);
        $.porn_fbi_created = 1;
      }
    }


    //moving guys to inside hotel

    if (!(Char.IsDead($.lookoutleader))) {
      if ($.lookoutleader_moved == 0) {
        if (!($.lookoutleader.isOnScreen())) {
          $.lookoutleader.setCoordinates(562.4, 29.6, 16.7);
          $.lookoutleader.setHeading(271.4);
          $.lookoutleader.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.lookoutleader.setObjKillPlayerOnFoot($.player1);
          $.lookoutleader.setAccuracy(90);
          $.lookoutleader.setHealth(150);
          $.lookoutleader_moved = 1;
        }
      }
      if ($.lookoutleader_moved == 1) {
        if ($.lookoutleader.isOnScreen()) {
          if ($.speech_played_porn3 == 1) {
            $.cam_audio1 = 0;
            Audio.LoadMissionAudio(1, "PORN3_4" as any);
            while (!(Audio.HasMissionAudioLoaded(1))) {
              await asyncWait(0);
            }
            Text.PrintNow("POR3_07", 4000, 1); //You there. Give me that camera.
            Audio.PlayMissionAudio(1);
            while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.lookoutleader))) {
              await asyncWait(0);
            }
            Audio.ClearMissionAudio(1);
            Text.ClearThisPrint("POR3_07");
            if ($.cam_audio1 == 0) {
              Audio.LoadMissionAudio(1, "caml" as any);
              while (!(Audio.HasMissionAudioLoaded(1))) {
                await asyncWait(0);
              }
              $.cam_audio1 = 1;
            }
            $.speech_played_porn3 = 2;
          }
        }
      }
    }
    if (!(Char.IsDead($.lookout_1))) {
      if ($.lookout_1_moved == 0) {
        if (!($.lookout_1.isOnScreen())) {
          $.lookout_1.setStayInSamePlace(true /* TRUE */);
          $.lookout_1.setCoordinates(561.7, 27.4, 16.7);
          $.lookout_1.setHeading(302.4);
          $.lookout_1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.lookout_1.setObjKillPlayerOnFoot($.player1);
          $.lookout_1.setAccuracy(90);
          $.lookout_1.setHealth(150);
          $.lookout_1_moved = 1;
        }
      }
    }
    if (!(Char.IsDead($.lookout_2))) {
      if ($.lookout_2_moved == 0) {
        if (!($.lookout_2.isOnScreen())) {
          $.lookout_2.setStayInSamePlace(true /* TRUE */);
          $.lookout_2.setCoordinates(574.2, 24.2, 11.7);
          $.lookout_2.setHeading(89.0);
          $.lookout_2.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.lookout_2.setObjKillPlayerOnFoot($.player1);
          $.lookout_2.setAccuracy(90);
          $.lookout_2.setHealth(150);
          $.lookout_2_moved = 1;
        }
      }
    }
    if (!(Char.IsDead($.lookout_3))) {
      if ($.lookout_3_moved == 0) {
        if (!($.lookout_3.isOnScreen())) {
          $.lookout_3.setStayInSamePlace(true /* TRUE */);
          $.lookout_3.setCoordinates(574.8, 26.3, 11.7);
          $.lookout_3.setHeading(107.0);
          $.lookout_3.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.lookout_3.setObjKillPlayerOnFoot($.player1);
          $.lookout_3.setAccuracy(90);
          $.lookout_3.setHealth(150);
          $.lookout_3_moved = 1;
        }
      }
    }


    //moving candy

    if (!(Char.IsDead($.slut))) {
      if ($.where_candy == 0) {
        if ($.slut.locateAnyMeans2D(463.8, 31.4, 1.0, 1.0, false /* FALSE */)) {
          $.slut.setObjGotoCoordOnFoot(457.6, 30.6);
          $.where_candy = 1;
        }
        else {
          $.slut.setObjGotoCoordOnFoot(463.8, 31.4);
        }
      }
      if ($.where_candy == 1) {
        if (!(Char.IsDead($.slut))) {
          if ($.slut.locateAnyMeans2D(457.6, 30.6, 1.0, 1.0, false /* FALSE */)) {
            $.slut.delete();
            $.where_candy = 2;
          }
        }
      }
    }

    //moving alex

    if (!(Char.IsDead($.congressman))) {
      if ($.where_alex == 0) {
        if ($.congressman.locateAnyMeans2D(463.8, 31.4, 1.0, 1.0, false /* FALSE */)) {
          $.congressman.setObjGotoCoordOnFoot(457.6, 30.6);
          $.where_alex = 1;
        }
        else {
          $.congressman.setObjGotoCoordOnFoot(463.8, 31.4);
        }
      }
      if ($.where_alex == 1) {
        if (!(Char.IsDead($.congressman))) {
          if ($.congressman.locateAnyMeans2D(457.6, 30.6, 1.0, 1.0, false /* FALSE */)) {
            $.congressman.delete();
            $.where_alex = 2;
          }
        }
      }
    }


    await hotel_california();  // SCM GOSUB hotel_california
    await camera_check();  // SCM GOSUB camera_check
    //GOSUB health_check


    //checking candy/shrub are not dead

    if (!($.where_candy == 2)) {
      if (Char.IsDead($.slut)) {
        Text.PrintNow("POR1_03", 5000, 1); //Candy is dead!
        // SCM GOTO → mission_failed_porn3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_porn3"); // fallback: would break linear control flow
      }
    }
    if (!($.where_alex == 2)) {
      if (Char.IsDead($.congressman)) {
        Text.PrintNow("POR3_02", 5000, 1); //You've killed the Congressman!  There's no way you can blackmail him now.
        $.player1.alterWantedLevelNoDrop(5);
        // SCM GOTO → mission_failed_porn3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_porn3"); // fallback: would break linear control flow
      }
    }


  }
}


// Mission failed

async function mission_failed_porn3() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
  if ($.deadslut == 2) {
    $.player1.alterWantedLevelNoDrop(5);
  }
}




// Mission passed

async function mission_passed_porn3() {


  Text.ClearPrints();
  Text.PrintWithNumberBig("M_PASS", 4000, 5000, 1); //"Mission Passed!"
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  $.player1.addScore(4000);
  Stat.PlayerMadeProgress(1);
  Stat.RegisterMissionPassed("PORN_3");
  // START_NEW_SCRIPT porn_mission4_loop
  $.flag_porn_mission3_passed = 1;
}




// mission cleanup

async function mission_cleanup_porn3() {


  ONMISSION = 0;
  $.player1.setControl(true /* on */);
  $.help_cam = 3;
  $.slut.removeElegantly();
  $.congressman.removeElegantly();
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(HMYRI);
  Streaming.MarkModelAsNoLongerNeeded(stretch);
  Streaming.MarkModelAsNoLongerNeeded(camera);
  Streaming.MarkModelAsNoLongerNeeded(fbi);
  Streaming.MarkModelAsNoLongerNeeded(GDa);
  Streaming.MarkModelAsNoLongerNeeded(178 /* uzi */);
  Streaming.MarkModelAsNoLongerNeeded(sparrow);
  Streaming.MarkModelAsNoLongerNeeded(rancher);
  Streaming.MarkModelAsNoLongerNeeded(m4);
  Hud.ClearCounter($.$id.pictures_taken);
  Path.RemoveRoute(1);
  Path.RemoveRoute(2);
  Path.RemoveRoute(3);
  Path.SwitchPedRoadsOn(479.9, -1.4, 11.0, 450.3, 59.5, 40.0); //test
  $.player1.setAmmo(WEAPONTYPE_CAMERA, 0);


  if ($.player1.isInArea2D(585.7, 52.8, 555.9, 8.1, false /* FALSE */)) {
    Camera.DoFade(400, 0 /* FADE_OUT */);
    $.player1.setCoordinates(568.7, 55.2, 13.3);
    if ($.hotel_california_flag == 1) {
      World.SwapNearestBuildingModel(568.54, -4.801, 13.264, 80.0, od_wtsign, od_chariot);
      World.SwapNearestBuildingModel(568.54, -4.801, 13.264, 80.0, LODd_buildnew, LODchariot);
    }
    $.photobuilding_open.delete();
    $.photobuilding_closed = ScriptObject.CreateNoOffset(ph_build_dr_closed, 569.925, 52.00, 14.616);
    $.photobuilding_closed.dontRemove();
    $.photobuilding_closed.rotate(270.0, 270.0, false /* FALSE */);
    Camera.DoFade(400, 1 /* FADE_IN */);
  }
  else {
    if (!($.flag_porn_mission3_passed == 1)) {
      $.photobuilding_open.delete();
      $.photobuilding_closed = ScriptObject.CreateNoOffset(ph_build_dr_closed, 569.925, 52.00, 14.616);
      $.photobuilding_closed.dontRemove();
      $.photobuilding_closed.rotate(270.0, 270.0, false /* FALSE */);
    }
    else {
      $.photobuilding_closed.delete();
      $.photobuilding_open = ScriptObject.CreateNoOffset(ph_build_dr_open, 569.33, 52.737, 14.616);
      $.photobuilding_open.dontRemove();
      $.photobuilding_open.rotate(350.0, 350.0, false /* FALSE */);
    }
  }


  if ($.player1.isInArea3D(465.1, 32.8, 29.9, 454.5, 27.2, 32.6, false /* FALSE */)) {
    Camera.DoFade(400, 0 /* FADE_OUT */);
    $.player1.setCoordinates(463.4, 29.5, 30.1);
    $.middle_sexpad_doors_open2.delete();
    $.middle_sexpad_doors.delete();
    $.middle_sexpad_doors = ScriptObject.CreateNoOffset(spad_dr_closed2, 465.375, 30.336, 33.181);
    $.middle_sexpad_doors.dontRemove();
    Camera.DoFade(400, 1 /* FADE_IN */);
  }
  else {
    $.middle_sexpad_doors_open2.delete();
    $.middle_sexpad_doors.delete();
    $.middle_sexpad_doors = ScriptObject.CreateNoOffset(spad_dr_closed2, 465.375, 30.336, 33.181);
    $.middle_sexpad_doors.dontRemove();
  }


  $.timer_mobile_start = Clock.GetGameTimer();
  $.slut_blip.remove();
  $.porn_studio.remove();
  $.pic_blip.remove();
  $.fake_heli_blip.remove();
  Mission.Finish();
}



///////////////////////////////////////////////////////////////////////////////////////////

async function health_check() {
  ///////////////////////////////////////////////////////////////////////////////////////////

  if (Char.IsDead($.slut)) {
    $.deadslut = 1;
  }
  if (Char.IsDead($.congressman)) {
    $.deadslut = 2;
  }
  if (Char.IsDead($.doorman_1)) {
    $.deadslut = 3;
  }
  if (Char.IsDead($.doorman_2)) {
    $.deadslut = 3;
  }
  if (Char.IsDead($.lookoutleader)) {
    $.deadslut = 3;
  }
  if (Char.IsDead($.lookout_1)) {
    $.deadslut = 3;
  }
  if (Char.IsDead($.lookout_2)) {
    $.deadslut = 3;
  }
  if (Char.IsDead($.lookout_3)) {
    $.deadslut = 3;
  }
  if ($.player1.isInArea3D(477.3, 14.8, 29.4, 448.6, 45.5, 38.2, false /* FALSE */)) {
    if (!(Char.IsDead($.doorman_1))) {
      $.doorman_1.setObjKillPlayerAnyMeans($.player1);
    }
    if (!(Char.IsDead($.doorman_2))) {
      $.doorman_2.setObjKillPlayerAnyMeans($.player1);
    }
    if (!(Char.IsDead($.lookoutleader))) {
      $.lookoutleader.setObjKillPlayerAnyMeans($.player1);
    }
    if (!(Char.IsDead($.lookout_1))) {
      $.lookout_1.setObjKillPlayerAnyMeans($.player1);
    }
    if (!(Char.IsDead($.lookout_2))) {
      $.lookout_2.setObjKillPlayerAnyMeans($.player1);
    }
    if (!(Char.IsDead($.lookout_3))) {
      $.lookout_3.setObjKillPlayerAnyMeans($.player1);
    }
    $.deadslut = 3;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////

async function hotel_california() {
  ///////////////////////////////////////////////////////////////////////////////////////////

  if ($.hotel_california_flag == 0) {
    if ($.player1.locateAnyMeans3D(563.4, 26.8, 47.6, 7.0, 7.0, 7.0, false /* FALSE */)) {
      if (!($.player1.isDead())) {
        World.SwapNearestBuildingModel(568.54, -4.801, 13.264, 80.0, od_chariot, od_wtsign);
        World.SwapNearestBuildingModel(568.54, -4.801, 13.264, 80.0, LODchariot, LODd_buildnew);
      }
      $.hotel_california_flag = 1;
    }
  }


  if ($.hotel_california_flag == 1) {
    if ($.player1.locateAnyMeans3D(561.9, 26.4, 18.1, 7.0, 7.0, 7.0, false /* FALSE */)) {
      if (!($.player1.isDead())) {
        World.SwapNearestBuildingModel(568.54, -4.801, 13.264, 80.0, od_wtsign, od_chariot);
        World.SwapNearestBuildingModel(568.54, -4.801, 13.264, 80.0, LODd_buildnew, LODchariot);
      }
      $.hotel_california_flag = 0;
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////

async function camera_check() {
  ///////////////////////////////////////////////////////////////////////////////////////////

  $.camera_film = $.player1.getAmmoInWeapon(WEAPONTYPE_CAMERA);
  if ($.camera_film == 0) {
    $.deadslut = 4;
  }


  if (TIMERB > 280) {
    if ($.cam_audio1 == 1) {
      if ($.cam_audio2 == 1) {
        if ($.player1.isCurrentWeapon(WEAPONTYPE_CAMERA)) {
          //	IF IS_PLAYER_SHOOTING player1

          if (Pad.IsButtonPressed(0 /* PAD1 */, 6 /* RIGHTSHOULDER1 */)) {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 12 /* CIRCLE */)) {
              Audio.PlayMissionAudio(1);
              $.cam_audio1 = 0;
              Audio.PlayMissionAudio(2);
              $.cam_audio2 = 0;
              TIMERB = 0;
              if ($.deadslut == 4) {
                while (!(Audio.HasMissionAudioFinished(1))) {
                  await asyncWait(0);
                }
                while (!(Audio.HasMissionAudioFinished(2))) {
                  await asyncWait(0);
                }
              }
            }
          }
        }
      }
    }
  }


  if ($.cam_audio1 == 0) {
    Audio.LoadMissionAudio(1, "caml" as any);
    while (!(Audio.HasMissionAudioLoaded(1))) {
      await asyncWait(0);
    }
    $.cam_audio1 = 1;
  }
  if ($.cam_audio2 == 0) {
    Audio.LoadMissionAudio(2, "camr" as any);
    while (!(Audio.HasMissionAudioLoaded(2))) {
      await asyncWait(0);
    }
    $.cam_audio2 = 1;
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  return;
  ///////////////////////////////////////////////////////////////////////////////////////////






}

export async function porn3() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************Porn 3******************************************
  // *****************************************Blackmail***************************************
  // *****************************************************************************************
  // *****************************************************************************************

  // SCRIPT_NAME porno3
  // Mission start stuff

  await mission_start_porn3();  // SCM GOSUB mission_start_porn3
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    if ($.hotel_california_flag == 1) {
      World.SwapNearestBuildingModel(568.54, -4.801, 13.264, 80.0, od_wtsign, od_chariot);
      World.SwapNearestBuildingModel(568.54, -4.801, 13.264, 80.0, LODd_buildnew, LODchariot);
    }
    await mission_failed_porn3();  // SCM GOSUB mission_failed_porn3
  }
  await mission_cleanup_porn3();  // SCM GOSUB mission_cleanup_porn3
  // MissionBoundary

  // Variables for mission
  //people

  // VAR_INT congressman
  // VAR_INT slut
  // VAR_INT stretch_limo
  // VAR_INT limo_driver
  // VAR_INT doorman_1
  // VAR_INT doorman_2
  // VAR_INT lookoutleader
  // VAR_INT lookout_1
  // VAR_INT lookout_2
  // VAR_INT lookout_3
  // VAR_INT fake_heli
  // VAR_INT middle_sexpad_doors_open2
  // VAR_INT porn_fbi1
  // VAR_INT porn_fbi2
  // VAR_INT porn_fbi3
  // VAR_INT porn_fbi4
  // VAR_INT porn_fbi5
  // VAR_INT porn_fbicar1
  // VAR_INT porn_fbicar2
  // VAR_INT porn_fbicar3


  //blips

  // VAR_INT slut_blip
  // VAR_INT porn_studio
  // VAR_INT pic_blip
  // VAR_INT fake_heli_blip

  //flags

  // VAR_INT locator_flag
  // VAR_INT slut_in_car
  // VAR_INT deadslut
  // VAR_INT lookoutleader_moved
  // VAR_INT lookout_1_moved
  // VAR_INT lookout_2_moved
  // VAR_INT lookout_3_moved
  // VAR_INT candy_out_count
  // VAR_INT hotel_california_flag
  // VAR_INT help_cam
  // VAR_INT help_cam_msg
  // VAR_INT speech_played_porn3
  // VAR_INT camera_film
  // VAR_INT where_candy
  // VAR_INT where_alex
  // VAR_INT cam_audio1
  // VAR_INT cam_audio2
  // VAR_INT porn_fbi_created
  // VAR_INT pictures_taken

  // ****************************************Mission Start************************************

}
