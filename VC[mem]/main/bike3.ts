// Generated from main/bike3.sc

import { $ } from "../vars.mts";

async function mission_start_bike3() {


  Stat.RegisterMissionGiven();


  ONMISSION = 1;


  $.flag_location_on_bike3 = 0;


  $.flag_location_on_bike3 = 0;


  $.flag_guard1_dead_bike3 = 0;


  $.flag_guard2_dead_bike3 = 0;


  $.flag_guard3_dead_bike3 = 0;


  $.flag_guard4_dead_bike3 = 0;


  $.flag_guard5_dead_bike3 = 0;


  $.flag_guard6_dead_bike3 = 0;


  $.flag_attack_player_bike3 = 0;

  // Guard alarm creation


  $.counter_blokes_alive_bike3 = 0;


  $.flag_created_bloke_in_area_bike3 = 0;


  $.flag_created_bloke_in_area2_bike3 = 0;


  $.flag_timer_started_bike3 = 0;


  $.flag_guard1_state_bike3 = 0;


  $.flag_guard2_state_bike3 = 0;


  $.flag_guard3_state_bike3 = 0;


  $.flag_guard4_state_bike3 = 0;


  $.flag_guard5_state_bike3 = 0;


  $.flag_guard6_state_bike3 = 0;


  $.flag_guard7_state_bike3 = 0;


  $.flag_guard8_state_bike3 = 0;


  $.flag_guard9_state_bike3 = 0;


  $.flag_guard10_state_bike3 = 0;


  $.flag_guard11_state_bike3 = 0;


  $.flag_guard12_state_bike3 = 0;


  $.flag_guard13_state_bike3 = 0;


  $.flag_guard14_state_bike3 = 0;


  $.flag_guard15_state_bike3 = 0;


  $.flag_guard16_state_bike3 = 0;


  $.flag_alarm_sounded_bike3 = 0;


  $.flag_ped1_go_for_alarm_bike3 = 0;


  $.flag_ped2_go_for_alarm_bike3 = 0;

  // total counter


  $.total_guards_created_bike3 = 0;

  // player stuff


  $.player_x_bike3 = 0.0;


  $.player_y_bike3 = 0.0;


  $.player_z_bike3 = 0.0;

  // Chase guys


  $.chase_guys_created_bike3 = 0;


  $.flag_player_got_bike_bike3 = 0;

  // Compound stuff


  $.flag_player_in_compound_bike3 = 0;


  $.flag_stair_blip_on_bike3 = 0;


  $.bike_blip_on_1stime_bike3 = 0;

  // gaurd AI stuff


  $.flag_guard1_got_ai_bike3 = 0;


  $.flag_guard2_got_ai_bike3 = 0;


  $.flag_guard3_got_ai_bike3 = 0;


  $.flag_guard4_got_ai_bike3 = 0;


  $.flag_guard5_got_ai_bike3 = 0;


  $.flag_guard6_got_ai_bike3 = 0;


  $.counter_all_guards_got_ai_bike3 = 0;

  // Timer stuff


  $.timer_guards_react_bike3 = 0;

  // Frame counter stuff


  $.frame_counter_bike3 = 0;


  // VAR_INT flag_fade_done_bike3
  $.flag_fade_done_bike3 = 0;


  await asyncWait(0);


  Text.LoadMissionText("BIKE3");


  Shortcut.SetDropoffPointForMission(-609.723, 658.861, 9.908, 279.440);




  // ****************************************START OF CUTSCENE********************************

  // This is the correct cutscene the names were just round the wrong ways


  Streaming.LoadSpecialCharacter(1, "CSplay");


  Streaming.LoadSpecialCharacter(2, "CSbigm");


  Streaming.LoadSpecialCharacter(3, "mserver");


  Streaming.SetAreaVisible(VIS_BIKER_BAR);


  Streaming.LoadScene(-597.02, 642.46, 11.0);


  World.SetExtraColors(15, false /* FALSE */);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3))) {
    await asyncWait(0);


  }


  Cutscene.Load("bike_2");


  Cutscene.SetOffset(-602.052, 636.289, 10.636);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_bigm = CutsceneObject.Create(SPECIAL02);
  $.cs_bigm.setAnim("CSbigm");


  $.cs_server = CutsceneObject.Create(SPECIAL03);
  $.cs_server.setAnim("mserver");


  World.ClearArea(-597.25, 655.87, 10.06, 1.0, true /* TRUE */); // PROPER STUFF
  $.player1.setCoordinates(-597.25, 655.87, 10.06);
  $.player1.setHeading(0.0);


  Camera.DoFade(2000, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text

  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 4538) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM3_A", 10000, 1); //"Hey there Mitch.


  while ($.cs_time < 6581) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM3_B", 10000, 1); //"Well if it ain't 'bad ass' Vercetti.


  while ($.cs_time < 8775) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM3_C", 10000, 1); //"Now I wanna see how good you can fight for your patch.


  while ($.cs_time < 11662) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM3_D", 10000, 1); //"A local street gang made the mistake of stealing my hog...


  while ($.cs_time < 14895) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM3_E", 10000, 1); //"probably 'cause of some machismo thing or something.


  while ($.cs_time < 17616) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM3_F", 10000, 1); //"Me and the boys would go over and teach them a lesson in respect an'all.


  while ($.cs_time < 22783) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM3_G", 10000, 1); //"Anyways,


  while ($.cs_time < 24681) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM3_H", 10000, 1); //"Then I got to thinking this would make a good initiation for you.


  while ($.cs_time < 28415) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM3_I", 10000, 1); //"You get my bike back and you can tell Paul he's got his security.


  while ($.cs_time < 32256) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 37916) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);


  Streaming.SetAreaVisible(VIS_MAIN_MAP);


  World.ClearExtraColors(false /* FALSE */);


  Streaming.LoadScene(-597.25, 655.87, 10.06);

  // ****************************************END OF CUTSCENE**********************************


  $.player1.setMood(PLAYER_MOOD_PISSED_OFF, 60000);


  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);


  Streaming.RequestModel(doontoon50);
  Streaming.RequestModel(road_downtown_new2);
  Streaming.RequestModel(road_downtown02);
  Streaming.RequestModel(ammunation_dt);
  Streaming.RequestModel(doontoon19);
  Streaming.RequestModel(dt_compound_roof);
  Streaming.RequestModel(doontoon51);
  Streaming.RequestModel(LODntoon28);
  Streaming.RequestModel(ammu_windows1);
  //REQUEST_MODEL dtm_cablesb



  while (!(Streaming.HasModelLoaded(doontoon50)) || !(Streaming.HasModelLoaded(road_downtown_new2)) || !(Streaming.HasModelLoaded(road_downtown02)) || !(Streaming.HasModelLoaded(ammunation_dt)) || !(Streaming.HasModelLoaded(doontoon19)) || !(Streaming.HasModelLoaded(dt_compound_roof))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(doontoon51)) || !(Streaming.HasModelLoaded(LODntoon28)) || !(Streaming.HasModelLoaded(ammu_windows1))) {
    //OR NOT HAS_MODEL_LOADED dtm_cablesb

    await asyncWait(0);


  }

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  Hud.SwitchWidescreen(true /* ON */);


  await asyncWait(1000);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  Text.PrintNow("BM3_1", 4000, 1); //"A local gang have stolen the boss's bike get it back!"


  TIMERA = 0;


  while (TIMERA < 3500) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
      // SCM GOTO → mission_skip_bike3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_skip_bike3"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("BM3_6", 6000, 1); //"They are holed up behind AmmuNation in the Downtown area."


  TIMERA = 0;


  while (TIMERA < 5500) {
    await asyncWait(0);
    if (TIMERA >= 4000) {
      if ($.flag_fade_done_bike3 == 0) {
        Camera.DoFade(1500, 0 /* FADE_OUT */);
        Text.ClearThisPrint("BM3_6");
        $.flag_fade_done_bike3 = 1;
      }


    }
    if (TIMERA < 4000) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
        // SCM GOTO → mission_skip_bike3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_skip_bike3"); // fallback: would break linear control flow
      }


    }


  }


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);


  }


  Streaming.LoadScene(-675.93, 1116.28, 14.35);


  Camera.SetFixedPosition(-675.93, 1116.28, 14.35, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-675.81, 1117.19, 14.40, 2 /* JUMP_CUT */);


  Camera.DoFade(2000, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);


  }


  Text.PrintNow("BM3_7", 5000, 1); //"You will need a fast vehicle to gain access to the roof."


  TIMERB = 0;


  while (TIMERB < 4000) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
      // SCM GOTO → mission_skip_bike3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_skip_bike3"); // fallback: would break linear control flow
    }


  }

  //LOAD_SCENE -678.97 1147.28 25.48

  Camera.SetFixedPosition(-678.97, 1147.28, 25.48, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-678.65, 1148.22, 25.44, 2 /* JUMP_CUT */);
  Text.PrintNow("BM3_8", 5000, 1); //"Use a fast bike to jump from these stairs to the roof on the far side of the road


  TIMERA = 0;


  while (TIMERA < 4000) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
      // SCM GOTO → mission_skip_bike3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_skip_bike3"); // fallback: would break linear control flow
    }


  }
}



