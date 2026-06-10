// Generated from main/bike2.sc

import { $ } from "../vars.mts";

async function mission_start_bike2() {


  ONMISSION = 1;


  Stat.RegisterMissionGiven();


  $.chaosmeter_bike2 = 0;


  $.flag_chaos_meter_full = 0;


  $.havoc_value_bike2 = 0;


  $.flag_havoc_added_bike2 = 0;


  $.flag_player_had_message_bike2 = 0;


  $.wanted_multiplier_changed_bike2 = 0;


  $.timer_bike2 = 121000;


  await asyncWait(0);


  Text.LoadMissionText("BIKE2");


  Shortcut.SetDropoffPointForMission(-609.723, 658.861, 9.908, 279.440);




  // ****************************************START OF CUTSCENE********************************

  // This is the correct cutscene the names were just round the wrong ways


  Streaming.LoadSpecialCharacter(1, "CSbigm");


  Streaming.LoadSpecialCharacter(2, "CSplay");


  Streaming.LoadSpecialCharacter(3, "mgoona");


  Streaming.LoadSpecialCharacter(4, "mserver");


  Streaming.SetAreaVisible(VIS_BIKER_BAR);


  Streaming.LoadScene(-597.02, 642.46, 11.0);


  World.SetExtraColors(15, false /* FALSE */);


  Streaming.LoadAllModelsNow();



  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4))) {
    await asyncWait(0);


  }


  Cutscene.Load("bike_3");


  Cutscene.SetOffset(-602.052, 636.289, 10.636);
  Camera.SetNearClip(0.1);


  $.cs_bigm = CutsceneObject.Create(SPECIAL01);
  $.cs_bigm.setAnim("CSbigm");


  $.cs_player = CutsceneObject.Create(SPECIAL02);
  $.cs_player.setAnim("CSplay");


  $.cs_mgoona = CutsceneObject.Create(SPECIAL03);
  $.cs_mgoona.setAnim("mgoona");


  $.cs_mserver = CutsceneObject.Create(SPECIAL04);
  $.cs_mserver.setAnim("mserver");


  World.ClearArea(-597.25, 655.87, 10.06, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-597.25, 655.87, 10.06);
  $.player1.setHeading(0.0);


  Camera.DoFade(2000, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 3004) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_A", 10000, 1); //"Ha ha ha, got you again.


  while ($.cs_time < 5135) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_B", 10000, 1); //"Hey Vercetti.


  while ($.cs_time < 6423) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_C", 10000, 1); //"Cougar says you can handle a bike pretty good.


  while ($.cs_time < 8568) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_D", 10000, 1); //"Yeah, how many more errands an I going to have to run?


  while ($.cs_time < 10974) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_E", 10000, 1); //"I'm a very busy man.


  while ($.cs_time < 12703) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_F", 10000, 1); //"If it's a fight that's going to settle it then just bring it on.


  while ($.cs_time < 14662) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_G", 10000, 1); //"Being one of us ain't just about brawlin'. It's about being part of a family.


  while ($.cs_time < 18829) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_H", 10000, 1); //"Yeah, I've been part of a family before alright. It didn't work out"


  while ($.cs_time < 21584) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_I", 10000, 1); //"Yeah, right, but this family takes care of its own."


  while ($.cs_time < 24017) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_J", 10000, 1); //"We don't ask one of our own to do the dirty work and then let him do fifteen years hard time."


  while ($.cs_time < 28016) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_K", 10000, 1); //"Yeah, that's right. I done my homework."


  while ($.cs_time < 30132) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_L", 10000, 1); //"This here's teh biggest family of misfits, outcasts and badasses."


  while ($.cs_time < 34034) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_M", 10000, 1); //"Hell, some of us even been betrayed by our own country."


  while ($.cs_time < 36593) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_N", 10000, 1); //"I was locked up during 'Nam. Ugly business."


  while ($.cs_time < 38862) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_O", 10000, 1); //"Which is why I'm gonna ask you to mess with the man.


  while ($.cs_time < 41401) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_P", 10000, 1); //"This whole goddamn country needs a kick in the ass, and we're the ones that deliver it.


  while ($.cs_time < 44782) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_Q", 10000, 1); //"So get out there, grab a bike, show this city how pissed you are!


  while ($.cs_time < 49441) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM2_R", 10000, 1); //"Alright.


  while ($.cs_time < 50560) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


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
  Streaming.UnloadSpecialCharacter(4);


  Streaming.SetAreaVisible(VIS_MAIN_MAP);


  World.ClearExtraColors(false /* FALSE */);


  Streaming.LoadScene(-597.25, 655.87, 10.06);


  // ****************************************END OF CUTSCENE**********************************


  $.player1.setMood(PLAYER_MOOD_ANGRY, 60000);

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  Text.PrintNow("BM2_2", 5000, 1); //"You must fill the Chaos Meter to show us how cool you are!"


  Hud.DisplayCounterWithString($.$id.chaosmeter_bike2, 1 /* COUNTER_DISPLAY_BAR */, "BM2_1");


  Game.SetWantedMultiplier(3.0);


  TIMERA = 0;


  Hud.DisplayTimer($.$id.timer_bike2, TIMER_DOWN);


  while ($.flag_chaos_meter_full == 0) {
    await asyncWait(0);
    if ($.timer_bike2 == 0) {
      Text.PrintNow("BM2_4", 5000, 1); //"You failed to impress us!"
      // SCM GOTO → mission_bike2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike2_failed"); // fallback: would break linear control flow
    }
    if ($.wanted_multiplier_changed_bike2 == 0) {
      if ($.player1.isWantedLevelGreater(2)) {
        Game.SetWantedMultiplier(1.0);
        $.wanted_multiplier_changed_bike2 = 1;
      }


    }
    if ($.chaosmeter_bike2 == 100) {
      $.flag_chaos_meter_full = 1;
    }
    $.havoc_value_bike2 = $.player1.getHavoc();
    if ($.havoc_value_bike2 >= 25) {
      if ($.flag_havoc_added_bike2 == 0) {
        if ($.chaosmeter_bike2 <= 99) {
          $.chaosmeter_bike2 = $.chaosmeter_bike2 + 5;
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        }
        else {
          $.chaosmeter_bike2 = 100;
        }
        if ($.flag_player_had_message_bike2 == 0) {
          Text.PrintNow("BM2_3", 5000, 1); //"Continue to fill the meter!"
          $.flag_player_had_message_bike2 = 1;
        }
        $.flag_havoc_added_bike2 = 1;
      }
      if ($.flag_havoc_added_bike2 == 1) {
        $.player1.resetHavoc();
        $.flag_havoc_added_bike2 = 0;
      }


    }


  }


  // SCM GOTO → mission_bike2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_bike2_passed"); // fallback: would break linear control flow
}


