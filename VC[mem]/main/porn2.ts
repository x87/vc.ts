// Generated from main/porn2.sc

import { $ } from "../utils/vars.mts";

async function mission_start_porn2() {
  Text.ClearThisPrint("M_FAIL");
  ONMISSION = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  Text.LoadMissionText("PORN2");
  Shortcut.SetDropoffPointForMission(21.489, 966.28, 9.5, 172.7);
  // *****************************************Set Flags/variables************************************

  $.dildo_check_counter = 6;
  $.dildo1 = 0;
  $.dildo2 = 0;
  $.dildo3 = 0;
  $.dildo4 = 0;
  $.dildo5 = 0;
  $.dildo6 = 0;
  $.particle_effect_ok = 0;
  $.dildo_fuel = 100;
  $.flag_player_not_in_dildodo = 0;
  $.flag_dildodo_upsidedown = 0;
  $.random_flyers = 0;

  //docks > icecream factory

  $.dildo_check1x = -703.0;
  $.dildo_check1y = -1496.0;
  $.dildo_check1z = 45.0;

  //Howling Petes > outside g-spotlight

  $.dildo_check2x = -601.0;
  $.dildo_check2y = 660.0;
  $.dildo_check2z = 44.0;

  //Dirt track > between tall buildings

  $.dildo_check3x = -464.2;
  $.dildo_check3y = 1459.3;
  $.dildo_check3z = 40.0;

  //Rock City > pizza hut outside haitian base

  $.dildo_check4x = -872.8;
  $.dildo_check4y = 805.8;
  $.dildo_check4z = 35.0;

  //Printing works > Airport

  $.dildo_check5x = -1130.2;
  $.dildo_check5y = -182.7;
  $.dildo_check5z = 36.0;

  //bank > between tall buildings

  $.dildo_check6x = -867.4;
  $.dildo_check6y = -343.2;
  $.dildo_check6z = 40.0;


  $.player_x = 0.0;
  $.player_y = 0.0;
  $.player_z = 0.0;



  $.p2game_time_flag = 0;
  $.p2game_timer_start = 0;
  $.p2cop_time_limit = 0;
  $.p2copcar_timer = 0;
  $.p2game_time_present = 0;
  $.p2game_time_difference = 0;
  $.p2timer_in_secs = 0;
  $.p2in_copcar_nice_timer = 0;
  $.p2game_timer = 0;



  // ****************************************START OF CUTSCENE********************************


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSdirec");
  Streaming.LoadSpecialCharacter(3, "CSMerc");
  Streaming.LoadSpecialCharacter(4, "crewa");
  Streaming.LoadSpecialCharacter(5, "crewb");


  Streaming.LoadSpecialModel(CUTOBJ01, "scenery");
  Streaming.LoadSpecialModel(CUTOBJ02, "drchair");


  Streaming.LoadScene(-86.0, 929.0, 9.764);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);
  }


  Cutscene.Load("porn_2");
  Cutscene.SetOffset(-69.128, 920.965, 9.764);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_direc = CutsceneObject.Create(SPECIAL02);
  $.cs_direc.setAnim("CSdirec");


  $.cs_merc = CutsceneObject.Create(SPECIAL03);
  $.cs_merc.setAnim("CSMerc");


  $.cs_crewa = CutsceneObject.Create(SPECIAL04);
  $.cs_crewa.setAnim("crewa");


  $.cs_crewb = CutsceneObject.Create(SPECIAL05);
  $.cs_crewb.setAnim("crewb");


  $.cc_scenery = CutsceneObject.Create(CUTOBJ01);
  $.cc_scenery.setAnim("scenery");


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


  while ($.cs_time < 6922) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR2_A", 10000, 1); // How's filming going Steve?


  while ($.cs_time < 8243) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR2_B", 10000, 1); // Well Candy is a natural and that new girl -she's insatiable!


  while ($.cs_time < 13374) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR2_C", 10000, 1); // She went through half the cast and crew already before I even took a light reading.


  while ($.cs_time < 17692) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR2_D", 10000, 1); // Anyway, heh, tomorrow we're going on location to shoot the boat scenes-


  while ($.cs_time < 21037) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR2_E", 10000, 1); // Boat scenes, what boat scenes?


  while ($.cs_time < 23916) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR2_F", 10000, 1); // The fishermen are in the throws of passion when this giant shark comes in-


  while ($.cs_time < 26964) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR2_G", 10000, 1); // What did I say about the giant shark?


  while ($.cs_time < 28660) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR2_Q", 10000, 1); // Oh, boy.


  while ($.cs_time < 30017) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR2_H", 10000, 1); // I said, 'NO GIANT SHARK', alright?


  while ($.cs_time < 33395) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR2_I", 10000, 1); //Just keep the cameras pointed at the poontang!


  while ($.cs_time < 35819) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR2_J", 10000, 1); //Ok ok, hey Tommy, a guy's gotta try, right?


  while ($.cs_time < 38651) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR2_K", 10000, 1); //Get those flyers printed up?


  while ($.cs_time < 40472) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR2_L", 10000, 1); //Yeah, but no one's gonna let us distribute those things, I mean


  while ($.cs_time < 43374) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR2_M", 10000, 1); //They're just too, uh, they're unimaginative.


  while ($.cs_time < 46300) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR2_N", 10000, 1); //You don't worry about that.


  while ($.cs_time < 47862) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR2_O", 10000, 1); //I've got my own ideas for distribution


  while ($.cs_time < 49597) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (Game.IsAustralian()) {
    while ($.cs_time < 49697) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    // SCM GOTO → skip_for_aussie_version2 (not lowered; manual jump required)
    throw new Error("unresolved GOTO skip_for_aussie_version2"); // fallback: would break linear control flow
  }


  Text.PrintNow("POR2_P", 10000, 1); //O.K. Hey Candy, uh, in my trailer.


  while ($.cs_time < 50597) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }

  //CLEAR_PRINTS


  while ($.cs_time < 53376) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }
}