async function mission_skip_bike3() {


  Text.ClearPrints();


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);


  }


  Streaming.LoadScene(-597.25, 655.87, 10.06);


  Hud.SwitchWidescreen(false /* OFF */);
  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  Camera.RestoreJumpcut();
  Text.ClearThisPrint("BM3_8");


  Streaming.MarkModelAsNoLongerNeeded(doontoon50);
  Streaming.MarkModelAsNoLongerNeeded(road_downtown_new2);
  Streaming.MarkModelAsNoLongerNeeded(road_downtown02);
  Streaming.MarkModelAsNoLongerNeeded(ammunation_dt);
  Streaming.MarkModelAsNoLongerNeeded(doontoon19);
  Streaming.MarkModelAsNoLongerNeeded(dt_compound_roof);
  Streaming.MarkModelAsNoLongerNeeded(doontoon51);
  Streaming.MarkModelAsNoLongerNeeded(LODntoon28);
  Streaming.MarkModelAsNoLongerNeeded(ammu_windows1);
  //MARK_MODEL_AS_NO_LONGER_NEEDED dtm_cablesb


  // Waiting for the ped models to load


  Streaming.RequestModel(SGa); // street gang


  Streaming.RequestModel(SGb); // street gang


  Streaming.RequestModel(BKa); // biker used at cutscene at end


  Streaming.RequestModel(ANGEL);


  Streaming.RequestModel(TEC9);


  Streaming.RequestModel(M4);


  Streaming.RequestModel(GANGBUR);


  while (!(Streaming.HasModelLoaded(SGa)) || !(Streaming.HasModelLoaded(SGb)) || !(Streaming.HasModelLoaded(ANGEL)) || !(Streaming.HasModelLoaded(TEC9)) || !(Streaming.HasModelLoaded(M4)) || !(Streaming.HasModelLoaded(BKa))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(GANGBUR))) {
    await asyncWait(0);


  }


  $.alarm_bike3 = Sound.AddContinuous(-702.16, 1215.37, 23.17, SOUND_BANK_ALARM_LOOP);
  $.alarm_bike3.remove();


  $.chase_car1_bike3 = Car.Create(GANGBUR, -518.54, 694.10, 10.89);
  $.chase_guard1_bike3 = Char.CreateInsideCar($.chase_car1_bike3, PEDTYPE_GANG_STREET, SGb);
  $.chase_guard5_bike3 = Char.CreateAsPassenger($.chase_car1_bike3, PEDTYPE_GANG_STREET, SGb, 0);
  $.chase_guard1_bike3.delete();
  $.chase_guard5_bike3.delete();
  $.chase_car1_bike3.delete();


  $.chase_car2_bike3 = Car.Create(GANGBUR, -296.53, 1254.60, 10.11);
  $.chase_guard2_bike3 = Char.CreateInsideCar($.chase_car2_bike3, PEDTYPE_GANG_STREET, SGa);
  $.chase_guard6_bike3 = Char.CreateAsPassenger($.chase_car2_bike3, PEDTYPE_GANG_STREET, SGb, 0);
  $.chase_guard2_bike3.delete();
  $.chase_guard6_bike3.delete();
  $.chase_car2_bike3.delete();


  $.chase_car3_bike3 = Car.Create(GANGBUR, -857.96, 1137.78, 9.79);
  $.chase_guard3_bike3 = Char.CreateInsideCar($.chase_car3_bike3, PEDTYPE_GANG_STREET, SGa);
  $.chase_guard7_bike3 = Char.CreateAsPassenger($.chase_car3_bike3, PEDTYPE_GANG_STREET, SGb, 0);
  $.chase_guard3_bike3.delete();
  $.chase_guard7_bike3.delete();
  $.chase_car3_bike3.delete();


  $.chase_car4_bike3 = Car.Create(GANGBUR, -604.24, 664.34, 9.91);
  $.chase_guard4_bike3 = Char.CreateInsideCar($.chase_car4_bike3, PEDTYPE_GANG_STREET, SGb);
  $.chase_guard8_bike3 = Char.CreateAsPassenger($.chase_car4_bike3, PEDTYPE_GANG_STREET, SGb, 0);
  $.chase_guard4_bike3.delete();
  $.chase_guard8_bike3.delete();
  $.chase_car4_bike3.delete();

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(1000);


  Camera.DoFade(2000, 1 /* FADE_IN */);


  $.stair_blip_bike3 = Blip.AddForCoord(-674.59, 1128.49, 10.08);


  $.flag_stair_blip_on_bike3 = 1;


  $.ground_z = 0.0000;

  // Creates the bike


  $.bike_bike3 = Car.Create(ANGEL, -700.08, 1300.14, 10.76);


  $.bike_bike3.setCanRespray(false /* FALSE */);


  $.bike_bike3.setHeading(180.0);

  // Creates guard1 on roof left hand side follows route 0


  $.guard1_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGa, -750.93, 1235.44, 23.73);


  $.guard1_bike3.clearThreatSearch();


  ++$.counter_blokes_alive_bike3;


  ++$.total_guards_created_bike3;

  // Creates guard2 on roof right hand side follows route 1


  $.guard2_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGa, -659.81, 1257.07, 23.17);


  $.guard2_bike3.clearThreatSearch();


  ++$.counter_blokes_alive_bike3;


  ++$.total_guards_created_bike3;

  // Creates guard3 on left hand side by the bike in the garage, patrols by the door that extra guards come out of Route 2


  $.guard3_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGa, -692.32, 1250.27, 10.20);


  $.guard3_bike3.clearThreatSearch();


  ++$.counter_blokes_alive_bike3;


  ++$.total_guards_created_bike3;

  // Creates guard4 on left hand side by chain link fence follows route 3


  $.guard4_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGb, -757.70, 1214.37, 10.07);


  $.guard4_bike3.clearThreatSearch();


  ++$.counter_blokes_alive_bike3;


  ++$.total_guards_created_bike3;

  // Creates guard5 on right hand side of bike working on it


  $.guard5_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGa, -699.21, 1300.28, 10.76);


  $.guard5_bike3.clearThreatSearch();


  ++$.counter_blokes_alive_bike3;


  ++$.total_guards_created_bike3;

  // Creates guard6 on left hand side of bike working on it


  $.guard6_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGb, -701.04, 1300.24, 10.76);


  $.guard6_bike3.clearThreatSearch();


  ++$.counter_blokes_alive_bike3;


  ++$.total_guards_created_bike3;


  $.blob_flag = 0;

  // waiting for the bike to be stopped in the correct area


  while (!($.bike_bike3.locateStopped3D(-596.63, 658.20, 10.06, 4.0, 4.0, 4.0, $.blob_flag))) {
    await asyncWait(0);
    ++$.frame_counter_bike3;
    if ($.frame_counter_bike3 > 20) {
      $.frame_counter_bike3 = 0;
    }
    if ($.counter_all_guards_got_ai_bike3 < 6) {
      await guard_AI2_bike3();  // SCM GOSUB guard_AI2_bike3
    }
    if ($.player1.isInArea3D(-642.32, 1198.51, 22.0, -768.194, 1306.725, 30.0, false /* FALSE */) || $.player1.isInArea3D(-685.75, 1239.31, 9.0, -768.194, 1306.725, 30.0, false /* FALSE */) || $.player1.isInArea3D(-753.43, 1213.0, 9.0, -768.194, 1306.725, 30.0, false /* FALSE */)) {
      $.player1.clearWantedLevel();
      if ($.flag_stair_blip_on_bike3 == 1) {
        $.stair_blip_bike3.remove();
        $.flag_stair_blip_on_bike3 = 0;
      }
      if ($.flag_player_got_bike_bike3 == 0) {
        if ($.bike_blip_on_1stime_bike3 == 0) {
          if (!(Car.IsDead($.bike_bike3))) {
            Text.PrintNow("BM3_9", 5000, 1); //Get Mitch's bike and get out of there!"
            $.radar_blip_bike_bike3 = Blip.AddForCar($.bike_bike3);
            $.bike_blip_on_1stime_bike3 = 1;
          }
          else {
            Text.PrintNow("BM3_2", 5000, 1); //"You were supposed to bring the bike back!"
            // SCM GOTO → mission_bike3_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_bike3_failed"); // fallback: would break linear control flow
          }


        }


      }
      $.flag_player_in_compound_bike3 = 1;
    }
    else {
      if ($.flag_player_got_bike_bike3 == 0) {
        if ($.bike_blip_on_1stime_bike3 == 1) {
          $.radar_blip_bike_bike3.remove();
          $.bike_blip_on_1stime_bike3 = 0;
        }


      }
      if ($.flag_player_got_bike_bike3 == 0) {
        if ($.flag_stair_blip_on_bike3 == 0) {
          $.stair_blip_bike3 = Blip.AddForCoord(-674.59, 1128.49, 10.08);
          $.flag_stair_blip_on_bike3 = 1;
        }


      }
      $.flag_player_in_compound_bike3 = 0;
    }
    if ($.chase_guys_created_bike3 == 0) {
      if ($.flag_player_got_bike_bike3 == 1) {
        if ($.flag_player_in_compound_bike3 == 0) {
          await chase_creation_bike3();  // SCM GOSUB chase_creation_bike3
        }


      }


    }
    if ($.chase_guys_created_bike3 == 1) {
      if (!(Char.IsDead($.chase_guard1_bike3))) {
        $.chase_guard1_bike3.setObjKillPlayerAnyMeans($.player1);
      }


      if (!(Char.IsDead($.chase_guard2_bike3))) {
        $.chase_guard2_bike3.setObjKillPlayerAnyMeans($.player1);
      }
      if (!(Char.IsDead($.chase_guard3_bike3))) {
        $.chase_guard3_bike3.setObjKillPlayerAnyMeans($.player1);
      }
      if (!(Char.IsDead($.chase_guard4_bike3))) {
        $.chase_guard4_bike3.setObjKillPlayerAnyMeans($.player1);
      }
      if (!(Char.IsDead($.chase_guard5_bike3))) {
        $.chase_guard5_bike3.setObjKillPlayerAnyMeans($.player1);
      }
      if (!(Char.IsDead($.chase_guard6_bike3))) {
        $.chase_guard6_bike3.setObjKillPlayerAnyMeans($.player1);
      }
      if (!(Char.IsDead($.chase_guard7_bike3))) {
        $.chase_guard7_bike3.setObjKillPlayerAnyMeans($.player1);
      }
      if (!(Char.IsDead($.chase_guard8_bike3))) {
        $.chase_guard8_bike3.setObjKillPlayerAnyMeans($.player1);
      }


    }
    const _res110 = $.player1.getCoordinates();
$.player_x_bike3 = _res110.x;
$.player_y_bike3 = _res110.y;
$.player_z_bike3 = _res110.z;
    await guard_check_bike3();  // SCM GOSUB guard_check_bike3
    if (Car.IsDead($.bike_bike3)) {
      Text.PrintNow("BM3_2", 5000, 1); //"You were supposed to bring the bike back!"
      // SCM GOTO → mission_bike3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike3_failed"); // fallback: would break linear control flow
    }
    else {
      if ($.player1.isInCar($.bike_bike3)) {
        if ($.flag_location_on_bike3 == 0) {
          $.blob_flag = 1;
          $.flag_attack_player_bike3 = 1;
          if ($.flag_player_got_bike_bike3 == 0) {
            if ($.bike_blip_on_1stime_bike3 == 1) {
              $.radar_blip_bike_bike3.remove();
              $.bike_blip_on_1stime_bike3 = 2;
            }


          }
          $.radar_blip_bike_bike3.remove();
          $.radar_blip_coord1_bike3 = Blip.AddForCoord(-596.63, 658.20, 10.06);
          Text.PrintNow("BM3_3", 5000, 1); //"Get the bike back to the base!"
          $.flag_player_got_bike_bike3 = 1;
          $.flag_location_on_bike3 = 1;
        }


      }
      else {
        if ($.flag_location_on_bike3 == 1) {
          $.blob_flag = 0;
          $.radar_blip_coord1_bike3.remove();
          $.radar_blip_bike_bike3 = Blip.AddForCar($.bike_bike3);
          Text.PrintNow("BM3_4", 5000, 1); //"Get on the bike!"
          $.flag_location_on_bike3 = 0;
        }


      }


    }
    if ($.flag_attack_player_bike3 == 1) {
      if ($.flag_timer_started_bike3 == 0) {
        TIMERB = 0;
        TIMERA = 0;
        $.flag_timer_started_bike3 = 1;
      }
      await alarm_guard_creation_bike3();  // SCM GOSUB alarm_guard_creation_bike3
      await guard_AI_bike3();  // SCM GOSUB guard_AI_bike3
      await alarm_guard_death_bike3();  // SCM GOSUB alarm_guard_death_bike3


    }


  }


  $.blob_flag = 1;


  $.radar_blip_bike_bike3.remove();


  $.radar_blip_coord1_bike3.remove();


  Hud.SwitchWidescreen(true /* ON */);
  $.player1.clearWantedLevel();
  $.player1.setControl(false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  Camera.SetFixedPosition(-607.076, 666.146, 13.891, 0.0, 0.0, 0.0);
  World.ClearArea(-596.63, 658.20, 10.06, 1.0, false /* FALSE */);
  Camera.PointAtPoint(-606.531, 665.364, 13.589, 2 /* JUMP_CUT */);


  $.scplayer.setObjLeaveCar($.bike_bike3);


  while ($.scplayer.isInCar($.bike_bike3)) {
    await asyncWait(0);
    if (Car.IsDead($.bike_bike3)) {
      Text.PrintNow("BM3_2", 5000, 1); //"You were supposed to bring the bike back!"
      // SCM GOTO → mission_bike3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike3_failed"); // fallback: would break linear control flow
    }


  }


  $.scplayer.setObjGotoCoordOnFoot(-594.99, 654.58);


  TIMERA = 0;


  while (!($.scplayer.locateOnFoot2D(-594.99, 654.58, 1.0, 1.0, false /* FALSE */))) {
    await asyncWait(0);
    if (TIMERA > 6000) {
      if (!($.scplayer.locateOnFoot2D(-594.99, 654.58, 1.0, 1.0, false /* FALSE */))) {
        // SCM GOTO → cut_skip_bike3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO cut_skip_bike3"); // fallback: would break linear control flow
      }


    }
    if (Car.IsDead($.bike_bike3)) {
      Text.PrintNow("BM3_2", 5000, 1); //"You were supposed to bring the bike back!"
      // SCM GOTO → mission_bike3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike3_failed"); // fallback: would break linear control flow
    }


  }
}



