// Generated from main/rock3.sc

import { $ } from "../utils/vars.mts";

async function mission_start_rock3() {


  ONMISSION = 1;


  Stat.RegisterMissionGiven();


  $.speed_bar_rock3 = 0;


  $.speed_bar_float_rock3 = 100.0;


  $.limo_speed_rock3 = 0.0;

  // Audio stuff


  $.audio_slot_rock3 = 1;


  $.flag_audio_finished_rock3 = 0;


  $.flag_car_dead_rock3 = 0;


  $.flag_blip_added_rock3 = 0;


  $.flag_jezz_dead_rock3 = 0;


  $.flag_dick_dead_rock3 = 0;


  $.flag_percy_dead_rock3 = 0;


  $.timer_drive_rock3 = 0;


  $.band_in_car_rock3 = 0;

  // Help message stuff


  $.flag_help2_displayed_rock3 = 0;

  // Second set of Audio on the stage


  $.audio_bank2_finished_rock3 = 0;

  // Death in subscript stuff


  $.jezz_died_in_subscript_rock3 = 0;


  $.dick_died_in_subscript_rock3 = 0;


  $.percy_died_in_subscript_rock3 = 0;


  $.car_died_in_subscript_rock3 = 0;


  $.flag_conversation1_rock3 = 0;


  await asyncWait(0);


  Text.LoadMissionText("ROCK3");


  Shortcut.SetDropoffPointForMission(-860.688, 1169.914, 9.997, 185.460);




  // ****************************************START OF CUTSCENE********************************


  Streaming.LoadSpecialCharacter(1, "CSdick");
  Streaming.LoadSpecialCharacter(2, "CSjezz");
  Streaming.LoadSpecialCharacter(3, "CSkent");
  Streaming.LoadSpecialCharacter(4, "CSpercy");
  Streaming.LoadSpecialCharacter(5, "CSplay");


  Streaming.SetAreaVisible(9 /* VIS_STUDIO */);


  Streaming.LoadScene(-879.75, 1157.77, 17.81);


  World.SetExtraColors(17, false /* FALSE */);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5))) {
    await asyncWait(0);


  }


  Cutscene.Load("rok_3a");


  Cutscene.SetOffset(-879.823, 1158.479, 16.776);
  Camera.SetNearClip(0.1);


  $.cs_dick = CutsceneObject.Create(SPECIAL01);
  $.cs_dick.setAnim("CSdick");


  $.cs_jezz = CutsceneObject.Create(SPECIAL02);
  $.cs_jezz.setAnim("CSjezz");


  $.cs_kent = CutsceneObject.Create(SPECIAL03);
  $.cs_kent.setAnim("CSkent");


  $.cs_percy = CutsceneObject.Create(SPECIAL04);
  $.cs_percy.setAnim("CSpercy");


  $.cs_player = CutsceneObject.Create(SPECIAL05);
  $.cs_player.setAnim("CSplay");


  World.ClearArea(-871.90, 1159.46, 10.07, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-871.90, 1159.46, 10.07);
  $.player1.setHeading(270.0);


  Camera.DoFade(2000, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();


  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 374) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM3_A", 10000, 1); //"Tommy, Tommy, man, that psycho is back!"


  while ($.cs_time < 4104) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM3_B", 10000, 1); //"What's going on?"


  while ($.cs_time < 4760) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM3_C", 10000, 1); //"That psycho won't leave Love Fist alone!"


  while ($.cs_time < 6489) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM3_D", 10000, 1); //"You didnae kill him. And now he's back."


  while ($.cs_time < 8719) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM3_E", 10000, 1); //"Yeah, yeah, yeah, and the thing is..."


  while ($.cs_time < 9730) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM3_F", 10000, 1); //"The thing is, we need someone to drive the limo so we can relax,"


  while ($.cs_time < 12434) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM3_G", 10000, 1); //"cause that nutter keeps making threats!"


  while ($.cs_time < 13952) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM3_H", 10000, 1); //"I'm shitin' masel' man. I need ma ma!"


  while ($.cs_time < 15620) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM3_I", 10000, 1); //"We're all bricking ourselves man."


  while ($.cs_time < 16985) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM3_J", 10000, 1); //"Okay guys, calm down, I'll handle this."


  while ($.cs_time < 21240) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM3_K", 10000, 1); //"Normally I wouldn't busy myself with driving around a bunch of drunken Scottish bisexuals,"


  while ($.cs_time < 26029) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM3_L", 10000, 1); //"but, in your case I'll make an exception."


  while ($.cs_time < 28823) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);


  World.ClearExtraColors(false /* FALSE */);


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();


  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.UnloadSpecialCharacter(5);


  Streaming.LoadScene(-871.90, 1159.46, 10.07);


  $.player1.setMood(3 /* PLAYER_MOOD_WISECRACKING */, 60000);

  // ****************************************END OF CUTSCENE**********************************


  Weather.ForceNow(2 /* WEATHER_RAINY */);


  Audio.SetRadioChannel(7 /* EMOTION */, -1);

  // Waiting for the ped models to load


  Streaming.RequestModel(LOVEFIST);


  Streaming.LoadSpecialCharacter(6, "IGJEZZ");


  Streaming.LoadSpecialCharacter(7, "IGDICK");


  Streaming.LoadSpecialCharacter(8, "IGPERCY");


  while (!(Streaming.HasModelLoaded(LOVEFIST)) || !(Streaming.HasSpecialCharacterLoaded(6)) || !(Streaming.HasSpecialCharacterLoaded(7)) || !(Streaming.HasSpecialCharacterLoaded(8))) {
    await asyncWait(0);


  }


  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);


  World.ClearArea(-870.157, 1145.945, 11.050, 1.0, false /* FALSE */);
  Camera.SetFixedPosition(-870.157, 1145.945, 11.050, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-870.468, 1146.895, 11.078, 2 /* JUMP_CUT */);


  World.ClearArea(-872.155, 1151.921, 11.054, 4.0, false /* FALSE */);
  $.limo_rock3 = Car.Create(LOVEFIST, -872.155, 1151.921, 11.054);


  $.limo_rock3.setHeading(177.458);
  $.limo_rock3.setStrong(true /* TRUE */);
  $.limo_rock3.setHealth(1500);


  $.jezz_rock3 = Char.CreateAsPassenger($.limo_rock3, 4 /* PEDTYPE_CIVMALE */, SPECIAL06, 0);


  $.jezz_rock3.clearThreatSearch();


  $.jezz_rock3.setCantBeDraggedOut(true /* TRUE */);


  $.jezz_rock3.setStayInCarWhenJacked(true /* TRUE */);


  $.dick_rock3 = Char.CreateAsPassenger($.limo_rock3, 4 /* PEDTYPE_CIVMALE */, SPECIAL07, 1);


  $.dick_rock3.clearThreatSearch();


  $.dick_rock3.setCantBeDraggedOut(true /* TRUE */);


  $.dick_rock3.setStayInCarWhenJacked(true /* TRUE */);


  $.percy_rock3 = Char.CreateAsPassenger($.limo_rock3, 4 /* PEDTYPE_CIVMALE */, SPECIAL08, 2);


  $.percy_rock3.clearThreatSearch();


  $.percy_rock3.setCantBeDraggedOut(true /* TRUE */);


  $.percy_rock3.setStayInCarWhenJacked(true /* TRUE */);


  $.scplayer.warpIntoCar($.limo_rock3);


  $.limo_rock3.setIdle();


  $.limo_rock3.lockDoors(4 /* CARLOCK_LOCKED_PLAYER_INSIDE */);

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(2500);



  Camera.DoFade(2000, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if ($.flag_jezz_dead_rock3 == 0) {
      if (Char.IsDead($.jezz_rock3) || $.jezz_died_in_subscript_rock3 == 1) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_jezz_dead_rock3 = 1;
      }


    }
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3) || $.dick_died_in_subscript_rock3 == 1) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3) || $.percy_died_in_subscript_rock3 == 1) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }
    if (Car.IsDead($.limo_rock3) || $.car_died_in_subscript_rock3 == 1) {
      Audio.ClearMissionAudio(1);
      Audio.ClearMissionAudio(2);
      Text.ClearPrints();
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
    }


  }


  TIMERB = 0;


  while ($.flag_audio_finished_rock3 == 0) {
    await asyncWait(0);
    if ($.flag_audio_finished_rock3 == 0) {
      if ($.flag_played_rock3_before == 1) {
        if ($.flag_conversation1_rock3 < 6) {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
            $.flag_conversation1_rock3 = 6;
          }


        }


      }
      await conversation1_rock3();  // SCM GOSUB conversation1_rock3


    }
    if ($.timer_drive_rock3 == 1) {
      if ($.flag_help2_displayed_rock3 == 0) {
        TIMERB = 0;
        $.flag_help2_displayed_rock3 = 1;
      }
      if ($.flag_help2_displayed_rock3 == 1) {
        if (TIMERB >= 5000) {
          Text.PrintHelp("RBM3_9"); //"if you are stopped or drive slowly the bar will inscrease."
          $.flag_help2_displayed_rock3 = 2;
        }


      }
      if ($.flag_help2_displayed_rock3 == 2) {
        TIMERB = 0;
        $.flag_help2_displayed_rock3 = 3;
      }
      if ($.flag_help2_displayed_rock3 == 3) {
        if (TIMERB >= 5000) {
          Text.PrintHelp("RBM3_8"); ////"The faster you go the lower the detonation bar wil go!"
          $.flag_help2_displayed_rock3 = 4;
        }


      }
      if ($.flag_help2_displayed_rock3 == 4) {
        TIMERB = 0;
        $.flag_help2_displayed_rock3 = 5;
      }
      if ($.flag_help2_displayed_rock3 == 5) {
        if (TIMERB >= 5000) {
          Text.PrintHelp("RBM3_3"); //"If the detonation bar completely fills the car will explode"
          $.flag_help2_displayed_rock3 = 6;
        }


      }


    }
    if ($.flag_jezz_dead_rock3 == 0) {
      if (Char.IsDead($.jezz_rock3) || $.jezz_died_in_subscript_rock3 == 1) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_jezz_dead_rock3 = 1;
      }


    }
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3) || $.dick_died_in_subscript_rock3 == 1) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3) || $.percy_died_in_subscript_rock3 == 1) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }
    if (Car.IsDead($.limo_rock3) || $.car_died_in_subscript_rock3 == 1 || $.flag_car_dead_rock3 == 1 || $.flag_jezz_dead_rock3 == 1 || $.flag_dick_dead_rock3 == 1 || $.flag_percy_dead_rock3 == 1) {
      Audio.ClearMissionAudio(1);
      Audio.ClearMissionAudio(2);
      Text.ClearPrints();
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
    }
    else {
      if ($.flag_audio_finished_rock3 == 0) {
        if (!($.player1.isInCar($.limo_rock3))) {
          $.limo_rock3.explode();
          Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
          // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        }


      }
      $.limo_speed_rock3 = $.limo_rock3.getSpeed();
      if ($.flag_audio_finished_rock3 == 0) {
        if (TIMERB > 5000) {
          if ($.flag_conversation1_rock3 == 0) {
            $.flag_conversation1_rock3 = 1;
          }


        }



      }


    }
    if ($.flag_audio_finished_rock3 == 0) {
      if ($.timer_drive_rock3 == 1) {
        if (TIMERA > 5000) {
          $.limo_speed_rock3 -= 26.0;
          $.limo_speed_rock3 /= 15.0;
          $.speed_bar_float_rock3 += $.limo_speed_rock3;
          if ($.speed_bar_float_rock3 > 100.0) {
            $.speed_bar_float_rock3 = 100.0;
          }
          if ($.speed_bar_float_rock3 < 1.0) {
            if (!(Car.IsDead($.limo_rock3))) {
              $.limo_rock3.explode();
              //flag_car_dead_rock3 = 1
              Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
              // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
            }
            else {
              //flag_car_dead_rock3 = 1
              Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
              // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
            }


          }
          $.temp_float = $.speed_bar_float_rock3 * -1.0;
          $.temp_float = $.temp_float + 100.0;
          $.speed_bar_rock3 = $.temp_float;


        }


      }


    }


  }


  Weather.Release();


  Hud.ClearCounter($.$id.speed_bar_rock3);


  Text.PrintBig("RBM3_7", 4000, 4); //"Bomb Diffused!"


  while ($.flag_conversation1_rock3 < 29) {
    await asyncWait(0);
    if ($.flag_conversation1_rock3 < 29) {
      await conversation1_part2_rock3();  // SCM GOSUB conversation1_part2_rock3
    }
    if ($.flag_jezz_dead_rock3 == 0) {
      if (Char.IsDead($.jezz_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_jezz_dead_rock3 = 1;
      }


    }
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }
    if (Car.IsDead($.limo_rock3)) {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
    }
    else {
      if ($.flag_jezz_dead_rock3 == 0 && $.flag_dick_dead_rock3 == 0 && $.flag_percy_dead_rock3 == 0) {
        if ($.jezz_rock3.isInCar($.limo_rock3) && $.dick_rock3.isInCar($.limo_rock3) && $.percy_rock3.isInCar($.limo_rock3)) {
          $.band_in_car_rock3 = 1;
        }
        else {
          $.band_in_car_rock3 = 0;
        }


      }
      if (!($.player1.isInCar($.limo_rock3))) {
        if ($.flag_car_blip_added_rock3 == 0) {
          $.limo_blip_rock3 = Blip.AddForCar($.limo_rock3);
          Text.PrintNow("IN_VEH", 5000, 1); //"Get bck into the car!"
          $.flag_car_blip_added_rock3 = 1;
        }


      }
      else {
        if ($.flag_car_blip_added_rock3 == 1) {
          $.limo_blip_rock3.remove();
          $.flag_car_blip_added_rock3 = 0;
        }


      }


    }


  }


  if (!(Car.IsDead($.limo_rock3))) {
    $.limo_rock3.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  else {
    Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
    // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
  }


  Audio.SetRadioChannel(4 /* V_ROCK */, -1);
  Text.PrintNow("RBM3_1", 5000, 1); //"Get the band to the venue!"
  $.venue_blip_rock3 = Blip.AddForCoord(-870.933, 1053.342, 9.90);
  $.flag_blip_added_rock3 = 1;


  while (!($.limo_rock3.locate3D(-870.933, 1053.342, 9.90, 3.0, 3.0, 3.0, true /* TRUE */)) || $.band_in_car_rock3 == 0) {
    await asyncWait(0);
    if ($.flag_jezz_dead_rock3 == 0) {
      if (Char.IsDead($.jezz_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_jezz_dead_rock3 = 1;
      }


    }
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }
    if (Car.IsDead($.limo_rock3)) {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
    }
    else {
      if ($.flag_jezz_dead_rock3 == 0 && $.flag_dick_dead_rock3 == 0 && $.flag_percy_dead_rock3 == 0) {
        if ($.jezz_rock3.isInCar($.limo_rock3) && $.dick_rock3.isInCar($.limo_rock3) && $.percy_rock3.isInCar($.limo_rock3) && $.player1.isInCar($.limo_rock3)) {
          $.band_in_car_rock3 = 1;
        }
        else {
          $.band_in_car_rock3 = 0;
        }


      }
      if (!($.player1.isInCar($.limo_rock3))) {
        if ($.flag_blip_added_rock3 == 1) {
          $.venue_blip_rock3.remove();
          $.limo_blip_rock3 = Blip.AddForCar($.limo_rock3);
          Text.PrintNow("IN_VEH", 5000, 1); //"Get bck into the car!"
          $.flag_blip_added_rock3 = 0;
        }


      }
      else {
        if ($.flag_blip_added_rock3 == 0) {
          $.limo_blip_rock3.remove();
          Text.PrintNow("RBM3_1", 5000, 1); //"Get the band to the venue!"
          $.venue_blip_rock3 = Blip.AddForCoord(-870.933, 1053.342, 9.90);
          $.flag_blip_added_rock3 = 1;
        }


      }


    }


  }


  if (!(Car.IsDead($.limo_rock3))) {
    $.limo_rock3.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  else {
    Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
    // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
  }


  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);


  World.ClearArea(-880.363, 1043.654, 12.096, 1.0, false /* FALSE */);
  Camera.SetFixedPosition(-880.363, 1043.654, 12.096, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-879.557, 1044.242, 12.035, 2 /* JUMP_CUT */);


  if (!(Car.IsDead($.limo_rock3))) {
    $.scplayer.setObjLeaveCar($.limo_rock3);
    if (!(Char.IsDead($.jezz_rock3))) {
      $.jezz_rock3.setObjLeaveCar($.limo_rock3);
    }
    else {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.dick_rock3))) {
      $.dick_rock3.setObjLeaveCar($.limo_rock3);
    }
    else {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.percy_rock3))) {
      $.percy_rock3.setObjLeaveCar($.limo_rock3);
    }
    else {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
    }


  }
  else {
    Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
    // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
  }


  while ($.scplayer.isInAnyCar() && $.jezz_rock3.isInAnyCar() && $.dick_rock3.isInAnyCar() && $.percy_rock3.isInAnyCar()) {
    await asyncWait(0);
    if ($.flag_jezz_dead_rock3 == 0) {
      if (Char.IsDead($.jezz_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_jezz_dead_rock3 = 1;
      }


    }
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }
    if (Car.IsDead($.limo_rock3)) {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
    }


  }


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if ($.flag_jezz_dead_rock3 == 0) {
      if (Char.IsDead($.jezz_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_jezz_dead_rock3 = 1;
      }


    }
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }
    if (Car.IsDead($.limo_rock3)) {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
    }


  }


  Camera.RestoreJumpcut();
  Streaming.SetAreaVisible(8 /* VIS_CONCERT_HALL */);
  $.flag_concert_visible_rock3 = 1;
  Streaming.LoadScene(-928.915, 1056.264, 12.28);
  World.SetExtraColors(12, false /* FALSE */); // TRY THIS AARON WILL HAVE A LOOK AND DECIDE IF ITS OK
  $.player1.setCoordinates(-924.115, 1054.524, 12.28);
  $.player1.setHeading(188.883);


  $.jezz_rock3.delete();


  if (!(Char.IsDead($.dick_rock3))) {
    $.dick_rock3.setCoordinates(-925.288, 1053.268, 12.20);
    $.dick_rock3.setHeading(249.491);
  }
  else {
    Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
    // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
    $.flag_jezz_dead_rock3 = 1;
  }


  if (!(Char.IsDead($.percy_rock3))) {
    $.percy_rock3.setCoordinates(-923.094, 1053.125, 12.20);
    $.percy_rock3.setHeading(44.398);
  }
  else {
    Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
    // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
    $.flag_jezz_dead_rock3 = 1;
  }


  Cutscene.Load("FIST");

  //CLEAR_AREA -920.961 1052.965 13.823 1.0 FALSE
  //SET_FIXED_CAMERA_POSITION -920.961 1052.965 13.823 0.0 0.0 0.0
  //POINT_CAMERA_AT_POINT -921.248 1053.785 14.319 JUMP_CUT


  World.ClearArea(-924.114, 1038.890, 12.675, 1.0, false /* FALSE */);
  Camera.SetFixedPosition(-924.114, 1038.890, 12.675, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-924.114, 1039.858, 12.925, 2 /* JUMP_CUT */);


  $.limo_rock3.delete();


  Camera.DoFade(1000, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }


  }

  // Band are on stage and game has faded in


  Cutscene.Start();


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 16980) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }


  }


  Camera.SetFixedPosition(-926.720, 1048.895, 13.040, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-926.320, 1049.811, 13.075, 2 /* JUMP_CUT */);


  if ($.flag_percy_dead_rock3 == 0) {
    if (Char.IsDead($.percy_rock3)) {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
      $.flag_percy_dead_rock3 = 1;
    }
    else {
      $.percy_rock3.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
    }


  }


  Text.PrintNow("ROK3_73", 10000, 1); //rhubarb rhubarb


  while ($.cs_time < 18851) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }


  }


  Text.PrintNow("ROK3_62", 10000, 1); //rhubarb rhubarb


  while ($.cs_time < 22311) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }


  }


  Text.PrintNow("ROK3_63", 10000, 1); //rhubarb rhubarb


  while ($.cs_time < 24834) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }


  }


  if ($.flag_percy_dead_rock3 == 0) {
    if (Char.IsDead($.percy_rock3)) {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
      $.flag_percy_dead_rock3 = 1;
    }
    else {
      $.percy_rock3.setWaitState(0 /* WAITSTATE_FALSE */, 1);
    }


  }


  Text.PrintNow("ROK3_64", 10000, 1); //rhubarb rhubarb
  Camera.SetFixedPosition(-919.641, 1050.383, 14.670, 0.0, 0.0, 0.0); // Looks at skull
  Camera.PointAtPoint(-919.783, 1051.364, 14.799, 2 /* JUMP_CUT */);


  while ($.cs_time < 28433) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }


  }


  if ($.flag_dick_dead_rock3 == 0) {
    if (Char.IsDead($.dick_rock3)) {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
      $.flag_dick_dead_rock3 = 1;
    }
    else {
      $.dick_rock3.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
    }


  }


  Text.PrintNow("ROK3_65", 10000, 1); //rhubarb rhubarb


  while ($.cs_time < 32395) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }


  }


  if ($.flag_dick_dead_rock3 == 0) {
    if (Char.IsDead($.dick_rock3)) {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
      $.flag_dick_dead_rock3 = 1;
    }
    else {
      $.dick_rock3.setWaitState(0 /* WAITSTATE_FALSE */, 1);
    }


  }


  Text.PrintNow("ROK3_66", 10000, 1); //rhubarb rhubarb


  while ($.cs_time < 36052) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }


  }


  Text.PrintNow("ROK3_67", 10000, 1); //rhubarb rhubarb


  while ($.cs_time < 37237) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }


  }


  if ($.flag_percy_dead_rock3 == 0) {
    if (Char.IsDead($.percy_rock3)) {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
      $.flag_percy_dead_rock3 = 1;
    }
    else {
      $.percy_rock3.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
    }


  }


  Text.PrintNow("ROK3_68", 10000, 1); //rhubarb rhubarb


  Camera.SetFixedPosition(-926.720, 1048.895, 13.040, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-926.320, 1049.811, 13.075, 2 /* JUMP_CUT */);


  while ($.cs_time < 40045) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }


  }


  Text.PrintNow("ROK3_69", 10000, 1); //rhubarb rhubarb


  while ($.cs_time < 42415) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }


  }


  if ($.flag_percy_dead_rock3 == 0) {
    if (Char.IsDead($.percy_rock3)) {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
      $.flag_percy_dead_rock3 = 1;
    }
    else {
      $.percy_rock3.setWaitState(0 /* WAITSTATE_FALSE */, 1);
    }


  }


  if ($.flag_dick_dead_rock3 == 0) {
    if (Char.IsDead($.dick_rock3)) {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
      $.flag_dick_dead_rock3 = 1;
    }
    else {
      $.percy_rock3.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
    }


  }


  Text.PrintNow("ROK3_70", 10000, 1); //rhubarb rhubarb


  while ($.cs_time < 44776) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }


  }


  if ($.flag_dick_dead_rock3 == 0) {
    if (Char.IsDead($.dick_rock3)) {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
      $.flag_dick_dead_rock3 = 1;
    }
    else {
      $.percy_rock3.setWaitState(0 /* WAITSTATE_FALSE */, 1);
    }


  }


  if ($.flag_percy_dead_rock3 == 0) {
    if (Char.IsDead($.percy_rock3)) {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
      $.flag_percy_dead_rock3 = 1;
    }
    else {
      $.percy_rock3.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1000000);
    }


  }


  Text.PrintNow("ROK3_71", 10000, 1); //rhubarb rhubarb


  while ($.cs_time < 49873) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }


  }


  if ($.flag_percy_dead_rock3 == 0) {
    if (Char.IsDead($.percy_rock3)) {
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
      $.flag_percy_dead_rock3 = 1;
    }
    else {
      $.percy_rock3.setWaitState(0 /* WAITSTATE_FALSE */, 1);
    }


  }


  Text.ClearPrints();


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while ($.cs_time < 51280) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }


  }


  Cutscene.Clear();


  TIMERA = 0;


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_dick_dead_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        // SCM GOTO → mission_rock3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock3_failed"); // fallback: would break linear control flow
        $.flag_percy_dead_rock3 = 1;
      }


    }


  }


  $.dick_rock3.delete();
  $.percy_rock3.delete();


  World.ClearExtraColors(false /* FALSE */);
  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);
  $.flag_concert_visible_rock3 = 0;
  Streaming.LoadScene(-885.396, 1054.467, 12.583);


  Camera.SetFixedPosition(-887.965, 1054.653, 14.846, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-887.016, 1054.583, 14.538, 2 /* JUMP_CUT */);
  $.player1.setCoordinates(-885.396, 1054.467, 12.583);
  $.player1.setHeading(280.871);
  Camera.RestoreJumpcut();
  Camera.SetInFrontOfPlayer();


  Camera.DoFade(1500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);


  }


  Hud.SwitchWidescreen(false /* OFF */);
  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);



  // SCM GOTO → mission_rock3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_rock3_passed"); // fallback: would break linear control flow
}



