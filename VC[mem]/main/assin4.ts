// Generated from main/assin4.sc

import { $ } from "../vars.mts";

async function mission_start_assin4() {



  ONMISSION = 1;


  Stat.RegisterMissionGiven();



  await asyncWait(0);


  Text.LoadMissionText("ASSIN4");

  /////////////////////////////////////////////////////////////////////////////////////cutscene
  //request models


  Streaming.RequestModel(WMORI);
  Streaming.RequestModel(HFYBU);
  Streaming.RequestModel(178 /* UZI */);
  Streaming.RequestModel(cellphone);



  while (!(Streaming.HasModelLoaded(WMORI)) || !(Streaming.HasModelLoaded(HFYBU)) || !(Streaming.HasModelLoaded(cellphone)) || !(Streaming.HasModelLoaded(178 /* UZI */))) {
    await asyncWait(0);
  }



  Streaming.LoadSpecialCharacter(1, "BGa");
  Streaming.LoadSpecialCharacter(2, "BGb");


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }



  World.SetPedDensityMultiplier(0.0);
  World.SetCarDensityMultiplier(0.0);


  Hud.SwitchWidescreen(true /* ON */);


  World.ClearArea(38.396473, -1023.987854, 9.450843, 4.0, false /* FALSE */);
  World.ClearAreaOfChars(-1475.2427, -832.872, 10.164, -1489.9095, 819.0943, 18.669);


  $.player1.setCoordinates(-1482.1144, -825.2285, 13.8377);
  $.player1.setHeading(100.2630);



  Camera.SetFixedPosition(-1479.543823, -825.329487, 15.017683, 0.0, 0.0, 0.0);
  Camera.PointAtPlayer($.player1, 4 /* FOLLOWPED */, 2 /* JUMP_CUT */);
  Camera.SetBehindPlayer();
  $.scplayer.setAnsweringMobile(true /* TRUE */);


  Audio.LoadMissionAudio(1, "job4_1" as any);
  Audio.LoadMissionAudio(2, "job4_2" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }



  Camera.DoFade(1000, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Text.PrintNow("ASM4_A", 10000, 1);
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.scplayer))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endasm4cs (not lowered; manual jump required)
      throw new Error("unresolved GOTO endasm4cs"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("ASM4_A");
  Audio.ClearMissionAudio(1);


  World.ClearArea(-1474.531030, -826.005554, 15.007619, 3.0, false /* FALSE */);
  Camera.SetFixedPosition(-1475.931030, -826.005554, 15.007619, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1476.763478, -825.451660, 14.993659, 2 /* JUMP_CUT */);


  Text.PrintNow("ASM4_B", 10000, 1);
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.scplayer))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endasm4cs (not lowered; manual jump required)
      throw new Error("unresolved GOTO endasm4cs"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("ASM4_B");
  Audio.ClearMissionAudio(2);


  Audio.LoadMissionAudio(1, "job4_3" as any);


  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
  }


  Camera.SetFixedPosition(-1484.055, -825.312, 16.729959, 0.0, 0.0, 0.0);
  Camera.PointAtPlayer($.player1, 15 /* FIXED */, 2 /* JUMP_CUT */);


  Text.PrintNow("ASM4_C", 10000, 1);
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.scplayer))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endasm4cs (not lowered; manual jump required)
      throw new Error("unresolved GOTO endasm4cs"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("ASM4_C");
  Audio.ClearMissionAudio(1);
}




async function endasm4cs() {


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

  //values for variables

  $.playerintialx = -1493.219;
  $.playerintialy = -798.9757;
  $.playerintialz = 14.868;

  //woman's location

  $.womanlocationx = -1421.1810;
  $.womanlocationy = -874.6884;
  $.womanlocationz = 19.8471;
  $.womanheading_a3 = 289.0250;

  //mans location

  $.mantgtlocationx = -1388.917725;
  $.mantgtlocationy = -865.028259;
  $.mantgtlocationz = 13.877681;
  $.mantgtheading = 50.33542;

  //mans destination

  $.mantgtdestx = -1360.6705;
  $.mantgtdesty = -930.4258;
  $.mantgtdestz = 19.8531;


  //bodyguard1 location

  $.bodyguard1_am4x = -1387.584473;
  $.bodyguard1_am4y = -865.244819;
  $.bodyguard1_am4z = 13.877681;
  $.bodyguard1_am4h = 65.236931;


  //sniper rifles location

  $.sniperiflex = -1484.7800;
  $.sniperifley = -807.7946;
  $.sniperiflez = 14.878;

  //destination blip

  $.destinationx_am4 = -676.240548;
  $.destinationy_am4 = 1197.764;
  $.destinationz_am4 = 10.07;




  //flags

  $.has_sniper_been_picked_up = 0;
  $.woman_started_moving = 0;
  $.sniper_flag = 0;
  $.otherweapon_flag = 0;
  $.assassin4flag = 0;
  $.womancango = 0;
  $.bodyguardstoplooking = 0;
  $.mantgtdeaddropdacase = 0;
  $.takecasetoammu_a4 = 0;
  $.playerhasbeenseen_am4 = 0;



  $.charnowrun_am4 = 0;
  $.displaybar_am4 = 0;
  $.displaydistancebar_am4 = 0;


  $.has_char_been_damage_flag = 0;
  $.targetwalk_am4 = 0;
  TIMERA = 0;

  //chasecars
  //chasing cars

  $.chasecar1x_am4 = -1152.279;
  $.chasecar1y_am4 = -939.467;
  $.chasecar1z_am4 = 14.688;
  $.chasecar1heading_am4 = 88.806;
  $.chasecar1_am4ready = 0;


  $.chasecar2x_am4 = -1163.085693;
  $.chasecar2y_am4 = -948.913147;
  $.chasecar2z_am4 = 14.681449;
  $.chasecar2heading_am4 = 89.2464;
  $.chasecar2_am4ready = 0;


  $.chasecar3x_am4 = -1139.196899;
  $.chasecar3y_am4 = -1086.208195;
  $.chasecar3z_am4 = 14.716681;
  $.chasecar3heading_am4 = 295.4019852;
  $.chasecar3_am4ready = 0;


  $.killplayeronfoot1 = 0;
  $.killplayeronfoot2 = 0;
  $.killplayeronfoot3 = 0;




  //create sniper rifle

  $.sniperifle = Pickup.CreateWithAmmo(7 /* SNIPER */, 3 /* PICKUP_ONCE */, 10, $.sniperiflex, $.sniperifley, $.sniperiflez);
  $.sniperifleblip = Blip.AddForPickup($.sniperifle);


  Text.PrintNow("ASM4_15", 5000, 2); //get the rifle


  Zone.SetPedInfo("TERMINL", 1 /* DAY */, 50, 0, 0, 0, 0, 25, 0, 0, 0, 0, 10);
  Zone.SetPedInfo("TERMINL", 0 /* NIGHT */, 50, 0, 0, 0, 0, 25, 0, 0, 0, 0, 10);


  Path.SwitchPedRoadsOff(-1424.0383, -876.6656, 10.8537, -1422.4224, -873.6301, 29.8434);
  Path.SwitchPedRoadsOff(-1407.0588, -869.3946, -5.8549, -1408.6564, -873.5172, 23.8402);
  Path.SwitchPedRoadsOff(-1385.1227, -855.1205, 10.0263, -1383.9521, -853.1511, 28.5218);
  Path.SwitchPedRoadsOff(-1386.2469, -863.7204, 8.8377, -1393.2700, -859.9062, 16.8377);
}