async function cut_skip_bike3() {


  $.scplayer.setObjNoObj();


  $.bike_driver_bike3 = Char.Create(PEDTYPE_GANG_BIKER, BKa, -608.72, 650.20, 10.06);
  $.bike_driver_bike3.clearThreatSearch();
  $.bike_driver_bike3.setRunning(true /* TRUE */);


  $.scplayer.turnToFaceChar($.bike_driver_bike3);


  if (!(Car.IsDead($.bike_bike3))) {
    $.bike_driver_bike3.setObjEnterCarAsDriver($.bike_bike3);
  }
  else {
    Text.PrintNow("BM3_2", 5000, 1); //"You were supposed to bring the bike back!"
    // SCM GOTO → mission_bike3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bike3_failed"); // fallback: would break linear control flow
  }


  TIMERA = 0;


  while (!($.bike_driver_bike3.isInAnyCar())) {
    await asyncWait(0);
    if (Car.IsDead($.bike_bike3)) {
      Text.PrintNow("BM3_2", 5000, 1); //"You were supposed to bring the bike back!"
      // SCM GOTO → mission_bike3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.bike_driver_bike3)) {
      // SCM GOTO → mission_bike3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike3_failed"); // fallback: would break linear control flow
    }
    if (TIMERA > 20000) {
      if (!($.bike_driver_bike3.isInCar($.bike_bike3))) {
        $.bike_driver_bike3.warpIntoCar($.bike_bike3);
      }


    }


  }


  if (!(Car.IsDead($.bike_bike3))) {
    $.bike_bike3.setCruiseSpeed(30.0);
    $.bike_bike3.setDrivingStyle(2);
    $.bike_bike3.wanderRandomly();
  }
  else {
    Text.PrintNow("BM3_2", 5000, 1); //"You were supposed to bring the bike back!"
    // SCM GOTO → mission_bike3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bike3_failed"); // fallback: would break linear control flow
  }


  while ($.bike_bike3.isOnScreen() && TIMERA < 4000) {
    await asyncWait(0);
    if (Car.IsDead($.bike_bike3)) {
      Text.PrintNow("BM3_2", 5000, 1); //"You were supposed to bring the bike back!"
      // SCM GOTO → mission_bike3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.bike_driver_bike3)) {
      // SCM GOTO → mission_bike3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike3_failed"); // fallback: would break linear control flow
    }


  }


  await asyncWait(3000);


  if (!(Car.IsDead($.bike_bike3))) {
    $.bike_bike3.setIdle();
  }


  $.bike_driver_bike3.delete();
  $.bike_bike3.delete();


  Hud.SwitchWidescreen(false /* OFF */);
  $.player1.setControl(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  Camera.RestoreJumpcut();


  // SCM GOTO → mission_bike3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_bike3_passed"); // fallback: would break linear control flow
}


// ****************************************** Mission Failed *******************************


async function mission_bike3_failed() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}





// *************************************** Mission Passed **********************************


async function mission_bike3_passed() {


  $.flag_bikers_mission3_passed = 1;
  Stat.RegisterMissionPassed("BIKE_3");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  Text.PrintWithNumberBig("M_PASS", 4000, 5000, 1); //"Mission Passed!"
  $.player1.addScore(4000);
  $.bikers_contact_blip.remove(); // Mission strand has finished so remove blip
}




// *************************************** Mission Cleanup *********************************


async function mission_cleanup_bike3() {
  ONMISSION = 0;


  Streaming.MarkModelAsNoLongerNeeded(doontoon50);
  Streaming.MarkModelAsNoLongerNeeded(road_downtown_new2);
  Streaming.MarkModelAsNoLongerNeeded(road_downtown02);
  Streaming.MarkModelAsNoLongerNeeded(ammunation_dt);
  Streaming.MarkModelAsNoLongerNeeded(doontoon19);
  Streaming.MarkModelAsNoLongerNeeded(dt_compound_roof);
  Streaming.MarkModelAsNoLongerNeeded(doontoon51);
  Streaming.MarkModelAsNoLongerNeeded(LODntoon28);
  Streaming.MarkModelAsNoLongerNeeded(ammu_windows1);
  //MARK_MODEL_AS_NO_LONGER_NEEDED dtm_cablesb


  Path.RemoveRoute(0);
  Path.RemoveRoute(1);
  Path.RemoveRoute(2);
  Path.RemoveRoute(3);


  $.alarm_bike3.remove();
  Streaming.MarkModelAsNoLongerNeeded(SGa);
  Streaming.MarkModelAsNoLongerNeeded(SGb);
  Streaming.MarkModelAsNoLongerNeeded(ANGEL);
  Streaming.MarkModelAsNoLongerNeeded(BKa);
  Streaming.MarkModelAsNoLongerNeeded(TEC9);
  Streaming.MarkModelAsNoLongerNeeded(M4);
  Streaming.MarkModelAsNoLongerNeeded(GANGBUR);
  $.stair_blip_bike3.remove();
  $.radar_blip_bike_bike3.remove();
  $.radar_blip_coord1_bike3.remove();
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}