// ****************************************** Mission Failed *******************************


async function mission_rock3_failed() {


  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  //CLEAR_PRINTS


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}



// *************************************** Mission Passed **********************************


async function mission_rock3_passed() {


  $.flag_rock_mission3_passed = 1;
  Stat.RegisterMissionPassed("ROCK_3");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  Text.PrintWithNumberBig("M_PASS", 8000, 5000, 1); //"Mission Passed!"
  $.player1.addScore(8000);
  $.gen_car161.switch(101);
  $.rock_contact_blip.remove();
}


// **************************************** MISSION CLEANUP ********************************


async function mission_cleanup_rock3() {


  ONMISSION = 0;


  Audio.SetRadioChannel(4 /* V_ROCK */, -1);


  if (!(Car.IsDead($.limo_rock3))) {
    $.limo_rock3.lockDoors(1 /* CARLOCK_UNLOCKED */);
    $.limo_rock3.markAsNoLongerNeeded();
  }


  $.jezz_rock3.removeElegantly();
  $.dick_rock3.removeElegantly();
  $.percy_rock3.removeElegantly();
  Weather.Release();
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  World.ClearExtraColors(false /* FALSE */);


  if ($.flag_concert_visible_rock3 == 1) {
    Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);
    Streaming.LoadScene(-885.396, 1054.467, 12.583);
    Camera.SetFixedPosition(-887.965, 1054.653, 14.846, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(-887.016, 1054.583, 14.538, 2 /* JUMP_CUT */);
    $.player1.setCoordinates(-885.396, 1054.467, 12.583);
    $.player1.setHeading(280.871);
    Camera.RestoreJumpcut();
    Camera.SetInFrontOfPlayer();
  }


  $.limo_blip_rock3.remove();
  $.venue_blip_rock3.remove();
  Hud.ClearCounter($.$id.speed_bar_rock3);
  Streaming.MarkModelAsNoLongerNeeded(LOVEFIST);
  Streaming.UnloadSpecialCharacter(6);
  Streaming.UnloadSpecialCharacter(7);
  Streaming.UnloadSpecialCharacter(8);
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}