async function assin4loop() {
  // SCM GOTO → assin4loop lowered to endless loop
  while (true) {


    await asyncWait(0);

    //has player collected sniper rifle

    if ($.assassin4flag == 0) {
      if ($.sniperifle.hasBeenCollected()) {


        Hud.SwitchWidescreen(true /* ON */);
        $.player1.setControl(false /* OFF */);

        //create woman
        $.woman = Char.Create(4 /* PEDTYPE_CIVMALE */, HFYBU, $.womanlocationx, $.womanlocationy, $.womanlocationz);
        $.woman.setOnlyDamagedByPlayer(true /* TRUE */);
        $.woman.setHeading($.womanheading_a3);
        $.womanblip = Blip.AddForChar($.woman);
        $.woman.clearThreatSearch();
        $.woman.setAsPlayerFriend($.player1, true /* TRUE */);
        $.woman.setWaitState(13 /* WAITSTATE_LOOK_ABOUT */, 15000);

        //create target
        $.mantgt = Char.Create(4 /* PEDTYPE_CIVMALE */, WMORI, $.mantgtlocationx, $.mantgtlocationy, $.mantgtlocationz);
        $.mantgt.setOnlyDamagedByPlayer(true /* TRUE */);
        $.mantgt.setHeading($.mantgtheading);
        $.mantgt.setWaitState(13 /* WAITSTATE_LOOK_ABOUT */, 50000);
        $.mantgt.clearThreatSearch();
        $.mantgt.setStayInSamePlace(true /* TRUE */);

        //create bodyguard1
        $.bodyguard1_am4 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, $.bodyguard1_am4x, $.bodyguard1_am4y, $.bodyguard1_am4z);
        $.bodyguard1_am4.setHeading($.bodyguard1_am4h);
        $.bodyguard1_am4.giveWeapon(3 /* WEAPONTYPE_UZI */, 300000);
        $.bodyguard1_am4.followChar($.mantgt);
        $.bodyguard1_am4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.bodyguard1_am4.clearThreatSearch();
        $.bodyguard1_am4.setStayInSamePlace(true /* TRUE */);
        $.bodyguard1_am4.setOnlyDamagedByPlayer(true /* TRUE */);
        Camera.SetFixedPosition(-1488.089478, -811.891785, 16.87549, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(-1487.585083, -812.754456, 16.912481, 2 /* JUMP_CUT */);

        // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
        // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
        // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
        World.ClearArea($.womanlocationx, $.womanlocationy, $.womanlocationz, 75.0, false /* FALSE */);
        World.ClearArea($.mantgtlocationx, $.mantgtlocationy, $.mantgtlocationz, 75.0, false /* FALSE */);
        // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
        // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
        // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX

        TIMERA = 0;
        while (TIMERA < 5000) {
          await asyncWait(0);
          Text.PrintNow("ASM4_16", 5000, 2); //watch the woman
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
            // SCM GOTO → end_of_assassin4_cutscene (not lowered; manual jump required)
            throw new Error("unresolved GOTO end_of_assassin4_cutscene"); // fallback: would break linear control flow
          }


        }
        Camera.SetFixedPosition(-1419.44557, -874.218567, 21.14, 0.0, 0.0, 0.0);
        if (!(Char.IsDead($.woman))) {
          Camera.PointAtChar($.woman, 15 /* FIXED */, 2 /* JUMP_CUT */);
        }
        TIMERA = 0;
        while (TIMERA < 5000) {
          await asyncWait(0);
          Text.PrintNow("ASM4_17", 5000, 2); //only once the...
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
            // SCM GOTO → end_of_assassin4_cutscene (not lowered; manual jump required)
            throw new Error("unresolved GOTO end_of_assassin4_cutscene"); // fallback: would break linear control flow
          }


        }
        Camera.SetFixedPosition(-1407.900635, -847.959961, 19.56, 0.0, 0.0, 0.0);
        if (!(Char.IsDead($.woman))) {
          Camera.PointAtChar($.woman, 15 /* FIXED */, 2 /* JUMP_CUT */);
        }
        TIMERA = 0;
        while (TIMERA < 5000) {
          await asyncWait(0);
          Text.PrintNow("ASM4_18", 5000, 2); //once target is dead take case...
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
            // SCM GOTO → end_of_assassin4_cutscene (not lowered; manual jump required)
            throw new Error("unresolved GOTO end_of_assassin4_cutscene"); // fallback: would break linear control flow
          }


        }
        Camera.SetFixedPosition(-1443.797119, -858.372863, 19.361, 0.0, 0.0, 0.0);
        if (!(Char.IsDead($.woman))) {
          Camera.PointAtChar($.woman, 15 /* FIXED */, 2 /* JUMP_CUT */);
        }
        TIMERA = 0;
        while (TIMERA < 6000) {
          await asyncWait(0);
          Text.PrintNow("ASM4_19", 6000, 2); //distance bar
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
            // SCM GOTO → end_of_assassin4_cutscene (not lowered; manual jump required)
            throw new Error("unresolved GOTO end_of_assassin4_cutscene"); // fallback: would break linear control flow
          }


        }
        TIMERA = 0;
        while (TIMERA < 5000) {
          await asyncWait(0);
          Text.PrintNow("ASM4_20", 5000, 2); //distance bar
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
            // SCM GOTO → end_of_assassin4_cutscene (not lowered; manual jump required)
            throw new Error("unresolved GOTO end_of_assassin4_cutscene"); // fallback: would break linear control flow
          }


        }



        // SCM label end_of_assassin4_cutscene
        Text.ClearPrints();
        Hud.SwitchWidescreen(false /* OFF */);
        $.player1.setControl(true /* ON */);
        Camera.RestoreJumpcut();
        $.assassin4flag = 1;
        TIMERA = 0;
      }
    }

    //woman walks to man

    if ($.assassin4flag == 1) {
      if (TIMERA > 15000) {
        if (!(Char.IsDead($.woman))) {
          if (!(Char.IsDead($.mantgt))) {
            $.woman.setObjWalkToChar($.mantgt);
            TIMERA = 0;
            $.assassin4flag = 2;
          }
        }
      }
    }

    //they talk for 20 seconds

    if ($.assassin4flag == 2) {
      if (!(Char.IsDead($.woman))) {
        if (!(Char.IsDead($.mantgt))) {
          if (!(Char.IsDead($.bodyguard1_am4))) {
            if ($.woman.isObjectivePassed() || TIMERA > 120000) {
              $.woman.setObjNoObj();
              $.mantgt.setWaitState(0 /* WAITSTATE_FALSE */, 100);
              $.bodyguard1_am4.lookAtCharAlways($.woman);
              Game.SetCharsChatting($.woman, $.mantgt, 5000);
              TIMERA = 0;
              $.assassin4flag = 3;
              $.womancango = 1;
              $.bodyguardstoplooking = 1;
            }
          }
        }
      }
    }


    //stop the bodyguards from looking at the woman when she goes

    if (TIMERA > 5000) {
      if ($.bodyguardstoplooking == 1) {
        if (!(Char.IsDead($.bodyguard1_am4))) {
          $.bodyguard1_am4.stopLooking();
          $.bodyguard1_am4.setStayInSamePlace(false /* FALSE */);
          $.bodyguardstoplooking = 2;
        }
      }
    }




    if (TIMERA > 5000) {
      if ($.womancango == 1) {
        if (!(Char.IsDead($.woman))) {
          $.woman.wanderDir(-1);
          $.womanblip.remove();
          $.womancango = 2;
        }
      }
    }



    if ($.assassin4flag == 3) {
      if (!(Char.IsDead($.mantgt))) {
        if (TIMERA > 4999) {
          $.mantgt.setObjGotoCoordOnFoot(-1389.7546, -859.1885);
          TIMERB = 0;
          $.assassin4flag = 4;
        }
      }
    }


    // calling it everysecond just to make sure

    if (!(Char.IsDead($.mantgt))) {
      if ($.assassin4flag > 3) {
        if ($.targetwalk_am4 == 0) {
          $.mantgt.setObjGotoCoordOnFoot(-1392.8293, -862.1075);
          $.targetwalk_am4 = 1;
        }
        if ($.targetwalk_am4 == 1) {
          if ($.mantgt.locateStoppedOnFoot2D(-1392.8293, -862.1075, 1.0, 1.0, false /* FALSE */)) {
            $.mantgt.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 1000);
            TIMERA = 0;
            $.targetwalk_am4 = 2;
          }
        }
        if ($.targetwalk_am4 == 2) {
          if (TIMERA > 1000) {
            $.mantgt.setWaitState(0 /* WAITSTATE_FALSE */, 100);
            $.mantgt.setObjGotoCoordOnFoot(-1389.6743, -859.1384);
            $.targetwalk_am4 = 3;
          }
        }
        if ($.targetwalk_am4 == 3) {
          if ($.mantgt.locateStoppedOnFoot2D(-1389.6743, -859.1384, 1.0, 1.0, false /* FALSE */)) {
            $.mantgt.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 2000);
            TIMERA = 0;
            $.targetwalk_am4 = 4;
          }
        }
        if ($.targetwalk_am4 == 4) {
          if (TIMERA > 2000) {
            $.mantgt.setWaitState(0 /* WAITSTATE_FALSE */, 100);
            $.mantgt.setObjGotoCoordOnFoot(-1380.3147, -850.1871);
            $.targetwalk_am4 = 5;
          }
        }
        if ($.targetwalk_am4 == 5) {
          if ($.mantgt.locateStoppedOnFoot2D(-1380.3147, -850.1871, 1.0, 1.0, false /* FALSE */)) {
            $.targetwalk_am4 = 6;
          }
        }
        if ($.charnowrun_am4 == 0) {
          if ($.targetwalk_am4 == 6) {
            if (TIMERB > 1000) {
              $.mantgt.followPath($.mantgtdestx, $.mantgtdesty, $.mantgtdestz, 2.0, WALK);
              TIMERB = 0;
            }
          }
        }
        if ($.charnowrun_am4 == 1) {
          if ($.targetwalk_am4 == 6) {
            if (TIMERB > 1000) {
              $.mantgt.followPath($.mantgtdestx, $.mantgtdesty, $.mantgtdestz, 2.0, RUN);
              TIMERB = 0;
            }
          }
        }


      }
    }




    if ($.assassin4flag > 3) {
      if (!(Char.IsDead($.mantgt))) {
        const _res32 = $.mantgt.getCoordinates();
$.mantgtlastx = _res32.x;
$.mantgtlasty = _res32.y;
$.mantgtlastz = _res32.z;
      }
    }


    if ($.assassin4flag > 3) {
      if (Char.IsDead($.mantgt)) {
        if ($.mantgtdeaddropdacase == 0) {
          $.briefcase_playerhastoget = Pickup.Create(1319 /* BRIEFCASE */, 3 /* PICKUP_ONCE */, $.mantgtlastx, $.mantgtlasty, $.mantgtlastz);
          $.briefcase_playerhastogetblip = Blip.AddForPickup($.briefcase_playerhastoget);
          Text.PrintNow("ASM4_21", 5000, 2);
          Hud.ClearCounter($.$id.intdistancebar_am4);
          $.player1.alterWantedLevel(2);
          $.player1.setMood(PLAYER_MOOD_ANGRY, 300000);
          Zone.SetPedInfo("TERMINL", 1 /* DAY */, 13, 0, 0, 0, 0, 5, 0, 0, 0, 0, 5);
          Zone.SetPedInfo("TERMINL", 0 /* NIGHT */, 4, 0, 0, 0, 0, 5, 0, 0, 0, 0, 5);
          if (!(Char.IsDead($.bodyguard1_am4))) {
            $.bodyguard1_am4.leaveGroup();
            $.bodyguard1_am4.setObjKillPlayerOnFoot($.player1);
          }
          $.assassin4flag = -1;
          $.takecasetoammu_a4 = 1;
          $.mantgtdeaddropdacase = 1;
        }
      }
    }

    //Display distance bar

    if ($.assassin4flag == 1) {
      if ($.displaydistancebar_am4 == 1) {
        if ($.displaybar_am4 == 0) {
          Hud.DisplayCounterWithString($.$id.intdistancebar_am4, 1 /* COUNTER_DISPLAY_BAR */, "ASM4_12");
          $.displaydistancebar_am4 = 2;
          $.displaybar_am4 = 1;
        }
      }
    }


    //Distance bar

    if ($.assassin4flag > 0) {
      if (!(Char.IsDead($.mantgt))) {
        const _res33 = $.player1.getCoordinates();
$.playerxdist_am4 = _res33.x;
$.playerydist_am4 = _res33.y;
$.playerzdist_am4 = _res33.z;
        const _res34 = $.mantgt.getCoordinates();
$.mandistx_am4 = _res34.x;
$.mandisty_am4 = _res34.y;
$.mandistz_am4 = _res34.z;
        $.distance_am4 = Math.GetDistanceBetweenCoords2D($.playerxdist_am4, $.playerydist_am4, $.mandistx_am4, $.mandisty_am4);
        if ($.distance_am4 > 69.0) {
          $.distance_am4 = 70.0;
        }
        if ($.distance_am4 < 36.0) {
          $.distance_am4 = 35.0;
        }
        $.distancecalc_am4 = 70.0 - $.distance_am4;
        $.distancebar_am4 = $.distancecalc_am4 / 0.35;
        $.intdistancebar_am4 = $.distancebar_am4;
        $.displaydistancebar_am4 = 1;


      }
    }


    //if player is seen by char after conversation

    if ($.assassin4flag > 3) {
      if (!(Char.IsDead($.mantgt))) {
        if ($.intdistancebar_am4 > 97) {
          if ($.charnowrun_am4 == 0) {
            Text.PrintNow("ASM4_23", 5000, 2);
            Hud.ClearCounter($.$id.intdistancebar_am4);
            if (!(Char.IsDead($.bodyguard1_am4))) {
              $.bodyguard1_am4.leaveGroup();
              $.bodyguard1_am4.setObjKillPlayerOnFoot($.player1);
            }
            $.charnowrun_am4 = 1;
          }
        }
      }
    }


    //player fires sniper rifle in area and misses after he gets the case

    if ($.assassin4flag > 3) {
      if (!(Char.IsDead($.mantgt))) {
        if ($.player1.locateAnyMeansChar3D($.mantgt, 40.0, 40.0, 20.0, false /* FALSE */)) {
          if ($.player1.isShooting()) {
            if ($.charnowrun_am4 == 0) {
              Text.PrintNow("ASM4_23", 5000, 2);
              Hud.ClearCounter($.$id.intdistancebar_am4);
              if (!(Char.IsDead($.bodyguard1_am4))) {
                $.bodyguard1_am4.leaveGroup();
                $.bodyguard1_am4.setObjKillPlayerOnFoot($.player1);
              }
              $.charnowrun_am4 = 1;
            }
          }
        }
      }


    }

    //player damages one of the bodyguards

    if ($.assassin4flag > 3) {
      if ($.has_char_been_damage_flag == 0) {


        if ($.bodyguard1_am4.hasBeenDamagedByChar($.scplayer)) {
          Text.PrintNow("ASM4_23", 5000, 2);
          if (!(Char.IsDead($.bodyguard1_am4))) {
            $.bodyguard1_am4.leaveGroup();
            $.bodyguard1_am4.setObjKillPlayerOnFoot($.player1);


          }
          if (!(Char.IsDead($.bodyguard1_am4))) {
            $.bodyguard1_am4.clearLastDamageEntity();
          }
          Hud.ClearCounter($.$id.intdistancebar_am4);
          $.charnowrun_am4 = 1;
          $.has_char_been_damage_flag = 1;


        }
        if ($.mantgt.hasBeenDamagedByChar($.scplayer)) {
          Text.PrintNow("ASM4_23", 5000, 2);
          if (!(Char.IsDead($.bodyguard1_am4))) {
            $.bodyguard1_am4.leaveGroup();
            $.bodyguard1_am4.setObjKillPlayerOnFoot($.player1);
          }
          if (!(Char.IsDead($.mantgt))) {
            $.mantgt.clearLastDamageEntity();
          }
          Hud.ClearCounter($.$id.intdistancebar_am4);
          $.charnowrun_am4 = 1;
          $.has_char_been_damage_flag = 1;


        }



      }
    }


    //character runs after picks up briefcase
    //IF TIMERB > 1000		   // calling it everysecond just to make sure
    //	IF NOT IS_CHAR_DEAD mantgt
    //		IF charnowrun_am4 = 1
    //			IF assassin4flag > 3
    //				CHAR_FOLLOW_PATH mantgt mantgtdestx mantgtdesty mantgtdestz	2.0 RUN
    //				TIMERB = 0
    //			ENDIF
    //		ENDIF
    //	ENDIF
    //ENDIF


    //////////////////////////////////////////////////////////	GETTING BACK TO AMMUNATION /////////////////////////////////////////////////////

    //add the blip for ammunation and create cars

    if ($.takecasetoammu_a4 == 1) {
      if ($.briefcase_playerhastoget.hasBeenCollected()) {
        Streaming.MarkModelAsNoLongerNeeded(WMORI);
        Streaming.MarkModelAsNoLongerNeeded(HFYBU);
        $.mantgt.markAsNoLongerNeeded();
        Streaming.RequestModel(maverick);
        Streaming.RequestModel(admiral);
        while (!(Streaming.HasModelLoaded(maverick)) || !(Streaming.HasModelLoaded(admiral))) {
          await asyncWait(0);
        }
        $.heli_am4 = Car.Create(maverick, -1369.4320, -1256.7871, 17.3662);
        $.heli_am4.setHeading(308.4397);
        $.briefcase_playerhastogetblip.remove();
        Text.PrintNow("ASM4_22", 5000, 2);
        $.ammunationblip_a4 = Blip.AddForCoord($.destinationx_am4, $.destinationy_am4, $.destinationz_am4);


        //1st car in car park
        $.chasecar1_am4 = Car.Create(admiral, $.chasecar1x_am4, $.chasecar1y_am4, $.chasecar1z_am4);
        $.chasecar1_am4.changeColor(0 /* CARCOLOUR_BLACK */, 0 /* CARCOLOUR_BLACK */);
        $.chasecar1_am4.setHeading($.chasecar1heading_am4);
        $.chasedriver1_am4 = Char.CreateInsideCar($.chasecar1_am4, 4 /* PEDTYPE_CIVMALE */, SPECIAL01);
        $.chasedriver1_am4.setCanBeShotInVehicle(false /* FALSE */);
        $.chaseshooter1_am4 = Char.CreateAsPassenger($.chasecar1_am4, 4 /* PEDTYPE_CIVMALE */, SPECIAL02, 0);
        $.chasecar1_am4.setIdle();
        $.chasecar1_am4.lockDoors(2 /* CARLOCK_LOCKED */);
        $.chasecar1_am4.setOnlyDamagedByPlayer(true /* TRUE */);
        $.chasecar1_am4ready = 1;

        //2nd car in car park
        $.chasecar2_am4 = Car.Create(admiral, $.chasecar2x_am4, $.chasecar2y_am4, $.chasecar2z_am4);
        $.chasecar2_am4.changeColor(0 /* CARCOLOUR_BLACK */, 0 /* CARCOLOUR_BLACK */);
        $.chasecar2_am4.setHeading($.chasecar2heading_am4);
        $.chasedriver2_am4 = Char.CreateInsideCar($.chasecar2_am4, 4 /* PEDTYPE_CIVMALE */, SPECIAL02);
        $.chasedriver2_am4.setCanBeShotInVehicle(false /* FALSE */);
        $.chaseshooter2_am4 = Char.CreateAsPassenger($.chasecar2_am4, 4 /* PEDTYPE_CIVMALE */, SPECIAL01, 0);
        $.chasecar2_am4.setIdle();
        $.chasecar2_am4.lockDoors(2 /* CARLOCK_LOCKED */);
        $.chasecar2_am4ready = 1;

        //3rd car waiting near junction near car park
        $.chasecar3_am4 = Car.Create(admiral, $.chasecar3x_am4, $.chasecar3y_am4, $.chasecar3z_am4);
        $.chasecar3_am4.changeColor(0 /* CARCOLOUR_BLACK */, 0 /* CARCOLOUR_BLACK */);
        $.chasecar3_am4.setHeading($.chasecar3heading_am4);
        $.chasedriver3_am4 = Char.CreateInsideCar($.chasecar3_am4, 4 /* PEDTYPE_CIVMALE */, SPECIAL02);
        $.chasedriver3_am4.setCanBeShotInVehicle(false /* FALSE */);
        $.chaseshooter3_am4 = Char.CreateAsPassenger($.chasecar3_am4, 4 /* PEDTYPE_CIVMALE */, SPECIAL01, 0);
        $.chasecar3_am4.setIdle();
        $.chasecar3_am4.lockDoors(2 /* CARLOCK_LOCKED */);
        $.chasecar3_am4.setOnlyDamagedByPlayer(true /* TRUE */);
        $.chasecar3_am4ready = 1;
        $.takecasetoammu_a4 = 2;


      }
    }



    if ($.takecasetoammu_a4 == 2) {

      ////////////////////////////////////////////////////////////	1ST CHASING CAR		///////////////////////////////////////////////////
      if ($.chasecar1_am4ready == 1) {
        if (!(Car.IsDead($.chasecar1_am4))) {
          if ($.player1.isInArea2D(-1212.973, -828.562, -1187.989, -985.38, false /* FALSE */) || !($.chasecar1_am4.isHealthGreater(998))) {
            if (!(Char.IsDead($.chasedriver1_am4))) {
              if (!(Char.IsDead($.chaseshooter1_am4))) {
                if ($.chasedriver1_am4.isInAnyCar()) {
                  if ($.chaseshooter1_am4.isInAnyCar()) {
                    $.chasecar1_am4.setCruiseSpeed(70.0);
                    $.chasecar1_am4.gotoCoordinatesAccurate(-1202.134766, -937.37207, 14.65);
                    $.chasecar1_am4.setHeavy(true /* TRUE */);
                    $.chasecar1_am4ready = 2;
                  }
                }
              }
            }
          }
        }
      }
      if ($.chasecar1_am4ready == 2) {
        if (!(Char.IsDead($.chasedriver1_am4))) {
          if (!(Char.IsDead($.chaseshooter1_am4))) {
            if (!(Car.IsDead($.chasecar1_am4))) {
              if ($.chasedriver1_am4.isInAnyCar()) {
                if ($.chaseshooter1_am4.isInAnyCar()) {
                  if ($.chasecar1_am4.locate2D(-1202.134766, -937.37207, 7.0, 7.0, false /* FALSE */)) {
                    $.chasecar1_am4.setMission(4 /* MISSION_BLOCKPLAYER_FARAWAY */);
                    $.chasecar1_am4ready = 3;
                  }
                }
              }
            }
          }
        }
      }
      if ($.chasecar1_am4ready == 3) {
        if (!(Char.IsDead($.chasedriver1_am4))) {
          if (!(Char.IsDead($.chaseshooter1_am4))) {
            if (!(Car.IsDead($.chasecar1_am4))) {
              if ($.chasedriver1_am4.isInAnyCar()) {
                if ($.player1.locateAnyMeansCar2D($.chasecar1_am4, 30.0, 30.0, false /* FALSE */)) {
                  const _res35 = $.chasecar1_am4.getCoordinates();
$.chasecar1x_am4 = _res35.x;
$.chasecar1y_am4 = _res35.y;
$.chasecar1z_am4 = _res35.z;
                  $.chaseshooter1_am4.delete();
                  $.chasecar1z_am4 = $.chasecar1z_am4 - 20.0;
                  $.chaseshooter1_am4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, $.chasecar1x_am4, $.chasecar1y_am4, $.chasecar1z_am4);
                  $.chaseshooter1_am4.attachToCar($.chasecar1_am4, 0.0, -0.3, 0.8, 0 /* FACING_FORWARD */, 360.0, 3 /* WEAPONTYPE_UZI */);
                  $.chaseshooter1_am4.addAmmo(3 /* WEAPONTYPE_UZI */, 3000);
                  $.chaseshooter1_am4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                  $.chaseshooter1_am4.setStayInSamePlace(true /* TRUE */);
                  $.chaseshooter1_am4.setObjKillPlayerOnFoot($.player1);
                  $.chasecar1_am4.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
                  $.chasecar1_am4.setMission(4 /* MISSION_BLOCKPLAYER_FARAWAY */);
                  $.chasecar1_am4ready = 4;
                }
              }
            }
          }
        }
      }


      if ($.chasecar1_am4ready == 4) {
        if (!(Char.IsDead($.chaseshooter1_am4))) {
          if ($.killplayeronfoot1 == 0) {
            if ($.player1.isInAnyCar()) {
              $.players_car1_am4 = $.player1.storeCarIsInNoSave();
              $.chaseshooter1_am4.setObjDestroyCar($.players_car1_am4);
              $.killplayeronfoot1 = 1;
            }
          }
          if ($.killplayeronfoot1 == 1) {
            if (!($.player1.isInAnyCar())) {
              $.chaseshooter1_am4.setObjKillPlayerOnFoot($.player1);
              $.killplayeronfoot1 = 0;
            }
          }


        }
      }
      ////////////////////////////////////////////////////////////	2ND CHASING CAR		///////////////////////////////////////////////////
      if ($.chasecar2_am4ready == 1) {
        if (!(Car.IsDead($.chasecar2_am4))) {
          if ($.player1.isInArea2D(-1212.973, -828.562, -1187.989, -985.38, false /* FALSE */) || !($.chasecar2_am4.isHealthGreater(998))) {
            if (!(Char.IsDead($.chasedriver2_am4))) {
              if (!(Char.IsDead($.chaseshooter2_am4))) {
                if ($.chasedriver2_am4.isInAnyCar()) {
                  if ($.chaseshooter2_am4.isInAnyCar()) {
                    $.chasecar2_am4.setCruiseSpeed(70.0);
                    $.chasecar2_am4.gotoCoordinates(-1202.935, -947.956, 14.534);
                    $.chasecar2_am4ready = 2;
                  }
                }
              }
            }
          }
        }
      }
      if ($.chasecar2_am4ready == 2) {
        if (!(Char.IsDead($.chasedriver2_am4))) {
          if (!(Char.IsDead($.chaseshooter2_am4))) {
            if (!(Car.IsDead($.chasecar2_am4))) {
              if ($.chasedriver2_am4.isInAnyCar()) {
                if ($.chaseshooter2_am4.isInAnyCar()) {
                  if ($.chasecar2_am4.locate2D(-1202.935, -947.956, 10.0, 10.0, false /* FALSE */)) {
                    $.chasecar2_am4.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
                    $.chasecar2_am4ready = 3;
                  }
                }
              }
            }
          }
        }
      }
      if ($.chasecar2_am4ready == 3) {
        if (!(Char.IsDead($.chasedriver2_am4))) {
          if (!(Char.IsDead($.chaseshooter2_am4))) {
            if (!(Car.IsDead($.chasecar2_am4))) {
              if ($.chasedriver2_am4.isInAnyCar()) {
                if ($.player1.locateAnyMeansCar2D($.chasecar2_am4, 30.0, 30.0, false /* FALSE */)) {
                  const _res36 = $.chasecar2_am4.getCoordinates();
$.chasecar2x_am4 = _res36.x;
$.chasecar2y_am4 = _res36.y;
$.chasecar2z_am4 = _res36.z;
                  $.chaseshooter2_am4.delete();
                  $.chasecar2z_am4 = $.chasecar2z_am4 - 20.0;
                  $.chaseshooter2_am4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, $.chasecar2x_am4, $.chasecar2y_am4, $.chasecar2z_am4);
                  $.chaseshooter2_am4.attachToCar($.chasecar2_am4, 0.0, -0.3, 0.8, 0 /* FACING_FORWARD */, 360.0, 3 /* WEAPONTYPE_UZI */);
                  $.chaseshooter2_am4.addAmmo(3 /* WEAPONTYPE_UZI */, 3000);
                  $.chaseshooter2_am4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                  $.chaseshooter2_am4.setStayInSamePlace(true /* TRUE */);
                  $.chaseshooter2_am4.setObjKillPlayerOnFoot($.player1);
                  $.chasecar2_am4.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
                  $.chasecar2_am4ready = 4;
                }
              }
            }
          }
        }
      }
      if ($.chasecar2_am4ready == 4) {
        if (!(Char.IsDead($.chaseshooter2_am4))) {
          if ($.killplayeronfoot2 == 0) {
            if ($.player1.isInAnyCar()) {
              $.players_car1_am4 = $.player1.storeCarIsInNoSave();
              $.chaseshooter2_am4.setObjDestroyCar($.players_car1_am4);
              $.killplayeronfoot2 = 1;
            }
          }
          if ($.killplayeronfoot2 == 1) {
            if (!($.player1.isInAnyCar())) {
              $.chaseshooter2_am4.setObjKillPlayerOnFoot($.player1);
              $.killplayeronfoot2 = 0;
            }
          }


        }
      }


      //////////////////////////////////////////////////////////////	3rd CAR WAITING FOR PLAYER	////////////////////////////////////////////////////

      if ($.chasecar3_am4ready == 1) {
        if (!(Char.IsDead($.chasedriver3_am4))) {
          if (!(Car.IsDead($.chasecar3_am4))) {
            if ($.chasedriver3_am4.isInAnyCar()) {
              if ($.player1.locateAnyMeansCar2D($.chasecar3_am4, 25.0, 25.0, false /* FALSE */) || !($.chasecar3_am4.isHealthGreater(998))) {
                $.chasecar3_am4.setCruiseSpeed(70.0);
                $.chasecar3_am4.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
                $.chasecar3_am4.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
                $.chasecar3_am4.setHeavy(true /* TRUE */);
                $.chasecar3_am4ready = 2;
              }
            }
          }
        }
      }


      if ($.chasecar3_am4ready == 2) {
        if (!(Char.IsDead($.chasedriver3_am4))) {
          if (!(Char.IsDead($.chaseshooter3_am4))) {
            if (!(Car.IsDead($.chasecar3_am4))) {
              if ($.chasedriver3_am4.isInAnyCar()) {
                if ($.player1.locateAnyMeansCar2D($.chasecar3_am4, 25.0, 25.0, false /* FALSE */)) {
                  const _res37 = $.chasecar3_am4.getCoordinates();
$.chasecar3x_am4 = _res37.x;
$.chasecar3y_am4 = _res37.y;
$.chasecar3z_am4 = _res37.z;
                  $.chaseshooter3_am4.delete();
                  $.chasecar3z_am4 = $.chasecar3z_am4 - 20.0;
                  $.chaseshooter3_am4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, $.chasecar3x_am4, $.chasecar3y_am4, $.chasecar3z_am4);
                  $.chaseshooter3_am4.attachToCar($.chasecar3_am4, 0.0, -0.3, 0.8, 0 /* FACING_FORWARD */, 360.0, 3 /* WEAPONTYPE_UZI */);
                  $.chaseshooter3_am4.addAmmo(3 /* WEAPONTYPE_UZI */, 3000);
                  $.chaseshooter3_am4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                  $.chaseshooter3_am4.setStayInSamePlace(true /* TRUE */);
                  $.chaseshooter3_am4.setAccuracy(90);
                  $.chaseshooter3_am4.setObjKillPlayerOnFoot($.player1);
                  $.chasecar3_am4.setMission(4 /* MISSION_BLOCKPLAYER_FARAWAY */);
                  $.chasecar3_am4ready = 3;
                }
              }
            }
          }
        }
      }
      if ($.chasecar3_am4ready == 4) {
        if (!(Char.IsDead($.chaseshooter3_am4))) {
          if ($.killplayeronfoot3 == 0) {
            if ($.player1.isInAnyCar()) {
              $.players_car1_am4 = $.player1.storeCarIsInNoSave();
              $.chaseshooter3_am4.setObjDestroyCar($.players_car1_am4);
              $.killplayeronfoot3 = 1;
            }
          }
          if ($.killplayeronfoot3 == 1) {
            if (!($.player1.isInAnyCar())) {
              $.chaseshooter3_am4.setObjKillPlayerOnFoot($.player1);
              $.killplayeronfoot3 = 0;
            }
          }


        }
      }


      //remove models etc.
      if (Char.IsDead($.bodyguard1_am4)) {
        $.bodyguard1_am4.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.chasedriver1_am4)) {
        $.chasedriver1_am4.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.chaseshooter1_am4)) {
        $.chaseshooter1_am4.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.chasedriver2_am4)) {
        $.chasedriver2_am4.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.chaseshooter2_am4)) {
        $.chaseshooter2_am4.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.chasedriver3_am4)) {
        $.chasedriver3_am4.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.chaseshooter3_am4)) {
        $.chaseshooter3_am4.markAsNoLongerNeeded();
      }
      if (Car.IsDead($.chasecar1_am4)) {
        $.chasecar1_am4.markAsNoLongerNeeded();
      }
      if (Car.IsDead($.chasecar2_am4)) {
        $.chasecar2_am4.markAsNoLongerNeeded();
      }
      if (Car.IsDead($.chasecar3_am4)) {
        $.chasecar3_am4.markAsNoLongerNeeded();
      }
    }

    //////////////////////////////////////////////////////////	PASS AND FAIL CONDITIONS	/////////////////////////////////////////////////////

    /*
    Watch the woman on the balcony, she will walk down the escalators and ask someone the time.
    Once the conversation has finished kill the person she spoke to, but do not kill her.
    Once the target is dead retrieve his case and take it to AmmuNation in Downtown.
    */

    //lose conditions
    //if woman is killed

    if ($.assassin4flag > 0 || $.assassin4flag == -1) {
      if (Char.IsDead($.woman)) {
        Text.PrintNow("ASM4_25", 5000, 1);
        // SCM GOTO → mission_assin4_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_assin4_failed"); // fallback: would break linear control flow
      }
    }

    //player kills man before conversation ends

    if ($.assassin4flag > 0) {
      if ($.assassin4flag < 4) {
        if (Char.IsDead($.mantgt)) {
          Text.PrintNow("ASM4_29", 5000, 1);
          if (!(Char.IsDead($.bodyguard1_am4))) {
            $.bodyguard1_am4.leaveGroup();
            $.bodyguard1_am4.setObjKillPlayerOnFoot($.player1);
          }
          // SCM GOTO → mission_assin4_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_assin4_failed"); // fallback: would break linear control flow
        }
      }
    }

    //damages
    //player damages one of the bodyguards

    if ($.assassin4flag < 4 && $.assassin4flag > 0) {
      if ($.has_char_been_damage_flag == 0) {


        if ($.bodyguard1_am4.hasBeenDamagedByChar($.scplayer)) {
          if (!(Char.IsDead($.bodyguard1_am4))) {
            $.bodyguard1_am4.leaveGroup();
            $.bodyguard1_am4.setObjKillPlayerOnFoot($.player1);
          }
          if (!(Char.IsDead($.bodyguard1_am4))) {
            $.bodyguard1_am4.clearLastDamageEntity();
          }
          Text.PrintNow("ASM4_28", 5000, 1); //seen you
          $.has_char_been_damage_flag = 1;
          // SCM GOTO → mission_assin4_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_assin4_failed"); // fallback: would break linear control flow


        }
        if ($.mantgt.hasBeenDamagedByChar($.scplayer)) {
          if (!(Char.IsDead($.bodyguard1_am4))) {
            $.bodyguard1_am4.leaveGroup();
            $.bodyguard1_am4.setObjKillPlayerOnFoot($.player1);
          }
          if (!(Char.IsDead($.mantgt))) {
            $.mantgt.clearLastDamageEntity();
          }
          Text.PrintNow("ASM4_28", 5000, 1); //seen you
          $.has_char_been_damage_flag = 1;
          // SCM GOTO → mission_assin4_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_assin4_failed"); // fallback: would break linear control flow


        }



      }
    }



    //player fires sniper rifle in area and misses before he gets case

    if ($.assassin4flag > 0) {
      if ($.assassin4flag < 4) {
        if (!(Char.IsDead($.mantgt))) {
          if ($.player1.locateAnyMeansChar3D($.mantgt, 40.0, 40.0, 20.0, false /* FALSE */)) {
            if ($.player1.isShooting()) {
              Text.PrintNow("ASM4_28", 5000, 1); //heard you firing your weapon
              if (!(Char.IsDead($.bodyguard1_am4))) {
                $.bodyguard1_am4.leaveGroup();
                $.bodyguard1_am4.setObjKillPlayerOnFoot($.player1);
              }
              // SCM GOTO → mission_assin4_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_assin4_failed"); // fallback: would break linear control flow


            }
          }
        }
      }
    }

    //if player is seen by char

    if ($.assassin4flag > 0) {
      if ($.assassin4flag < 4) {
        if ($.intdistancebar_am4 > 97) {
          Text.PrintNow("ASM4_27", 5000, 1); //seen you
          if (!(Char.IsDead($.bodyguard1_am4))) {
            $.bodyguard1_am4.leaveGroup();
            $.bodyguard1_am4.setObjKillPlayerOnFoot($.player1);
          }
          // SCM GOTO → mission_assin4_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_assin4_failed"); // fallback: would break linear control flow


        }
      }
    }

    //if he gets to his location

    if (!(Char.IsDead($.mantgt))) {
      if ($.mantgt.locateAnyMeans2D($.mantgtdestx, $.mantgtdesty, 5.0, 5.0, false /* FALSE */)) {
        Text.PrintNow("ASM4_26", 5000, 1); //he has boarded....
        if (!(Char.IsDead($.bodyguard1_am4))) {
          $.bodyguard1_am4.leaveGroup();
          $.bodyguard1_am4.setObjKillPlayerOnFoot($.player1);
        }
        // SCM GOTO → mission_assin4_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_assin4_failed"); // fallback: would break linear control flow
      }
    }


    //pass

    if ($.takecasetoammu_a4 > 1) {
      if ($.player1.locateOnFoot3D($.destinationx_am4, $.destinationy_am4, $.destinationz_am4, 3.0, 3.0, 3.0, true /* TRUE */)) {
        // SCM GOTO → mission_assin4_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_assin4_passed"); // fallback: would break linear control flow
      }
    }


  }
}