async function guard_check_bike3() {


  if ($.flag_player_in_compound_bike3 == 1) {
    if ($.frame_counter_bike3 == 0) {
      if ($.flag_guard1_dead_bike3 == 0) {
        if (Char.IsDead($.guard1_bike3)) {
          --$.counter_blokes_alive_bike3;
          if ($.flag_ped1_go_for_alarm_bike3 == 1) {
            $.flag_attack_player_bike3 = 1;
          }
          $.flag_guard1_dead_bike3 = 1;
        }
        else {
          if ($.flag_alarm_sounded_bike3 == 0) {
            if ($.flag_ped1_go_for_alarm_bike3 == 0) {
              if ($.guard1_bike3.hasSpottedPlayer($.player1) || $.flag_guard2_dead_bike3 == 1) {
                Text.Print("INTRUDE", 5000, 1); //"Intruder alert! Intruder alert!"
                $.guard1_bike3.setObjRunToCoord(-693.58, 1213.18);
                $.flag_ped1_go_for_alarm_bike3 = 1;
              }


            }


          }
          if ($.flag_alarm_sounded_bike3 == 0) {
            if ($.flag_ped1_go_for_alarm_bike3 == 1) {
              if ($.guard1_bike3.locateStoppedOnFoot3D(-693.58, 1213.18, 23.16, 1.0, 1.0, 2.0, false /* FALSE */)) {
                $.alarm_bike3 = Sound.AddContinuous(-693.58, 1213.18, 23.16, SOUND_BANK_ALARM_LOOP);
                $.flag_attack_player_bike3 = 1;
                $.guard1_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 1.0, RUN);
                $.guard1_bike3.setObjKillPlayerOnFoot($.player1);
                $.flag_alarm_sounded_bike3 = 1;
              }


            }


          }
          else {
            $.guard1_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
            $.guard1_bike3.setObjKillPlayerOnFoot($.player1);
          }


        }


      }


    }
    if ($.frame_counter_bike3 == 1) {
      if ($.flag_guard2_dead_bike3 == 0) {
        if (Char.IsDead($.guard2_bike3)) {
          if ($.flag_ped2_go_for_alarm_bike3 == 1) {
            $.flag_attack_player_bike3 = 1;
          }
          --$.counter_blokes_alive_bike3;
          $.flag_guard2_dead_bike3 = 1;
        }
        else {
          if ($.flag_alarm_sounded_bike3 == 0) {
            if ($.flag_ped2_go_for_alarm_bike3 == 0) {
              if ($.guard2_bike3.hasSpottedPlayer($.player1) || $.flag_guard1_dead_bike3 == 1) {
                Text.Print("INTRUDE", 5000, 1); //"Intruder alert! Intruder alert!"
                $.guard2_bike3.setObjRunToCoord(-693.58, 1213.18);
                $.flag_ped2_go_for_alarm_bike3 = 1;
              }


            }


          }
          if ($.flag_alarm_sounded_bike3 == 0) {
            if ($.flag_ped2_go_for_alarm_bike3 == 1) {
              if ($.guard2_bike3.locateStoppedOnFoot3D(-693.58, 1213.18, 23.16, 1.0, 1.0, 2.0, false /* FALSE */)) {
                $.alarm_bike3 = Sound.AddContinuous(-693.58, 1213.18, 23.16, SOUND_BANK_ALARM_LOOP);
                $.flag_attack_player_bike3 = 1;
                $.guard2_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
                $.guard2_bike3.setObjKillPlayerOnFoot($.player1);
                $.flag_alarm_sounded_bike3 = 1;
              }


            }


          }
          else {
            $.guard2_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
            $.guard2_bike3.setObjKillPlayerOnFoot($.player1);
          }


        }


      }


    }
    if ($.frame_counter_bike3 == 2) {
      if ($.flag_guard3_dead_bike3 == 0) {
        if (Char.IsDead($.guard3_bike3)) {
          --$.counter_blokes_alive_bike3;
          $.flag_guard3_dead_bike3 = 1;
        }
        else {
          if ($.flag_attack_player_bike3 == 0) {
            if ($.guard3_bike3.hasSpottedPlayer($.player1)) {
              Text.Print("INTRUDE", 5000, 1); //"Intruder alert! Intruder alert!"
              $.flag_attack_player_bike3 = 1;
            }


          }
          if ($.flag_attack_player_bike3 == 1) {

            //	IF guard3_got_ai_1time_bike3 = 0
            //		CHAR_FOLLOW_PATH guard3_bike3 player_x_bike3 player_y_bike3 player_z_bike3 0.5 RUN
            //		SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT guard3_bike3 player1
            //		guard3_got_ai_1time_bike3 = 1
            //	ENDIF

            $.guard3_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
            $.guard3_bike3.setObjKillPlayerOnFoot($.player1);


          }


        }


      }


    }
    if ($.frame_counter_bike3 == 3) {
      if ($.flag_guard4_dead_bike3 == 0) {
        if (Char.IsDead($.guard4_bike3)) {
          --$.counter_blokes_alive_bike3;
          $.flag_guard4_dead_bike3 = 1;
        }
        else {
          if ($.flag_attack_player_bike3 == 0) {
            if ($.guard4_bike3.hasSpottedPlayer($.player1)) {
              Text.Print("INTRUDE", 5000, 1); //"Intruder alert! Intruder alert!"
              $.flag_attack_player_bike3 = 1;
            }


          }
          if ($.flag_attack_player_bike3 == 1) {

            //	IF guard4_got_ai_1time_bike3 = 0
            //		CHAR_FOLLOW_PATH guard4_bike3 player_x_bike3 player_y_bike3 player_z_bike3 0.5 RUN
            //		SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT guard4_bike3 player1
            //		guard4_got_ai_1time_bike3 = 1
            //	ENDIF

            $.guard4_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
            $.guard4_bike3.setObjKillPlayerOnFoot($.player1);


          }


        }


      }


    }
    if ($.frame_counter_bike3 == 4) {
      if ($.flag_guard5_dead_bike3 == 0) {
        if (Char.IsDead($.guard5_bike3)) {
          --$.counter_blokes_alive_bike3;
          $.flag_guard5_dead_bike3 = 1;
        }
        else {
          if ($.flag_attack_player_bike3 == 0) {
            if ($.guard5_bike3.hasSpottedPlayer($.player1)) {
              Text.Print("INTRUDE", 5000, 1); //"Intruder alert! Intruder alert!"
              $.flag_attack_player_bike3 = 1;
            }


          }
          if ($.flag_attack_player_bike3 == 1 || $.flag_guard6_dead_bike3 == 1) {

            //	IF guard5_got_ai_1time_bike3 = 0
            //		CHAR_FOLLOW_PATH guard5_bike3 player_x_bike3 player_y_bike3 player_z_bike3 0.5 RUN
            //		SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT guard5_bike3 player1
            ////		guard5_got_ai_1time_bike3 = 1
            //	ENDIF

            $.guard5_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
            $.guard5_bike3.setObjKillPlayerOnFoot($.player1);


          }


        }


      }


    }
    if ($.frame_counter_bike3 == 5) {
      if ($.flag_guard6_dead_bike3 == 0) {
        if (Char.IsDead($.guard6_bike3)) {
          --$.counter_blokes_alive_bike3;
          $.flag_guard6_dead_bike3 = 1;
        }
        else {
          if ($.flag_attack_player_bike3 == 0) {
            if ($.guard6_bike3.hasSpottedPlayer($.player1)) {
              Text.Print("INTRUDE", 5000, 1); //"Intruder alert! Intruder alert!"
              $.flag_attack_player_bike3 = 1;
            }


          }
          if ($.flag_attack_player_bike3 == 1 || $.flag_guard5_dead_bike3 == 1) {

            //	IF guard6_got_ai_1time_bike3 = 0
            //		CHAR_FOLLOW_PATH guard6_bike3 player_x_bike3 player_y_bike3 player_z_bike3 0.5 RUN
            //		SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT guard6_bike3 player1
            //		guard6_got_ai_1time_bike3 = 1
            //	ENDIF

            $.guard6_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
            $.guard6_bike3.setObjKillPlayerOnFoot($.player1);


          }


        }


      }


    }


  }
  else {
    if ($.flag_player_got_bike_bike3 == 1) {
      $.guard1_bike3.markAsNoLongerNeeded();
      $.guard2_bike3.markAsNoLongerNeeded();
      $.guard3_bike3.markAsNoLongerNeeded();
      $.guard4_bike3.markAsNoLongerNeeded();
      $.guard5_bike3.markAsNoLongerNeeded();
      $.guard6_bike3.markAsNoLongerNeeded();
    }


  }


  if ($.timer_guards_react_bike3 == 2) {
    $.timer_guards_react_bike3 = 0;
  }
}