async function skip_for_aussie_version2() {


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
  World.SetCarDensityMultiplier(1.0);
  World.SetPedDensityMultiplier(1.0);
  // ******************************************END OF CUTSCENE********************************

  Camera.SetFadingColor(0, 0, 0);
  await asyncWait(500);
  Streaming.LoadScene(-67.000, 939.297, 10.940);
  Camera.SetBehindPlayer();
  //------------------REQUEST_MODELS ------------------------------

  $.player1.setMood(0 /* PLAYER_MOOD_CALM */, 60000);


  Streaming.RequestModel(skimmer);


  while (!(Streaming.HasModelLoaded(skimmer))) {
    await asyncWait(0);
  }

  //forcing weather to be nice

  Weather.ForceNow(4 /* WEATHER_EXTRA_SUNNY */);

  //setting player1 next to plane and creating plane

  $.dildodo = Car.Create(skimmer, -141.1, 1030.4, 7.5);
  $.dildodo.setHeading(180.0);
  $.blip_dildodo = Blip.AddForCar($.dildodo);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  Text.PrintNow("POR2_01", 7000, 1); //There is a seaplane that was used as a prop in some old Indy film round the back of the studios.
  Text.Print("POR2_05", 5000, 1); //Use it to distribute the flyers around town.
}




async function small_dildo_loop() {
  // SCM GOTO → small_dildo_loop lowered to endless loop
  while (true) {
    await asyncWait(0);


    if (!(Car.IsDead($.dildodo))) {
      if ($.player1.isInCar($.dildodo)) {
        // SCM GOTO → small_dildo_loop_finished (not lowered; manual jump required)
        throw new Error("unresolved GOTO small_dildo_loop_finished"); // fallback: would break linear control flow
      }
    }
    else {
      // SCM GOTO → mission_failed_porn2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn2"); // fallback: would break linear control flow
    }


  }
}



async function small_dildo_loop_finished() {


  $.blip_dildodo.remove();


  Text.PrintNow("POR2_02", 5000, 1); //Pick one of the checkpoints to start dropping the flyers from.
  Text.Print("POR2_03", 5000, 1); //Drop the flyers all the way to the end checkpoint.

  //setting up checkpoints


  $.dildocheck_blip1 = Blip.AddForCoord($.dildo_check1x, $.dildo_check1y, $.dildo_check1z);
  $.dildocheck_blip1.changeColor(2 /* BLUE */);
  $.dildocheck_blip2 = Blip.AddForCoord($.dildo_check2x, $.dildo_check2y, $.dildo_check2z);
  $.dildocheck_blip2.changeColor(2 /* BLUE */);
  $.dildocheck_blip3 = Blip.AddForCoord($.dildo_check3x, $.dildo_check3y, $.dildo_check3z);
  $.dildocheck_blip3.changeColor(2 /* BLUE */);
  $.dildocheck_blip4 = Blip.AddForCoord($.dildo_check4x, $.dildo_check4y, $.dildo_check4z);
  $.dildocheck_blip4.changeColor(2 /* BLUE */);
  $.dildocheck_blip5 = Blip.AddForCoord($.dildo_check5x, $.dildo_check5y, $.dildo_check5z);
  $.dildocheck_blip5.changeColor(2 /* BLUE */);
  $.dildocheck_blip6 = Blip.AddForCoord($.dildo_check6x, $.dildo_check6y, $.dildo_check6z);
  $.dildocheck_blip6.changeColor(2 /* BLUE */);


  TIMERA = 0;
  //DISPLAY_ONSCREEN_COUNTER dildo_check_counter 0


  Hud.DisplayCounterWithString($.$id.dildo_fuel, 1, "dildo");
  TIMERB = 0;
}