// **************************************** Mission haitian3 failed ************************


async function mission_assin4_failed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}




// **************************************** mission haitian3 passed ************************


async function mission_assin4_passed() {


  $.flag_assin_mission4_passed = 1;
  Stat.RegisterMissionPassed("JOB_4");
  Text.PrintWithNumberBig("M_PASS", 8000, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(8000);
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  Stat.AddNumberOfAssassinations(1);
  $.assasin_contact_blip.remove();
}




// ********************************** mission cleanup **************************************


async function mission_cleanup_assin4() {


  ONMISSION = 0;
  $.ammunationblip_a4.remove();
  $.briefcase_playerhastogetblip.remove();
  $.sniperifleblip.remove();
  $.womanblip.remove();


  $.briefcase_playerhastoget.remove();
  $.sniperifle.remove();


  Streaming.MarkModelAsNoLongerNeeded(WMORI);
  Streaming.MarkModelAsNoLongerNeeded(HFYBU);
  Streaming.MarkModelAsNoLongerNeeded(admiral);
  Streaming.MarkModelAsNoLongerNeeded(maverick);
  Streaming.MarkModelAsNoLongerNeeded(178 /* UZI */);


  $.bodyguard1_am4.removeElegantly();
  $.mantgt.removeElegantly();
  $.chasedriver1_am4.removeElegantly();
  $.chaseshooter1_am4.removeElegantly();
  $.chasedriver2_am4.removeElegantly();
  $.chaseshooter2_am4.removeElegantly();
  $.chasedriver3_am4.removeElegantly();
  $.chaseshooter3_am4.removeElegantly();


  Hud.ClearCounter($.$id.intdistancebar_am4);


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);


  Zone.SetPedInfo("TERMINL", 1 /* DAY */, 13, 0, 0, 0, 0, 50, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("TERMINL", 0 /* NIGHT */, 4, 0, 0, 0, 0, 50, 0, 0, 0, 0, 10);


  Path.SwitchPedRoadsOn(-1424.0383, -876.6656, 10.8537, -1422.4224, -873.6301, 29.8434);
  Path.SwitchPedRoadsOn(-1407.0588, -869.3946, -5.8549, -1408.6564, -873.5172, 23.8402);
  Path.SwitchPedRoadsOn(-1385.1227, -855.1205, 10.0263, -1383.9521, -853.1511, 28.5218);
  Path.SwitchPedRoadsOn(-1386.2469, -863.7204, 8.8377, -1393.2700, -859.9062, 16.8377);


  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}

export async function assin4() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // ****************************************ASSASIN 4****************************************
  // ********************************check out at the check in********************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************



  // SCRIPT_NAME assin4

  // Mission start stuff

  await mission_start_assin4();  // SCM GOSUB mission_start_assin4


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_assin4_failed();  // SCM GOSUB mission_assin4_failed
  }


  await mission_cleanup_assin4();  // SCM GOSUB mission_cleanup_assin4


  // MissionBoundary

  // Variables for mission

  // VAR_INT woman
  // VAR_INT womanblip
  // VAR_INT mantgt
  // VAR_INT sniperifle
  // VAR_INT sniperifleblip
  // VAR_INT briefcase_playerhastoget briefcase_playerhastogetblip
  // VAR_INT bodyguard1_am4
  // VAR_INT bodyguardstoplooking
  // VAR_INT mantgtdeaddropdacase


  // VAR_INT assassin4flag takecasetoammu_a4 ammunationblip_a4

  //flags

  // VAR_INT has_sniper_been_picked_up
  // VAR_INT woman_started_moving
  // VAR_INT sniper_flag
  // VAR_INT otherweapon_flag womancango



  // VAR_FLOAT mantgtdestx mantgtdesty mantgtdestz


  // VAR_FLOAT playerintialx playerintialy playerintialz
  // VAR_FLOAT womanlocationx womanlocationy womanlocationz womanheading_a3
  // VAR_FLOAT mantgtlocationx mantgtlocationy mantgtlocationz mantgtheading
  // VAR_FLOAT sniperiflex sniperifley sniperiflez
  // VAR_FLOAT mantgtlastx mantgtlasty mantgtlastz
  // VAR_FLOAT destinationx_am4 destinationy_am4 destinationz_am4
  // VAR_FLOAT bodyguard1_am4x bodyguard1_am4y bodyguard1_am4z bodyguard1_am4h






  // VAR_INT playerhasbeenseen_am4


  // VAR_INT has_char_been_damage_flag heli_am4


  //distance stuff

  // VAR_INT displaybar_am4 displaydistancebar_am4 charnowrun_am4 intdistancebar_am4
  // VAR_FLOAT distancebar_am4 distancecalc_am4
  // VAR_FLOAT playerxdist_am4 playerydist_am4 playerzdist_am4
  // VAR_FLOAT mandistx_am4 mandisty_am4 mandistz_am4
  // VAR_FLOAT distance_am4

  //distance


  // VAR_INT chasecar1_am4 chasecar2_am4 chasecar3_am4 players_car1_am4



  // VAR_FLOAT chasecar1x_am4
  // VAR_FLOAT chasecar1y_am4
  // VAR_FLOAT chasecar1z_am4
  // VAR_FLOAT chasecar1heading_am4
  // VAR_INT chasecar1_am4ready
  // VAR_INT chasedriver1_am4
  // VAR_INT chaseshooter1_am4


  // VAR_FLOAT chasecar2x_am4
  // VAR_FLOAT chasecar2y_am4
  // VAR_FLOAT chasecar2z_am4
  // VAR_FLOAT chasecar2heading_am4
  // VAR_INT chasecar2_am4ready
  // VAR_INT chasedriver2_am4
  // VAR_INT chaseshooter2_am4


  // VAR_FLOAT chasecar3x_am4
  // VAR_FLOAT chasecar3y_am4
  // VAR_FLOAT chasecar3z_am4
  // VAR_FLOAT chasecar3heading_am4
  // VAR_INT chasecar3_am4ready
  // VAR_INT chasedriver3_am4
  // VAR_INT chaseshooter3_am4


  // VAR_INT killplayeronfoot1
  // VAR_INT killplayeronfoot2
  // VAR_INT killplayeronfoot3


  // VAR_INT targetwalk_am4




  // **************************************** Mission Start **********************************


}