// Greates guards if the alarm has been raised


async function alarm_guard_creation_bike3() {


  if ($.flag_player_in_compound_bike3 == 1) {
    if ($.total_guards_created_bike3 <= 29) {
      if ($.counter_blokes_alive_bike3 < 8) {
        if ($.flag_created_bloke_in_area_bike3 == 2) {
          TIMERB = 0;
          $.flag_created_bloke_in_area_bike3 = 0;
        }
        if ($.flag_created_bloke_in_area2_bike3 == 2) {
          TIMERA = 0;
          $.flag_created_bloke_in_area2_bike3 = 0;
        }
        if (!(World.IsAreaOccupied(-695.11, 1301.01, 8.0, -688.96, 1294.68, 14.0, false /* FALSE */, true /* TRUE */, true /* TRUE */, false /* FALSE */, false /* FALSE */))) {
          if (TIMERB >= 4000) {
            if ($.flag_created_bloke_in_area_bike3 == 0) {
              $.guard_number_bike3 = -1;
              if ($.flag_guard1_state_bike3 == 0 || $.flag_guard1_state_bike3 == 2) {
                World.ClearArea(-690.84, 1298.62, 10.76, 4.0, false /* FALSE */);
                $.created_guard1_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGa, -690.84, 1298.62, 10.76);
                $.guard_number_bike3 = $.created_guard1_bike3;
                $.flag_guard1_state_bike3 = 1;
              }
              else {
                if ($.flag_guard2_state_bike3 == 0 || $.flag_guard2_state_bike3 == 2) {
                  World.ClearArea(-690.84, 1298.62, 10.76, 4.0, false /* FALSE */);
                  $.created_guard2_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGa, -690.84, 1298.62, 10.76);
                  $.guard_number_bike3 = $.created_guard2_bike3;
                  $.flag_guard2_state_bike3 = 1;
                }
                else {
                  if ($.flag_guard3_state_bike3 == 0 || $.flag_guard3_state_bike3 == 2) {
                    World.ClearArea(-690.84, 1298.62, 10.76, 4.0, false /* FALSE */);
                    $.created_guard3_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGa, -690.84, 1298.62, 10.76);
                    $.guard_number_bike3 = $.created_guard3_bike3;
                    $.flag_guard3_state_bike3 = 1;
                  }
                  else {
                    if ($.flag_guard4_state_bike3 == 0 || $.flag_guard4_state_bike3 == 2) {
                      World.ClearArea(-690.84, 1298.62, 10.76, 4.0, false /* FALSE */);
                      $.created_guard4_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGa, -690.84, 1298.62, 10.76);
                      $.guard_number_bike3 = $.created_guard4_bike3;
                      $.flag_guard4_state_bike3 = 1;
                    }
                    else {
                      if ($.flag_guard5_state_bike3 == 0 || $.flag_guard5_state_bike3 == 2) {
                        World.ClearArea(-690.84, 1298.62, 10.76, 4.0, false /* FALSE */);
                        $.created_guard5_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGa, -690.84, 1298.62, 10.76);
                        $.guard_number_bike3 = $.created_guard5_bike3;
                        $.flag_guard5_state_bike3 = 1;
                      }
                      else {
                        if ($.flag_guard6_state_bike3 == 0 || $.flag_guard6_state_bike3 == 2) {
                          World.ClearArea(-690.84, 1298.62, 10.76, 4.0, false /* FALSE */);
                          $.created_guard6_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGa, -690.84, 1298.62, 10.76);
                          $.guard_number_bike3 = $.created_guard6_bike3;
                          $.flag_guard6_state_bike3 = 1;
                        }
                        else {
                          if ($.flag_guard7_state_bike3 == 0 || $.flag_guard7_state_bike3 == 2) {
                            World.ClearArea(-690.84, 1298.62, 10.76, 4.0, false /* FALSE */);
                            $.created_guard7_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGa, -690.84, 1298.62, 10.76);
                            $.guard_number_bike3 = $.created_guard7_bike3;
                            $.flag_guard7_state_bike3 = 1;
                          }
                          else {
                            if ($.flag_guard8_state_bike3 == 0 || $.flag_guard8_state_bike3 == 2) {
                              World.ClearArea(-690.84, 1298.62, 10.76, 4.0, false /* FALSE */);
                              $.created_guard8_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGa, -690.84, 1298.62, 10.76);
                              $.guard_number_bike3 = $.created_guard8_bike3;
                              $.flag_guard8_state_bike3 = 1;
                            }


                          }


                        }


                      }


                    }


                  }


                }


              }
              if (!(Char.IsDead($.guard_number_bike3))) {
                if (!($.guard_number_bike3 == -1)) {
                  $.guard_number_bike3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                  $.guard_number_bike3.setHeading(174.08);
                  $.guard_number_bike3.setObjRunToCoord(-691.25, 1294.99);
                  ++$.counter_blokes_alive_bike3;
                  ++$.total_guards_created_bike3;
                  $.flag_created_bloke_in_area_bike3 = 1;
                }


              }


            }


          }


        }

        // second area on the left hand side

        if (!(World.IsAreaOccupied(-735.7, 1261.3, 8.0, -728.2, 1264.8, 14.0, false /* FALSE */, true /* TRUE */, true /* TRUE */, false /* FALSE */, false /* FALSE */))) {
          if (TIMERA >= 7000) {
            if ($.flag_created_bloke_in_area2_bike3 == 0) {
              $.guard_number2_bike3 = -1;
              if ($.flag_guard9_state_bike3 == 0 || $.flag_guard9_state_bike3 == 2) {
                World.ClearArea(-733.7, 1263.0, 10.8, 4.0, false /* FALSE */);
                $.created_guard9_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGb, -733.7, 1263.0, 10.8);
                $.guard_number2_bike3 = $.created_guard9_bike3;
                $.flag_guard9_state_bike3 = 1;
              }
              else {
                if ($.flag_guard10_state_bike3 == 0 || $.flag_guard10_state_bike3 == 2) {
                  World.ClearArea(-733.7, 1263.0, 10.8, 4.0, false /* FALSE */);
                  $.created_guard10_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGb, -733.7, 1263.0, 10.8);
                  $.guard_number2_bike3 = $.created_guard10_bike3;
                  $.flag_guard10_state_bike3 = 1;
                }
                else {


                  if ($.flag_guard11_state_bike3 == 0 || $.flag_guard11_state_bike3 == 2) {
                    World.ClearArea(-733.7, 1263.0, 10.8, 4.0, false /* FALSE */);
                    $.created_guard11_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGb, -733.7, 1263.0, 10.8);
                    $.guard_number2_bike3 = $.created_guard11_bike3;
                    $.flag_guard11_state_bike3 = 1;
                  }
                  else {
                    if ($.flag_guard12_state_bike3 == 0 || $.flag_guard12_state_bike3 == 2) {
                      World.ClearArea(-733.7, 1263.0, 10.8, 4.0, false /* FALSE */);
                      $.created_guard12_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGb, -733.7, 1263.0, 10.8);
                      $.guard_number2_bike3 = $.created_guard12_bike3;
                      $.flag_guard12_state_bike3 = 1;
                    }
                    else {
                      if ($.flag_guard13_state_bike3 == 0 || $.flag_guard13_state_bike3 == 2) {
                        World.ClearArea(-733.7, 1263.0, 10.8, 4.0, false /* FALSE */);
                        $.created_guard13_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGb, -733.7, 1263.0, 10.8);
                        $.guard_number2_bike3 = $.created_guard13_bike3;
                        $.flag_guard13_state_bike3 = 1;
                      }
                      else {
                        if ($.flag_guard14_state_bike3 == 0 || $.flag_guard14_state_bike3 == 2) {
                          World.ClearArea(-733.7, 1263.0, 10.8, 4.0, false /* FALSE */);
                          $.created_guard14_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGb, -733.7, 1263.0, 10.8);
                          $.guard_number2_bike3 = $.created_guard14_bike3;
                          $.flag_guard14_state_bike3 = 1;
                        }
                        else {
                          if ($.flag_guard15_state_bike3 == 0 || $.flag_guard15_state_bike3 == 2) {
                            World.ClearArea(-733.7, 1263.0, 10.8, 4.0, false /* FALSE */);
                            $.created_guard15_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGb, -733.7, 1263.0, 10.8);
                            $.guard_number2_bike3 = $.created_guard15_bike3;
                            $.flag_guard15_state_bike3 = 1;
                          }
                          else {
                            if ($.flag_guard16_state_bike3 == 0 || $.flag_guard16_state_bike3 == 2) {
                              World.ClearArea(-733.7, 1263.0, 10.8, 4.0, false /* FALSE */);
                              $.created_guard16_bike3 = Char.Create(PEDTYPE_GANG_STREET, SGb, -733.7, 1263.0, 10.8);
                              $.guard_number2_bike3 = $.created_guard16_bike3;
                              $.flag_guard16_state_bike3 = 1;
                            }


                          }


                        }


                      }


                    }


                  }


                }


              }
              if (!(Char.IsDead($.guard_number2_bike3))) {
                if (!($.guard_number2_bike3 == -1)) {
                  $.guard_number2_bike3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                  $.guard_number2_bike3.setHeading(174.08);
                  $.guard_number2_bike3.setObjRunToCoord(-730.6, 1262.8);
                  ++$.counter_blokes_alive_bike3;
                  ++$.total_guards_created_bike3;
                  $.flag_created_bloke_in_area2_bike3 = 1;
                }


              }


            }


          }


        }


      }


    }


  }
}