async function dildo_loop() {
  // SCM GOTO → dildo_loop lowered to endless loop
  while (true) {


    await asyncWait(0);



    // Stagger this text so they have time to read the help box at top left.



    if (!(Car.IsDead($.dildodo))) {
      if ($.player1.isInCar($.dildodo)) {
        if ($.plane_help_done == 0) {
          $.controlmode = Pad.GetControllerMode();
          if ($.controlmode == 3) {
            Text.PrintHelp("PLANE_4"); //plane help text
          }
          else {
            Text.PrintHelp("PLANE_H"); //plane help text
          }
          $.plane_help_done = 1;
        }
      }
      if ($.particle_effect_ok == 0) {
        if ($.dildo1 == 0) {
          if (!($.player1.locateAnyMeans3D($.dildo_check1x, $.dildo_check1y, $.dildo_check1z, 10.0, 10.0, 10.0, false /* FALSE */))) {
            Fx.DrawCorona($.dildo_check1x, $.dildo_check1y, $.dildo_check1z, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 0, 0, 255);
          }
          else {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.dildocheck_blip1.remove();
            $.dildo_check1x = -872.0;
            $.dildo_check1y = -574.0;
            $.dildo_check1z = 55.0;
            $.dildocheck_blip1 = Blip.AddForCoord($.dildo_check1x, $.dildo_check1y, $.dildo_check1z);
            $.dildocheck_blip1.changeColor(0 /* RED */);
            $.dildocheck_blip2.remove();
            $.dildocheck_blip3.remove();
            $.dildocheck_blip4.remove();
            $.dildocheck_blip5.remove();
            $.dildocheck_blip6.remove();
            $.particle_effect_ok = 1;
            $.dildo1 = 1;
          }
        }
        if ($.dildo2 == 0) {
          if (!($.player1.locateAnyMeans3D($.dildo_check2x, $.dildo_check2y, $.dildo_check2z, 10.0, 10.0, 10.0, false /* FALSE */))) {
            Fx.DrawCorona($.dildo_check2x, $.dildo_check2y, $.dildo_check2z, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 0, 0, 255);
          }
          else {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.dildocheck_blip1.remove();
            $.dildocheck_blip2.remove();
            $.dildo_check2x = -354.2;
            $.dildo_check2y = 1088.0;
            $.dildo_check2z = 47.0;
            $.dildocheck_blip2 = Blip.AddForCoord($.dildo_check2x, $.dildo_check2y, $.dildo_check2z);
            $.dildocheck_blip2.changeColor(0 /* RED */);
            $.dildocheck_blip3.remove();
            $.dildocheck_blip4.remove();
            $.dildocheck_blip5.remove();
            $.dildocheck_blip6.remove();
            $.particle_effect_ok = 1;
            $.dildo2 = 1;
          }
        }
        if ($.dildo3 == 0) {
          if (!($.player1.locateAnyMeans3D($.dildo_check3x, $.dildo_check3y, $.dildo_check3z, 10.0, 10.0, 10.0, false /* FALSE */))) {
            Fx.DrawCorona($.dildo_check3x, $.dildo_check3y, $.dildo_check3z, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 0, 0, 255);
          }
          else {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.dildocheck_blip1.remove();
            $.dildocheck_blip2.remove();
            $.dildocheck_blip3.remove();
            $.dildo_check3x = -861.4;
            $.dildo_check3y = 1084.8;
            $.dildo_check3z = 54.5;
            $.dildocheck_blip3 = Blip.AddForCoord($.dildo_check3x, $.dildo_check3y, $.dildo_check3z);
            $.dildocheck_blip3.changeColor(0 /* RED */);
            $.dildocheck_blip4.remove();
            $.dildocheck_blip5.remove();
            $.dildocheck_blip6.remove();
            $.particle_effect_ok = 1;
            $.dildo3 = 1;
          }
        }
        if ($.dildo4 == 0) {
          if (!($.player1.locateAnyMeans3D($.dildo_check4x, $.dildo_check4y, $.dildo_check4z, 10.0, 10.0, 10.0, false /* FALSE */))) {
            Fx.DrawCorona($.dildo_check4x, $.dildo_check4y, $.dildo_check4z, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 0, 0, 255);
          }
          else {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.dildocheck_blip1.remove();
            $.dildocheck_blip2.remove();
            $.dildocheck_blip3.remove();
            $.dildocheck_blip4.remove();
            $.dildo_check4x = -1070.8;
            $.dildo_check4y = 88.0;
            $.dildo_check4z = 35.0;
            $.dildocheck_blip4 = Blip.AddForCoord($.dildo_check4x, $.dildo_check4y, $.dildo_check4z);
            $.dildocheck_blip4.changeColor(0 /* RED */);
            $.dildocheck_blip5.remove();
            $.dildocheck_blip6.remove();
            $.particle_effect_ok = 1;
            $.dildo4 = 1;
          }
        }
        if ($.dildo5 == 0) {
          if (!($.player1.locateAnyMeans3D($.dildo_check5x, $.dildo_check5y, $.dildo_check5z, 10.0, 10.0, 10.00, false /* FALSE */))) {
            Fx.DrawCorona($.dildo_check5x, $.dildo_check5y, $.dildo_check5z, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 0, 0, 255);
          }
          else {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.dildocheck_blip1.remove();
            $.dildocheck_blip2.remove();
            $.dildocheck_blip3.remove();
            $.dildocheck_blip4.remove();
            $.dildocheck_blip5.remove();
            $.dildo_check5x = -1433.8;
            $.dildo_check5y = -807.1;
            $.dildo_check5z = 45.5;
            $.dildocheck_blip5 = Blip.AddForCoord($.dildo_check5x, $.dildo_check5y, $.dildo_check5z);
            $.dildocheck_blip5.changeColor(0 /* RED */);
            $.dildocheck_blip6.remove();
            $.particle_effect_ok = 1;
            $.dildo5 = 1;
          }
        }
        if ($.dildo6 == 0) {
          if (!($.player1.locateAnyMeans3D($.dildo_check6x, $.dildo_check6y, $.dildo_check6z, 10.0, 10.0, 10.00, false /* FALSE */))) {
            Fx.DrawCorona($.dildo_check6x, $.dildo_check6y, $.dildo_check6z, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 0, 0, 255);
          }
          else {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.dildocheck_blip1.remove();
            $.dildocheck_blip2.remove();
            $.dildocheck_blip3.remove();
            $.dildocheck_blip4.remove();
            $.dildocheck_blip5.remove();
            $.dildocheck_blip6.remove();
            $.dildo_check6x = -771.9;
            $.dildo_check6y = 304.6;
            $.dildo_check6z = 50.1;
            $.dildocheck_blip6 = Blip.AddForCoord($.dildo_check6x, $.dildo_check6y, $.dildo_check6z);
            $.dildocheck_blip6.changeColor(0 /* RED */);
            $.particle_effect_ok = 1;
            $.dildo6 = 1;
          }
        }


      }
      else {
        //creating particles
        $.random_flyers = Math.RandomIntInRange(1, 7);
        if ($.random_flyers == 1) {
          await creating_flyers();  // SCM GOSUB creating_flyers
        }
        if ($.random_flyers == 2) {
          await creating_flyers();  // SCM GOSUB creating_flyers
          await creating_flyers();  // SCM GOSUB creating_flyers
        }
        if ($.random_flyers == 3) {
          await creating_flyers();  // SCM GOSUB creating_flyers
          await creating_flyers();  // SCM GOSUB creating_flyers
          await creating_flyers();  // SCM GOSUB creating_flyers
        }
        if ($.dildo1 == 1) {
          if (!($.player1.locateAnyMeans3D($.dildo_check1x, $.dildo_check1y, $.dildo_check1z, 10.0, 10.0, 10.0, false /* FALSE */))) {
            Fx.DrawCorona($.dildo_check1x, $.dildo_check1y, $.dildo_check1z, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 0, 0);
          }
          else {
            --$.dildo_check_counter;
            if ($.dildo2 == 0) {
              $.dildocheck_blip2 = Blip.AddForCoord($.dildo_check2x, $.dildo_check2y, $.dildo_check2z);
              $.dildocheck_blip2.changeColor(2 /* BLUE */);
            }
            if ($.dildo3 == 0) {
              $.dildocheck_blip3 = Blip.AddForCoord($.dildo_check3x, $.dildo_check3y, $.dildo_check3z);
              $.dildocheck_blip3.changeColor(2 /* BLUE */);
            }
            if ($.dildo4 == 0) {
              $.dildocheck_blip4 = Blip.AddForCoord($.dildo_check4x, $.dildo_check4y, $.dildo_check4z);
              $.dildocheck_blip4.changeColor(2 /* BLUE */);
            }
            if ($.dildo5 == 0) {
              $.dildocheck_blip5 = Blip.AddForCoord($.dildo_check5x, $.dildo_check5y, $.dildo_check5z);
              $.dildocheck_blip5.changeColor(2 /* BLUE */);
            }
            if ($.dildo6 == 0) {
              $.dildocheck_blip6 = Blip.AddForCoord($.dildo_check6x, $.dildo_check6y, $.dildo_check6z);
              $.dildocheck_blip6.changeColor(2 /* BLUE */);
            }
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.dildocheck_blip1.remove();
            $.particle_effect_ok = 0;
            $.dildo1 = 2;
          }
        }
        if ($.dildo2 == 1) {
          if (!($.player1.locateAnyMeans3D($.dildo_check2x, $.dildo_check2y, $.dildo_check2z, 10.0, 10.0, 10.0, false /* FALSE */))) {
            Fx.DrawCorona($.dildo_check2x, $.dildo_check2y, $.dildo_check2z, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 0, 0);
          }
          else {
            --$.dildo_check_counter;
            if ($.dildo1 == 0) {
              $.dildocheck_blip1 = Blip.AddForCoord($.dildo_check1x, $.dildo_check1y, $.dildo_check1z);
              $.dildocheck_blip1.changeColor(2 /* BLUE */);
            }
            if ($.dildo3 == 0) {
              $.dildocheck_blip3 = Blip.AddForCoord($.dildo_check3x, $.dildo_check3y, $.dildo_check3z);
              $.dildocheck_blip3.changeColor(2 /* BLUE */);
            }
            if ($.dildo4 == 0) {
              $.dildocheck_blip4 = Blip.AddForCoord($.dildo_check4x, $.dildo_check4y, $.dildo_check4z);
              $.dildocheck_blip4.changeColor(2 /* BLUE */);
            }
            if ($.dildo5 == 0) {
              $.dildocheck_blip5 = Blip.AddForCoord($.dildo_check5x, $.dildo_check5y, $.dildo_check5z);
              $.dildocheck_blip5.changeColor(2 /* BLUE */);
            }
            if ($.dildo6 == 0) {
              $.dildocheck_blip6 = Blip.AddForCoord($.dildo_check6x, $.dildo_check6y, $.dildo_check6z);
              $.dildocheck_blip6.changeColor(2 /* BLUE */);
            }
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.dildocheck_blip2.remove();
            $.particle_effect_ok = 0;
            $.dildo2 = 2;
          }
        }
        if ($.dildo3 == 1) {
          if (!($.player1.locateAnyMeans3D($.dildo_check3x, $.dildo_check3y, $.dildo_check3z, 10.0, 10.0, 10.0, false /* FALSE */))) {
            Fx.DrawCorona($.dildo_check3x, $.dildo_check3y, $.dildo_check3z, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 0, 0);
          }
          else {
            --$.dildo_check_counter;
            if ($.dildo1 == 0) {
              $.dildocheck_blip1 = Blip.AddForCoord($.dildo_check1x, $.dildo_check1y, $.dildo_check1z);
              $.dildocheck_blip1.changeColor(2 /* BLUE */);
            }
            if ($.dildo2 == 0) {
              $.dildocheck_blip2 = Blip.AddForCoord($.dildo_check2x, $.dildo_check2y, $.dildo_check2z);
              $.dildocheck_blip2.changeColor(2 /* BLUE */);
            }
            if ($.dildo4 == 0) {
              $.dildocheck_blip4 = Blip.AddForCoord($.dildo_check4x, $.dildo_check4y, $.dildo_check4z);
              $.dildocheck_blip4.changeColor(2 /* BLUE */);
            }
            if ($.dildo5 == 0) {
              $.dildocheck_blip5 = Blip.AddForCoord($.dildo_check5x, $.dildo_check5y, $.dildo_check5z);
              $.dildocheck_blip5.changeColor(2 /* BLUE */);
            }
            if ($.dildo6 == 0) {
              $.dildocheck_blip6 = Blip.AddForCoord($.dildo_check6x, $.dildo_check6y, $.dildo_check6z);
              $.dildocheck_blip6.changeColor(2 /* BLUE */);
            }
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.dildocheck_blip3.remove();
            $.particle_effect_ok = 0;
            $.dildo3 = 2;
          }
        }
        if ($.dildo4 == 1) {
          if (!($.player1.locateAnyMeans3D($.dildo_check4x, $.dildo_check4y, $.dildo_check4z, 10.0, 10.0, 10.0, false /* FALSE */))) {
            Fx.DrawCorona($.dildo_check4x, $.dildo_check4y, $.dildo_check4z, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 0, 0);
          }
          else {
            --$.dildo_check_counter;
            if ($.dildo1 == 0) {
              $.dildocheck_blip1 = Blip.AddForCoord($.dildo_check1x, $.dildo_check1y, $.dildo_check1z);
              $.dildocheck_blip1.changeColor(2 /* BLUE */);
            }
            if ($.dildo2 == 0) {
              $.dildocheck_blip2 = Blip.AddForCoord($.dildo_check2x, $.dildo_check2y, $.dildo_check2z);
              $.dildocheck_blip2.changeColor(2 /* BLUE */);
            }
            if ($.dildo3 == 0) {
              $.dildocheck_blip3 = Blip.AddForCoord($.dildo_check3x, $.dildo_check3y, $.dildo_check3z);
              $.dildocheck_blip3.changeColor(2 /* BLUE */);
            }
            if ($.dildo5 == 0) {
              $.dildocheck_blip5 = Blip.AddForCoord($.dildo_check5x, $.dildo_check5y, $.dildo_check5z);
              $.dildocheck_blip5.changeColor(2 /* BLUE */);
            }
            if ($.dildo6 == 0) {
              $.dildocheck_blip6 = Blip.AddForCoord($.dildo_check6x, $.dildo_check6y, $.dildo_check6z);
              $.dildocheck_blip6.changeColor(2 /* BLUE */);
            }
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.dildocheck_blip4.remove();
            $.particle_effect_ok = 0;
            $.dildo4 = 2;
          }
        }
        if ($.dildo5 == 1) {
          if (!($.player1.locateAnyMeans3D($.dildo_check5x, $.dildo_check5y, $.dildo_check5z, 10.0, 10.0, 10.00, false /* FALSE */))) {
            Fx.DrawCorona($.dildo_check5x, $.dildo_check5y, $.dildo_check5z, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 0, 0);
          }
          else {
            --$.dildo_check_counter;
            if ($.dildo1 == 0) {
              $.dildocheck_blip1 = Blip.AddForCoord($.dildo_check1x, $.dildo_check1y, $.dildo_check1z);
              $.dildocheck_blip1.changeColor(2 /* BLUE */);
            }
            if ($.dildo2 == 0) {
              $.dildocheck_blip2 = Blip.AddForCoord($.dildo_check2x, $.dildo_check2y, $.dildo_check2z);
              $.dildocheck_blip2.changeColor(2 /* BLUE */);
            }
            if ($.dildo3 == 0) {
              $.dildocheck_blip3 = Blip.AddForCoord($.dildo_check3x, $.dildo_check3y, $.dildo_check3z);
              $.dildocheck_blip3.changeColor(2 /* BLUE */);
            }
            if ($.dildo4 == 0) {
              $.dildocheck_blip4 = Blip.AddForCoord($.dildo_check4x, $.dildo_check4y, $.dildo_check4z);
              $.dildocheck_blip4.changeColor(2 /* BLUE */);
            }
            if ($.dildo6 == 0) {
              $.dildocheck_blip6 = Blip.AddForCoord($.dildo_check6x, $.dildo_check6y, $.dildo_check6z);
              $.dildocheck_blip6.changeColor(2 /* BLUE */);
            }
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.dildocheck_blip5.remove();
            $.particle_effect_ok = 0;
            $.dildo5 = 2;
          }
        }
        if ($.dildo6 == 1) {
          if (!($.player1.locateAnyMeans3D($.dildo_check6x, $.dildo_check6y, $.dildo_check6z, 10.0, 10.0, 10.00, false /* FALSE */))) {
            Fx.DrawCorona($.dildo_check6x, $.dildo_check6y, $.dildo_check6z, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 0, 0);
          }
          else {
            --$.dildo_check_counter;
            if ($.dildo1 == 0) {
              $.dildocheck_blip1 = Blip.AddForCoord($.dildo_check1x, $.dildo_check1y, $.dildo_check1z);
              $.dildocheck_blip1.changeColor(2 /* BLUE */);
            }
            if ($.dildo2 == 0) {
              $.dildocheck_blip2 = Blip.AddForCoord($.dildo_check2x, $.dildo_check2y, $.dildo_check2z);
              $.dildocheck_blip2.changeColor(2 /* BLUE */);
            }
            if ($.dildo3 == 0) {
              $.dildocheck_blip3 = Blip.AddForCoord($.dildo_check3x, $.dildo_check3y, $.dildo_check3z);
              $.dildocheck_blip3.changeColor(2 /* BLUE */);
            }
            if ($.dildo4 == 0) {
              $.dildocheck_blip4 = Blip.AddForCoord($.dildo_check4x, $.dildo_check4y, $.dildo_check4z);
              $.dildocheck_blip4.changeColor(2 /* BLUE */);
            }
            if ($.dildo5 == 0) {
              $.dildocheck_blip5 = Blip.AddForCoord($.dildo_check5x, $.dildo_check5y, $.dildo_check5z);
              $.dildocheck_blip5.changeColor(2 /* BLUE */);
            }
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.dildocheck_blip6.remove();
            $.particle_effect_ok = 0;
            $.dildo6 = 2;
          }
        }
      }

      //doing wee timer thingy ma blodger

      if (!($.player1.isInCar($.dildodo))) {
        $.p2game_timer = Clock.GetGameTimer();
        $.p2cop_time_limit = $.dildo_fuel;
        //p2cop_time_limit *= -1
        //p2cop_time_limit += 100
        $.p2cop_time_limit *= 5000;
        if ($.p2game_time_flag == 0) {
          $.p2game_timer_start = Clock.GetGameTimer();
          if ($.p2cop_time_limit > 30000) {
            $.p2copcar_timer = 30000;
          }
          else {
            $.p2copcar_timer = $.p2cop_time_limit;
          }
          $.p2game_time_flag = 1;
        }
        $.p2game_time_present = Clock.GetGameTimer();
        $.p2game_time_difference = $.p2game_time_present - $.p2game_timer_start;
        $.p2copcar_timer -= $.p2game_time_difference;
        $.p2game_timer_start = $.p2game_time_present;
        $.p2timer_in_secs = $.p2copcar_timer / 1000;
        Text.PrintWithNumberNow("PORN2_9", $.p2timer_in_secs, 200, 1); // You have ~1~ seconds to return to a Skimmer before the mission ends.
        if ($.p2timer_in_secs < 1) {
          if ($.p2in_copcar_nice_timer < $.p2game_timer) {
            Text.PrintNow("taxi2", 3000, 1); //Your out of time
            // SCM GOTO → mission_failed_porn2 (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_failed_porn2"); // fallback: would break linear control flow
          }
        }
        else {
          $.p2in_copcar_nice_timer = $.p2game_timer + 1000;
        }
      }
      else {
        $.p2game_time_flag = 0;
      }




      //checking player1 is in car
      if ($.dildodo.isUpsidedown() && $.dildodo.isStopped()) {
        $.flag_dildodo_upsidedown = 1;
      }
      if (!($.player1.isInCar($.dildodo)) && $.flag_player_not_in_dildodo == 0 && $.flag_dildodo_upsidedown == 0) {
        //PRINT_NOW ( IN_VEH ) 5000 1 //"Get back into the vehicle and get on with the mission!"
        $.blip_dildodo = Blip.AddForCar($.dildodo);
        $.dildocheck_blip1.remove();
        $.dildocheck_blip2.remove();
        $.dildocheck_blip3.remove();
        $.dildocheck_blip4.remove();
        $.dildocheck_blip5.remove();
        $.dildocheck_blip6.remove();
        $.flag_player_not_in_dildodo = 1;
      }
      if ($.player1.isInCar($.dildodo) && $.flag_player_not_in_dildodo == 1) {
        $.blip_dildodo.remove();
        if ($.dildo1 == 0) {
          $.dildocheck_blip1 = Blip.AddForCoord($.dildo_check1x, $.dildo_check1y, $.dildo_check1z);
          $.dildocheck_blip1.changeColor(2 /* BLUE */);
        }
        if ($.dildo2 == 0) {
          $.dildocheck_blip2 = Blip.AddForCoord($.dildo_check2x, $.dildo_check2y, $.dildo_check2z);
          $.dildocheck_blip2.changeColor(2 /* BLUE */);
        }
        if ($.dildo3 == 0) {
          $.dildocheck_blip3 = Blip.AddForCoord($.dildo_check3x, $.dildo_check3y, $.dildo_check3z);
          $.dildocheck_blip3.changeColor(2 /* BLUE */);
        }
        if ($.dildo4 == 0) {
          $.dildocheck_blip4 = Blip.AddForCoord($.dildo_check4x, $.dildo_check4y, $.dildo_check4z);
          $.dildocheck_blip4.changeColor(2 /* BLUE */);
        }
        if ($.dildo5 == 0) {
          $.dildocheck_blip5 = Blip.AddForCoord($.dildo_check5x, $.dildo_check5y, $.dildo_check5z);
          $.dildocheck_blip5.changeColor(2 /* BLUE */);
        }
        if ($.dildo6 == 0) {
          $.dildocheck_blip6 = Blip.AddForCoord($.dildo_check6x, $.dildo_check6y, $.dildo_check6z);
          $.dildocheck_blip6.changeColor(2 /* BLUE */);
        }
        if ($.dildo1 == 1) {
          $.dildocheck_blip1.remove();
          $.dildocheck_blip1 = Blip.AddForCoord($.dildo_check1x, $.dildo_check1y, $.dildo_check1z);
          $.dildocheck_blip1.changeColor(0 /* RED */);
          $.dildocheck_blip2.remove();
          $.dildocheck_blip3.remove();
          $.dildocheck_blip4.remove();
          $.dildocheck_blip5.remove();
          $.dildocheck_blip6.remove();
        }
        if ($.dildo2 == 1) {
          $.dildocheck_blip1.remove();
          $.dildocheck_blip2.remove();
          $.dildocheck_blip2 = Blip.AddForCoord($.dildo_check2x, $.dildo_check2y, $.dildo_check2z);
          $.dildocheck_blip2.changeColor(0 /* RED */);
          $.dildocheck_blip3.remove();
          $.dildocheck_blip4.remove();
          $.dildocheck_blip5.remove();
          $.dildocheck_blip6.remove();
        }
        if ($.dildo3 == 1) {
          $.dildocheck_blip1.remove();
          $.dildocheck_blip2.remove();
          $.dildocheck_blip3.remove();
          $.dildocheck_blip3 = Blip.AddForCoord($.dildo_check3x, $.dildo_check3y, $.dildo_check3z);
          $.dildocheck_blip3.changeColor(0 /* RED */);
          $.dildocheck_blip4.remove();
          $.dildocheck_blip5.remove();
          $.dildocheck_blip6.remove();
        }
        if ($.dildo4 == 1) {
          $.dildocheck_blip1.remove();
          $.dildocheck_blip2.remove();
          $.dildocheck_blip3.remove();
          $.dildocheck_blip4.remove();
          $.dildocheck_blip4 = Blip.AddForCoord($.dildo_check4x, $.dildo_check4y, $.dildo_check4z);
          $.dildocheck_blip4.changeColor(0 /* RED */);
          $.dildocheck_blip5.remove();
          $.dildocheck_blip6.remove();
        }
        if ($.dildo5 == 1) {
          $.dildocheck_blip1.remove();
          $.dildocheck_blip2.remove();
          $.dildocheck_blip3.remove();
          $.dildocheck_blip4.remove();
          $.dildocheck_blip5.remove();
          $.dildocheck_blip5 = Blip.AddForCoord($.dildo_check5x, $.dildo_check5y, $.dildo_check5z);
          $.dildocheck_blip5.changeColor(0 /* RED */);
          $.dildocheck_blip6.remove();
        }
        if ($.dildo6 == 1) {
          $.dildocheck_blip1.remove();
          $.dildocheck_blip2.remove();
          $.dildocheck_blip3.remove();
          $.dildocheck_blip4.remove();
          $.dildocheck_blip5.remove();
          $.dildocheck_blip6.remove();
          $.dildocheck_blip6 = Blip.AddForCoord($.dildo_check6x, $.dildo_check6y, $.dildo_check6z);
          $.dildocheck_blip6.changeColor(0 /* RED */);
        }
        Text.ClearPrints();
        $.flag_player_not_in_dildodo = 0;
      }
    }
    else {
      // SCM GOTO → mission_failed_porn2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn2"); // fallback: would break linear control flow
    }


    // mission fail

    if ($.dildo_fuel == 0) {
      if ($.player1.isInCar($.dildodo)) {
        $.player1.setControl(false /* OFF */);
      }
      if (TIMERB > 3000) {
        $.dildodo.setCanBeDamaged(true /* TRUE */);
        $.dildodo.explode();
        const _res426 = $.dildodo.getCoordinates();
$.player_x = _res426.x;
$.player_y = _res426.y;
$.player_z = _res426.z;
        Fx.AddExplosion($.player_x, $.player_y, $.player_z, 2 /* EXPLOSION_ROCKET */);
        Fx.AddExplosion($.player_x, $.player_y, $.player_z, 11 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion($.player_x, $.player_y, $.player_z, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion($.player_x, $.player_y, $.player_z, 6 /* EXPLOSION_HELI */);
        Fx.AddMovingParticleEffect(17 /* POBJECT_FIREBALL_AND_SMOKE */, $.player_x, $.player_y, $.player_z, 0.1, 0.0, 0.2, 0.8, 0, 0, 0, 11000);
        // SCM GOTO → mission_failed_porn2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_porn2"); // fallback: would break linear control flow
      }
    }


    if ($.dildo_fuel > 0) {
      if (TIMERB > 5000) {
        --$.dildo_fuel;
        TIMERB = 0;
      }
    }
    else {
      $.dildo_fuel = 0;
    }


    if ($.dildo_fuel > 0) {
      if ($.dildo_fuel < 10) {
        if (!(Car.IsDead($.dildodo))) {
          if ($.player1.isInCar($.dildodo)) {
            Text.PrintNow("POR2_04", 5000, 1); //LOW FUEL!!!
          }
          else {
            Text.ClearThisPrint("POR2_04");
          }
        }
        if (TIMERA > 1000) {
          const _res427 = $.dildodo.getCoordinates();
$.player_x = _res427.x;
$.player_y = _res427.y;
$.player_z = _res427.z;
          Sound.AddOneOffSound($.player_x, $.player_y, $.player_z, 35 /* SOUND_SEAPLANE_LOW_FUEL */);
          TIMERA = 0;
        }
      }
    }


    //mission passed


    if ($.dildo_check_counter == 0) {
      // SCM GOTO → mission_passed_porn2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_passed_porn2"); // fallback: would break linear control flow
    }


  }
}


// Mission failed

async function mission_failed_porn2() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}




// mission passed

async function mission_passed_porn2() {


  Text.ClearPrints();
  World.AddPornLeafletToRubbish(true /* TRUE */);
  Text.PrintWithNumberBig("M_PASS", 2000, 5000, 1); //"Mission Passed!"
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  $.player1.addScore(2000);
  $.gen_car100.switch(101);
  Stat.PlayerMadeProgress(1);
  Stat.RegisterMissionPassed("PORN_2");
  // START_NEW_SCRIPT porn_mission3_loop 
  $.flag_porn_mission2_passed = 1;
}




// mission cleanup

async function mission_cleanup_porn2() {
  ONMISSION = 0;
  $.player1.setControl(true /* on */);
  Streaming.MarkModelAsNoLongerNeeded(skimmer);
  Hud.ClearCounter($.$id.dildo_check_counter);
  Hud.ClearCounter($.$id.dildo_fuel);
  $.blip_dildodo.remove();
  $.dildocheck_blip1.remove();
  $.dildocheck_blip2.remove();
  $.dildocheck_blip3.remove();
  $.dildocheck_blip4.remove();
  $.dildocheck_blip5.remove();
  $.dildocheck_blip6.remove();
  $.timer_mobile_start = Clock.GetGameTimer();
  Weather.Release();
  Mission.Finish();
}


///////////////////////////////////////////////////////////////////////////////////////////

async function creating_flyers() {
  ///////////////////////////////////////////////////////////////////////////////////////////

  const _res428 = $.dildodo.getOffsetInWorldCoords(0.0, -2.0, -2.0);
$.player_x = _res428.x;
$.player_y = _res428.y;
$.player_z = _res428.z;
  Fx.CreateSingleParticle(11 /* PARTICLE_FLYERS */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.0, 0.8);
  ///////////////////////////////////////////////////////////////////////////////////////////

  return;
  ///////////////////////////////////////////////////////////////////////////////////////////

}

export async function porn2() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************Porn 2******************************************
  // *****************************************DilDodo*****************************************
  // *****************************************************************************************
  // *****************************************************************************************

  // SCRIPT_NAME porno2
  // Mission start stuff

  await mission_start_porn2();  // SCM GOSUB mission_start_porn2
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_failed_porn2();  // SCM GOSUB mission_failed_porn2
  }
  await mission_cleanup_porn2();  // SCM GOSUB mission_cleanup_porn2
  // MissionBoundary

  // Variables for mission
  //people, cars and objects

  // VAR_INT dildodo

  //blips

  // VAR_INT blip_dildodo
  // VAR_INT dildocheck_blip1
  // VAR_INT dildocheck_blip2
  // VAR_INT dildocheck_blip3
  // VAR_INT dildocheck_blip4
  // VAR_INT dildocheck_blip5
  // VAR_INT dildocheck_blip6

  //flags

  // VAR_INT dildo_check_counter
  // VAR_INT dildo1
  // VAR_INT dildo2
  // VAR_INT dildo3
  // VAR_INT dildo4
  // VAR_INT dildo5
  // VAR_INT dildo6
  // VAR_INT particle_effect_ok
  // VAR_INT dildo_fuel
  // VAR_INT flag_player_not_in_dildodo
  // VAR_INT flag_dildodo_upsidedown
  // VAR_INT random_flyers
  // VAR_INT plane_help_done
  // VAR_INT p2game_time_flag
  // VAR_INT p2game_timer_start
  // VAR_INT p2cop_time_limit
  // VAR_INT p2copcar_timer
  // VAR_INT p2game_time_present
  // VAR_INT p2game_time_difference
  // VAR_INT p2timer_in_secs
  // VAR_INT p2in_copcar_nice_timer
  // VAR_INT p2game_timer



  //coordinates

  // VAR_FLOAT dildo_check1x
  // VAR_FLOAT dildo_check1y
  // VAR_FLOAT dildo_check1z
  // VAR_FLOAT dildo_check2x
  // VAR_FLOAT dildo_check2y
  // VAR_FLOAT dildo_check2z
  // VAR_FLOAT dildo_check3x
  // VAR_FLOAT dildo_check3y
  // VAR_FLOAT dildo_check3z
  // VAR_FLOAT dildo_check4x
  // VAR_FLOAT dildo_check4y
  // VAR_FLOAT dildo_check4z
  // VAR_FLOAT dildo_check5x
  // VAR_FLOAT dildo_check5y
  // VAR_FLOAT dildo_check5z
  // VAR_FLOAT dildo_check6x
  // VAR_FLOAT dildo_check6y
  // VAR_FLOAT dildo_check6z

  //cutscene

  // VAR_INT cc_scenery

  // ****************************************Mission Start************************************

}
