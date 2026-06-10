// Generated from main/phil2.sc

import { $ } from "../vars.mts";

async function mission_start_phil2() {
  Text.ClearThisPrint("M_FAIL");
  ONMISSION = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  Text.LoadMissionText("PHIL2");
  Shortcut.SetDropoffPointForMission(-1004.5, 311.1, 9.9, 155.7);
  // *****************************************Set Flags/variables************************************

  $.phil2_goals = 0;
  $.flag_player_not_in_phil2_car = 0;
  $.flag_phil2_car_upsidedown = 0;
  $.rnd_timescale = 0;
  $.phil2_car_health = 0;
  $.phil2_total_car_health = 100;
  $.phil2_car_health2 = 0;
  $.phil2_car_health_diff = 0;
  $.drunkeness = 8;
  $.motion_blur = 255;
  $.phil_speech = 0;
  $.at_hospital = 0;


  $.player_x = 0.0;
  $.player_y = 0.0;
  $.player_z = 0.0;
  $.area_plyrx1 = 0.0;
  $.area_plyry1 = 0.0;
  $.area_plyrx2 = 0.0;
  $.area_plyry2 = 0.0;
  $.phil_car_speed = 0.0;
  $.car_heading = 0.0;
  // ****************************************START OF CUTSCENE********************************


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSphil");


  Streaming.LoadSpecialModel(CUTOBJ01, "philbmb");


  Streaming.LoadScene(-1099.62, 327.21, 10.23);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(CUTOBJ01))) {
    await asyncWait(0);
  }


  World.ClearArea(-1083.1, 321.1, 11.2, 300.0, true /* TRUE */);


  Cutscene.Load("phil_2");
  Cutscene.SetOffset(-1099.62, 327.21, 10.23);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_phil = CutsceneObject.Create(SPECIAL02);
  $.cs_phil.setAnim("CSphil");


  $.cs_philbmb = CutsceneObject.Create(CUTOBJ01);
  $.cs_philbmb.setAnim("philbmb");


  World.ClearArea(-1105.0, 334.0, 10.8, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-1105.0, 334.0, 10.8);
  $.player1.setHeading(265.8);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text

  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 1073) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL2_A", 10000, 1); // Hey Phil, how's it goin?


  while ($.cs_time < 2713) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL2_B", 10000, 1); // Heeyyyy, Tommy. Howyadoin'? Ish been too long...


  while ($.cs_time < 8842) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL2_C", 10000, 1); // I swear you should lay off that boom shine,


  while ($.cs_time < 10547) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL2_D", 10000, 1); // man it smells like paint stripper. Making my eyes burn...


  while ($.cs_time < 13397) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL2_E", 10000, 1); // Shshs shhh youshelf Tommy,


  while ($.cs_time < 16619) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL2_F", 10000, 1); // and come over here because there's someshin' I wanna show you.. someshin.


  while ($.cs_time < 20734) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL2_G", 10000, 1); // Should I be able to smell that from way over here? I'm feeling woozy.


  while ($.cs_time < 24299) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL2_H", 10000, 1); // Don'tchaworry about the shmell Tommy, you jush wash thish.


  while ($.cs_time < 32636) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL2_I", 10000, 1); // Shittycheapbatteriesh or shumin'. There'sh shum more on the bench.


  while ($.cs_time < 44824) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL2_J", 10000, 1); // TA-DAAA!


  while ($.cs_time < 46000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddExplosion(-1083.8, 352.7, 11.3, 2 /* EXPLOSION_ROCKET */);
    Fx.AddExplosion(-1083.8, 352.7, 11.3, 9 /* EXPLOSION_HELI_BOMB */);
    Fx.AddExplosion(-1083.8, 352.7, 11.3, 5 /* EXPLOSION_HELI */);
  }


  while ($.cs_time < 48307) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL2_K", 10000, 1); //Aww Damn!


  if (!(Cutscene.WasSkipped())) {
    if (!(Game.IsGerman()) && !(Game.IsFrench())) {
      await bloody_nuts();  // SCM GOSUB bloody_nuts
      await bloody_nuts();  // SCM GOSUB bloody_nuts
      await bloody_nuts();  // SCM GOSUB bloody_nuts
    }
  }


  while ($.cs_time < 48807) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    if (!(Game.IsGerman()) && !(Game.IsFrench())) {
      await bloody_nuts();  // SCM GOSUB bloody_nuts
      await bloody_nuts();  // SCM GOSUB bloody_nuts
      await bloody_nuts();  // SCM GOSUB bloody_nuts
    }
  }


  while ($.cs_time < 49307) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 49907) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    if (!(Game.IsGerman()) && !(Game.IsFrench())) {
      await bloody_nuts();  // SCM GOSUB bloody_nuts
      await bloody_nuts();  // SCM GOSUB bloody_nuts
      await bloody_nuts();  // SCM GOSUB bloody_nuts
    }
  }


  while ($.cs_time < 50007) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    if (!(Game.IsGerman()) && !(Game.IsFrench())) {
      await bloody_nuts();  // SCM GOSUB bloody_nuts
      await bloody_nuts();  // SCM GOSUB bloody_nuts
      await bloody_nuts();  // SCM GOSUB bloody_nuts
    }
  }


  while ($.cs_time < 51007) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    if (!(Game.IsGerman()) && !(Game.IsFrench())) {
      await bloody_nuts();  // SCM GOSUB bloody_nuts
      await bloody_nuts();  // SCM GOSUB bloody_nuts
      await bloody_nuts();  // SCM GOSUB bloody_nuts
    }
  }


  while ($.cs_time < 52207) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    if (!(Game.IsGerman()) && !(Game.IsFrench())) {
      await bloody_nuts();  // SCM GOSUB bloody_nuts
      await bloody_nuts();  // SCM GOSUB bloody_nuts
      await bloody_nuts();  // SCM GOSUB bloody_nuts
    }
  }


  Text.ClearPrints();


  while ($.cs_time < 53376) {
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
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  World.SetCarDensityMultiplier(1.0);
  World.SetPedDensityMultiplier(1.0);

  // ******************************************END OF CUTSCENE********************************

  Camera.SetFadingColor(0, 0, 0);
  await asyncWait(500);
  Camera.SetBehindPlayer();
  //------------------REQUEST_MODELS ------------------------------

  $.player1.setMood(PLAYER_MOOD_CALM, 60000);


  Streaming.RequestModel(patriot);


  while (!(Streaming.HasModelLoaded(patriot))) {
    await asyncWait(0);
  }


  Audio.LoadMissionAudio(2, "PHIL2_1" as any);
  while (!(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }

  //cheating the compilier into thinking i have created something which i havent (so it can be used later)

  if (ONMISSION == 0) {
    $.radar_blip_hospital2 = Blip.AddForCoord(-1183.0, -664.2, 10.5);
  }


  Streaming.LoadSpecialCharacter(1, "IGPhil2");
  while (!(Streaming.HasSpecialCharacterLoaded(1))) {
    await asyncWait(0);
  }

  //creating car and phil

  $.phil2_car = Car.Create(patriot, -1097.0, 334.0, 10.8);
  $.phil2_car.setHeading(269.2);
  $.player1.warpIntoCar($.phil2_car);
  Camera.SetBehindPlayer();


  $.phil_noarm = Char.CreateAsPassenger($.phil2_car, 4 /* PEDTYPE_CIVMALE */, SPECIAL01, 0);
  $.phil_noarm.setAsPlayerFriend($.player1, true /* TRUE */);
  Pad.SetDrunkInputDelay($.player1, $.drunkeness);
  $.player1.setDrunkenness(255);
  if (!(Game.IsGerman()) && !(Game.IsFrench())) {
    $.phil_noarm.setBleeding(true /* TRUE */);
  }
  $.phil_noarm.setCantBeDraggedOut(true /* TRUE */);
  $.phil_noarm.setStayInCarWhenJacked(true /* TRUE */);


  Clock.SetTimeScale(0.99999999);


  $.radar_blip_hospital1 = Blip.AddForCoord(-871.6, -469.5, 9.9);


  Hud.DisplayCounterWithString($.$id.phil2_total_car_health, 1 /* COUNTER_DISPLAY_BAR */, "PHI2_04");


  $.phil2_car_health2 = $.phil2_car.getHealth();
  $.phil2_car_health2 /= 10;


  TIMERA = 0;
  TIMERB = 0;
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Text.PrintNow("PHI2_01", 5000, 1); //Quick, get Phil to the hospital.
}



async function drunken_loop() {
  // SCM GOTO → drunken_loop lowered to endless loop
  while (true) {
    await asyncWait(0);


    if (!(Car.IsDead($.phil2_car))) {
      //phil speech

      if ($.player1.isInCar($.phil2_car)) {
        if ($.at_hospital == 0) {
          if ($.phil_speech == 0) {
            if ($.phil2_total_car_health < 85) {
              Audio.LoadMissionAudio(1, "PHIL2_4" as any);
              while (!(Audio.HasMissionAudioLoaded(1))) {
                await asyncWait(0);
                if ($.phil2_goals == 0) {
                  Sphere.Draw(-871.6, -469.5, 9.9, 7.0);
                }
                else {
                  Sphere.Draw(-1183.0, -664.2, 10.5, 7.0);
                }
              }
              Text.PrintNow("PHI2_08", 5000, 1); //Watchout! Charlie in the tree line!
              Audio.PlayMissionAudio(1);
              while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.phil_noarm))) {
                await asyncWait(0);
                if ($.phil2_goals == 0) {
                  Sphere.Draw(-871.6, -469.5, 9.9, 7.0);
                }
                else {
                  Sphere.Draw(-1183.0, -664.2, 10.5, 7.0);
                }
              }
              Audio.ClearMissionAudio(1);
              Text.ClearThisPrint("PHI2_08");
              $.phil_speech = 1;
            }
          }
          if ($.phil_speech == 1) {
            if ($.phil2_total_car_health < 75) {
              Audio.LoadMissionAudio(1, "PHIL2_5" as any);
              while (!(Audio.HasMissionAudioLoaded(1))) {
                await asyncWait(0);
                if ($.phil2_goals == 0) {
                  Sphere.Draw(-871.6, -469.5, 9.9, 7.0);
                }
                else {
                  Sphere.Draw(-1183.0, -664.2, 10.5, 7.0);
                }
              }
              Text.PrintNow("PHI2_09", 5000, 1); //Is it me or are the roads made of jelly?
              Audio.PlayMissionAudio(1);
              while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.phil_noarm))) {
                await asyncWait(0);
                if ($.phil2_goals == 0) {
                  Sphere.Draw(-871.6, -469.5, 9.9, 7.0);
                }
                else {
                  Sphere.Draw(-1183.0, -664.2, 10.5, 7.0);
                }
              }
              Audio.ClearMissionAudio(1);
              Text.ClearThisPrint("PHI2_09");
              $.phil_speech = 2;
            }
          }
          if ($.phil_speech == 2) {
            if ($.phil2_total_car_health < 65) {
              Audio.LoadMissionAudio(1, "PHIL2_6" as any);
              while (!(Audio.HasMissionAudioLoaded(1))) {
                await asyncWait(0);
                if ($.phil2_goals == 0) {
                  Sphere.Draw(-871.6, -469.5, 9.9, 7.0);
                }
                else {
                  Sphere.Draw(-1183.0, -664.2, 10.5, 7.0);
                }
              }
              Text.PrintNow("PHI2_10", 5000, 1); //Broken Spoon to Mother Hen, you copy?
              Audio.PlayMissionAudio(1);
              while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.phil_noarm))) {
                await asyncWait(0);
                if ($.phil2_goals == 0) {
                  Sphere.Draw(-871.6, -469.5, 9.9, 7.0);
                }
                else {
                  Sphere.Draw(-1183.0, -664.2, 10.5, 7.0);
                }
              }
              Audio.ClearMissionAudio(1);
              Text.ClearThisPrint("PHI2_10");
              $.phil_speech = 3;
            }
          }
          if ($.phil_speech == 3) {
            if ($.phil2_total_car_health < 55) {
              Audio.LoadMissionAudio(1, "PHIL2_7" as any);
              while (!(Audio.HasMissionAudioLoaded(1))) {
                await asyncWait(0);
                if ($.phil2_goals == 0) {
                  Sphere.Draw(-871.6, -469.5, 9.9, 7.0);
                }
                else {
                  Sphere.Draw(-1183.0, -664.2, 10.5, 7.0);
                }
              }
              Text.PrintNow("PHI2_11", 5000, 1); //Spooney Wooney Woo Woo Woooo!
              Audio.PlayMissionAudio(1);
              while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.phil_noarm))) {
                await asyncWait(0);
                if ($.phil2_goals == 0) {
                  Sphere.Draw(-871.6, -469.5, 9.9, 7.0);
                }
                else {
                  Sphere.Draw(-1183.0, -664.2, 10.5, 7.0);
                }
              }
              Audio.ClearMissionAudio(1);
              Text.ClearThisPrint("PHI2_11");
              $.phil_speech = 4;
            }
          }


          if ($.phil_speech == 4) {
            if ($.phil2_total_car_health < 45) {
              Audio.LoadMissionAudio(1, "PHIL2_8" as any);
              while (!(Audio.HasMissionAudioLoaded(1))) {
                await asyncWait(0);
                if ($.phil2_goals == 0) {
                  Sphere.Draw(-871.6, -469.5, 9.9, 7.0);
                }
                else {
                  Sphere.Draw(-1183.0, -664.2, 10.5, 7.0);
                }
              }
              Text.PrintNow("PHI2_12", 5000, 1); //He's come for me boy!
              Audio.PlayMissionAudio(1);
              while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.phil_noarm))) {
                await asyncWait(0);
                if ($.phil2_goals == 0) {
                  Sphere.Draw(-871.6, -469.5, 9.9, 7.0);
                }
                else {
                  Sphere.Draw(-1183.0, -664.2, 10.5, 7.0);
                }
              }
              Audio.ClearMissionAudio(1);
              Text.ClearThisPrint("PHI2_12");
              $.phil_speech = 5;
            }
          }
          if ($.phil_speech == 5) {
            if ($.phil2_total_car_health < 35) {
              Audio.LoadMissionAudio(1, "PHIL2_9" as any);
              while (!(Audio.HasMissionAudioLoaded(1))) {
                await asyncWait(0);
                if ($.phil2_goals == 0) {
                  Sphere.Draw(-871.6, -469.5, 9.9, 7.0);
                }
                else {
                  Sphere.Draw(-1183.0, -664.2, 10.5, 7.0);
                }
              }
              Text.PrintNow("PHI2_13", 5000, 1); //Black feathered wings beating all around...
              Audio.PlayMissionAudio(1);
              while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.phil_noarm))) {
                await asyncWait(0);
                if ($.phil2_goals == 0) {
                  Sphere.Draw(-871.6, -469.5, 9.9, 7.0);
                }
                else {
                  Sphere.Draw(-1183.0, -664.2, 10.5, 7.0);
                }
              }
              Audio.ClearMissionAudio(1);
              Text.ClearThisPrint("PHI2_13");
              $.phil_speech = 6;
            }
          }
          if ($.phil_speech == 6) {
            if ($.phil2_total_car_health < 25) {
              Audio.LoadMissionAudio(1, "PHIL210" as any);
              while (!(Audio.HasMissionAudioLoaded(1))) {
                await asyncWait(0);
                if ($.phil2_goals == 0) {
                  Sphere.Draw(-871.6, -469.5, 9.9, 7.0);
                }
                else {
                  Sphere.Draw(-1183.0, -664.2, 10.5, 7.0);
                }
              }
              Text.PrintNow("PHI2_14", 5000, 1); //It ... it's beautiful, man ... beautiful ... but so cold ...
              Audio.PlayMissionAudio(1);
              while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.phil_noarm))) {
                await asyncWait(0);
                if ($.phil2_goals == 0) {
                  Sphere.Draw(-871.6, -469.5, 9.9, 7.0);
                }
                else {
                  Sphere.Draw(-1183.0, -664.2, 10.5, 7.0);
                }
              }
              Audio.ClearMissionAudio(1);
              Text.ClearThisPrint("PHI2_14");
              $.phil_speech = 7;
            }
          }
        }
        else {
          Audio.ClearMissionAudio(1);
        }
      }
    }


    if (!(Car.IsDead($.phil2_car))) {
      //checking player1 is in car
      if ($.phil2_car.isUpsidedown() && $.phil2_car.isStopped()) {
        $.flag_phil2_car_upsidedown = 1;
      }
      if (!($.player1.isInCar($.phil2_car)) && $.flag_player_not_in_phil2_car == 0 && $.flag_phil2_car_upsidedown == 0) {
        Text.PrintNow("IN_VEH", 5000, 1); //"Get back into the vehicle and get on with the mission!"
        $.radar_blip_phil2_car = Blip.AddForCar($.phil2_car);
        $.radar_blip_hospital1.remove();
        $.radar_blip_hospital2.remove();
        $.flag_player_not_in_phil2_car = 1;
      }
      if ($.player1.isInCar($.phil2_car) && $.flag_player_not_in_phil2_car == 1) {
        $.radar_blip_phil2_car.remove();
        $.radar_blip_hospital1.remove();
        $.radar_blip_hospital2.remove();
        if ($.phil2_goals == 0) {
          $.radar_blip_hospital1 = Blip.AddForCoord(-871.6, -469.5, 9.9);
        }
        if ($.phil2_goals == 1) {
          $.radar_blip_hospital2 = Blip.AddForCoord(-1183.0, -664.2, 10.5);
        }
        Text.ClearPrints();
        $.flag_player_not_in_phil2_car = 0;
      }

      //reducing phils life-o-meter(TM) each time the car is hit

      $.phil2_car_health = $.phil2_car.getHealth();
      $.phil2_car_health /= 10;
      if ($.phil2_car_health2 > $.phil2_car_health) {
        $.phil2_car_health_diff = $.phil2_car_health2 - $.phil2_car_health;
        $.phil2_total_car_health = $.phil2_total_car_health - $.phil2_car_health_diff;
      }
      $.phil2_car_health2 = $.phil2_car_health;

      //reducing phils life-o-meter(TM) with every second that passes

      if (TIMERA > 1000) {
        $.phil2_total_car_health = $.phil2_total_car_health - 1;
        TIMERA = 0;
      }
      if ($.phil2_total_car_health < 1) {
        if (!(Char.IsDead($.phil_noarm))) {
          $.phil_noarm.explodeHead();
        }
        Text.PrintNow("PHI2_03", 5000, 1); //Phil Cassidy is dead!!!  Now who's gonna supply arms in Liberty?
        // SCM GOTO → mission_failed_phil2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_phil2"); // fallback: would break linear control flow
      }

      //reducing drunkeness

      if (TIMERB > 20000) {
        $.drunkeness = $.drunkeness - 1;
        $.motion_blur = $.motion_blur - 30;
        Pad.SetDrunkInputDelay($.player1, $.drunkeness);
        $.player1.setDrunkenness($.motion_blur);
        TIMERB = 0;
      }


      //cop level rises if player1 goes past a cop while drunk driving
      $.phil_car_speed = $.phil2_car.getSpeed();
      if ($.phil_car_speed > 5.0) {
        if (!($.player1.isWantedLevelGreater(0))) {
          const _res413 = $.player1.getCoordinates();
$.player_x = _res413.x;
$.player_y = _res413.y;
$.player_z = _res413.z;
          $.area_plyrx1 = $.player_x + 10.0;
          $.area_plyry1 = $.player_y + 10.0;
          $.area_plyrx2 = $.player_x - 10.0;
          $.area_plyry2 = $.player_y - 10.0;
          $.traffic_cops = World.GetRandomCopInArea($.area_plyrx1, $.area_plyry1, $.area_plyrx2, $.area_plyry2, true, false, false, false, false);
          if (!($.traffic_cops == -1)) {
            $.player1.alterWantedLevel(1);
            Audio.LoadMissionAudio(1, "PHIL211" as any);
            while (!(Audio.HasMissionAudioLoaded(1))) {
              await asyncWait(0);
              if ($.phil2_goals == 0) {
                Sphere.Draw(-871.6, -469.5, 9.9, 7.0);
              }
              else {
                Sphere.Draw(-1183.0, -664.2, 10.5, 7.0);
              }
            }
            Text.PrintNow("PHI2_15", 5000, 1); //10-4 we've got a drunk driver.
            Audio.PlayMissionAudio(1);
            while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.phil_noarm))) {
              await asyncWait(0);
              if ($.phil2_goals == 0) {
                Sphere.Draw(-871.6, -469.5, 9.9, 7.0);
              }
              else {
                Sphere.Draw(-1183.0, -664.2, 10.5, 7.0);
              }
            }
            Audio.ClearMissionAudio(1);
            Text.ClearThisPrint("PHI2_15");
          }
          $.traffic_cops.markAsNoLongerNeeded();


        }
      }

      //blood spurting out of window
      /*
      GENERATE_RANDOM_INT_IN_RANGE 0 11 rnd_timescale
      IF rnd_timescale = 3
      GET_OFFSET_FROM_CAR_IN_WORLD_COORDS phil2_car 2.0 0.0 0.0 player_x player_y player_z
      GET_OFFSET_FROM_CAR_IN_WORLD_COORDS phil2_car 3.0 0.0 0.0 dildo_check1x dildo_check1y dildo_check1z
      CREATE_SINGLE_PARTICLE PARTICLE_BLOOD_SMALL player_x player_y player_z dildo_check1x dildo_check1y dildo_check1z 0.0
      CREATE_SINGLE_PARTICLE PARTICLE_BLOOD_SMALL player_x player_y player_z dildo_check1x dildo_check1y dildo_check1z 0.0
      CREATE_SINGLE_PARTICLE PARTICLE_BLOOD_SMALL player_x player_y player_z dildo_check1x dildo_check1y dildo_check1z 0.0
      CREATE_SINGLE_PARTICLE PARTICLE_BLOOD_SMALL player_x player_y player_z dildo_check1x dildo_check1y dildo_check1z 0.0
      CREATE_SINGLE_PARTICLE PARTICLE_BLOOD_SMALL player_x player_y player_z dildo_check1x dildo_check1y dildo_check1z 0.0
      CREATE_SINGLE_PARTICLE PARTICLE_BLOOD_SMALL player_x player_y player_z dildo_check1x dildo_check1y dildo_check1z 0.0
      CREATE_SINGLE_PARTICLE PARTICLE_BLOOD_SMALL player_x player_y player_z dildo_check1x dildo_check1y dildo_check1z 0.0
      CREATE_SINGLE_PARTICLE PARTICLE_BLOOD_SMALL player_x player_y player_z dildo_check1x dildo_check1y dildo_check1z 0.0
      ENDIF
      */

      //when player1 reaches hospital, phil tells him to go to a dodgy chop shop elsewhere

      if ($.phil2_goals == 0) {
        if (!(Car.IsDead($.phil2_car))) {
          if ($.player1.isInCar($.phil2_car)) {
            if ($.phil2_car.locateStopped3D(-871.6, -469.5, 9.9, 7.0, 7.0, 7.0, true /* TRUE */)) {
              $.radar_blip_hospital1.remove();
              $.radar_blip_hospital2 = Blip.AddForCoord(-1183.0, -664.2, 10.5);
              $.at_hospital = 1;
              Text.PrintNow("PHI2_05", 5000, 1); //Not the hospital, man! Too many cops and Viet Cong!
              Audio.PlayMissionAudio(2);
              while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.phil_noarm))) {
                await asyncWait(0);
              }
              Audio.ClearMissionAudio(2);
              Text.ClearThisPrint("PHI2_05");


              Audio.LoadMissionAudio(2, "PHIL2_2" as any);
              while (!(Audio.HasMissionAudioLoaded(2))) {
                await asyncWait(0);
              }
              Text.PrintNow("PHI2_06", 5000, 1); //There's an ex-army surgeon owes me a few favours and a lawnmower.
              Audio.PlayMissionAudio(2);
              while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.phil_noarm))) {
                await asyncWait(0);
              }
              Audio.ClearMissionAudio(2);
              Text.ClearThisPrint("PHI2_06");


              Audio.LoadMissionAudio(2, "PHIL2_3" as any);
              while (!(Audio.HasMissionAudioLoaded(2))) {
                await asyncWait(0);
              }
              Text.PrintNow("PHI2_07", 5000, 1); //He's got a place down Little Havana, ooo look, a giant fish.
              Audio.PlayMissionAudio(2);
              while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.phil_noarm))) {
                await asyncWait(0);
              }
              Audio.ClearMissionAudio(2);
              Text.ClearThisPrint("PHI2_07");
              $.at_hospital = 0;
              $.phil2_goals = 1;
            }
          }
        }
      }
      if ($.phil2_goals == 1) {
        if (!(Car.IsDead($.phil2_car))) {
          if ($.player1.isInCar($.phil2_car)) {
            if ($.phil2_car.locateStopped3D(-1183.0, -664.2, 10.5, 7.0, 7.0, 7.0, true /* TRUE */)) {
              // ******************************************START OF PHIL GETTING OUT OF CAR CUTSCENE********************************
              $.player1.setControl(false /* OFF */);
              Hud.SwitchWidescreen(true /* ON */);
              $.player1.setDrunkenness(0);
              if (!(Char.IsDead($.phil_noarm))) {
                $.car_heading = $.phil2_car.getHeading();
                $.phil2_car.setCoordinates(-1183.0, -664.2, 10.5);
                $.phil2_car.setHeading($.car_heading);
                $.phil_noarm.setObjLeaveAnyCar();
                $.phil_noarm.setAnimGroup(17 /* ANIM_OLD_WOMANPED */);
              }
              Camera.SetFixedPosition(-1178.1, -676.3, 15.5, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(-1183.7, -656.7, 11.1, 2 /* JUMP_CUT */);
              World.ClearAreaOfCars(-1190.0, -671.2, 17.5, -1174.0, -657.2, 3.5);
              if (!(Char.IsDead($.phil_noarm))) {
                $.phil_noarm.setObjNoObj();
                $.phil_noarm.setObjGotoCoordOnFoot(-1218.9, -665.1);
              }
              TIMERA = 0;
              TIMERB = 0;
              // SCM label phil_out_car
              await asyncWait(0);
              if (TIMERB > 500) {
                if (!(Char.IsDead($.phil_noarm))) {
                  if (!(Game.IsGerman()) && !(Game.IsFrench())) {
                    await splurt();  // SCM GOSUB splurt
                  }
                }
                TIMERB = 0;
              }
              if (TIMERA > 2000) {
                TIMERA = 0;
                TIMERB = 0;
                // SCM GOTO → phil_run (not lowered; manual jump required)
                throw new Error("unresolved GOTO phil_run"); // fallback: would break linear control flow
              }
              // SCM GOTO → phil_out_car (not lowered; manual jump required)
              throw new Error("unresolved GOTO phil_out_car"); // fallback: would break linear control flow
              // SCM label phil_run
              await asyncWait(0);
              if (!(Char.IsDead($.phil_noarm))) {
                if (TIMERB > 500) {
                  if (!(Char.IsDead($.phil_noarm))) {
                    if (!(Game.IsGerman()) && !(Game.IsFrench())) {
                      await splurt();  // SCM GOSUB splurt
                    }
                  }
                  TIMERB = 0;
                }
                if ($.phil_noarm.locateOnFoot2D(-1218.9, -665.1, 3.0, 3.0, false /* FALSE */) || TIMERA > 3000) {
                  // SCM GOTO → phil_cut (not lowered; manual jump required)
                  throw new Error("unresolved GOTO phil_cut"); // fallback: would break linear control flow
                }
              }
              // SCM GOTO → phil_run (not lowered; manual jump required)
              throw new Error("unresolved GOTO phil_run"); // fallback: would break linear control flow
              // SCM label phil_cut
              if (!(Char.IsDead($.phil_noarm))) {
                $.phil_noarm.setObjNoObj();
                $.phil_noarm.setCoordinates(-1191.7, -664.3, 10.5);
                $.phil_noarm.setObjGotoCoordOnFoot(-1218.9, -665.1);
              }
              TIMERA = 0;
              TIMERB = 0;
              Camera.SetFixedPosition(-1174.3, -664.2, 15.9, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(-1184.5, -664.1, 11.64, 2 /* JUMP_CUT */);
              // SCM label phil_last_walk
              await asyncWait(0);
              if (!(Char.IsDead($.phil_noarm))) {
                if (TIMERB > 500) {
                  if (!(Char.IsDead($.phil_noarm))) {
                    if (!(Game.IsGerman()) && !(Game.IsFrench())) {
                      await splurt();  // SCM GOSUB splurt
                    }
                  }
                  TIMERB = 0;
                }
                if ($.phil_noarm.locateOnFoot2D(-1218.9, -665.1, 3.0, 3.0, false /* FALSE */) || TIMERA > 3000) {
                  // SCM GOTO → phil_finished (not lowered; manual jump required)
                  throw new Error("unresolved GOTO phil_finished"); // fallback: would break linear control flow
                }
              }
              // SCM GOTO → phil_last_walk (not lowered; manual jump required)
              throw new Error("unresolved GOTO phil_last_walk"); // fallback: would break linear control flow
              // SCM label phil_finished
              Clock.SetTimeScale(1.0);
              // ******************************************END OF PHIL GETTING OUT OF CAR CUTSCENE**********************************

              // ******************************************START OF ASSET AQUIRED CUTSCENE********************************
              Camera.DoFade(500, 0 /* FADE_OUT */);
              while (Camera.GetFadingStatus()) {
                await asyncWait(0);
              }
              $.phil_noarm.delete();
              $.phils_m60 = Pickup.Create(M60, 1 /* PICKUP_IN_SHOP */, -1105.9, 335.3, 11.1);
              $.phils_rocketla = Pickup.Create(rocketla, 1 /* PICKUP_IN_SHOP */, -1105.9, 330.3, 11.1);
              $.phils_flame = Pickup.Create(minigun, 1 /* PICKUP_IN_SHOP */, -1105.9, 325.3, 11.1);
              $.phils_bomb = Pickup.Create(182 /* bomb */, 1 /* PICKUP_IN_SHOP */, -1105.9, 320.3, 11.1);
              Streaming.LoadScene(-1038.4, 309.7, 20.9);
              Camera.SetFixedPosition(-1038.4, 309.7, 20.9, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(-1065.6, 322.1, 21.7, 2 /* JUMP_CUT */);
              Camera.DoFade(500, 1 /* FADE_IN */);
              while (Camera.GetFadingStatus()) {
                await asyncWait(0);
              }
              Audio.PlayMissionPassedTune(1);
              Text.PrintBig("PHI_AS1", 5000, 6); //PHILS PLACE ASSET COMPLETED
              await asyncWait(5000);
              Streaming.LoadScene(-1093.2, 345.0, 14.3);
              Camera.SetFixedPosition(-1093.2, 345.0, 14.3, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(-1110.1, 331.3, 11.0, 2 /* JUMP_CUT */);
              Text.PrintNow("PHI_AS2", 6000, 1); //New Weapons available to purchase from Phils Place.
              await asyncWait(6000);
              Camera.DoFade(500, 0 /* FADE_OUT */);
              while (Camera.GetFadingStatus()) {
                await asyncWait(0);
              }
              const _res414 = $.player1.getCoordinates();
$.player_x = _res414.x;
$.player_y = _res414.y;
$.player_z = _res414.z;
              Streaming.LoadScene($.player_x, $.player_y, $.player_z);
              Camera.DoFade(500, 1 /* FADE_IN */);
              Camera.RestoreJumpcut();
              $.player1.setControl(true /* ON */);
              Hud.SwitchWidescreen(false /* OFF */);
              $.player1.setDrunkenness($.motion_blur);
              // ******************************************END OF ASSET AQUIRED CUTSCENE********************************
              // SCM GOTO → mission_passed_phil2 (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_passed_phil2"); // fallback: would break linear control flow
            }
          }
        }
        else {
          Text.PrintNow("PHI2_03", 5000, 1); //Phil Cassidy is dead!!!  Now who's gonna supply arms in Liberty?
          // SCM GOTO → mission_failed_phil2 (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_failed_phil2"); // fallback: would break linear control flow
        }
      }
    }
    else {
      Text.PrintNow("PHI2_03", 5000, 1); //Phil Cassidy is dead!!!  Now who's gonna supply arms in Liberty?
      // SCM GOTO → mission_failed_phil2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_phil2"); // fallback: would break linear control flow
    }


    if (Char.IsDead($.phil_noarm)) {
      Text.PrintNow("PHI2_03", 5000, 1); //Phil Cassidy is dead!!!  Now who's gonna supply arms in Liberty?
      // SCM GOTO → mission_failed_phil2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_phil2"); // fallback: would break linear control flow
    }


  }
}


// Mission failed

async function mission_failed_phil2() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}