// Conversation 1 in the car


async function conversation1_rock3() {


  if ($.timer_drive_rock3 == 1) {
    if ($.flag_help2_displayed_rock3 == 0) {
      TIMERB = 0;
      $.flag_help2_displayed_rock3 = 1;
    }
    if ($.flag_help2_displayed_rock3 == 1) {
      if (TIMERB >= 5000) {
        Text.PrintHelp("RBM3_9"); //"if you are stopped or drive slowly the bar will inscrease."
        $.flag_help2_displayed_rock3 = 2;
      }


    }
    if ($.flag_help2_displayed_rock3 == 2) {
      TIMERB = 0;
      $.flag_help2_displayed_rock3 = 3;
    }
    if ($.flag_help2_displayed_rock3 == 3) {
      if (TIMERB >= 5000) {
        Text.PrintHelp("RBM3_8"); ////"The faster you go the lower the detonation bar wil go!"
        $.flag_help2_displayed_rock3 = 4;
      }


    }
    if ($.flag_help2_displayed_rock3 == 4) {
      TIMERB = 0;
      $.flag_help2_displayed_rock3 = 5;
    }
    if ($.flag_help2_displayed_rock3 == 5) {
      if (TIMERB >= 5000) {
        Text.PrintHelp("RBM3_3"); //"If the detonation bar completely fills the car will explode"
        $.flag_help2_displayed_rock3 = 6;
      }


    }


  }


  if ($.flag_jezz_dead_rock3 == 0) {
    if (Char.IsDead($.jezz_rock3)) {
      $.jezz_died_in_subscript_rock3 = 1;
    }


  }


  if ($.flag_dick_dead_rock3 == 0) {
    if (Char.IsDead($.dick_rock3)) {
      $.dick_died_in_subscript_rock3 = 1;
    }


  }


  if ($.flag_percy_dead_rock3 == 0) {
    if (Char.IsDead($.percy_rock3)) {
      $.percy_died_in_subscript_rock3 = 1;
    }


  }


  if (Car.IsDead($.limo_rock3)) {
    $.car_died_in_subscript_rock3 = 1;
  }
  else {
    $.limo_speed_rock3 = $.limo_rock3.getSpeed();
    if (!($.player1.isSittingInCar($.limo_rock3))) {
      $.limo_rock3.explode();
      Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
      //flag_car_dead_rock3 = 1

    }
    if ($.flag_audio_finished_rock3 == 0) {
      if ($.timer_drive_rock3 == 1) {
        if (TIMERA > 5000) {
          $.limo_speed_rock3 -= 26.0;
          $.limo_speed_rock3 /= 15.0;
          $.speed_bar_float_rock3 += $.limo_speed_rock3;
          if ($.speed_bar_float_rock3 < 1.0) {
            if (!(Car.IsDead($.limo_rock3))) {
              $.limo_rock3.explode();
              Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
              //flag_car_dead_rock3 = 1

            }


          }
          if ($.speed_bar_float_rock3 > 100.0) {
            $.speed_bar_float_rock3 = 100.0;
          }
          $.temp_float = $.speed_bar_float_rock3 * -1.0;
          $.temp_float = $.temp_float + 100.0;
          $.speed_bar_rock3 = $.temp_float;


        }


      }


    }


  }


  if ($.flag_conversation1_rock3 == 1) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_1" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_1", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_1");
    $.flag_conversation1_rock3 = 2;
    if ($.flag_audio_finished_rock3 == 0) {
      if ($.flag_played_rock3_before == 1) {
        if ($.flag_conversation1_rock3 < 6) {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
            $.flag_conversation1_rock3 = 6;
          }


        }


      }


    }


  }


  if ($.flag_conversation1_rock3 == 2) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_2" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_2", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_2");
    $.flag_conversation1_rock3 = 3;
    if ($.flag_audio_finished_rock3 == 0) {
      if ($.flag_played_rock3_before == 1) {
        if ($.flag_conversation1_rock3 < 6) {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
            $.flag_conversation1_rock3 = 6;
          }


        }


      }


    }


  }


  if ($.flag_conversation1_rock3 == 3) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_3" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_3", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_3");
    $.flag_conversation1_rock3 = 4;
    if ($.flag_audio_finished_rock3 == 0) {
      if ($.flag_played_rock3_before == 1) {
        if ($.flag_conversation1_rock3 < 6) {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
            $.flag_conversation1_rock3 = 6;
          }


        }


      }


    }


  }


  if ($.flag_conversation1_rock3 == 4) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_4" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Audio.SetRadioChannel(9, -1);
    Text.PrintNow("ROK3_4", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_4");
    $.flag_conversation1_rock3 = 5;
    if ($.flag_audio_finished_rock3 == 0) {
      if ($.flag_played_rock3_before == 1) {
        if ($.flag_conversation1_rock3 < 6) {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
            $.flag_conversation1_rock3 = 6;
          }


        }


      }


    }


  }


  if ($.flag_conversation1_rock3 == 5) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_5" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_5", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_5");
    $.flag_conversation1_rock3 = 6;
  }


  if ($.flag_conversation1_rock3 == 6) {
    if ($.timer_drive_rock3 == 0) {
      Hud.SwitchWidescreen(false /* OFF */);
      Camera.SetBehindPlayer();
      Camera.RestoreJumpcut();
      $.player1.setControl(true /* ON */);
      Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
      Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
      Text.PrintHelp("RBM3_2"); //"Keep up your speed
      Hud.DisplayCounterWithString($.$id.speed_bar_rock3, 1 /* COUNTER_DISPLAY_BAR */, "RBM3_6");
      TIMERA = 0;
      $.timer_drive_rock3 = 1;
    }
    $.flag_played_rock3_before = 1;
    $.flag_conversation1_rock3 = 7;


  }


  if ($.flag_conversation1_rock3 == 7) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_6" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_6", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_6");
    $.flag_conversation1_rock3 = 8;
  }


  if ($.flag_conversation1_rock3 == 8) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_7" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_7", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_7");
    $.flag_conversation1_rock3 = 9;
  }


  if ($.flag_conversation1_rock3 == 9) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_8" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_8", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_8");
    $.flag_conversation1_rock3 = 10;
  }


  if ($.flag_conversation1_rock3 == 10) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_9" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_9", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_9");
    $.flag_conversation1_rock3 = 11;
  }


  if ($.flag_conversation1_rock3 == 11) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_10" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_10", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_10");
    $.flag_conversation1_rock3 = 12;
  }


  if ($.flag_conversation1_rock3 == 12) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_11" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_11", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_11");
    $.flag_conversation1_rock3 = 13;
  }


  if ($.flag_conversation1_rock3 == 13) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_12" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_12", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_12");
    $.flag_conversation1_rock3 = 14;
  }


  if ($.flag_conversation1_rock3 == 14) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_13" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_13", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_13");
    $.flag_conversation1_rock3 = 15;
  }


  if ($.flag_conversation1_rock3 == 15) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_14" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_14", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_14");
    $.flag_conversation1_rock3 = 16;
  }


  if ($.flag_conversation1_rock3 == 16) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_15" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_15", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_15");
    $.flag_conversation1_rock3 = 17;
  }


  if ($.flag_conversation1_rock3 == 17) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_16" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_16", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_16");
    $.flag_conversation1_rock3 = 18;
  }


  if ($.flag_conversation1_rock3 == 18) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_17" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_17", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_17");
    $.flag_conversation1_rock3 = 19;
  }


  if ($.flag_conversation1_rock3 == 19) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_18" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_18", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_18");
    $.flag_conversation1_rock3 = 20;
  }


  if ($.flag_conversation1_rock3 == 20) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_19" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_19", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_19");
    $.flag_conversation1_rock3 = 21;
  }


  if ($.flag_conversation1_rock3 == 21) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_20" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_20", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_20");
    $.flag_conversation1_rock3 = 22;
  }


  if ($.flag_conversation1_rock3 == 22) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_21" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_21", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_21");
    $.flag_conversation1_rock3 = 23;
  }


  if ($.flag_conversation1_rock3 == 23) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_22" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_22", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_22");
    $.flag_conversation1_rock3 = 24;
  }


  if ($.flag_conversation1_rock3 == 24) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_23" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_23", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_23");
    $.flag_conversation1_rock3 = 25;
  }


  if ($.flag_conversation1_rock3 == 25) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_24" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_24", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_24");
    $.flag_conversation1_rock3 = 26;
    $.flag_audio_finished_rock3 = 1;
  }
}


