// Generated from main/porn4.sc

import { $ } from "../utils/vars.mts";
import { timed } from "../utils/scm.mts";

async function mission_start_porn4() {


  Text.ClearThisPrint("M_FAIL");
  ONMISSION = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  Text.LoadMissionText("PORN4");
  Shortcut.SetDropoffPointForMission(21.489, 966.28, 9.5, 172.7);
  // *************************************Set Flags/variables*********************************

  $.porn4_goals = 0;
  $.create_bottom_office_workers = 0;
  $.create_top_office_workers = 0;
  $.setting_player_upstairs = 0;
  $.time_to_fail = 0;
  $.create_bike_on_prawn_island = 1;
  $.watched_jump_cutscene = 0;
  $.button_pressed = 0;
  $.jump_flag = 0;
  $.collision_counter_usj = 0;
  // ****************************************START OF CUTSCENE********************************


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSdirec");
  Streaming.LoadSpecialCharacter(3, "CSCandy");
  Streaming.LoadSpecialCharacter(4, "cmraman");
  Streaming.LoadSpecialCharacter(5, "mporna");


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


  Cutscene.Load("porn_4");
  Cutscene.SetOffset(-69.128, 920.965, 9.764);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_direc = CutsceneObject.Create(SPECIAL02);
  $.cs_direc.setAnim("CSdirec");


  $.cs_candy = CutsceneObject.Create(SPECIAL03);
  $.cs_candy.setAnim("CSCandy");


  $.cs_cmraman = CutsceneObject.Create(SPECIAL04);
  $.cs_cmraman.setAnim("cmraman");


  $.cs_mporna = CutsceneObject.Create(SPECIAL05);
  $.cs_mporna.setAnim("mporna");


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


  if (!(Game.IsAustralian())) {
    while ($.cs_time < 47) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_A", 10000, 1); // I'm sorry, but I just can't swallow this right now.
    while ($.cs_time < 1741) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_B", 10000, 1); // Oh COME ON darling!
    while ($.cs_time < 3291) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_C", 10000, 1); // He's hung like a sperm whale for pity's sake,
    while ($.cs_time < 5700) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_D", 10000, 1); // how can you not feel the part?!
    while ($.cs_time < 7244) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_E", 10000, 1); // But Stevie...
    while ($.cs_time < 9917) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_F", 10000, 1); // How's my star director?
    while ($.cs_time < 10414) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_G", 10000, 1); // Oh man. The struggle between artistic integrity and
    while ($.cs_time < 13409) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_H", 10000, 1); // humping, pumping action continues unabated.
    while ($.cs_time < 16161) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_I", 10000, 1); //And before you ask, yes, all four videos will be released by their...
    while ($.cs_time < 19667) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_J", 10000, 1); //Honey, can you PLEASE keep the anaconda in the shot,
    while ($.cs_time < 22706) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_K", 10000, 1); //he costs more per hour than you do!
    while ($.cs_time < 24572) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_L", 10000, 1); //Oh, sorry Steve.
    while ($.cs_time < 25843) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_M", 10000, 1); //I was thinking, we need some kind of big stunt to really promote the launch.
    while ($.cs_time < 29291) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_N", 10000, 1); //Something that will make a real impact on the City - any ideas?
    while ($.cs_time < 34272) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_O", 10000, 1); //In the old days a film launch used to have a gala events,
    while ($.cs_time < 37360) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_P", 10000, 1); //stars, limos, the night sky crisscrossed with search lights...
    while ($.cs_time < 42492) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_Q", 10000, 1); //Search lights?  I've got an idea...
    while ($.cs_time < 45162) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_R", 10000, 1); //...yeah, yeah, yeah. little sequined numbers, and limos, the premiers
    while ($.cs_time < 50224) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_S", 10000, 1); //Oh, yes ma'am, of course ma'am,
    while ($.cs_time < 53220) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Camera.DoFade(3000, 0 /* FADE_OUT */);
    Text.PrintNow("POR4_T", 10000, 1); //and the press, and the barrage of lights...
    while ($.cs_time < 54220) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.ClearPrints();
    while ($.cs_time < 56064) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }


  }
  else {
    while ($.cs_time < 194) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_F", 10000, 1); // How's my star director?
    while ($.cs_time < 1394) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_G", 10000, 1); // Oh man. The struggle between artistic integrity and
    while ($.cs_time < 4344) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_H", 10000, 1); // humping, pumping action continues unabated.
    while ($.cs_time < 7178) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_I", 10000, 1); //And before you ask, yes, all four videos will be released by their...
    while ($.cs_time < 10656) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_J", 10000, 1); //Honey, can you PLEASE keep the anaconda in the shot,
    while ($.cs_time < 13704) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_K", 10000, 1); //he costs more per hour than you do!
    while ($.cs_time < 15550) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_L", 10000, 1); //Oh, sorry Steve.
    while ($.cs_time < 16828) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_M", 10000, 1); //I was thinking, we need some kind of big stunt to really promote the launch.
    while ($.cs_time < 20256) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_N", 10000, 1); //Something that will make a real impact on the City - any ideas?
    while ($.cs_time < 25295) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_O", 10000, 1); //In the old days a film launch used to have a gala events,
    while ($.cs_time < 28750) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_P", 10000, 1); //stars, limos, the night sky crisscrossed with search lights...
    while ($.cs_time < 33584) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("POR4_Q", 10000, 1); //Search lights?  I've got an idea...
    while ($.cs_time < 36184) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Camera.DoFade(3000, 0 /* FADE_OUT */);


  }


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
  World.SetCarDensityMultiplier(1.0);
  World.SetPedDensityMultiplier(1.0);

  // ******************************************END OF CUTSCENE********************************

  Camera.SetFadingColor(0, 0, 0);
  await asyncWait(500);
  Camera.SetBehindPlayer();
  Streaming.LoadScene(-67.000, 939.297, 10.940);
  Clock.SetTimeOfDay(17, 0);
  //------------------REQUEST_MODELS ------------------------------

  $.player1.setMood(3 /* PLAYER_MOOD_WISECRACKING */, 60000);


  Streaming.RequestModel(HFYBU);
  Streaming.RequestModel(WFYBU);
  Streaming.RequestModel(WMYBU);
  Streaming.RequestModel(WMOBU);


  Streaming.RequestModel(pcj600);
  Streaming.RequestModel(GDa);


  while (!(Streaming.HasModelLoaded(HFYBU)) || !(Streaming.HasModelLoaded(WFYBU)) || !(Streaming.HasModelLoaded(WMYBU)) || !(Streaming.HasModelLoaded(WMOBU))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(pcj600)) || !(Streaming.HasModelLoaded(GDa))) {
    await asyncWait(0);
  }


  if (ONMISSION == 0) {
    $.gate_blip = Blip.AddForCoord(-483.5, 853.0, 9.9);
    $.corona_blip = Blip.AddForCoord(-526.2, 886.2, 70.0);
  }


  $.prawn_bike = Car.Create(pcj600, -6.4, 957.1, 9.4);
  $.door_guard = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, 0.3, 958.3, 9.9);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  Text.PrintNow("POR4_01", 5000, 1); //Go Downtown and adjust the spotlight on top of the building.
  Text.Print("POR4_02", 5000, 1); //A fast bike will be needed to jump from roof to roof.  The Security Guard usually drives a PCJ 600 to work...


  $.bike_blip = Blip.AddForCoord(6.8, 953.5, 9.4);
}