// If the guards are created checks to give them AI


async function guard_AI_bike3() {


  if ($.flag_created_bloke_in_area_bike3 == 1) {
    if (!(Char.IsDead($.guard_number_bike3))) {
      if ($.guard_number_bike3.locateOnFoot3D(-691.25, 1294.99, 10.76, 1.0, 1.0, 2.0, false /* FALSE */)) {
        if ($.total_guards_created_bike3 > 29) {
          $.guard_number_bike3.setHealth(200);
          $.guard_number_bike3.giveWeapon(WEAPONTYPE_M4, 30000); // Set to infinate ammo
        }
        else {
          $.guard_number_bike3.giveWeapon(WEAPONTYPE_TEC9, 30000); // Set to infinate ammo
        }
        $.guard_number_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
        $.guard_number_bike3.setObjKillPlayerOnFoot($.player1);
        $.flag_created_bloke_in_area_bike3 = 2;
      }


    }
    else {
      $.flag_created_bloke_in_area_bike3 = 2;
    }


  }



  if ($.flag_created_bloke_in_area2_bike3 == 1) {
    if (!(Char.IsDead($.guard_number2_bike3))) {
      if ($.guard_number2_bike3.locateOnFoot3D(-730.6, 1262.8, 10.8, 1.0, 1.0, 2.0, false /* FALSE */)) {
        if ($.total_guards_created_bike3 > 29) {
          $.guard_number2_bike3.setHealth(200);
          $.guard_number2_bike3.giveWeapon(WEAPONTYPE_M4, 30000); // Set to infinate ammo
        }
        else {
          $.guard_number2_bike3.giveWeapon(WEAPONTYPE_TEC9, 30000); // Set to infinate ammo
        }
        $.guard_number2_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
        $.guard_number2_bike3.setObjKillPlayerOnFoot($.player1);
        $.flag_created_bloke_in_area2_bike3 = 2;
      }


    }
    else {
      $.flag_created_bloke_in_area2_bike3 = 2;
    }


  }
}


// Guard death checks - if alarm triggered then check to see if the guards are dead


async function alarm_guard_death_bike3() {


  if ($.flag_player_in_compound_bike3 == 1) {
    if ($.frame_counter_bike3 == 6) {
      if ($.flag_guard1_state_bike3 == 1) {
        if (Char.IsDead($.created_guard1_bike3)) {
          $.created_guard1_bike3.removeElegantly();
          --$.counter_blokes_alive_bike3;
          $.flag_guard1_state_bike3 = 2;
        }
        else {
          $.created_guard1_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
          $.created_guard1_bike3.setObjKillPlayerOnFoot($.player1);
        }


      }


    }
    if ($.frame_counter_bike3 == 7) {
      if ($.flag_guard2_state_bike3 == 1) {
        if (Char.IsDead($.created_guard2_bike3)) {
          $.created_guard2_bike3.removeElegantly();
          --$.counter_blokes_alive_bike3;
          $.flag_guard2_state_bike3 = 2;
        }
        else {
          $.created_guard2_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
          $.created_guard2_bike3.setObjKillPlayerOnFoot($.player1);
        }


      }


    }
    if ($.frame_counter_bike3 == 8) {
      if ($.flag_guard3_state_bike3 == 1) {
        if (Char.IsDead($.created_guard3_bike3)) {
          $.created_guard3_bike3.removeElegantly();
          --$.counter_blokes_alive_bike3;
          $.flag_guard3_state_bike3 = 2;
        }
        else {
          $.created_guard3_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
          $.created_guard3_bike3.setObjKillPlayerOnFoot($.player1);
        }


      }


    }
    if ($.frame_counter_bike3 == 9) {
      if ($.flag_guard4_state_bike3 == 1) {
        if (Char.IsDead($.created_guard4_bike3)) {
          $.created_guard4_bike3.removeElegantly();
          --$.counter_blokes_alive_bike3;
          $.flag_guard4_state_bike3 = 2;
        }
        else {
          $.created_guard4_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
          $.created_guard4_bike3.setObjKillPlayerOnFoot($.player1);
        }


      }


    }
    if ($.frame_counter_bike3 == 10) {
      if ($.flag_guard5_state_bike3 == 1) {
        if (Char.IsDead($.created_guard5_bike3)) {
          $.created_guard5_bike3.removeElegantly();
          --$.counter_blokes_alive_bike3;
          $.flag_guard5_state_bike3 = 2;
        }
        else {
          $.created_guard5_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
          $.created_guard5_bike3.setObjKillPlayerOnFoot($.player1);
        }


      }


    }
    if ($.frame_counter_bike3 == 11) {
      if ($.flag_guard7_state_bike3 == 1) {
        if (Char.IsDead($.created_guard7_bike3)) {
          $.created_guard7_bike3.removeElegantly();
          --$.counter_blokes_alive_bike3;
          $.flag_guard7_state_bike3 = 2;
        }
        else {
          $.created_guard7_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
          $.created_guard7_bike3.setObjKillPlayerOnFoot($.player1);
        }


      }


    }
    if ($.frame_counter_bike3 == 12) {
      if ($.flag_guard8_state_bike3 == 1) {
        if (Char.IsDead($.created_guard8_bike3)) {
          $.created_guard8_bike3.removeElegantly();
          --$.counter_blokes_alive_bike3;
          $.flag_guard8_state_bike3 = 2;
        }
        else {
          $.created_guard8_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
          $.created_guard8_bike3.setObjKillPlayerOnFoot($.player1);
        }


      }


    }
    if ($.frame_counter_bike3 == 13) {
      if ($.flag_guard9_state_bike3 == 1) {
        if (Char.IsDead($.created_guard9_bike3)) {
          $.created_guard9_bike3.removeElegantly();
          --$.counter_blokes_alive_bike3;
          $.flag_guard9_state_bike3 = 2;
        }
        else {
          $.created_guard9_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
          $.created_guard9_bike3.setObjKillPlayerOnFoot($.player1);
        }


      }


    }
    if ($.frame_counter_bike3 == 14) {
      if ($.flag_guard10_state_bike3 == 1) {
        if (Char.IsDead($.created_guard10_bike3)) {
          $.created_guard10_bike3.removeElegantly();
          --$.counter_blokes_alive_bike3;
          $.flag_guard10_state_bike3 = 2;
        }
        else {
          $.created_guard10_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
          $.created_guard10_bike3.setObjKillPlayerOnFoot($.player1);
        }


      }


    }
    if ($.frame_counter_bike3 == 15) {
      if ($.flag_guard11_state_bike3 == 1) {
        if (Char.IsDead($.created_guard11_bike3)) {
          $.created_guard11_bike3.removeElegantly();
          --$.counter_blokes_alive_bike3;
          $.flag_guard11_state_bike3 = 2;
        }
        else {
          $.created_guard11_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
          $.created_guard11_bike3.setObjKillPlayerOnFoot($.player1);
        }


      }


    }
    if ($.frame_counter_bike3 == 16) {
      if ($.flag_guard12_state_bike3 == 1) {
        if (Char.IsDead($.created_guard12_bike3)) {
          $.created_guard12_bike3.removeElegantly();
          --$.counter_blokes_alive_bike3;
          $.flag_guard12_state_bike3 = 2;
        }
        else {
          $.created_guard12_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
          $.created_guard12_bike3.setObjKillPlayerOnFoot($.player1);
        }


      }


    }
    if ($.frame_counter_bike3 == 17) {
      if ($.flag_guard13_state_bike3 == 1) {
        if (Char.IsDead($.created_guard13_bike3)) {
          $.created_guard13_bike3.removeElegantly();
          --$.counter_blokes_alive_bike3;
          $.flag_guard13_state_bike3 = 2;
        }
        else {
          $.created_guard13_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
          $.created_guard13_bike3.setObjKillPlayerOnFoot($.player1);
        }


      }


    }
    if ($.frame_counter_bike3 == 18) {
      if ($.flag_guard14_state_bike3 == 1) {
        if (Char.IsDead($.created_guard14_bike3)) {
          $.created_guard14_bike3.removeElegantly();
          --$.counter_blokes_alive_bike3;
          $.flag_guard14_state_bike3 = 2;
        }
        else {
          $.created_guard14_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
          $.created_guard14_bike3.setObjKillPlayerOnFoot($.player1);
        }


      }


    }
    if ($.frame_counter_bike3 == 19) {
      if ($.flag_guard15_state_bike3 == 1) {
        if (Char.IsDead($.created_guard15_bike3)) {
          $.created_guard15_bike3.removeElegantly();
          --$.counter_blokes_alive_bike3;
          $.flag_guard15_state_bike3 = 2;
        }
        else {
          $.created_guard15_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
          $.created_guard15_bike3.setObjKillPlayerOnFoot($.player1);
        }


      }


    }
    if ($.frame_counter_bike3 == 20) {
      if ($.flag_guard16_state_bike3 == 1) {
        if (Char.IsDead($.created_guard16_bike3)) {
          $.created_guard16_bike3.removeElegantly();
          --$.counter_blokes_alive_bike3;
          $.flag_guard16_state_bike3 = 2;
        }
        else {
          $.created_guard16_bike3.followPath($.player_x_bike3, $.player_y_bike3, $.player_z_bike3, 0.5, RUN);
          $.created_guard16_bike3.setObjKillPlayerOnFoot($.player1);
        }


      }


    }


  }
  else {
    if (!(Char.IsDead($.created_guard1_bike3))) {
      $.created_guard1_bike3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.created_guard2_bike3))) {
      $.created_guard2_bike3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.created_guard3_bike3))) {
      $.created_guard3_bike3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.created_guard4_bike3))) {
      $.created_guard4_bike3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.created_guard5_bike3))) {
      $.created_guard5_bike3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.created_guard6_bike3))) {
      $.created_guard6_bike3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.created_guard7_bike3))) {
      $.created_guard7_bike3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.created_guard8_bike3))) {
      $.created_guard8_bike3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.created_guard9_bike3))) {
      $.created_guard9_bike3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.created_guard10_bike3))) {
      $.created_guard10_bike3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.created_guard11_bike3))) {
      $.created_guard11_bike3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.created_guard12_bike3))) {
      $.created_guard12_bike3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.created_guard13_bike3))) {
      $.created_guard13_bike3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.created_guard14_bike3))) {
      $.created_guard14_bike3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.created_guard15_bike3))) {
      $.created_guard15_bike3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.created_guard16_bike3))) {
      $.created_guard16_bike3.markAsNoLongerNeeded();
    }


  }
}