// mission passed

async function mission_passed_phil2() {


  Text.ClearPrints();
  Text.PrintWithNumberBig("M_PASS", 4000, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(4000);
  Stat.PlayerMadeProgress(1);
  Stat.RegisterMissionPassed("PHIL_2");
  $.phil_contact_blip.remove();
  $.phil_contact_blip = Blip.AddShortRangeSpriteForCoord($.philX, $.philY, $.philZ, $.the_phil_blip);
  $.flag_phil_mission2_passed = 1;
}




// mission cleanup

async function mission_cleanup_phil2() {


  ONMISSION = 0;
  $.player1.setControl(true /* on */);
  Streaming.MarkModelAsNoLongerNeeded(patriot);
  $.traffic_cops.markAsNoLongerNeeded();
  Camera.Shake(0);
  $.phil_noarm.removeElegantly();
  Streaming.UnloadSpecialCharacter(1);
  $.radar_blip_phil2_car.remove();
  $.radar_blip_hospital1.remove();
  $.radar_blip_hospital2.remove();
  Hud.ClearCounter($.$id.phil2_total_car_health);
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}






///////////////////////////////////////////////////////////////////////////////////

async function bloody_nuts() {
  ///////////////////////////////////////////////////////////////////////////////////

  if (!(Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */))) {
    const _res415 = $.cs_phil.getOffsetInWorldCoords(0.3, 0.3, 0.3);
$.player_x = _res415.x;
$.player_y = _res415.y;
$.player_z = _res415.z;
    Fx.CreateSingleParticle(65 /* PARTICLE_TEST */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.0, 0.1);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(6 /* PARTICLE_BLOOD_SPURT */, $.player_x, $.player_y, $.player_z, 0.0, 1.0, 0.03, 0.0);
    Fx.CreateSingleParticle(6 /* PARTICLE_BLOOD_SPURT */, $.player_x, $.player_y, $.player_z, 0.0, 1.0, 0.03, 0.0);
    Fx.CreateSingleParticle(6 /* PARTICLE_BLOOD_SPURT */, $.player_x, $.player_y, $.player_z, 0.0, 1.0, 0.03, 0.0);
    Fx.CreateSingleParticle(6 /* PARTICLE_BLOOD_SPURT */, $.player_x, $.player_y, $.player_z, 0.0, 1.0, 0.03, 0.0);
    Fx.CreateSingleParticle(6 /* PARTICLE_BLOOD_SPURT */, $.player_x, $.player_y, $.player_z, 0.0, 1.0, 0.03, 0.0);
    Fx.CreateSingleParticle(6 /* PARTICLE_BLOOD_SPURT */, $.player_x, $.player_y, $.player_z, 0.0, 1.0, 0.03, 0.0);
    Fx.CreateSingleParticle(6 /* PARTICLE_BLOOD_SPURT */, $.player_x, $.player_y, $.player_z, 0.0, 1.0, 0.03, 0.0);
    Fx.CreateSingleParticle(PARTICLE_BLOODDROP, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(PARTICLE_BLOODDROP, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(PARTICLE_BLOODDROP, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(PARTICLE_BLOODDROP, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
    Fx.CreateSingleParticle(PARTICLE_BLOODDROP, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
  }
  ///////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////

async function splurt() {
  ///////////////////////////////////////////////////////////////////////////////////

  const _res416 = $.phil_noarm.getOffsetInWorldCoords(-0.3, 0.3, 0.3);
$.player_x = _res416.x;
$.player_y = _res416.y;
$.player_z = _res416.z;
  Fx.CreateSingleParticle(65 /* PARTICLE_TEST */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.0, 0.1);
  Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
  Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
  Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
  Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
  Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
  Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
  Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
  Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
  Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
  Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
  Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
  Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
  Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
  Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);
  Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.03, 0.0);


  Fx.CreateSingleParticle(6 /* PARTICLE_BLOOD_SPURT */, $.player_x, $.player_y, $.player_z, 0.0, 0.1, 0.03, 0.0);
  Fx.CreateSingleParticle(6 /* PARTICLE_BLOOD_SPURT */, $.player_x, $.player_y, $.player_z, 0.0, 0.1, 0.03, 0.0);
  Fx.CreateSingleParticle(6 /* PARTICLE_BLOOD_SPURT */, $.player_x, $.player_y, $.player_z, 0.0, 0.1, 0.03, 0.0);
  Fx.CreateSingleParticle(6 /* PARTICLE_BLOOD_SPURT */, $.player_x, $.player_y, $.player_z, 0.0, 0.1, 0.03, 0.0);
  Fx.CreateSingleParticle(6 /* PARTICLE_BLOOD_SPURT */, $.player_x, $.player_y, $.player_z, 0.0, 0.1, 0.03, 0.0);
  Fx.CreateSingleParticle(6 /* PARTICLE_BLOOD_SPURT */, $.player_x, $.player_y, $.player_z, 0.0, 0.1, 0.03, 0.0);
  Fx.CreateSingleParticle(6 /* PARTICLE_BLOOD_SPURT */, $.player_x, $.player_y, $.player_z, 0.0, 0.1, 0.03, 0.0);
  ///////////////////////////////////////////////////////////////////////////////////

  return;
  ///////////////////////////////////////////////////////////////////////////////////















}

export async function phil2() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************Phil Cassidy 2**********************************
  // *****************************************Drink Driving***********************************
  // *****************************************Drive Phil to the hospital while drunk**********
  // *****************************************************************************************

  // SCRIPT_NAME phil2
  // Mission start stuff

  await mission_start_phil2();  // SCM GOSUB mission_start_phil2
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_failed_phil2();  // SCM GOSUB mission_failed_phil2
  }
  await mission_cleanup_phil2();  // SCM GOSUB mission_cleanup_phil2
  // MissionBoundary

  // Variables for mission
  //people, cars and objects

  // VAR_INT phil2_car
  // VAR_INT phil_noarm
  // VAR_INT traffic_cops
  // VAR_INT phils_m60
  // VAR_INT phils_rocketla
  // VAR_INT phils_flame
  // VAR_INT phils_bomb

  //blips

  // VAR_INT radar_blip_phil2_car
  // VAR_INT radar_blip_hospital1
  // VAR_INT radar_blip_hospital2

  //flags

  // VAR_INT phil2_goals
  // VAR_INT flag_player_not_in_phil2_car
  // VAR_INT flag_phil2_car_upsidedown
  // VAR_INT rnd_timescale
  // VAR_INT phil2_car_health
  // VAR_INT phil2_total_car_health
  // VAR_INT phil2_car_health2
  // VAR_INT phil2_car_health_diff
  // VAR_INT drunkeness
  // VAR_INT motion_blur
  // VAR_INT phil_speech
  // VAR_INT at_hospital

  //coordinates

  // VAR_FLOAT area_plyrx1
  // VAR_FLOAT area_plyry1
  // VAR_FLOAT area_plyrx2
  // VAR_FLOAT area_plyry2
  // VAR_FLOAT phil_car_speed
  // VAR_FLOAT car_heading

  //cutscene

  // VAR_INT cs_philbmb

  // ****************************************Mission Start************************************

}