// part2 of the conversation


async function conversation1_part2_rock3() {


  if ($.flag_conversation1_rock3 == 26) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_25" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_25", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_25");
    $.flag_conversation1_rock3 = 27;
  }


  if ($.flag_conversation1_rock3 == 27) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_26" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_26", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_26");
    $.flag_conversation1_rock3 = 28;
  }


  if ($.flag_conversation1_rock3 == 28) {
    Audio.LoadMissionAudio($.audio_slot_rock3, "ROK3_27" as any);
    await loading_and_playing_audio_rock3();  // SCM GOSUB loading_and_playing_audio_rock3
    Text.PrintNow("ROK3_27", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_rock3();  // SCM GOSUB has_audio_finished_rock3
    Text.ClearThisPrint("ROK3_27");
    $.flag_conversation1_rock3 = 29;
  }
}


// loads and plays the audio


async function loading_and_playing_audio_rock3() {


  while (!(Audio.HasMissionAudioLoaded($.audio_slot_rock3))) {
    await asyncWait(0);
    if ($.flag_audio_finished_rock3 == 0) {
      if ($.timer_drive_rock3 == 1) {
        if ($.flag_help2_displayed_rock3 == 0) {
          TIMERB = 0;
          $.flag_help2_displayed_rock3 = 1;
        }
        if ($.flag_help2_displayed_rock3 == 1) {
          if (TIMERB >= 5000) {
            Text.PrintHelp("RBM3_9"); //"if you are stopped or drive slowly the bar will inscrease."
            $.flag_help2_displayed_rock3 = 2;
          }


        }
        if ($.flag_help2_displayed_rock3 == 2) {
          TIMERB = 0;
          $.flag_help2_displayed_rock3 = 3;
        }
        if ($.flag_help2_displayed_rock3 == 3) {
          if (TIMERB >= 5000) {
            Text.PrintHelp("RBM3_8"); ////"The faster you go the lower the detonation bar wil go!"
            $.flag_help2_displayed_rock3 = 4;
          }


        }
        if ($.flag_help2_displayed_rock3 == 4) {
          TIMERB = 0;
          $.flag_help2_displayed_rock3 = 5;
        }
        if ($.flag_help2_displayed_rock3 == 5) {
          if (TIMERB >= 5000) {
            Text.PrintHelp("RBM3_3"); //"If the detonation bar completely fills the car will explode"
            $.flag_help2_displayed_rock3 = 6;
          }


        }


      }


    }
    if ($.flag_jezz_dead_rock3 == 0) {
      if (Char.IsDead($.jezz_rock3)) {
        $.jezz_died_in_subscript_rock3 = 1;
      }


    }
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        $.dick_died_in_subscript_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        $.percy_died_in_subscript_rock3 = 1;
      }


    }
    if (Car.IsDead($.limo_rock3)) {
      $.car_died_in_subscript_rock3 = 1;
    }
    else {
      $.limo_speed_rock3 = $.limo_rock3.getSpeed();
      if (!($.player1.isSittingInCar($.limo_rock3))) {
        $.limo_rock3.explode();
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        //flag_car_dead_rock3 = 1

      }
      if ($.flag_audio_finished_rock3 == 0) {
        if ($.timer_drive_rock3 == 1) {
          if (TIMERA > 5000) {


            $.limo_speed_rock3 -= 26.0;
            $.limo_speed_rock3 /= 15.0;
            $.speed_bar_float_rock3 += $.limo_speed_rock3;
            if ($.speed_bar_float_rock3 < 1.0) {
              if (!(Car.IsDead($.limo_rock3))) {
                $.limo_rock3.explode();
                Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
                //	flag_car_dead_rock3 = 1

              }


            }
            if ($.speed_bar_float_rock3 > 100.0) {
              $.speed_bar_float_rock3 = 100.0;
            }
            $.temp_float = $.speed_bar_float_rock3 * -1.0;
            $.temp_float = $.temp_float + 100.0;
            $.speed_bar_rock3 = $.temp_float;


          }


        }


      }


    }


    if ($.flag_audio_finished_rock3 == 1) {
      if ($.audio_bank2_finished_rock3 == 0) {
        if ($.flag_dick_dead_rock3 == 0) {
          if (Char.IsDead($.dick_rock3)) {
            $.dick_died_in_subscript_rock3 = 1;
          }


        }
        if ($.flag_percy_dead_rock3 == 0) {
          if (Char.IsDead($.percy_rock3)) {
            $.percy_died_in_subscript_rock3 = 1;
          }


        }


      }


    }


  }


  Audio.PlayMissionAudio($.audio_slot_rock3);
}