// Creates cars to chase player


async function chase_creation_bike3() {


  if ($.chase_guys_created_bike3 == 0) {

    // guard1

    $.chase_car1_bike3 = Car.Create(GANGBUR, -783.346, 1367.562, 10.603);
    $.chase_car1_bike3.setHeading(192.0);
    $.chase_guard1_bike3 = Char.CreateInsideCar($.chase_car1_bike3, PEDTYPE_GANG_STREET, SGb);
    $.chase_guard5_bike3 = Char.CreateAsPassenger($.chase_car1_bike3, PEDTYPE_GANG_STREET, SGa, 0);
    $.chase_guard1_bike3.clearThreatSearch();
    $.chase_guard5_bike3.clearThreatSearch();
    $.chase_guard1_bike3.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.chase_guard1_bike3.giveWeapon(WEAPONTYPE_TEC9, 30000); // Set to infinate ammo
    $.chase_guard5_bike3.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.chase_guard5_bike3.giveWeapon(WEAPONTYPE_TEC9, 30000); // Set to infinate ammo
    $.chase_guard1_bike3.setObjKillPlayerAnyMeans($.player1);
    $.chase_guard5_bike3.setObjKillPlayerAnyMeans($.player1);
    $.chase_car1_bike3.setForwardSpeed(30.0);
    $.chase_car1_bike3.setCruiseSpeed(40.0);

    // Guard2

    $.chase_car2_bike3 = Car.Create(GANGBUR, -791.841, 1376.640, 10.422);
    $.chase_car2_bike3.setHeading(258.512);
    $.chase_guard2_bike3 = Char.CreateInsideCar($.chase_car2_bike3, PEDTYPE_GANG_STREET, SGa);
    $.chase_guard2_bike3.clearThreatSearch();
    $.chase_guard2_bike3.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.chase_guard2_bike3.giveWeapon(WEAPONTYPE_TEC9, 30000); // Set to infinate ammo
    $.chase_guard6_bike3 = Char.CreateAsPassenger($.chase_car2_bike3, PEDTYPE_GANG_STREET, SGb, 0);
    $.chase_guard6_bike3.clearThreatSearch();
    $.chase_guard6_bike3.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.chase_guard6_bike3.giveWeapon(WEAPONTYPE_TEC9, 30000); // Set to infinate ammo
    $.chase_guard2_bike3.setObjKillPlayerAnyMeans($.player1);
    $.chase_guard6_bike3.setObjKillPlayerAnyMeans($.player1);
    $.chase_car2_bike3.setForwardSpeed(30.0);
    $.chase_car2_bike3.setCruiseSpeed(40.0);

    // guard3

    $.chase_car3_bike3 = Car.Create(GANGBUR, -295.967, 1255.681, 10.142);
    $.chase_car3_bike3.setHeading(357.556);
    $.chase_guard3_bike3 = Char.CreateInsideCar($.chase_car3_bike3, PEDTYPE_GANG_STREET, SGa);
    $.chase_guard3_bike3.clearThreatSearch();
    $.chase_guard3_bike3.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.chase_guard3_bike3.giveWeapon(WEAPONTYPE_TEC9, 30000); // Set to infinate ammo
    $.chase_guard7_bike3 = Char.CreateAsPassenger($.chase_car3_bike3, PEDTYPE_GANG_STREET, SGb, 0);
    $.chase_guard7_bike3.clearThreatSearch();
    $.chase_guard7_bike3.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.chase_guard7_bike3.giveWeapon(WEAPONTYPE_TEC9, 30000); // Set to infinate ammo
    $.chase_guard3_bike3.setObjKillPlayerAnyMeans($.player1);
    $.chase_guard7_bike3.setObjKillPlayerAnyMeans($.player1);
    $.chase_car3_bike3.setForwardSpeed(30.0);
    $.chase_car3_bike3.setCruiseSpeed(40.0);

    // guard4 in car1

    $.chase_car4_bike3 = Car.Create(GANGBUR, -585.145, 666.533, 9.917);
    $.chase_car4_bike3.setHeading(286.737);
    $.chase_guard4_bike3 = Char.CreateInsideCar($.chase_car4_bike3, PEDTYPE_GANG_STREET, SGb);
    $.chase_guard4_bike3.clearThreatSearch();
    $.chase_guard4_bike3.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.chase_guard4_bike3.giveWeapon(WEAPONTYPE_TEC9, 30000); // Set to infinate ammo
    $.chase_guard8_bike3 = Char.CreateAsPassenger($.chase_car4_bike3, PEDTYPE_GANG_STREET, SGb, 0);
    $.chase_guard8_bike3.clearThreatSearch();
    $.chase_guard8_bike3.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.chase_guard8_bike3.giveWeapon(WEAPONTYPE_TEC9, 30000); // Set to infinate ammo
    $.chase_guard4_bike3.setObjKillPlayerAnyMeans($.player1);
    $.chase_guard8_bike3.setObjKillPlayerAnyMeans($.player1);
    $.chase_car4_bike3.setForwardSpeed(30.0);
    $.chase_car4_bike3.setCruiseSpeed(40.0);
    $.chase_guys_created_bike3 = 1;
  }
}