// ****************************************** Mission Failed *******************************


async function mission_bike2_failed() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}


// *************************************** Mission Passed **********************************


async function mission_bike2_passed() {


  $.flag_bikers_mission2_passed = 1;
  Stat.RegisterMissionPassed("BIKE_2");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);


  if ($.biker_bar_sound1_added == 1) {
    $.bike_bar_loop1.remove();
    $.biker_bar_sound1_added = 0;
  }


  if ($.biker_bar_sound2_added == 1) {
    $.bike_bar_loop2.remove();
    $.biker_bar_sound2_added = 0;
  }


  if ($.biker_bar_sound3_added == 1) {
    $.bike_bar_loop3.remove();
    $.biker_bar_sound3_added = 0;
  }


  if ($.biker_bar_sound3_added == 0) {
    $.bike_bar_loop3 = Sound.AddContinuous(-596.018, 640.916, 12.0, SOUND_NEW_BUILDING_BAR_3); //Biker bar
    $.biker_bar_sound3_added = 1;
  }


  Text.PrintWithNumberBig("M_PASS", 2000, 5000, 1); //"Mission Passed!"
  $.player1.addScore(2000);
  // START_NEW_SCRIPT bikers_mission3_loop
}


// *************************************** Mission Cleanup *********************************


async function mission_cleanup_bike2() {


  ONMISSION = 0;
  Hud.ClearTimer($.$id.timer_bike2);
  Hud.ClearCounter($.$id.chaosmeter_bike2);
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}

export async function bike2() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // ************************************* Biker Gang Mission Two ****************************
  // ************************************** Messin' With The Man *****************************
  // Messing with the man
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // SCRIPT_NAME bike2

  // Mission start stuff


  await mission_start_bike2();  // SCM GOSUB mission_start_bike2


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_bike2_failed();  // SCM GOSUB mission_bike2_failed
  }


  await mission_cleanup_bike2();  // SCM GOSUB mission_cleanup_bike2


  // MissionBoundary


  // Variables for mission


  // VAR_INT chaosmeter_bike2


  // VAR_INT flag_chaos_meter_full


  // VAR_INT havoc_value_bike2


  // VAR_INT flag_havoc_added_bike2


  // VAR_INT flag_player_had_message_bike2


  // VAR_INT wanted_multiplier_changed_bike2


  // VAR_INT timer_bike2

  // ****************************************Mission Start************************************


}