// checking to see if the audio is finished


async function has_audio_finished_rock3() {


  while (!(Audio.HasMissionAudioFinished($.audio_slot_rock3))) {
    await asyncWait(0);
    if ($.flag_audio_finished_rock3 == 0) {
      if ($.timer_drive_rock3 == 1) {
        if ($.flag_help2_displayed_rock3 == 0) {
          TIMERB = 0;
          $.flag_help2_displayed_rock3 = 1;
        }
        if ($.flag_help2_displayed_rock3 == 1) {
          if (TIMERB >= 5000) {
            Text.PrintHelp("RBM3_9"); //"if you are stopped or drive slowly the bar will inscrease."
            $.flag_help2_displayed_rock3 = 2;
          }


        }
        if ($.flag_help2_displayed_rock3 == 2) {
          TIMERB = 0;
          $.flag_help2_displayed_rock3 = 3;
        }
        if ($.flag_help2_displayed_rock3 == 3) {
          if (TIMERB >= 5000) {
            Text.PrintHelp("RBM3_8"); ////"The faster you go the lower the detonation bar wil go!"
            $.flag_help2_displayed_rock3 = 4;
          }


        }
        if ($.flag_help2_displayed_rock3 == 4) {
          TIMERB = 0;
          $.flag_help2_displayed_rock3 = 5;
        }
        if ($.flag_help2_displayed_rock3 == 5) {
          if (TIMERB >= 5000) {
            Text.PrintHelp("RBM3_3"); //"If the detonation bar completely fills the car will explode"
            $.flag_help2_displayed_rock3 = 6;
          }


        }


      }


    }
    if ($.flag_jezz_dead_rock3 == 0) {
      if (Char.IsDead($.jezz_rock3)) {
        $.jezz_died_in_subscript_rock3 = 1;
      }


    }
    if ($.flag_dick_dead_rock3 == 0) {
      if (Char.IsDead($.dick_rock3)) {
        $.dick_died_in_subscript_rock3 = 1;
      }


    }
    if ($.flag_percy_dead_rock3 == 0) {
      if (Char.IsDead($.percy_rock3)) {
        $.percy_died_in_subscript_rock3 = 1;
      }


    }
    if (Car.IsDead($.limo_rock3)) {
      $.car_died_in_subscript_rock3 = 1;
    }
    else {
      $.limo_speed_rock3 = $.limo_rock3.getSpeed();
      if (!($.player1.isSittingInCar($.limo_rock3))) {
        $.limo_rock3.explode();
        Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
        $.flag_car_dead_rock3 = 1;
      }
      if ($.flag_audio_finished_rock3 == 0) {
        if ($.timer_drive_rock3 == 1) {
          if (TIMERA > 5000) {
            $.limo_speed_rock3 -= 26.0;
            $.limo_speed_rock3 /= 15.0;
            $.speed_bar_float_rock3 += $.limo_speed_rock3;
            if ($.speed_bar_float_rock3 < 1.0) {
              if (!(Car.IsDead($.limo_rock3))) {
                $.limo_rock3.explode();
                Text.PrintNow("RBM3_4", 5000, 1); //"You killed the Band!"
                //flag_car_dead_rock3 = 1

              }


            }
            if ($.speed_bar_float_rock3 > 100.0) {
              $.speed_bar_float_rock3 = 100.0;
            }
            $.temp_float = $.speed_bar_float_rock3 * -1.0;
            $.temp_float = $.temp_float + 100.0;
            $.speed_bar_rock3 = $.temp_float;


          }


        }


      }


    }
    if ($.flag_audio_finished_rock3 == 1) {
      if ($.audio_bank2_finished_rock3 == 0) {
        if ($.flag_dick_dead_rock3 == 0) {
          if (Char.IsDead($.dick_rock3)) {
            $.dick_died_in_subscript_rock3 = 1;
          }


        }
        if ($.flag_percy_dead_rock3 == 0) {
          if (Char.IsDead($.percy_rock3)) {
            $.percy_died_in_subscript_rock3 = 1;
          }


        }


      }


    }


  }
}