async function guard_AI2_bike3() {


  if ($.counter_all_guards_got_ai_bike3 < 6) {

    // Guard1

    if ($.flag_guard1_got_ai_bike3 == 0) {
      if (!(Char.IsDead($.guard1_bike3))) {
        if (!($.guard1_bike3.isWaitingForWorldCollision())) {
          $.guard1_bike3.clearThreatSearch();
          $.guard1_bike3.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard1_bike3.giveWeapon(WEAPONTYPE_TEC9, 30000); // sets the gun to infinate ammo
          Path.AddRoutePoint(0, -751.91, 1212.63, 23.17);
          Path.AddRoutePoint(0, -751.87, 1204.57, 23.17);
          Path.AddRoutePoint(0, -746.22, 1200.42, 23.17);
          Path.AddRoutePoint(0, -728.07, 1200.61, 23.17);
          Path.AddRoutePoint(0, -703.98, 1201.18, 23.17);
          Path.AddRoutePoint(0, -700.81, 1200.92, 23.17); // Talking point
          Path.AddRoutePoint(0, -703.98, 1201.18, 23.17);
          Path.AddRoutePoint(0, -728.07, 1200.61, 23.17);
          Path.AddRoutePoint(0, -746.22, 1200.42, 23.17);
          Path.AddRoutePoint(0, -751.87, 1204.57, 23.17);
          Path.AddRoutePoint(0, -751.91, 1212.63, 23.17);
          Path.AddRoutePoint(0, -750.93, 1235.44, 23.73);
          $.guard1_bike3.setObjFollowRoute(0, 3 /* FOLLOW_ROUTE_LOOP */);
          ++$.counter_all_guards_got_ai_bike3;
          $.flag_guard1_got_ai_bike3 = 1;
        }


      }


    }

    // Guard2

    if ($.flag_guard2_got_ai_bike3 == 0) {
      if (!(Char.IsDead($.guard2_bike3))) {
        if (!($.guard2_bike3.isWaitingForWorldCollision())) {
          $.guard2_bike3.clearThreatSearch();
          $.guard2_bike3.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard2_bike3.giveWeapon(WEAPONTYPE_TEC9, 30000); // sets the gun to infinate ammo
          Path.AddRoutePoint(1, -659.65, 1239.53, 23.17);
          Path.AddRoutePoint(1, -659.42, 1214.94, 23.87);
          Path.AddRoutePoint(1, -659.33, 1202.42, 23.29);
          Path.AddRoutePoint(1, -670.12, 1202.51, 23.30);
          Path.AddRoutePoint(1, -689.49, 1201.52, 23.17);
          Path.AddRoutePoint(1, -689.02, 1201.12, 23.17); // Talking point
          Path.AddRoutePoint(1, -689.49, 1201.52, 23.17);
          Path.AddRoutePoint(1, -670.12, 1202.51, 23.30);
          Path.AddRoutePoint(1, -659.33, 1202.42, 23.29);
          Path.AddRoutePoint(1, -659.42, 1214.94, 23.87);
          Path.AddRoutePoint(1, -659.65, 1239.53, 23.17);
          Path.AddRoutePoint(1, -659.81, 1257.07, 23.17);
          $.guard2_bike3.setObjFollowRoute(1, 3 /* FOLLOW_ROUTE_LOOP */);
          ++$.counter_all_guards_got_ai_bike3;
          $.flag_guard2_got_ai_bike3 = 1;
        }


      }


    }

    // guard3

    if ($.flag_guard3_got_ai_bike3 == 0) {
      if (!(Char.IsDead($.guard3_bike3))) {
        if (!($.guard3_bike3.isWaitingForWorldCollision())) {
          $.guard3_bike3.clearThreatSearch();
          $.guard3_bike3.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard3_bike3.giveWeapon(WEAPONTYPE_TEC9, 30000); // sets the gun to infinate ammo
          Path.AddRoutePoint(2, -690.88, 1271.50, 10.76);
          Path.AddRoutePoint(2, -691.99, 1294.35, 10.76);
          Path.AddRoutePoint(2, -690.88, 1271.50, 10.76);
          Path.AddRoutePoint(2, -692.32, 1250.27, 10.20);
          $.guard3_bike3.setObjFollowRoute(2, 3 /* FOLLOW_ROUTE_LOOP */);
          ++$.counter_all_guards_got_ai_bike3;
          $.flag_guard3_got_ai_bike3 = 1;
        }


      }


    }

    // Guard4

    if ($.flag_guard4_got_ai_bike3 == 0) {
      if (!(Char.IsDead($.guard4_bike3))) {
        if (!($.guard4_bike3.isWaitingForWorldCollision())) {
          $.guard4_bike3.clearThreatSearch();
          $.guard4_bike3.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard4_bike3.giveWeapon(WEAPONTYPE_TEC9, 30000); // sets the gun to infinate ammo
          Path.AddRoutePoint(3, -756.20, 1227.72, 10.07);
          Path.AddRoutePoint(3, -755.89, 1243.83, 10.07);
          Path.AddRoutePoint(3, -755.94, 1257.21, 10.38);
          Path.AddRoutePoint(3, -755.68, 1275.26, 10.66);
          Path.AddRoutePoint(3, -755.44, 1287.88, 14.52); // Top of steps
          Path.AddRoutePoint(3, -755.68, 1275.26, 10.66);
          Path.AddRoutePoint(3, -755.94, 1257.21, 10.38);
          Path.AddRoutePoint(3, -755.89, 1243.83, 10.07);
          Path.AddRoutePoint(3, -756.20, 1227.72, 10.07);
          Path.AddRoutePoint(3, -757.70, 1214.37, 10.07);
          $.guard4_bike3.setObjFollowRoute(3, 3 /* FOLLOW_ROUTE_LOOP */);
          ++$.counter_all_guards_got_ai_bike3;
          $.flag_guard4_got_ai_bike3 = 1;
        }


      }


    }

    // Guard5

    if ($.flag_guard5_got_ai_bike3 == 0) {
      if (!(Char.IsDead($.guard5_bike3))) {
        if (!($.guard5_bike3.isWaitingForWorldCollision())) {
          $.guard5_bike3.clearThreatSearch();
          $.guard5_bike3.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard5_bike3.setHeading(66.98);
          ++$.counter_all_guards_got_ai_bike3;
          $.flag_guard5_got_ai_bike3 = 1;
        }


      }


    }

    // Guard6

    if ($.flag_guard6_got_ai_bike3 == 0) {
      if (!(Char.IsDead($.guard6_bike3))) {
        if (!($.guard6_bike3.isWaitingForWorldCollision())) {
          $.guard6_bike3.clearThreatSearch();
          $.guard6_bike3.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.guard6_bike3.setHeading(283.89);
          Game.SetCharsChatting($.guard5_bike3, $.guard6_bike3, 1000000); // -1
          ++$.counter_all_guards_got_ai_bike3;
          $.flag_guard6_got_ai_bike3 = 1;
        }


      }


    }


  }
}

export async function bike3() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // ********************************** Get the Boss's bike Back ***************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // SCRIPT_NAME bike3

  // Mission start stuff


  await mission_start_bike3();  // SCM GOSUB mission_start_bike3


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_bike3_failed();  // SCM GOSUB mission_bike3_failed
  }


  await mission_cleanup_bike3();  // SCM GOSUB mission_cleanup_bike3


  // MissionBoundary


  // Variables for mission


  // VAR_INT bike_bike3


  // VAR_INT radar_blip_coord1_bike3


  // VAR_INT radar_blip_bike_bike3


  // VAR_INT guard1_bike3


  // VAR_INT guard2_bike3


  // VAR_INT guard3_bike3


  // VAR_INT guard4_bike3


  // VAR_INT guard5_bike3


  // VAR_INT guard6_bike3


  // VAR_INT flag_location_on_bike3


  // VAR_INT flag_guard1_dead_bike3


  // VAR_INT flag_guard2_dead_bike3


  // VAR_INT flag_guard3_dead_bike3


  // VAR_INT flag_guard4_dead_bike3


  // VAR_INT flag_guard5_dead_bike3


  // VAR_INT flag_guard6_dead_bike3


  // VAR_INT flag_attack_player_bike3

  // Guard creation if the alarm goes off


  // VAR_INT counter_blokes_alive_bike3


  // VAR_INT flag_created_bloke_in_area_bike3


  // VAR_INT flag_created_bloke_in_area2_bike3


  // VAR_INT flag_timer_started_bike3


  // VAR_INT guard_number_bike3


  // VAR_INT guard_number2_bike3


  // VAR_INT flag_alarm_sounded_bike3


  // VAR_INT alarm_bike3


  // VAR_INT flag_ped1_go_for_alarm_bike3


  // VAR_INT flag_ped2_go_for_alarm_bike3

  // guard1


  // VAR_INT created_guard1_bike3


  // VAR_INT flag_guard1_state_bike3

  // guard2


  // VAR_INT created_guard2_bike3


  // VAR_INT flag_guard2_state_bike3

  // guard3


  // VAR_INT created_guard3_bike3


  // VAR_INT flag_guard3_state_bike3

  // guard4


  // VAR_INT created_guard4_bike3


  // VAR_INT flag_guard4_state_bike3

  // guard5


  // VAR_INT created_guard5_bike3


  // VAR_INT flag_guard5_state_bike3

  // guard6


  // VAR_INT created_guard6_bike3


  // VAR_INT flag_guard6_state_bike3

  // guard7


  // VAR_INT created_guard7_bike3


  // VAR_INT flag_guard7_state_bike3

  // guard8


  // VAR_INT created_guard8_bike3


  // VAR_INT flag_guard8_state_bike3

  // guard9


  // VAR_INT created_guard9_bike3


  // VAR_INT flag_guard9_state_bike3

  // guard10


  // VAR_INT created_guard10_bike3


  // VAR_INT flag_guard10_state_bike3

  // guard11


  // VAR_INT created_guard11_bike3


  // VAR_INT flag_guard11_state_bike3

  // guard12


  // VAR_INT created_guard12_bike3


  // VAR_INT flag_guard12_state_bike3

  // guard13


  // VAR_INT created_guard13_bike3


  // VAR_INT flag_guard13_state_bike3

  // guard14


  // VAR_INT created_guard14_bike3


  // VAR_INT flag_guard14_state_bike3

  // gaurd15


  // VAR_INT created_guard15_bike3


  // VAR_INT flag_guard15_state_bike3

  // gaurd16


  // VAR_INT created_guard16_bike3


  // VAR_INT flag_guard16_state_bike3


  // VAR_INT total_guards_created_bike3

  // player stuff


  // VAR_FLOAT player_x_bike3


  // VAR_FLOAT player_y_bike3


  // VAR_FLOAT player_z_bike3

  // General stuff


  // VAR_INT bike_driver_bike3

  // Created chase guards


  // VAR_INT chase_guard1_bike3


  // VAR_INT chase_guard2_bike3


  // VAR_INT chase_guard3_bike3


  // VAR_INT chase_guard4_bike3


  // VAR_INT chase_guard5_bike3


  // VAR_INT chase_guard6_bike3


  // VAR_INT chase_guard7_bike3


  // VAR_INT chase_guard8_bike3


  // VAR_INT chase_guys_created_bike3


  // VAR_INT flag_player_got_bike_bike3


  // VAR_INT chase_car1_bike3


  // VAR_INT chase_car2_bike3


  // VAR_INT chase_car3_bike3


  // VAR_INT chase_car4_bike3

  // Compound stuff


  // VAR_INT flag_player_in_compound_bike3


  // VAR_INT stair_blip_bike3


  // VAR_INT flag_stair_blip_on_bike3


  // VAR_INT bike_blip_on_1stime_bike3

  // gaurd AI stuff


  // VAR_INT flag_guard1_got_AI_bike3


  // VAR_INT flag_guard2_got_AI_bike3


  // VAR_INT flag_guard3_got_AI_bike3


  // VAR_INT flag_guard4_got_AI_bike3


  // VAR_INT flag_guard5_got_AI_bike3


  // VAR_INT flag_guard6_got_AI_bike3


  // VAR_INT counter_all_guards_got_AI_bike3

  // Timer stuff


  // VAR_INT timer_guards_react_bike3

  // Frame counter stuff


  // VAR_INT frame_counter_bike3

  // ****************************************Mission Start************************************


}