async function porn4_main_loop() {
  // SCM GOTO → porn4_main_loop lowered to endless loop
  while (true) {
    await asyncWait(0);



    //blippage

    if ($.porn4_goals == 0 || $.porn4_goals == 2) {
      if ($.player1.locateAnyMeans3D(-487.9, 837.7, 10.0, 5.0, 5.0, 5.0, true /* TRUE */)) {
        // ******************************************START OF CUTSCENE - Showing player initial complex**************************************************
        $.player1.setControl(false /* OFF */);
        Hud.SwitchWidescreen(true /* ON */);
        Clock.Store();
        Camera.SetFixedPosition(-456.4, 851.2, 25.9, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(-499.2, 837.7, 11.1, 2 /* JUMP_CUT */);
        Text.ClearPrints();
        TIMERA = 0;
        while (TIMERA < 1000) {
          await asyncWait(0);
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
            if ($.button_pressed == 1) {
              $.button_pressed = 0;
              // SCM GOTO → end_cut_porn4_1 (not lowered; manual jump required)
              throw new Error("unresolved GOTO end_cut_porn4_1"); // fallback: would break linear control flow
            }
          }
          else {
            if ($.button_pressed == 0) {
              $.button_pressed = 1;
            }
          }
        }
        Text.PrintNow("POR4_05", 5000, 1); //These stairs will lead round to a lower office.
        TIMERA = 0;
        while (TIMERA < 5000) {
          await asyncWait(0);
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
            if ($.button_pressed == 1) {
              $.button_pressed = 0;
              // SCM GOTO → end_cut_porn4_1 (not lowered; manual jump required)
              throw new Error("unresolved GOTO end_cut_porn4_1"); // fallback: would break linear control flow
            }
          }
          else {
            if ($.button_pressed == 0) {
              $.button_pressed = 1;
            }
          }
        }
        // SCM label end_cut_porn4_1
        Text.ClearPrints();
        Camera.RestoreJumpcut();
        $.player1.setControl(true /* ON */);
        Clock.Restore();
        Hud.SwitchWidescreen(false /* OFF */);
        // ******************************************END OF CUTSCENE - Showing player initial complex****************************************************
        $.bike_blip.remove();
        $.gate_blip.remove();
        $.porn4_goals = 3;
      }
    }


    if ($.porn4_goals == 1) {
      $.bike_blip.remove();
      $.gate_blip = Blip.AddForCoord(-487.9, 837.7, 10.0);
      $.porn4_goals = 2;
    }


    if ($.porn4_goals == 3) {
      $.lift_blip = Blip.AddForCoord(-562.7, 782.7, 22.4);
      $.porn4_goals = 4;
    }


    if ($.porn4_goals == 5) {
      $.window_blip = Blip.AddForCoord(-528.2, 774.5, 98.0);
      $.porn4_goals = 6;
    }



    //cutscene showing first jump

    if ($.porn4_goals == 6) {
      if ($.watched_jump_cutscene == 0) {
        if ($.player1.locateAnyMeans3D(-528.2, 774.5, 98.0, 5.0, 5.0, 5.0, true /* TRUE */)) {
          // ******************************************START OF CUTSCENE - Showing first jump******************************************************
          $.window_blip.remove();
          $.player1.setControl(false /* OFF */);
          Hud.SwitchWidescreen(true /* ON */);
          Clock.Store();
          Camera.SetFixedPosition(-531.8, 817.6, 99.1, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(-532.3, 825.6, 98.7, 2 /* JUMP_CUT */);
          $.player1.setCoordinates(-537.3, 897.3, 67.4);
          $.player1.setHeading(4.5);
          Text.ClearPrints();
          await asyncWait(500);
          Text.PrintNow("POR4_08", 5000, 1); //Smash through the window to start the course.  You have until 07:00 before it gets too light to get up there unseen.
          TIMERA = 0;
          while (TIMERA < 5000) {
            await asyncWait(0);
            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
              if ($.button_pressed == 1) {
                $.button_pressed = 0;
                // SCM GOTO → end_cut_porn4_2 (not lowered; manual jump required)
                throw new Error("unresolved GOTO end_cut_porn4_2"); // fallback: would break linear control flow
              }
            }
            else {
              if ($.button_pressed == 0) {
                $.button_pressed = 1;
              }
            }
          }
          Camera.SetFixedPosition(-530.2, 825.27, 98.4, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(-529.6, 901.06, 72.1, 2 /* JUMP_CUT */);
          Text.PrintNow("POR4_09", 5000, 1); //The pickups will show you which building to jump to next.
          TIMERA = 0;
          while (TIMERA < 5000) {
            await asyncWait(0);
            if ($.player1.locateAnyMeans3D(-526.2, 886.2, 70.0, 10.0, 10.0, 10.0, true /* TRUE */)) {
            }
            //DRAW_CORONA -526.2 886.2 70.0 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
              if ($.button_pressed == 1) {
                $.button_pressed = 0;
                // SCM GOTO → end_cut_porn4_2 (not lowered; manual jump required)
                throw new Error("unresolved GOTO end_cut_porn4_2"); // fallback: would break linear control flow
              }
            }
            else {
              if ($.button_pressed == 0) {
                $.button_pressed = 1;
              }
            }
          }


          // SCM label end_cut_porn4_2
          Text.ClearPrints();
          $.player1.setCoordinates(-528.2, 774.5, 96.5);
          $.player1.setHeading(4.5);
          Camera.RestoreJumpcut();
          Camera.SetBehindPlayer();
          Clock.Restore();
          $.player1.setControl(true /* ON */);
          Hud.SwitchWidescreen(false /* OFF */);
          // ******************************************END OF CUTSCENE - Showing first jump********************************************************
          $.porn4_goals = 7;
          $.watched_jump_cutscene = 1;
        }
      }
      $.window_blip.remove();
      $.corona_blip.remove();
      $.corona_blip = Blip.AddForCoord(-526.2, 886.2, 70.0);
    }


    if ($.porn4_goals == 7) {

      //DRAW_CORONA -526.2 886.2 70.0 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-526.2, 886.2, 70.0, 10.0, 10.0, 10.0, true /* TRUE */)) {
        //ADD_ONE_OFF_SOUND 0.0 0.0 0.0 SOUND_PART_MISSION_COMPLETE
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-552.6, 1074.7, 52.4);
        $.porn4_goals = 8;
      }
    }


    if ($.porn4_goals == 8) {

      //DRAW_CORONA -552.6 1074.7 52.4 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-552.6, 1074.7, 52.4, 15.0, 15.0, 15.0, true /* TRUE */)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-645.7, 1129.7, 29.1);
        $.porn4_goals = 9;
      }
    }


    if ($.porn4_goals == 9) {

      //DRAW_CORONA -645.7 1129.7 29.1 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-645.7, 1129.7, 29.1, 10.0, 10.0, 10.0, true /* TRUE */)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-695.5, 1130.3, 32.6);
        $.porn4_goals = 10;
      }
    }


    if ($.porn4_goals == 10) {

      //DRAW_CORONA -695.5 1130.3 32.6 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-695.5, 1130.3, 32.6, 10.0, 10.0, 10.0, true /* TRUE */)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-800.6, 1141.7, 25.6);
        $.porn4_goals = 11;
      }
    }


    if ($.porn4_goals == 11) {

      //DRAW_CORONA -800.6 1141.7 25.6 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-800.6, 1141.7, 25.6, 20.0, 20.0, 20.0, true /* TRUE */)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-840.1, 1194.3, 16.7);
        $.porn4_goals = 12;
      }
    }


    if ($.porn4_goals == 12) {

      //DRAW_CORONA -840.1 1194.3 16.7 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-840.1, 1194.3, 16.7, 10.0, 10.0, 10.0, true /* TRUE */)) {
        //ADD_ONE_OFF_SOUND 0.0 0.0 0.0 SOUND_PART_MISSION_COMPLETE
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-792.4, 1299.2, 27.9);
        $.porn4_goals = 13;
      }
    }


    if ($.porn4_goals == 13) {

      //DRAW_CORONA -792.4 1299.2 27.9 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-792.4, 1299.2, 27.9, 10.0, 10.0, 10.0, true /* TRUE */)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-710.1, 1302.5, 20.6);
        $.porn4_goals = 14;
      }
    }


    if ($.porn4_goals == 14) {

      //DRAW_CORONA -710.1 1302.5 20.6 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-710.1, 1302.5, 20.6, 10.0, 10.0, 10.0, true /* TRUE */)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-681.8, 1338.8, 24.3);
        $.porn4_goals = 15;
      }
    }


    if ($.porn4_goals == 15) {

      //DRAW_CORONA -681.8 1338.8 24.3 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-681.8, 1338.8, 24.3, 10.0, 10.0, 10.0, true /* TRUE */)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-573.5, 1365.4, 16.6);
        $.porn4_goals = 16;
      }
    }


    if ($.porn4_goals == 16) {

      //DRAW_CORONA -573.5 1365.4 16.6 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-573.5, 1365.4, 16.6, 10.0, 10.0, 10.0, true /* TRUE */)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-482.0, 1355.7, 24.7);
        $.porn4_goals = 17;
      }
    }


    if ($.porn4_goals > 16) {
      if ($.player1.isStopped()) {
        if ($.ladder_down == 0) {
          // ******************************************START OF CUTSCENE - CREATING FLIP DOWN LADDER**************************************************
          $.player1.setControl(false /* OFF */);
          Hud.SwitchWidescreen(true /* ON */);
          Clock.Store();
          Camera.SetFixedPosition(-605.6, 1371.6, 23.1, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(-562.94, 1373.14, 14.81, 2 /* JUMP_CUT */);
          await asyncWait(1000);
          while ($.x_axis_ladder >= -140.0) {
            await asyncWait(0);
            $.gspot_stairs.setRotation($.x_axis_ladder, 0.0, 0.0);
            $.x_axis_ladder -= timed(1.0);
          }
          await asyncWait(1000);
          $.lift_blip.remove();
          Text.PrintNow("POR4_11", 7000, 1); //Return to the ladder if you need access to the rooftops again.
          $.lift_blip.remove();
          $.lift_blip = Blip.AddForCoordOld(-574.2, 1373.35, 16.1, 5 /* PURPLE */, 2 /* BLIP_ONLY */);
          $.lift_blip.dim(true /* TRUE */);
          Camera.RestoreJumpcut();
          Clock.Restore();
          $.player1.setControl(true /* ON */);
          Hud.SwitchWidescreen(false /* OFF */);
          // ******************************************END OF CUTSCENE - CREATING FLIP-DOWN LADDER****************************************************
          $.ladder_down = 1;
        }
      }
    }


    if ($.porn4_goals == 17) {

      //DRAW_CORONA -482.0 1355.7 24.7 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-482.0, 1355.7, 24.7, 10.0, 10.0, 10.0, true /* TRUE */)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-410.6, 1364.8, 29.7);
        $.porn4_goals = 18;
      }
    }


    if ($.porn4_goals == 18) {

      //DRAW_CORONA -410.6 1364.8 29.7 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-410.6, 1364.8, 29.7, 10.0, 10.0, 10.0, true /* TRUE */)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-354.3, 1385.0, 27.0);
        $.porn4_goals = 19;
      }
    }


    if ($.porn4_goals == 19) {

      //DRAW_CORONA -354.3 1385.0 27.0 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-354.3, 1385.0, 27.0, 10.0, 10.0, 10.0, true /* TRUE */)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-283.3, 1401.7, 27.3);
        $.porn4_goals = 20;
      }
    }


    if ($.porn4_goals == 20) {

      //DRAW_CORONA -283.3 1401.7 27.3 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-283.3, 1401.7, 27.3, 10.0, 10.0, 10.0, true /* TRUE */)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-280.5, 1335.0, 27.1);
        $.porn4_goals = 21;
      }
    }


    if ($.porn4_goals == 21) {

      //DRAW_CORONA -280.5 1335.0 27.1 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-280.5, 1335.0, 27.1, 10.0, 10.0, 10.0, true /* TRUE */)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-277.1, 1274.0, 27.9);
        $.porn4_goals = 22;
      }
    }


    if ($.porn4_goals == 22) {

      //DRAW_CORONA -277.1 1274.0 27.9 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-277.1, 1274.0, 27.9, 10.0, 10.0, 10.0, true /* TRUE */)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-277.3, 1216.3, 42.6);
        $.porn4_goals = 23;
      }
    }


    if ($.porn4_goals == 23) {

      //DRAW_CORONA -277.3 1216.3 42.6 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-277.3, 1216.3, 42.6, 10.0, 10.0, 10.0, true /* TRUE */)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.corona_blip.remove();
        $.corona_blip = Blip.AddForCoord(-336.5, 1047.8, 38.7);
        $.porn4_goals = 24;
      }
    }


    if ($.porn4_goals == 24) {

      //DRAW_CORONA -336.5 1047.8 38.7 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
      if ($.player1.locateAnyMeans3D(-336.5, 1047.8, 38.7, 10.0, 10.0, 10.0, true /* TRUE */)) {
        //ADD_ONE_OFF_SOUND 0.0 0.0 0.0 SOUND_PART_MISSION_COMPLETE
        $.corona_blip.remove();
        $.porn4_goals = 25;
      }
    }


    if ($.porn4_goals > 24) {
      if ($.player1.isStopped()) {
        if ($.ladder2_down == 0) {
          // ******************************************START OF CUTSCENE - CREATING FLIP DOWN LADDER**************************************************
          $.player1.setControl(false /* OFF */);
          Hud.SwitchWidescreen(true /* ON */);
          Clock.Store();
          $.x_axis_ladder = 0.0;
          Camera.SetFixedPosition(-303.3, 858.4, 21.0, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(-356.3, 919.0, 23.0, 2 /* JUMP_CUT */);
          await asyncWait(3000);
          Camera.SetFixedPosition(-345.3, 914.7, 17.6, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(-368.9, 909.8, 16.8, 2 /* JUMP_CUT */);
          await asyncWait(1000);
          while ($.x_axis_ladder >= -150.0) {
            await asyncWait(0);
            $.gspot_stairs2.setRotation($.x_axis_ladder, 0.0, 157.0);
            $.x_axis_ladder -= timed(1.0);
          }
          await asyncWait(1000);
          Camera.RestoreJumpcut();
          Clock.Restore();
          $.player1.setControl(true /* ON */);
          Hud.SwitchWidescreen(false /* OFF */);
          // ******************************************END OF CUTSCENE - CREATING FLIP-DOWN LADDER****************************************************
          $.ladder2_down = 1;
        }
      }
    }


    if ($.porn4_goals == 25) {
      $.searchlight_blip = Blip.AddForCoord(-358.0, 992.2, 46.3);
      $.porn4_goals = 26;
    }

    //waiting till player is in bike

    if ($.player1.isInModel(pcj600)) {
      if ($.porn4_goals == 0) {
        Text.ClearPrints();
        Text.PrintNow("POR4_03", 5000, 1); //You will need to get onto the roofs of the buildings.   There should be a lift into one of the upper offices...
        $.porn4_goals = 1;
      }
    }

    //Bike and guard on prawn island

    if ($.player1.locateAnyMeans3D(6.8, 953.5, 10.0, 80.0, 80.0, 80.0, false /* FALSE */)) {
      if ($.create_bike_on_prawn_island == 0) {
        $.prawn_bike = Car.Create(pcj600, -6.4, 957.1, 9.4);
        $.door_guard = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, 0.3, 958.3, 9.9);
        $.create_bike_on_prawn_island = 1;
      }
    }
    else {
      if ($.create_bike_on_prawn_island == 1) {
        $.door_guard.markAsNoLongerNeeded();
        $.prawn_bike.markAsNoLongerNeeded();
        $.create_bike_on_prawn_island = 0;
      }
    }


    if ($.porn4_goals == 0) {
      if ($.create_bike_on_prawn_island == 1) {
        if (Car.IsDead($.prawn_bike)) {
          $.porn4_goals = 1;
        }
      }
    }

    //player on lift

    if ($.player1.locateStoppedAnyMeans3D(-562.5, 782.3, 21.8, 2.0, 2.0, 2.0, true /* TRUE */)) {
      if (!($.player1.isOnAnyBike())) {
        Text.PrintNow("POR4_07", 5000, 1); //You will need a bike so you can jump from building to building.
      }
      if ($.player1.isOnAnyBike()) {
        if ($.player1.isSittingInAnyCar()) {
          // ******************************************START OF CUTSCENE - PLAYER GOING UP IN LIFT**************************************************\

          $.player1.setControl(false /* OFF */);
          Hud.SwitchWidescreen(true /* ON */);
          Clock.Store();
          Camera.SetFixedPosition(-565.4, 782.6, 23.7, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(-556.8, 782.0, 22.8, 2 /* JUMP_CUT */);
          $.players_lift_vehicle = $.player1.storeCarIsIn();
          $.players_lift_vehicle.setCoordinates(-562.5, 782.3, 21.8);
          $.players_lift_vehicle.setHeading(264.8);
          $.lift_office1 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WMOBU, -556.2, 783.0, 21.8); //left when looking in
          $.lift_office1.setHeading(204.7);
          $.lift_office2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYBU, -555.8, 781.3, 21.8); //right when looking in
          $.lift_office2.setHeading(12.4);
          Game.SetCharsChatting($.lift_office1, $.lift_office2, 86400000);
          await asyncWait(1000);

          //opening bottom doors

          Audio.LoadMissionAudio(1, "liftop" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          Audio.LoadMissionAudio(2, "liftbel" as any);
          while (!(Audio.HasMissionAudioLoaded(2))) {
            await asyncWait(0);
          }
          Audio.PlayMissionAudio(2);
          while (!(Audio.HasMissionAudioFinished(2))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(2);
          Audio.LoadMissionAudio(2, "liftrun" as any);
          while (!(Audio.HasMissionAudioLoaded(2))) {
            await asyncWait(0);
          }
          TIMERA = 0;
          // SCM label lift_loop
          await asyncWait(0);
          Audio.PlayMissionAudio(1);
          $.left_bottom.slide(-559.476, 784.807, 23.279, 0.0, 0.1, 0.0, false /* FALSE */);
          $.right_bottom.slide(-559.476, 779.64, 23.279, 0.0, 0.1, 0.0, false /* FALSE */);


          if (TIMERA > 2000) {
            // SCM GOTO → bottom_lift_doors_open (not lowered; manual jump required)
            throw new Error("unresolved GOTO bottom_lift_doors_open"); // fallback: would break linear control flow
          }
          // SCM GOTO → lift_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO lift_loop"); // fallback: would break linear control flow
          // SCM label bottom_lift_doors_open
          if (!(Char.IsDead($.lift_office1))) {
            if (!(Char.IsDead($.lift_office2))) {
              Game.SetCharsChatting($.lift_office1, $.lift_office2, 10);
              $.lift_office1.lookAtPlayerAlways($.player1);
            }
          }
          await asyncWait(80);
          if (!(Char.IsDead($.lift_office2))) {
            $.lift_office2.lookAtPlayerAlways($.player1);
          }
          await asyncWait(100);
          Audio.LoadMissionAudio(1, "inlift" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          if (!(Car.IsDead($.players_lift_vehicle))) {
            $.players_lift_vehicle.setStatus(3 /* STATUS_PHYSICS */);
            $.players_lift_vehicle.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
            $.players_lift_vehicle.setTempAction(8 /* TEMPACT_GOFORWARD */, 1100);
            Audio.PlayMissionAudio(1);
          }
          TIMERA = 0;
          // SCM label waiting_for_player_to_get_into_lift
          await asyncWait(0);
          if (!(Car.IsDead($.players_lift_vehicle))) {
            if ($.players_lift_vehicle.locate2D(-557.9, 782.3, 1.3, 1.3, false /* FALSE */)) {
              // SCM GOTO → player_in_lift (not lowered; manual jump required)
              throw new Error("unresolved GOTO player_in_lift"); // fallback: would break linear control flow
            }
          }
          if (TIMERA > 900) {
            // SCM GOTO → player_in_lift (not lowered; manual jump required)
            throw new Error("unresolved GOTO player_in_lift"); // fallback: would break linear control flow
          }
          // SCM GOTO → waiting_for_player_to_get_into_lift (not lowered; manual jump required)
          throw new Error("unresolved GOTO waiting_for_player_to_get_into_lift"); // fallback: would break linear control flow
          // SCM label player_in_lift
          $.players_lift_vehicle.setTempAction(5 /* TEMPACT_HANDBRAKESTRAIGHT */, 1);
          if (!(Char.IsDead($.lift_office1))) {
            $.lift_office1.stopLooking();
            $.lift_office1.turnToFaceCoord(-562.5, 782.3, 21.8);
          }
          await asyncWait(80);
          if (!(Char.IsDead($.lift_office2))) {
            $.lift_office2.stopLooking();
            $.lift_office2.turnToFaceCoord(-562.5, 782.3, 21.8);
          }
          await asyncWait(1000);

          //closing bottom doors
          TIMERA = 0;
          Audio.LoadMissionAudio(1, "liftcl" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          // SCM label lift_loop2
          await asyncWait(0);
          $.left_bottom.slide(-559.476, 783.107, 23.279, 0.0, 0.1, 0.0, false /* FALSE */);
          $.right_bottom.slide(-559.476, 781.34, 23.279, 0.0, 0.1, 0.0, false /* FALSE */);
          Audio.PlayMissionAudio(1);
          if (TIMERA > 1000) {
            if ($.setting_player_upstairs == 0) {
              $.lift_office1.delete();
              $.lift_office2.delete();
              $.lift_office1 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WMOBU, -550.0, 788.7, 96.5); //left when looking in
              $.lift_office1.setHeading(90.6);
              $.lift_office2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYBU, -550.0, 787.2, 96.5); //right when looking in
              $.lift_office2.setHeading(90.6);
              if (!(Car.IsDead($.players_lift_vehicle))) {
                $.players_lift_vehicle.setCoordinates(-551.5, 787.9, 96.5);
                $.players_lift_vehicle.setHeading(269.4);
              }
              $.setting_player_upstairs = 1;
            }
          }
          if (TIMERA > 2000) {
            // SCM GOTO → bottom_lift_doors_closed (not lowered; manual jump required)
            throw new Error("unresolved GOTO bottom_lift_doors_closed"); // fallback: would break linear control flow
          }
          // SCM GOTO → lift_loop2 (not lowered; manual jump required)
          throw new Error("unresolved GOTO lift_loop2"); // fallback: would break linear control flow
          // SCM label bottom_lift_doors_closed
          Audio.PlayMissionAudio(2);
          Camera.SetFixedPosition(-553.3, 786.1, 100.0, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(-550.4, 788.4, 97.2, 2 /* JUMP_CUT */);
          Camera.SwitchLift(true /* ON */);


          await asyncWait(5000);
          Audio.ClearMissionAudio(1);
          Audio.LoadMissionAudio(2, "liftbel" as any);
          while (!(Audio.HasMissionAudioLoaded(2))) {
            await asyncWait(0);
          }
          Audio.PlayMissionAudio(2);
          while (!(Audio.HasMissionAudioFinished(2))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(2);


          //FLUFF IN TOP OFFICE
          $.top_office1 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HFYBU, -564.4, 784.4, 96.5); //sitting behind reception desk
          $.top_office1.setHeading(3.1);
          $.top_office2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYBU, -552.6, 768.6, 96.5); //drinking spunk
          $.top_office2.setHeading(179.0);
          $.top_office3 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HFYBU, -537.9, 787.6, 96.5); //sitting on chairs facing wall
          $.top_office3.setHeading(92.5);
          $.top_office4 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HFYBU, -524.0, 811.6, 96.5); //standing at watercooler talknig to top_office5 (back to window)
          $.top_office4.setHeading(108.6);
          $.top_office5 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WMOBU, -524.0, 810.0, 96.5); //standing at watercooler talknig to top_office4 (facing window)
          $.top_office5.setHeading(0.0);
          Game.SetCharsChatting($.top_office4, $.top_office5, 86400000);
          $.top_office6 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WMYBU, -529.5, 826.9, 96.5); //standing looking out of smashable glass window
          $.top_office6.setHeading(358.0);
          $.top_office7 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WMYBU, -539.2, 768.6, 96.5); //sitting on chair talking to top_office7
          $.top_office7.setHeading(6.5);
          $.top_office8 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HFYBU, -540.2, 769.3, 96.5); //standing talking to top_office8
          $.top_office8.setHeading(214.6);
          Game.SetCharsChatting($.top_office7, $.top_office8, 86400000);
          $.create_top_office_workers = 1;


          //switching security camera off
          Camera.SwitchLift(false /* OFF */);
          Camera.SetFixedPosition(-557.0, 787.7, 99.0, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(-550.6, 787.6, 97.5, 2 /* JUMP_CUT */);

          //opening top doors
          TIMERA = 0;
          Audio.LoadMissionAudio(1, "liftop" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          // SCM label lift_loop3
          await asyncWait(0);
          Audio.PlayMissionAudio(1);
          $.left_top.slide(-553.563, 790.595, 97.917, 0.0, 0.1, 0.0, false /* FALSE */);
          $.right_top.slide(-553.563, 785.427, 97.917, 0.0, 0.1, 0.0, false /* FALSE */);
          if (TIMERA > 2000) {
            // SCM GOTO → top_lift_doors_open (not lowered; manual jump required)
            throw new Error("unresolved GOTO top_lift_doors_open"); // fallback: would break linear control flow
          }
          // SCM GOTO → lift_loop3 (not lowered; manual jump required)
          throw new Error("unresolved GOTO lift_loop3"); // fallback: would break linear control flow
          // SCM label top_lift_doors_open
          /*
          IF NOT IS_CHAR_DEAD lift_office1
          SET_CHAR_OBJ_GOTO_COORD_ON_FOOT lift_office1 -555.1 788.5
          ENDIF
          IF NOT IS_CHAR_DEAD lift_office2
          SET_CHAR_OBJ_GOTO_COORD_ON_FOOT lift_office2 -590.8 790.1
          ENDIF
          */
          if (!(Car.IsDead($.players_lift_vehicle))) {
            $.players_lift_vehicle.setTempAction(2 /* TEMPACT_REVERSE */, 10000);
            TIMERA = 0;
          }
          // SCM label waiting_for_player_to_get_out_of_lift
          await asyncWait(0);
          if (!(Car.IsDead($.players_lift_vehicle))) {
            if ($.players_lift_vehicle.locate2D(-560.5, 788.0, 1.0, 1.0, false /* FALSE */)) {
              // SCM GOTO → player_out_lift (not lowered; manual jump required)
              throw new Error("unresolved GOTO player_out_lift"); // fallback: would break linear control flow
            }
          }
          if (TIMERA > 2500) {
            // SCM GOTO → player_out_lift (not lowered; manual jump required)
            throw new Error("unresolved GOTO player_out_lift"); // fallback: would break linear control flow
          }
          // SCM GOTO → waiting_for_player_to_get_out_of_lift (not lowered; manual jump required)
          throw new Error("unresolved GOTO waiting_for_player_to_get_out_of_lift"); // fallback: would break linear control flow
          // SCM label player_out_lift
          $.players_lift_vehicle.setTempAction(5 /* TEMPACT_HANDBRAKESTRAIGHT */, 1);
          if (!($.players_lift_vehicle.locate2D(-560.5, 788.0, 1.0, 1.0, false /* FALSE */))) {
            $.players_lift_vehicle.setCoordinates(-560.5, 788.0, 96.0);
            $.players_lift_vehicle.setHeading(186.0);
          }
          await asyncWait(1000);

          //closing top doors
          TIMERA = 0;
          Audio.LoadMissionAudio(1, "liftcl" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          // SCM label lift_loop4
          await asyncWait(0);
          $.left_top.slide(-553.563, 788.895, 97.917, 0.0, 0.1, 0.0, false /* FALSE */);
          $.right_top.slide(-553.563, 787.127, 97.917, 0.0, 0.1, 0.0, false /* FALSE */);
          Audio.PlayMissionAudio(1);
          if (TIMERA > 2000) {
            // SCM GOTO → top_lift_doors_closed (not lowered; manual jump required)
            throw new Error("unresolved GOTO top_lift_doors_closed"); // fallback: would break linear control flow
          }
          // SCM GOTO → lift_loop4 (not lowered; manual jump required)
          throw new Error("unresolved GOTO lift_loop4"); // fallback: would break linear control flow
          // SCM label top_lift_doors_closed
          $.lift_office1.markAsNoLongerNeeded();
          $.lift_office2.markAsNoLongerNeeded();
          if (!(Car.IsDead($.players_lift_vehicle))) {
            $.players_lift_vehicle.setStatus(0 /* STATUS_PLAYER */);
          }
          //switching security camera off
          $.setting_player_upstairs = 0;
          Camera.SwitchLift(false /* OFF */);
          Camera.RestoreJumpcut();
          Clock.Restore();
          $.player1.setControl(true /* ON */);
          Hud.SwitchWidescreen(false /* OFF */);

          // ******************************************END OF CUTSCENE - PLAYER GOING UP IN LIFT****************************************************
          if ($.porn4_goals == 1 || $.porn4_goals == 2) {
            $.gate_blip.remove();
            $.porn4_goals = 4;
          }
          if ($.porn4_goals == 4) {
            Text.ClearPrints();
            Text.PrintNow("POR4_06", 7000, 1); //Return to the lower office if you need access to the rooftops again.
            $.lift_blip.remove();
            $.lift_blip = Blip.AddForCoordOld(-562.7, 782.7, 22.4, 5 /* PURPLE */, 2 /* BLIP_ONLY */);
            $.lift_blip.dim(true /* TRUE */);
            $.porn4_goals = 5;
          }
          else {
            $.searchlight_blip.remove();
            $.porn4_goals = 7;
          }
        }
      }
    }


    //FLUFF IN BOTTOM OFFICE

    if ($.player1.locateAnyMeans3D(-568.0, 793.2, 22.0, 40.0, 40.0, 40.0, false /* FALSE */)) {
      if ($.player1.isInArea3D(-576.9, 836.2, 15.0, -583.0, 821.6, 25.0, false /* FALSE */)) {
        if ($.create_bottom_office_workers == 0) {
          $.bottom_office1 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HFYBU, -571.5, 776.5, 21.8); //standing behind desk
          $.bottom_office1.setHeading(355.4);
          $.bottom_office2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYBU, -570.9, 779.1, 21.8); //talking to chick behind desk
          $.bottom_office2.setHeading(171.2);
          Game.SetCharsChatting($.bottom_office1, $.bottom_office2, 86400000);
          $.bottom_office3 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WMYBU, -574.1, 788.0, 21.8); //sitting on chairs as player goes in
          $.bottom_office3.setHeading(278.0);
          $.bottom_office4 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HFYBU, -571.2, 810.6, 21.8); //standing talking to guy sitting down (officeworker6)
          $.bottom_office4.setHeading(272.9);
          $.bottom_office5 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HFYBU, -560.8, 787.5, 21.8); //standing browsing books
          $.bottom_office5.setHeading(278.8);
          $.bottom_office6 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WMOBU, -569.4, 810.5, 21.8); //sitting on chairs at left hand side of the office FACING WINDOW
          $.bottom_office6.setHeading(114.1);
          Game.SetCharsChatting($.bottom_office4, $.bottom_office6, 86400000);
          $.create_bottom_office_workers = 1;
        }
      }
    }
    else {
      if ($.create_bottom_office_workers == 1) {
        $.bottom_office1.delete();
        $.bottom_office2.delete();
        $.bottom_office3.delete();
        $.bottom_office4.delete();
        $.bottom_office5.delete();
        $.bottom_office6.delete();
        $.create_bottom_office_workers = 0;
      }
    }


    if (!(Char.IsDead($.bottom_office3))) {
      $.bottom_office3.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 999999);
    }


    if (!(Char.IsDead($.bottom_office5))) {
      $.bottom_office5.setWaitState(25 /* WAITSTATE_USE_ATM */, 999999);
    }


    if (!(Char.IsDead($.bottom_office6))) {
      $.bottom_office6.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 999999);
    }


    if (!(Char.IsDead($.top_office1))) {
      $.top_office1.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 999999);
    }


    if (!(Char.IsDead($.top_office2))) {
      $.top_office2.setWaitState(25 /* WAITSTATE_USE_ATM */, 999999);
    }


    if (!(Char.IsDead($.top_office3))) {
      $.top_office3.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 999999);
    }


    if (!(Char.IsDead($.top_office7))) {
      $.top_office7.setWaitState(24 /* WAITSTATE_SIT_IDLE */, 999999);
    }


    //deleting upstairs office workers

    if (!($.player1.isInArea3D(-568.6, 765.4, 90.9, -479.8, 846.2, 111.0, false /* FALSE */))) {
      if ($.create_top_office_workers == 1) {
        $.top_office1.delete();
        $.top_office2.delete();
        $.top_office3.delete();
        $.top_office4.delete();
        $.top_office5.delete();
        $.top_office6.delete();
        $.top_office7.delete();
        $.top_office8.delete();
        $.create_top_office_workers = 0;
      }
    }



    //player at spotlight

    if ($.porn4_goals == 26) {
      if ($.player1.locateStoppedOnFoot3D(-355.6, 990.8, 44.4, 1.0, 1.0, 2.0, true /* TRUE */)) {
        // ******************************************START OF CUTSCENE - PLAYER TURNING TITS ON***************************************************
        $.player1.setControl(false /* OFF */);
        Hud.SwitchWidescreen(true /* ON */);
        const _res430 = Clock.GetTimeOfDay();
$.hours = _res430.hours;
$.minutes = _res430.minutes;
        if ($.hours > 16) {
          if ($.hours < 23) {
            Clock.SetTimeOfDay(23, 0);
          }
        }
        World.ClearArea(-356.1, 990.1, 44.4, 1.0, true);
        $.player1.setCoordinates(-356.1, 990.1, 44.4);
        $.player1.setHeading(260.5);
        Camera.SetFixedPosition(-358.1, 991.5, 46.8, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(-355.2, 990.3, 46.1, 2 /* JUMP_CUT */);
        Cutscene.Load("GSPOT");
        Cutscene.Start();

        //switching off camera
        await asyncWait(1000);
        $.scplayer.setWaitState(25 /* WAITSTATE_USE_ATM */, 1000);
        await asyncWait(2000);
        $.scplayer.clearWaitState();
        $.spotlight_shining_to_sea.delete();
        await asyncWait(500);
        $.spotlight_shining_to_sea = ScriptObject.CreateNoOffset(dts_soapytitwank_a, -324.797, 991.184, 71.708);
        await asyncWait(500);
        $.spotlight_shining_to_sea.delete();
        await asyncWait(500);
        $.spotlight_shining_to_sea = ScriptObject.CreateNoOffset(dts_soapytitwank_a, -324.797, 991.184, 71.708);
        await asyncWait(300);
        $.spotlight_shining_to_sea.delete();
        await asyncWait(200);
        $.spotlight_shining_to_sea = ScriptObject.CreateNoOffset(dts_soapytitwank_a, -324.797, 991.184, 71.708);
        await asyncWait(100);
        $.spotlight_shining_to_sea.delete();
        await asyncWait(50);
        $.spotlight_shining_to_sea = ScriptObject.CreateNoOffset(dts_soapytitwank_a, -324.797, 991.184, 71.708);
        await asyncWait(10);
        $.spotlight_shining_to_sea.delete();
        await asyncWait(10);
        $.spotlight_shining_to_sea = ScriptObject.CreateNoOffset(dts_soapytitwank_a, -324.797, 991.184, 71.708);
        await asyncWait(10);
        $.spotlight_shining_to_sea.delete();
        await asyncWait(500);

        //turning camera around
        Camera.SetFixedPosition(-350.10, 991.07, 44.97, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(-478.2, 969.8, 137.3, 2 /* JUMP_CUT */);
        await asyncWait(1000);
        $.player1.setCoordinates(-342.9, 984.7, 44.8);
        while (!($.spotlight.rotate(360.0, 1.0, false /* FALSE */))) {
          await asyncWait(0);
        }
        await asyncWait(500);
        $.spotlight_shining_onto_wall = ScriptObject.CreateNoOffset(dts_soapytitwank_b, -419.28, 952.886, 140.66);
        await asyncWait(10);
        $.spotlight_shining_onto_wall.delete();
        await asyncWait(10);
        $.spotlight_shining_onto_wall = ScriptObject.CreateNoOffset(dts_soapytitwank_b, -419.28, 952.886, 140.66);
        await asyncWait(10);
        $.spotlight_shining_onto_wall.delete();
        await asyncWait(50);
        $.spotlight_shining_onto_wall = ScriptObject.CreateNoOffset(dts_soapytitwank_b, -419.28, 952.886, 140.66);
        await asyncWait(100);
        $.spotlight_shining_onto_wall.delete();
        await asyncWait(200);
        $.spotlight_shining_onto_wall = ScriptObject.CreateNoOffset(dts_soapytitwank_b, -419.28, 952.886, 140.66);
        await asyncWait(300);
        $.spotlight_shining_onto_wall.delete();
        await asyncWait(500);
        $.spotlight_shining_onto_wall = ScriptObject.CreateNoOffset(dts_soapytitwank_b, -419.28, 952.886, 140.66);
        await asyncWait(500);
        $.spotlight_shining_onto_wall.delete();
        await asyncWait(500);
        $.spotlight_shining_onto_wall = ScriptObject.CreateNoOffset(dts_soapytitwank_b, -419.28, 952.886, 140.66);
        $.spotlight_shining_onto_wall.dontRemove();
        await asyncWait(5000);
        Cutscene.Clear();
        Camera.RestoreJumpcut();
        $.player1.setControl(true /* ON */);
        Hud.SwitchWidescreen(false /* OFF */);
        // ******************************************END OF CUTSCENE - PLAYER TURNING TITS ON*****************************************************
        // ******************************************START OF ASSET AQUIRED CUTSCENE********************************
        Camera.DoFade(500, 0 /* FADE_OUT */);
        while (Camera.GetFadingStatus()) {
          await asyncWait(0);
        }
        $.player1.setCoordinates(-2.8, 985.9, 10.9);
        $.porn_cash_pickup = Pickup.CreateProtection($.porncashX, $.porncashY, $.porncashZ, $.porn_revenue, $.porn_revenue);
        Streaming.LoadScene(17.6, 957.6, 16.7);
        Camera.SetFixedPosition(39.5, 940.1, 21.8, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(17.6, 957.6, 16.7, 2 /* JUMP_CUT */);
        Camera.DoFade(500, 1 /* FADE_IN */);
        while (Camera.GetFadingStatus()) {
          await asyncWait(0);
        }
        Audio.PlayMissionPassedTune(1);
        Text.PrintBig("POR_AS1", 5000, 6); //FILM STUDIO ASSET COMPLETED
        await asyncWait(5000);
        Streaming.LoadScene(-4.0, 961.5, 9.7);
        Camera.SetFixedPosition(9.2, 964.6, 12.9, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(-4.0, 961.5, 9.7, 2 /* JUMP_CUT */);
        Text.PrintWithNumberNow("POR_AS2", $.porn_revenue, 6000, 1); //Inter Global Films will now generate revenue up to a maximum of $~1~. Make sure you collect it regularly.
        await asyncWait(6000);
        Camera.DoFade(500, 0 /* FADE_OUT */);
        while (Camera.GetFadingStatus()) {
          await asyncWait(0);
        }
        $.player1.setCoordinates(-353.0, 990.0, 44.4);
        $.player1.setHeading(102.5);
        const _res431 = $.player1.getCoordinates();
$.player_x = _res431.x;
$.player_y = _res431.y;
$.player_z = _res431.z;
        Streaming.LoadScene($.player_x, $.player_y, $.player_z);
        Camera.DoFade(500, 1 /* FADE_IN */);
        Camera.RestoreJumpcut();
        $.player1.setControl(true /* ON */);
        Hud.SwitchWidescreen(false /* OFF */);
        // ******************************************END OF ASSET AQUIRED CUTSCENE********************************
        // SCM GOTO → mission_passed_porn4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_passed_porn4"); // fallback: would break linear control flow
      }
    }


    $.time_to_fail = Clock.GetMinutesToTimeOfDay(7, 0);
    if ($.time_to_fail == 0) {
      Text.PrintNow("POR4_10", 5000, 1); //It's too light to get up there unseen.
      // SCM GOTO → mission_failed_porn4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn4"); // fallback: would break linear control flow
    }


  }
}



// Mission failed

async function mission_failed_porn4() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}


// mission passed

async function mission_passed_porn4() {


  Text.ClearPrints();
  Text.PrintWithNumberBig("M_PASS", 8000, 5000, 1); //"Mission Passed!"
  //PLAY_MISSION_PASSED_TUNE 1

  $.player1.clearWantedLevel();
  $.player1.addScore(8000);
  $.heli1_cargen.switch(101); //switching chris' copter on!
  //opening bottom lift doors

  $.left_bottom.slide(-559.476, 784.807, 23.279, 0.0, 10.0, 0.0, false /* FALSE */);
  $.right_bottom.slide(-559.476, 779.64, 23.279, 0.0, 10.0, 0.0, false /* FALSE */);
  $.left_top.slide(-553.563, 790.595, 97.917, 0.0, 10.0, 0.0, false /* FALSE */);
  $.right_top.slide(-553.563, 785.427, 97.917, 0.0, 10.0, 0.0, false /* FALSE */);
  Stat.PlayerMadeProgress(1);
  Stat.RegisterMissionPassed("PORN_4");
  $.porn_contact_blip.remove();
  $.porn_contact_blip = Blip.AddShortRangeSpriteForCoord($.porncashX, $.porncashY, $.porncashZ, $.the_porn_blip);
  ++$.counter_60_percent;
  $.porn_asset_acquired = 1;
  $.flag_porn_mission4_passed = 1;
}




// mission cleanup

async function mission_cleanup_porn4() {


  ONMISSION = 0;
  $.player1.setControl(true /* on */);
  $.lift_blip.remove();
  $.searchlight_blip.remove();
  $.bike_blip.remove();
  $.gate_blip.remove();
  $.window_blip.remove();
  $.corona_blip.remove();
  Streaming.MarkModelAsNoLongerNeeded(HFYBU);
  Streaming.MarkModelAsNoLongerNeeded(WFYBU);
  Streaming.MarkModelAsNoLongerNeeded(WMYBU);
  Streaming.MarkModelAsNoLongerNeeded(WMOBU);
  Streaming.MarkModelAsNoLongerNeeded(pcj600);
  Streaming.MarkModelAsNoLongerNeeded(GDa);
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
  return;





  //code to make jump onto ladder point good
  /*
  IF IS_PLAYER_IN_AREA_2D player1 -605.3 1372.3 -598.0 1365.5 FALSE
  IF IS_PLAYER_IN_ANY_CAR player1
  STORE_CAR_PLAYER_IS_IN_NO_SAVE player1 players_car_usj
  GET_CAR_SPEED players_car_usj car_speed_usj
  IF car_speed_usj > 10.0
  jump_flag = 1
  ENDIF
  IF jump_flag = 1
  SET_TIME_SCALE 0.3
  SET_FIXED_CAMERA_POSITION -603.6 1379.0 20.8 0.0 0.0 0.0
  POINT_CAMERA_AT_CAR players_car_usj FIXED JUMP_CUT
  WHILE IS_CAR_IN_AIR_PROPER players_car_usj
  OR collision_counter_usj < 10
  ++ collision_counter_usj
  WAIT 0
  DRAW_CORONA -573.5 1365.4 16.6 1.0 CORONATYPE_CIRCLE FLARETYPE_NONE 0 0 255
  IF IS_CAR_DEAD players_car_usj
  GOTO restore_if_fail3
  ENDIF
  IF NOT IS_PLAYER_PLAYING player1
  GOTO restore_if_fail3
  ENDIF
  IF NOT IS_PLAYER_IN_ANY_CAR player1
  GOTO restore_if_fail3
  ENDIF
  ENDWHILE
  restore_if_fail3:
  SET_TIME_SCALE 1.0
  RESTORE_CAMERA_JUMPCUT
  jump_flag = 0
  collision_counter_usj = 0
  ENDIF
  ENDIF
  ENDIF
  */

}

export async function porn4() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************Porn 4******************************************
  // *****************************************Sky at Night************************************
  // *****************************************************************************************
  // *****************************************************************************************
  //	G - spotlight	G-spotlight

  // SCRIPT_NAME porno4
  // Mission start stuff

  await mission_start_porn4();  // SCM GOSUB mission_start_porn4
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_failed_porn4();  // SCM GOSUB mission_failed_porn4
  }
  await mission_cleanup_porn4();  // SCM GOSUB mission_cleanup_porn4
  // MissionBoundary

  // Variables for mission
  //people

  // VAR_INT bottom_office1
  // VAR_INT bottom_office2
  // VAR_INT bottom_office3
  // VAR_INT bottom_office4
  // VAR_INT bottom_office5
  // VAR_INT bottom_office6
  // VAR_INT top_office1
  // VAR_INT top_office2
  // VAR_INT top_office3
  // VAR_INT top_office4
  // VAR_INT top_office5
  // VAR_INT top_office6
  // VAR_INT top_office7
  // VAR_INT top_office8
  // VAR_INT lift_office1
  // VAR_INT lift_office2
  // VAR_INT players_lift_vehicle
  // VAR_INT spotlight_shining_onto_wall
  // VAR_INT prawn_bike
  // VAR_INT door_guard

  //blips

  // VAR_INT lift_blip
  // VAR_INT searchlight_blip
  // VAR_INT bike_blip
  // VAR_INT gate_blip
  // VAR_INT window_blip
  // VAR_INT corona_blip

  //flags

  // VAR_INT porn4_goals
  // VAR_INT create_bottom_office_workers
  // VAR_INT create_top_office_workers
  // VAR_INT setting_player_upstairs
  // VAR_INT time_to_fail
  // VAR_INT create_bike_on_prawn_island
  // VAR_INT watched_jump_cutscene
  // VAR_INT jump_flag
  // VAR_INT hours
  // VAR_INT minutes
  // VAR_INT ladder_down
  // VAR_INT ladder2_down
  // VAR_FLOAT x_axis_ladder

  // ****************************************Mission Start************************************

}