export async function rock3() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // ************************************ Rock Mission Three *********************************
  // ******************************************* Speed ***************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // SCRIPT_NAME rockb3

  // Mission start stuff


  await mission_start_rock3();  // SCM GOSUB mission_start_rock3


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_rock3_failed();  // SCM GOSUB mission_rock3_failed
  }


  await mission_cleanup_rock3();  // SCM GOSUB mission_cleanup_rock3


  // MissionBoundary

  // Variables for mission

  // Car stuff


  // VAR_INT limo_rock3


  // VAR_FLOAT limo_speed_rock3


  // VAR_INT limo_blip_rock3

  // General stuff


  // VAR_INT speed_bar_rock3


  // VAR_FLOAT speed_bar_float_rock3


  // VAR_INT venue_blip_rock3

  // Audio loading stuff


  // VAR_INT audio_slot_rock3


  // VAR_INT flag_audio_finished_rock3


  // VAR_INT flag_car_dead_rock3


  // VAR_INT flag_blip_added_rock3

  // Band stuff


  // VAR_INT jezz_rock3


  // VAR_INT flag_jezz_dead_rock3


  // VAR_INT dick_rock3


  // VAR_INT flag_dick_dead_rock3


  // VAR_INT percy_rock3


  // VAR_INT flag_percy_dead_rock3


  // VAR_INT timer_drive_rock3


  // VAR_INT band_in_car_rock3

  // Help message stuff


  // VAR_INT flag_help2_displayed_rock3

  // Second set of Audio on the stage


  // VAR_INT audio_bank2_finished_rock3

  // Death in subscript stuff


  // VAR_INT jezz_died_in_subscript_rock3


  // VAR_INT dick_died_in_subscript_rock3


  // VAR_INT percy_died_in_subscript_rock3


  // VAR_INT car_died_in_subscript_rock3


  // VAR_INT flag_conversation1_rock3

  // New car stuff for the limo, proper bomb diffused stuff


  // VAR_INT flag_car_blip_added_rock3
  $.flag_car_blip_added_rock3 = 0;


  // VAR_INT flag_concert_visible_rock3
  $.flag_concert_visible_rock3 = 0;

  // ****************************************Mission Start************************************


}
