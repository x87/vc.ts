// Generated from main/phil1.sc

import { $ } from "../utils/vars.mts";

async function mission_start_phil1() {
  Text.ClearThisPrint("M_FAIL");
  ONMISSION = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  Text.LoadMissionText("PHIL1");
  Shortcut.SetDropoffPointForMission(-1004.5, 311.1, 9.9, 155.7);
  //0 flags

  $.gun_runner_goals = 0;


  $.mexican_car_health = 0;
  $.mexican_car_health2 = 0;
  $.mexican_car_health3 = 0;
  $.mexican_car_health4 = 0;


  $.gun1_collected = 0;
  $.gun2_collected = 0;
  $.gun3_collected = 0;
  $.gun4_collected = 0;


  $.create_gun1 = 2;
  $.create_gun2 = 2;
  $.create_gun3 = 2;
  $.create_gun4 = 2;


  $.weapon_dropped = 0;
  $.attackers_coming_to_get_ya = 0;


  $.flag_press1_moped_dead = 1;
  $.flag_press2_moped_dead = 1;
  $.flag_press3_moped_dead = 1;
  $.flag_press4_moped_dead = 1;
  $.all_attackers_alive = 0;


  $.press_driver1_off_moped = 0;
  $.press_driver2_off_moped = 0;
  $.press_driver3_off_moped = 0;
  $.press_driver4_off_moped = 0;


  $.mexican_car_speed = 0.0;


  $.player1_got_all_guns = 0;


  $.mexican_car_var = 0;
  $.mexican_driver_var = 0;


  $.driving_like_nutters_flag = 0;


  $.weapon_knocked_from_back_of_truck_var = 0;
  $.weapon_knocked_from_back_of_truck1 = 0;
  $.weapon_knocked_from_back_of_truck2 = 0;
  $.weapon_knocked_from_back_of_truck3 = 0;
  $.weapon_knocked_from_back_of_truck4 = 0;


  $.no_car_blip1 = 0;
  $.no_car_blip2 = 0;
  $.no_car_blip3 = 0;
  $.no_car_blip4 = 0;


  $.first_time_trigger = 0;
  $.phil_speech1 = 0;
  $.phil_speech3 = 0;


  $.set_mission_truck1 = 0;
  $.set_mission_truck2 = 0;
  $.set_mission_truck3 = 0;
  $.set_mission_truck4 = 0;
  $.set_mission_truck_var = 0;
  $.gunner_attack = 0;
  $.gunner1_attack = 0;


  //0.0 coords

  $.player_x = 0.0;
  $.player_y = 0.0;
  $.player_z = 0.0;


  $.mexican_car_x = 0.0;
  $.mexican_car_y = 0.0;
  $.mexican_car_z = 0.0;


  $.mexican_car_stuck_x = 0.0;
  $.mexican_car_stuck_y = 0.0;
  $.mexican_car_stuck_z = 0.0;


  $.mex_warp_heading = 0.0;


  $.x_tem = 0.0;
  $.y_tem = 0.0;
  $.sum_x_y_tem = 0.0;


  $.mopedcoord_1_x = 0.0;
  $.mopedcoord_1_y = 0.0;
  $.mopedcoord_1_z = 0.0;
  $.mopedcoord_2_x = 0.0;
  $.mopedcoord_2_y = 0.0;
  $.moped_heading = 0.0;


  $.box1x = 0.0;
  $.box1y = 0.0;
  $.box1z = 0.0;
  $.box2x = 0.0;
  $.box2y = 0.0;
  $.box2z = 0.0;
  $.box3x = 0.0;
  $.box3y = 0.0;
  $.box3z = 0.0;
  $.box4x = 0.0;
  $.box4y = 0.0;
  $.box4z = 0.0;


  $.groundz_box = 0.0;

  // ****************************************START OF CUTSCENE********************************


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSphil");


  Streaming.LoadSpecialModel(CUTOBJ01, "expltrk");


  Streaming.LoadScene(-1099.62, 327.21, 10.23);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(CUTOBJ01))) {
    await asyncWait(0);
  }



  World.ClearArea(-1083.1, 321.1, 11.2, 300.0, true /* TRUE */);


  Cutscene.Load("phil_1");
  Cutscene.SetOffset(-1099.62, 327.21, 10.23);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_phil = CutsceneObject.Create(SPECIAL02);
  $.cs_phil.setAnim("CSphil");


  $.cs_expltrk = CutsceneObject.Create(CUTOBJ01);
  $.cs_expltrk.setAnim("expltrk");


  World.ClearArea(-1098.8, 342.6, 10.2, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-1098.8, 342.6, 10.2);
  $.player1.setHeading(265.8);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text

  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 2823) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL1_A", 10000, 1); // Phil?


  while ($.cs_time < 3522) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL1_B", 10000, 1); // RUN!


  while ($.cs_time < 5525) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL1_C", 10000, 1); // Run


  while ($.cs_time < 8000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddExplosion(-1091.6, 327.6, 10.5, 2 /* EXPLOSION_ROCKET */);
    Fx.AddExplosion(-1091.6, 327.6, 10.5, 11 /* EXPLOSION_HELI_BOMB */);
    Fx.AddExplosion(-1091.6, 327.6, 10.5, 1 /* EXPLOSION_MOLOTOV */);
    Fx.AddExplosion(-1091.6, 327.6, 10.5, 6 /* EXPLOSION_HELI */);
  }


  while ($.cs_time < 13868) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL1_O", 10000, 1); // Hoooooweeeeee!


  while ($.cs_time < 17669) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL1_D", 10000, 1); // Never get a naked flame too close to one of Phil Cassidy's Boomshine stills!


  while ($.cs_time < 23022) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL1_E", 10000, 1); // Shit Phil, you drink that stuff?


  while ($.cs_time < 25871) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL1_F", 10000, 1); // Hell, you don't have to drink it


  while ($.cs_time < 28447) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL1_G", 10000, 1); // - just a good whiff will set you off.


  while ($.cs_time < 30702) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL1_H", 10000, 1); // Listen Phil, you said you could sort me with some firepower...


  while ($.cs_time < 34919) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL1_I", 10000, 1); // Sure thing.


  while ($.cs_time < 36645) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL1_J", 10000, 1); // There's some Mexican gun-runner been doing me for business of late.


  while ($.cs_time < 41023) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL1_K", 10000, 1); //He does his weekly run about now.


  while ($.cs_time < 45336) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL1_L", 10000, 1); //Ram his hardware off the back of his trucks before he goes to ground.


  while ($.cs_time < 49603) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL1_M", 10000, 1); //and you'd be doing me a favour while you're at it.


  while ($.cs_time < 52389) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PHIL1_N", 10000, 1); //then finish him off.


  while ($.cs_time < 53589) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 54400) {
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
  //------------------REQUEST_MODELS------------------------------

  $.player1.setMood(0 /* PLAYER_MOOD_CALM */, 60000);


  Streaming.RequestModel(walton);
  Streaming.RequestModel(WMYCR);
  Streaming.RequestModel(faggio);
  Streaming.RequestModel(gunbox);
  Streaming.RequestModel(patriot);


  while (!(Streaming.HasModelLoaded(walton)) || !(Streaming.HasModelLoaded(WMYCR)) || !(Streaming.HasModelLoaded(faggio)) || !(Streaming.HasModelLoaded(gunbox)) || !(Streaming.HasModelLoaded(patriot))) {
    await asyncWait(0);
  }


  Streaming.RequestModel(python);
  Streaming.RequestModel(shotgspa);
  Streaming.RequestModel(ingramsl);
  Streaming.RequestModel(M60);
  Streaming.RequestModel(uzi);


  while (!(Streaming.HasModelLoaded(python)) || !(Streaming.HasModelLoaded(shotgspa)) || !(Streaming.HasModelLoaded(ingramsl)) || !(Streaming.HasModelLoaded(M60)) || !(Streaming.HasModelLoaded(uzi))) {
    await asyncWait(0);
  }


  Audio.LoadMissionAudio(1, "PHIL1_2" as any);
  Audio.LoadMissionAudio(2, "PHIL1_3" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }



  Text.PrintNow("PHI1_01", 11000, 1); //Go and knock the arms of the back of the dealers trucks


  Char.SetEnterCarRangeMultiplier(3.0);


  $.fake_plyr_car = Car.Create(patriot, -1073.4, 325.3, 10.2);
  $.fake_plyr_car.setHeading(259.7);
  $.grenades_pickup = Pickup.CreateWithAmmo(bomb, 3 /* PICKUP_ONCE */, 15, -1058.6, 325.9, 11.2);



  Camera.DoFade(1500, 1 /* FADE_IN */);

  //creating mexican gun runner cars
  //car1 at back

  $.mexican_car = Car.Create(walton, -757.6, 23.9, 9.9);
  $.mexican_car.changeColor(1 /* CARCOLOUR_WHITE */, 1 /* CARCOLOUR_WHITE */);
  $.mexican_car.setAvoidLevelTransitions(true /* TRUE */);
  $.mexican_car.setWatertight(true /* TRUE */);
  $.mexican_driver = Char.CreateInsideCar($.mexican_car, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mexican_car.setCruiseSpeed(15.0);
  $.mexican_car.setDrivingStyle(2);
  $.mexican_car.wanderRandomly();
  $.mexican_car.setAvoidLevelTransitions(true /* TRUE */);
  $.mexican_car_blip = Blip.AddForCar($.mexican_car);


  $.box1 = ScriptObject.Create(gunbox, -757.6, 23.9, 10.0);
  $.box1.setCollision(false /* FALSE */);
  $.mexican_gunner = Char.Create(11 /* PEDTYPE_GANG_SECURITY */, WMYCR, -757.6, 23.9, 10.0);
  $.mexican_gunner.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
  $.mexican_gunner.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
  $.mexican_gunner.setThreatSearch(64 /* THREAT_COP */);
  $.mexican_gunner.attachToCar($.mexican_car, 0.0, -1.0, 0.9, 2 /* FACING_BACK */, 45.0, 23 /* WEAPONTYPE_UZI */);

  //car2

  $.mexican_car2 = Car.Create(walton, -763.6, 12.9, 9.9);
  $.mexican_car2.changeColor(1 /* CARCOLOUR_WHITE */, 1 /* CARCOLOUR_WHITE */);
  $.mexican_car2.setAvoidLevelTransitions(true /* TRUE */);
  $.mexican_car2.setWatertight(true /* TRUE */);
  $.mexican_driver2 = Char.CreateInsideCar($.mexican_car2, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mexican_car2.setCruiseSpeed(15.0);
  $.mexican_car2.setDrivingStyle(2);
  $.mexican_car2.wanderRandomly();
  $.mexican_car2.setAvoidLevelTransitions(true /* TRUE */);
  $.mexican_car2_blip = Blip.AddForCar($.mexican_car2);


  $.box2 = ScriptObject.Create(gunbox, -763.6, 12.9, 10.0);
  $.box2.setCollision(false /* FALSE */);

  //car3

  $.mexican_car3 = Car.Create(walton, -674.9, 788.4, 10.3);
  $.mexican_car3.changeColor(1 /* CARCOLOUR_WHITE */, 1 /* CARCOLOUR_WHITE */);
  $.mexican_car3.setAvoidLevelTransitions(true /* TRUE */);
  $.mexican_car3.setWatertight(true /* TRUE */);


  $.mexican_driver3 = Char.CreateInsideCar($.mexican_car3, 4 /* PEDTYPE_CIVMALE */, WMYCR);



  $.mexican_car3.setCruiseSpeed(15.0);
  $.mexican_car3.setDrivingStyle(2);
  $.mexican_car3.wanderRandomly();
  $.mexican_car3.setAvoidLevelTransitions(true /* TRUE */);
  $.mexican_car3_blip = Blip.AddForCar($.mexican_car3);
  $.mexican_gunner1 = Char.Create(11 /* PEDTYPE_GANG_SECURITY */, WMYCR, -674.9, 788.4, 10.3);
  $.mexican_gunner1.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
  $.mexican_gunner1.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
  $.mexican_gunner1.setThreatSearch(64 /* THREAT_COP */);
  $.mexican_gunner1.attachToCar($.mexican_car3, 0.0, -1.0, 0.9, 2 /* FACING_BACK */, 45.0, 23 /* WEAPONTYPE_UZI */);


  $.box3 = ScriptObject.Create(gunbox, -674.9, 788.4, 10.3);
  $.box3.setCollision(false /* FALSE */);

  //car4

  $.mexican_car4 = Car.Create(walton, -674.9, 777.1, 10.3);
  $.mexican_car4.changeColor(1 /* CARCOLOUR_WHITE */, 1 /* CARCOLOUR_WHITE */);
  $.mexican_car4.setAvoidLevelTransitions(true /* TRUE */);
  $.mexican_car4.setWatertight(true /* TRUE */);
  $.mexican_driver4 = Char.CreateInsideCar($.mexican_car4, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mexican_car4.setCruiseSpeed(15.0);
  $.mexican_car4.setDrivingStyle(2);
  $.mexican_car4.wanderRandomly();
  $.mexican_car4.setAvoidLevelTransitions(true /* TRUE */);
  $.mexican_car4_blip = Blip.AddForCar($.mexican_car4);



  $.box4 = ScriptObject.Create(gunbox, -674.9, 777.1, 10.3);
  $.box4.setCollision(false /* FALSE */);

  //impossible IF statement - IGNORE

  if (ONMISSION == 0) {
    $.press_moped1 = Car.Create(faggio, -844.0, -325.0, 10.0);
    $.press_driver1 = Char.CreateInsideCar($.press_moped1, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.press_moped2 = Car.Create(faggio, -844.0, -325.0, 10.0);
    $.press_driver2 = Char.CreateInsideCar($.press_moped2, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.press_moped3 = Car.Create(faggio, -844.0, -325.0, 10.0);
    $.press_driver3 = Char.CreateInsideCar($.press_moped3, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.press_moped4 = Car.Create(faggio, -844.0, -325.0, 10.0);
    $.press_driver4 = Char.CreateInsideCar($.press_moped4, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  }
}


//DISPLAY_ONSCREEN_COUNTER mexican_car_health COUNTER_DISPLAY_NUMBER


async function gun_runner_loop() {
  // SCM GOTO → gun_runner_loop lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.grenades_pickup.hasBeenCollected()) {
      if ($.bomb_help_flag == 0) {
        Text.PrintHelp("PHI1_HP"); //When using Detonator Grenades, throw a grenade then trigger the explosion at any time.
        $.bomb_help_flag = 1;
      }
    }


    //waiting till player1 damages cars enough to knock out weapons

    if ($.gun_runner_goals == 0) {
      if ($.player1_got_all_guns == 4) {
        if (!(Car.IsDead($.mexican_car))) {
          $.mexican_car_blip.remove();
          $.mexican_car_blip = Blip.AddForCar($.mexican_car);
        }
        if (!(Car.IsDead($.mexican_car2))) {
          $.mexican_car2_blip.remove();
          $.mexican_car2_blip = Blip.AddForCar($.mexican_car2);
        }
        if (!(Car.IsDead($.mexican_car3))) {
          $.mexican_car3_blip.remove();
          $.mexican_car3_blip = Blip.AddForCar($.mexican_car3);
        }
        if (!(Car.IsDead($.mexican_car4))) {
          $.mexican_car4_blip.remove();
          $.mexican_car4_blip = Blip.AddForCar($.mexican_car4);
        }
        Text.PrintNow("PHI1_04", 11000, 1); //Now go and finish off the remaining arms dealers
        $.gun_runner_goals = 1;
      }
      if (!(Car.IsDead($.mexican_car))) {
        if ($.create_gun1 == 2) {
          $.box1.placeRelativeToCar($.mexican_car, 0.0, -2.0, 0.3);
        }
        $.mexican_car_health = $.mexican_car.getHealth();
        if ($.create_gun1 == 2) {
          if ($.mexican_car_health < 970 || $.player1.isInCar($.mexican_car) || $.box1.hasBeenDamaged()) {
            if ($.weapon_knocked_from_back_of_truck1 == 0) {
              $.weapon_knocked_from_back_of_truck1 = 1;
            }
            if ($.gun1_collected == 0) {
              await removing_car_blips();  // SCM GOSUB removing_car_blips
              $.box1.placeRelativeToCar($.mexican_car, 0.0, -2.0, 0.8);
              $.box1.setCollision(true /* TRUE */);
              $.box1.setDynamic(true /* TRUE */);
              $.box1.addToVelocity(0.0, 0.0, 3.0);
              //MAKE_OBJECT_TARGETTABLE box1
              $.gun_blip1 = Blip.AddForObject($.box1);
              Text.PrintNow("PHI1_02", 7000, 1); //The arms dealer dropped his load.  Smash the crate and pick up the weapon.
              $.create_gun1 = 0;


            }
          }
        }
        if ($.mexican_car_health < 300) {
          if (!(Char.IsDead($.mexican_gunner))) {
            $.mexican_gunner.detachFromCar();
            if ($.gunner_attack == 0) {
              $.mexican_gunner.setObjKillPlayerAnyMeans($.player1);
              $.gunner_attack = 1;
            }
          }
          if (!(Char.IsDead($.mexican_driver))) {
            if ($.mexican_driver.isInCar($.mexican_car)) {
              $.mexican_driver.setObjLeaveCar($.mexican_car);
            }
          }
        }
      }
      else {
        if ($.create_gun1 == 2) {
          if ($.weapon_knocked_from_back_of_truck1 == 0) {
            $.weapon_knocked_from_back_of_truck1 = 1;
          }
          if ($.gun1_collected == 0) {
            await removing_car_blips();  // SCM GOSUB removing_car_blips
            $.box1.setCollision(true /* TRUE */);
            $.box1.setDynamic(true /* TRUE */);
            $.box1.addToVelocity(0.0, 0.0, 3.0);
            //MAKE_OBJECT_TARGETTABLE box1
            $.gun_blip1 = Blip.AddForObject($.box1);
            Text.PrintNow("PHI1_02", 7000, 1); //The arms dealer dropped his load.  Smash the crate and pick up the weapon.
            $.create_gun1 = 0;


          }
        }
      }
      if (!(Car.IsDead($.mexican_car2))) {
        if ($.create_gun2 == 2) {
          $.box2.placeRelativeToCar($.mexican_car2, 0.0, -2.0, 0.3);
        }
        $.mexican_car_health2 = $.mexican_car2.getHealth();
        if ($.create_gun2 == 2) {
          if ($.mexican_car_health2 < 970 || $.player1.isInCar($.mexican_car2) || $.box2.hasBeenDamaged()) {
            if ($.weapon_knocked_from_back_of_truck2 == 0) {
              $.weapon_knocked_from_back_of_truck2 = 1;
            }
            if ($.gun2_collected == 0) {
              await removing_car_blips();  // SCM GOSUB removing_car_blips
              $.box2.placeRelativeToCar($.mexican_car2, 0.0, -2.0, 0.8);
              $.box2.setCollision(true /* TRUE */);
              $.box2.setDynamic(true /* TRUE */);
              $.box2.addToVelocity(0.0, 0.0, 3.0);
              //MAKE_OBJECT_TARGETTABLE box2
              $.gun_blip2 = Blip.AddForObject($.box2);
              Text.PrintNow("PHI1_02", 7000, 1); //The arms dealer dropped his load.  Smash the crate and pick up the weapon.
              $.create_gun2 = 0;


            }
          }
        }
        if ($.mexican_car_health2 < 300) {
          if (!(Char.IsDead($.mexican_driver2))) {
            if ($.mexican_driver2.isInCar($.mexican_car2)) {
              $.mexican_driver2.setObjLeaveCar($.mexican_car2);
            }
          }
        }
      }
      else {
        if ($.create_gun2 == 2) {
          if ($.weapon_knocked_from_back_of_truck2 == 0) {
            $.weapon_knocked_from_back_of_truck2 = 1;
          }
          if ($.gun2_collected == 0) {
            await removing_car_blips();  // SCM GOSUB removing_car_blips
            $.box2.setCollision(true /* TRUE */);
            $.box2.setDynamic(true /* TRUE */);
            $.box2.addToVelocity(0.0, 0.0, 3.0);
            //MAKE_OBJECT_TARGETTABLE box2
            $.gun_blip2 = Blip.AddForObject($.box2);
            Text.PrintNow("PHI1_02", 7000, 1); //The arms dealer dropped his load.  Smash the crate and pick up the weapon.
            $.create_gun2 = 0;
          }
        }
      }
      if (!(Car.IsDead($.mexican_car3))) {
        if ($.create_gun3 == 2) {
          $.box3.placeRelativeToCar($.mexican_car3, 0.0, -2.0, 0.3);
        }
        $.mexican_car_health3 = $.mexican_car3.getHealth();
        if ($.create_gun3 == 2) {
          if ($.mexican_car_health3 < 970 || $.player1.isInCar($.mexican_car3) || $.box3.hasBeenDamaged()) {
            if ($.weapon_knocked_from_back_of_truck3 == 0) {
              $.weapon_knocked_from_back_of_truck3 = 1;
            }
            if ($.gun3_collected == 0) {
              await removing_car_blips();  // SCM GOSUB removing_car_blips
              $.box3.placeRelativeToCar($.mexican_car3, 0.0, -2.0, 0.8);
              $.box3.setCollision(true /* TRUE */);
              $.box3.setDynamic(true /* TRUE */);
              $.box3.addToVelocity(0.0, 0.0, 3.0);
              //MAKE_OBJECT_TARGETTABLE box3
              $.gun_blip3 = Blip.AddForObject($.box3);
              Text.PrintNow("PHI1_02", 7000, 1); //The arms dealer dropped his load.  Smash the crate and pick up the weapon.
              $.create_gun3 = 0;
            }
          }
        }
        if ($.mexican_car_health3 < 300) {
          if (!(Char.IsDead($.mexican_gunner1))) {
            $.mexican_gunner1.detachFromCar();
            if ($.gunner1_attack == 0) {
              $.mexican_gunner1.setObjKillPlayerAnyMeans($.player1);
              $.gunner1_attack = 1;
            }
          }
          if (!(Char.IsDead($.mexican_driver3))) {
            if ($.mexican_driver3.isInCar($.mexican_car3)) {
              $.mexican_driver3.setObjLeaveCar($.mexican_car3);
            }
          }
        }
      }
      else {
        if ($.create_gun3 == 2) {
          if ($.weapon_knocked_from_back_of_truck3 == 0) {
            $.weapon_knocked_from_back_of_truck3 = 1;
          }
          if ($.gun3_collected == 0) {
            await removing_car_blips();  // SCM GOSUB removing_car_blips
            $.box3.setCollision(true /* TRUE */);
            $.box3.setDynamic(true /* TRUE */);
            $.box3.addToVelocity(0.0, 0.0, 3.0);
            //MAKE_OBJECT_TARGETTABLE box3
            $.gun_blip3 = Blip.AddForObject($.box3);
            Text.PrintNow("PHI1_02", 7000, 1); //The arms dealer dropped his load.  Smash the crate and pick up the weapon.
            $.create_gun3 = 0;
          }
        }
      }
      if (!(Car.IsDead($.mexican_car4))) {
        if ($.create_gun4 == 2) {
          $.box4.placeRelativeToCar($.mexican_car4, 0.0, -2.0, 0.3);
        }
        $.mexican_car_health4 = $.mexican_car4.getHealth();
        if ($.create_gun4 == 2) {
          if ($.mexican_car_health4 < 970 || $.player1.isInCar($.mexican_car4) || $.box4.hasBeenDamaged()) {
            if ($.weapon_knocked_from_back_of_truck4 == 0) {
              $.weapon_knocked_from_back_of_truck4 = 1;
            }
            if ($.gun4_collected == 0) {
              await removing_car_blips();  // SCM GOSUB removing_car_blips
              $.box4.placeRelativeToCar($.mexican_car4, 0.0, -2.0, 0.8);
              $.box4.setCollision(true /* TRUE */);
              $.box4.setDynamic(true /* TRUE */);
              $.box4.addToVelocity(0.0, 0.0, 3.0);
              //MAKE_OBJECT_TARGETTABLE box4
              $.gun_blip4 = Blip.AddForObject($.box4);
              Text.PrintNow("PHI1_02", 7000, 1); //The arms dealer dropped his load.  Smash the crate and pick up the weapon.
              $.create_gun4 = 0;
            }
          }
        }
        if ($.mexican_car_health4 < 300) {
          if (!(Char.IsDead($.mexican_driver4))) {
            if ($.mexican_driver4.isInCar($.mexican_car4)) {
              $.mexican_driver4.setObjLeaveCar($.mexican_car4);
            }
          }
        }
      }
      else {
        if ($.create_gun4 == 2) {
          if ($.weapon_knocked_from_back_of_truck4 == 0) {
            $.weapon_knocked_from_back_of_truck4 = 1;
          }
          if ($.gun4_collected == 0) {
            await removing_car_blips();  // SCM GOSUB removing_car_blips
            $.box4.setCollision(true /* TRUE */);
            $.box4.setDynamic(true /* TRUE */);
            $.box4.addToVelocity(0.0, 0.0, 3.0);
            //MAKE_OBJECT_TARGETTABLE box4
            $.gun_blip4 = Blip.AddForObject($.box4);
            Text.PrintNow("PHI1_02", 7000, 1); //The arms dealer dropped his load.  Smash the crate and pick up the weapon.
            $.create_gun4 = 0;
          }
        }
      }


      //setting guys on back of trucks to kill player
      if ($.weapon_knocked_from_back_of_truck1 == 1 || $.weapon_knocked_from_back_of_truck2 == 1 || $.weapon_knocked_from_back_of_truck3 == 1 || $.weapon_knocked_from_back_of_truck4 == 1) {
        $.fake_plyr_car.markAsNoLongerNeeded();
        if (!(Char.IsDead($.mexican_gunner))) {
          $.mexican_gunner.setObjKillPlayerAnyMeans($.player1);
        }
        if (!(Char.IsDead($.mexican_gunner1))) {
          $.mexican_gunner1.setObjKillPlayerAnyMeans($.player1);
        }
        if ($.driving_like_nutters_flag == 0) {
          $.driving_like_nutters_flag = 1;
        }
      }

      //dropping weapons
      if ($.gun1_collected == 0) {
        if ($.create_gun1 == 0) {
          if (!($.box1.hasBeenDamaged())) {
            const _res376 = $.box1.getCoordinates();
$.box1x = _res376.x;
$.box1y = _res376.y;
$.box1z = _res376.z;
            $.groundz_box = World.GetGroundZFor3DCoord($.box1x, $.box1y, $.box1z);
            if ($.groundz_box > 9.0) {
              $.groundz_box += 1.0;
              $.box1z = $.groundz_box;
            }
          }
          else {
            $.gungun1 = Pickup.Create(python, 3 /* PICKUP_ONCE */, $.box1x, $.box1y, $.box1z);
            $.gun_blip1.remove();
            $.gun_blip1 = Blip.AddForPickup($.gungun1);
            $.box1.markAsNoLongerNeeded();
            $.create_gun1 = 1;
            $.weapon_dropped++;
          }
        }
      }
      if ($.gun2_collected == 0) {
        if ($.create_gun2 == 0) {
          if (!($.box2.hasBeenDamaged())) {
            const _res377 = $.box2.getCoordinates();
$.box2x = _res377.x;
$.box2y = _res377.y;
$.box2z = _res377.z;
            $.groundz_box = World.GetGroundZFor3DCoord($.box2x, $.box2y, $.box2z);
            if ($.groundz_box > 9.0) {
              $.groundz_box += 1.0;
              $.box2z = $.groundz_box;
            }
          }
          else {
            $.gungun2 = Pickup.Create(shotgspa, 3 /* PICKUP_ONCE */, $.box2x, $.box2y, $.box2z);
            $.gun_blip2.remove();
            $.gun_blip2 = Blip.AddForPickup($.gungun2);
            $.box2.markAsNoLongerNeeded();
            $.create_gun2 = 1;
            $.weapon_dropped++;
          }
        }
      }
      if ($.gun3_collected == 0) {
        if ($.create_gun3 == 0) {
          if (!($.box3.hasBeenDamaged())) {
            const _res378 = $.box3.getCoordinates();
$.box3x = _res378.x;
$.box3y = _res378.y;
$.box3z = _res378.z;
            $.groundz_box = World.GetGroundZFor3DCoord($.box3x, $.box3y, $.box3z);
            if ($.groundz_box > 9.0) {
              $.groundz_box += 1.0;
              $.box3z = $.groundz_box;
            }
          }
          else {
            $.gungun3 = Pickup.Create(M60, 3 /* PICKUP_ONCE */, $.box3x, $.box3y, $.box3z);
            $.gun_blip3.remove();
            $.gun_blip3 = Blip.AddForPickup($.gungun3);
            $.box3.markAsNoLongerNeeded();
            $.create_gun3 = 1;
            $.weapon_dropped++;
          }
        }
      }
      if ($.gun4_collected == 0) {
        if ($.create_gun4 == 0) {
          if (!($.box4.hasBeenDamaged())) {
            const _res379 = $.box4.getCoordinates();
$.box4x = _res379.x;
$.box4y = _res379.y;
$.box4z = _res379.z;
            $.groundz_box = World.GetGroundZFor3DCoord($.box4x, $.box4y, $.box4z);
            if ($.groundz_box > 9.0) {
              $.groundz_box += 1.0;
              $.box4z = $.groundz_box;
            }
          }
          else {
            $.gungun4 = Pickup.Create(ingramsl, 3 /* PICKUP_ONCE */, $.box4x, $.box4y, $.box4z);
            $.gun_blip4.remove();
            $.gun_blip4 = Blip.AddForPickup($.gungun4);
            $.box4.markAsNoLongerNeeded();
            $.create_gun4 = 1;
            $.weapon_dropped++;
          }
        }
      }


      //picking up the gun ON FOOT
      if ($.weapon_dropped > 0) {
        if ($.create_gun1 == 1 || $.create_gun2 == 1 || $.create_gun3 == 1 || $.create_gun4 == 1) {
          await gun_collected();  // SCM GOSUB gun_collected
        }
      }

      //playing mission audio
      if (!($.create_gun1 == 2)) {
        if ($.phil_speech1 == 0) {
          //PRINT_NOW PHI1_06 5000 1//What you doing, driving like that?
          Audio.PlayMissionAudio(1);
          //WHILE NOT HAS_MISSION_AUDIO_FINISHED 1
          //AND NOT IS_CHAR_DEAD mexican_driver
          //	WAIT 0
          //ENDWHILE
          //CLEAR_MISSION_AUDIO 1
          //CLEAR_THIS_PRINT PHI1_06
          $.phil_speech1 = 1;
        }
      }
      if (!($.create_gun3 == 2)) {
        if ($.phil_speech3 == 0) {
          //PRINT_NOW PHI1_07 5000 1//Hey.
          Audio.PlayMissionAudio(2);
          //WHILE NOT HAS_MISSION_AUDIO_FINISHED 2
          //AND NOT IS_CHAR_DEAD mexican_driver3
          //	WAIT 0
          //ENDWHILE
          //CLEAR_MISSION_AUDIO 2
          //CLEAR_THIS_PRINT PHI1_07
          $.phil_speech3 = 1;
        }
      }

      //removing cars blips if the player1 is in them
      if ($.weapon_dropped == 0) {
        if (!(Car.IsDead($.mexican_car))) {
          if ($.player1.isInCar($.mexican_car)) {
            $.mexican_car_blip.remove();
          }
          else {
            if ($.gun1_collected == 0) {
              if ($.no_car_blip1 == 0) {
                $.mexican_car_blip.remove();
                $.mexican_car_blip = Blip.AddForCar($.mexican_car);
                $.no_car_blip1 = 1;
              }
            }
          }
        }
        if (!(Car.IsDead($.mexican_car2))) {
          if ($.player1.isInCar($.mexican_car2)) {
            $.mexican_car2_blip.remove();
          }
          else {
            if ($.gun2_collected == 0) {
              if ($.no_car_blip2 == 0) {
                $.mexican_car2_blip.remove();
                $.mexican_car2_blip = Blip.AddForCar($.mexican_car2);
                $.no_car_blip2 = 1;
              }
            }
          }
        }
        if (!(Car.IsDead($.mexican_car3))) {
          if ($.player1.isInCar($.mexican_car3)) {
            $.mexican_car3_blip.remove();
          }
          else {
            if ($.gun3_collected == 0) {
              if ($.no_car_blip3 == 0) {
                $.mexican_car3_blip.remove();
                $.mexican_car3_blip = Blip.AddForCar($.mexican_car3);
                $.no_car_blip3 = 1;
              }
            }
          }
        }
        if (!(Car.IsDead($.mexican_car4))) {
          if ($.player1.isInCar($.mexican_car4)) {
            $.mexican_car4_blip.remove();
          }
          else {
            if ($.gun4_collected == 0) {
              if ($.no_car_blip4 == 0) {
                $.mexican_car4_blip.remove();
                $.mexican_car4_blip = Blip.AddForCar($.mexican_car4);
                $.no_car_blip4 = 1;
              }
            }
          }
        }
      }
    }


    //setting where cars are going, the speed they go at and sorting them if they get stuck

    if (!(Car.IsDead($.mexican_car))) {
      if (!(Char.IsDead($.mexican_driver))) {
        if ($.mexican_driver.isInCar($.mexican_car)) {
          $.weapon_knocked_from_back_of_truck_var = $.weapon_knocked_from_back_of_truck1;
          $.set_mission_truck_var = $.set_mission_truck1;
          $.mexican_car_var = $.mexican_car;
          $.mexican_driver_var = $.mexican_driver;
          await setting_cars_up();  // SCM GOSUB setting_cars_up
          $.set_mission_truck1 = $.set_mission_truck_var;
        }
        else {
          $.mexican_driver.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }


    if (!(Car.IsDead($.mexican_car2))) {
      if (!(Char.IsDead($.mexican_driver2))) {
        if ($.mexican_driver2.isInCar($.mexican_car2)) {
          $.weapon_knocked_from_back_of_truck_var = $.weapon_knocked_from_back_of_truck2;
          $.set_mission_truck_var = $.set_mission_truck2;
          $.mexican_car_var = $.mexican_car2;
          $.mexican_driver_var = $.mexican_driver2;
          await setting_cars_up();  // SCM GOSUB setting_cars_up
          $.set_mission_truck2 = $.set_mission_truck_var;
        }
        else {
          $.mexican_driver2.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }


    if (!(Car.IsDead($.mexican_car3))) {
      if (!(Char.IsDead($.mexican_driver3))) {
        if ($.mexican_driver3.isInCar($.mexican_car3)) {
          $.weapon_knocked_from_back_of_truck_var = $.weapon_knocked_from_back_of_truck3;
          $.set_mission_truck_var = $.set_mission_truck3;
          $.mexican_car_var = $.mexican_car3;
          $.mexican_driver_var = $.mexican_driver3;
          await setting_cars_up();  // SCM GOSUB setting_cars_up
          $.set_mission_truck3 = $.set_mission_truck_var;
        }
        else {
          $.mexican_driver3.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }


    if (!(Car.IsDead($.mexican_car4))) {
      if (!(Char.IsDead($.mexican_driver4))) {
        if ($.mexican_driver4.isInCar($.mexican_car4)) {
          $.weapon_knocked_from_back_of_truck_var = $.weapon_knocked_from_back_of_truck4;
          $.set_mission_truck_var = $.set_mission_truck4;
          $.mexican_car_var = $.mexican_car4;
          $.mexican_driver_var = $.mexican_driver4;
          await setting_cars_up();  // SCM GOSUB setting_cars_up
          $.set_mission_truck4 = $.set_mission_truck_var;
        }
        else {
          $.mexican_driver4.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }


    //setting attackers after player1 to slow him down

    if ($.player1_got_all_guns == 2) {
      if ($.attackers_coming_to_get_ya == 0) {
        Text.Print("PHI1_03", 7000, 1); //Looks like they have called for back up
        $.attackers_coming_to_get_ya = 1;
      }
    }


    if ($.attackers_coming_to_get_ya == 1) {
      if ($.all_attackers_alive == 4) {

        //1st attacker
        if (!(Char.IsDead($.press_driver1))) {
          if (!(Car.IsDead($.press_moped1))) {
            if ($.press_driver1.isInCar($.press_moped1)) {
              if ($.press_driver1_off_moped == 1) {
                $.press_moped1.setMission(5 /* MISSION_BLOCKPLAYER_CLOSE */);
                $.press_moped1.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
                $.press_driver1_off_moped = 0;
              }
              if ($.player1.isInAnyCar()) {
                const _res380 = $.player1.getCoordinates();
$.player_x = _res380.x;
$.player_y = _res380.y;
$.player_z = _res380.z;
                if ($.press_moped1.locate2D($.player_x, $.player_y, 12.0, 12.0, false /* FALSE */)) {
                  $.press_moped1.setCruiseSpeed(0.0);
                  $.press_driver1.setObjLeaveCar($.press_moped1);
                }
                else {
                  if ($.press_moped1.locate2D($.player_x, $.player_y, 14.0, 14.0, false /* FALSE */)) {
                    $.press_moped1.setCruiseSpeed(1.0);
                  }
                  else {
                    if ($.press_moped1.locate2D($.player_x, $.player_y, 15.0, 15.0, false /* FALSE */)) {
                      $.press_moped1.setCruiseSpeed(2.0);
                    }
                    else {
                      if ($.press_moped1.locate2D($.player_x, $.player_y, 18.0, 18.0, false /* FALSE */)) {
                        $.press_moped1.setCruiseSpeed(3.0);
                      }
                      else {
                        if ($.press_moped1.locate2D($.player_x, $.player_y, 20.0, 20.0, false /* FALSE */)) {
                          $.press_moped1.setCruiseSpeed(4.0);
                        }
                        else {
                          $.press_moped1.setCruiseSpeed(40.0);
                        }
                      }
                    }
                  }
                }
              }
              else {
                if ($.player1.locateAnyMeansChar2D($.press_driver1, 13.0, 13.0, false)) {
                  $.press_driver1.setObjKillPlayerOnFoot($.player1);
                }
                else {
                  $.press_moped1.setCruiseSpeed(40.0);
                }
              }
              if (!(Car.IsDead($.press_moped1))) {
                if ($.press_moped1.locate3D($.mexican_car_stuck_x, $.mexican_car_stuck_y, $.mexican_car_stuck_z, 5.0, 5.0, 5.0, false)) {
                  if (TIMERA > 4000) {
                    if (!($.press_moped1.isOnScreen())) {
                      const _res381 = $.press_moped1.getCoordinates();
$.mopedcoord_1_x = _res381.x;
$.mopedcoord_1_y = _res381.y;
$.mopedcoord_1_z = _res381.z;
                      const _res382 = Path.GetClosestCarNodeWithHeading($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z);
$.mopedcoord_1_x = _res382.nodeX;
$.mopedcoord_1_y = _res382.nodeY;
$.mopedcoord_1_z = _res382.nodeZ;
$.moped_heading = _res382.angle;
                      if (!(Camera.IsPointOnScreen($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z, 3.0))) {
                        if (!(World.IsPointObscuredByAMissionEntity($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z, 3.0, 3.0, 2.0))) {
                          $.press_moped1.setCoordinates($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z);
                          $.press_moped1.setHeading($.moped_heading);
                          TIMERA = 0;
                        }
                      }
                    }
                  }
                }
                if (!($.press_moped1.locate3D($.mexican_car_stuck_x, $.mexican_car_stuck_y, $.mexican_car_stuck_z, 4.0, 4.0, 4.0, false))) {
                  const _res383 = $.press_moped1.getCoordinates();
$.mexican_car_stuck_x = _res383.x;
$.mexican_car_stuck_y = _res383.y;
$.mexican_car_stuck_z = _res383.z;
                  TIMERA = 0;
                }
              }
            }
            else {
              $.press_moped1.markAsNoLongerNeeded();
              if ($.player1.locateAnyMeansChar2D($.press_driver1, 13.0, 13.0, false)) {
                $.press_driver1.setObjKillPlayerOnFoot($.player1);
              }
              else {
                $.press_driver1_off_moped = 1;
                await steal_a_moped_1();  // SCM GOSUB steal_a_moped_1
              }
            }
          }
          else {
            $.press_moped1.markAsNoLongerNeeded();
            if (!($.player1.locateAnyMeansChar2D($.press_driver1, 13.0, 13.0, false))) {
              $.press_driver1_off_moped = 1;
              await steal_a_moped_1();  // SCM GOSUB steal_a_moped_1
            }
          }
        }
        else {
          $.all_attackers_alive--;
          if (!(Game.IsGerman())) {
            if ($.killing_bonus < 13) {
              if ($.first_time_trigger == 1) {
                Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
                Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
                $.player1.addScore(100);
                $.killing_bonus++;
              }
            }
          }
          $.press_driver1.markAsNoLongerNeeded();
          $.press_moped1.markAsNoLongerNeeded();
          $.flag_press1_moped_dead = 1;
        }

        //second attacker
        if (!(Char.IsDead($.press_driver2))) {
          if (!(Car.IsDead($.press_moped2))) {
            if ($.press_driver2.isInCar($.press_moped2)) {
              if ($.press_driver2_off_moped == 1) {
                $.press_moped2.setMission(5 /* MISSION_BLOCKPLAYER_CLOSE */);
                $.press_moped2.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
                $.press_driver2_off_moped = 0;
              }
              if ($.player1.isInAnyCar()) {
                const _res384 = $.player1.getCoordinates();
$.player_x = _res384.x;
$.player_y = _res384.y;
$.player_z = _res384.z;
                if ($.press_moped2.locate2D($.player_x, $.player_y, 12.0, 12.0, false /* FALSE */)) {
                  $.press_moped2.setCruiseSpeed(0.0);
                  $.press_driver2.setObjLeaveCar($.press_moped2);
                }
                else {
                  if ($.press_moped2.locate2D($.player_x, $.player_y, 14.0, 14.0, false /* FALSE */)) {
                    $.press_moped2.setCruiseSpeed(1.0);
                  }
                  else {
                    if ($.press_moped2.locate2D($.player_x, $.player_y, 15.0, 15.0, false /* FALSE */)) {
                      $.press_moped2.setCruiseSpeed(2.0);
                    }
                    else {
                      if ($.press_moped2.locate2D($.player_x, $.player_y, 18.0, 18.0, false /* FALSE */)) {
                        $.press_moped2.setCruiseSpeed(3.0);
                      }
                      else {
                        if ($.press_moped2.locate2D($.player_x, $.player_y, 20.0, 20.0, false /* FALSE */)) {
                          $.press_moped2.setCruiseSpeed(4.0);
                        }
                        else {
                          $.press_moped2.setCruiseSpeed(40.0);
                        }
                      }
                    }
                  }
                }
              }
              else {
                if ($.player1.locateAnyMeansChar2D($.press_driver2, 13.0, 13.0, false)) {
                  $.press_driver2.setObjKillPlayerOnFoot($.player1);
                }
                else {
                  $.press_moped2.setCruiseSpeed(40.0);
                }
              }
              if (!(Car.IsDead($.press_moped2))) {
                if ($.press_moped2.locate3D($.mexican_car_stuck_x, $.mexican_car_stuck_y, $.mexican_car_stuck_z, 5.0, 5.0, 5.0, false)) {
                  if (TIMERA > 4000) {
                    if (!($.press_moped2.isOnScreen())) {
                      const _res385 = $.press_moped2.getCoordinates();
$.mopedcoord_1_x = _res385.x;
$.mopedcoord_1_y = _res385.y;
$.mopedcoord_1_z = _res385.z;
                      const _res386 = Path.GetClosestCarNodeWithHeading($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z);
$.mopedcoord_1_x = _res386.nodeX;
$.mopedcoord_1_y = _res386.nodeY;
$.mopedcoord_1_z = _res386.nodeZ;
$.moped_heading = _res386.angle;
                      if (!(Camera.IsPointOnScreen($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z, 3.0))) {
                        if (!(World.IsPointObscuredByAMissionEntity($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z, 3.0, 3.0, 2.0))) {
                          $.press_moped2.setCoordinates($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z);
                          $.press_moped2.setHeading($.moped_heading);
                          TIMERA = 0;
                        }
                      }
                    }
                  }
                }
                if (!($.press_moped2.locate3D($.mexican_car_stuck_x, $.mexican_car_stuck_y, $.mexican_car_stuck_z, 4.0, 4.0, 4.0, false))) {
                  const _res387 = $.press_moped2.getCoordinates();
$.mexican_car_stuck_x = _res387.x;
$.mexican_car_stuck_y = _res387.y;
$.mexican_car_stuck_z = _res387.z;
                  TIMERA = 0;
                }
              }
            }
            else {
              $.press_moped2.markAsNoLongerNeeded();
              if ($.player1.locateAnyMeansChar2D($.press_driver2, 13.0, 13.0, false)) {
                $.press_driver2.setObjKillPlayerOnFoot($.player1);
              }
              else {
                $.press_driver2_off_moped = 1;
                await steal_a_moped_2();  // SCM GOSUB steal_a_moped_2
              }
            }
          }
          else {
            $.press_moped2.markAsNoLongerNeeded();
            if (!($.player1.locateAnyMeansChar2D($.press_driver2, 13.0, 13.0, false))) {
              $.press_driver2_off_moped = 1;
              await steal_a_moped_2();  // SCM GOSUB steal_a_moped_2
            }
          }
        }
        else {
          $.all_attackers_alive--;
          if (!(Game.IsGerman())) {
            if ($.killing_bonus < 13) {
              if ($.first_time_trigger == 1) {
                Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
                Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
                $.player1.addScore(100);
                $.killing_bonus++;
              }
            }
          }
          $.press_driver2.markAsNoLongerNeeded();
          $.press_moped2.markAsNoLongerNeeded();
          $.flag_press2_moped_dead = 1;
        }

        //third attacker
        if (!(Char.IsDead($.press_driver3))) {
          if (!(Car.IsDead($.press_moped3))) {
            if ($.press_driver3.isInCar($.press_moped3)) {
              if ($.press_driver3_off_moped == 1) {
                $.press_moped3.setMission(5 /* MISSION_BLOCKPLAYER_CLOSE */);
                $.press_moped3.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
                $.press_driver3_off_moped = 0;
              }
              if ($.player1.isInAnyCar()) {
                const _res388 = $.player1.getCoordinates();
$.player_x = _res388.x;
$.player_y = _res388.y;
$.player_z = _res388.z;
                if ($.press_moped3.locate2D($.player_x, $.player_y, 12.0, 12.0, false /* FALSE */)) {
                  $.press_moped3.setCruiseSpeed(0.0);
                  $.press_driver3.setObjLeaveCar($.press_moped3);
                }
                else {
                  if ($.press_moped3.locate2D($.player_x, $.player_y, 14.0, 14.0, false /* FALSE */)) {
                    $.press_moped3.setCruiseSpeed(1.0);
                  }
                  else {
                    if ($.press_moped3.locate2D($.player_x, $.player_y, 15.0, 15.0, false /* FALSE */)) {
                      $.press_moped3.setCruiseSpeed(2.0);
                    }
                    else {
                      if ($.press_moped3.locate2D($.player_x, $.player_y, 18.0, 18.0, false /* FALSE */)) {
                        $.press_moped3.setCruiseSpeed(3.0);
                      }
                      else {
                        if ($.press_moped3.locate2D($.player_x, $.player_y, 20.0, 20.0, false /* FALSE */)) {
                          $.press_moped3.setCruiseSpeed(4.0);
                        }
                        else {
                          $.press_moped3.setCruiseSpeed(40.0);
                        }
                      }
                    }
                  }
                }
              }
              else {
                if ($.player1.locateAnyMeansChar2D($.press_driver3, 13.0, 13.0, false)) {
                  $.press_driver3.setObjKillPlayerOnFoot($.player1);
                }
                else {
                  $.press_moped3.setCruiseSpeed(40.0);
                }
              }
              if (!(Car.IsDead($.press_moped3))) {
                if ($.press_moped3.locate3D($.mexican_car_stuck_x, $.mexican_car_stuck_y, $.mexican_car_stuck_z, 5.0, 5.0, 5.0, false)) {
                  if (TIMERA > 4000) {
                    if (!($.press_moped3.isOnScreen())) {
                      const _res389 = $.press_moped3.getCoordinates();
$.mopedcoord_1_x = _res389.x;
$.mopedcoord_1_y = _res389.y;
$.mopedcoord_1_z = _res389.z;
                      const _res390 = Path.GetClosestCarNodeWithHeading($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z);
$.mopedcoord_1_x = _res390.nodeX;
$.mopedcoord_1_y = _res390.nodeY;
$.mopedcoord_1_z = _res390.nodeZ;
$.moped_heading = _res390.angle;
                      if (!(Camera.IsPointOnScreen($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z, 3.0))) {
                        if (!(World.IsPointObscuredByAMissionEntity($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z, 3.0, 3.0, 2.0))) {
                          $.press_moped3.setCoordinates($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z);
                          $.press_moped3.setHeading($.moped_heading);
                          TIMERA = 0;
                        }
                      }
                    }
                  }
                }
                if (!($.press_moped3.locate3D($.mexican_car_stuck_x, $.mexican_car_stuck_y, $.mexican_car_stuck_z, 4.0, 4.0, 4.0, false))) {
                  const _res391 = $.press_moped3.getCoordinates();
$.mexican_car_stuck_x = _res391.x;
$.mexican_car_stuck_y = _res391.y;
$.mexican_car_stuck_z = _res391.z;
                  TIMERA = 0;
                }
              }
            }
            else {
              $.press_moped3.markAsNoLongerNeeded();
              if ($.player1.locateAnyMeansChar2D($.press_driver3, 13.0, 13.0, false)) {
                $.press_driver3.setObjKillPlayerOnFoot($.player1);
              }
              else {
                $.press_driver3_off_moped = 1;
                await steal_a_moped_3();  // SCM GOSUB steal_a_moped_3
              }
            }
          }
          else {
            $.press_moped3.markAsNoLongerNeeded();
            if (!($.player1.locateAnyMeansChar2D($.press_driver3, 13.0, 13.0, false))) {
              $.press_driver3_off_moped = 1;
              await steal_a_moped_3();  // SCM GOSUB steal_a_moped_3
            }
          }
        }
        else {
          $.all_attackers_alive--;
          if (!(Game.IsGerman())) {
            if ($.killing_bonus < 13) {
              if ($.first_time_trigger == 1) {
                Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
                Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
                $.player1.addScore(100);
                $.killing_bonus++;
              }
            }
          }
          $.press_driver3.markAsNoLongerNeeded();
          $.press_moped3.markAsNoLongerNeeded();
          $.flag_press3_moped_dead = 1;
        }

        //fourth attacker
        if (!(Char.IsDead($.press_driver4))) {
          if (!(Car.IsDead($.press_moped4))) {
            if ($.press_driver4.isInCar($.press_moped4)) {
              if ($.press_driver4_off_moped == 1) {
                $.press_moped4.setMission(5 /* MISSION_BLOCKPLAYER_CLOSE */);
                $.press_moped4.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
                $.press_driver4_off_moped = 0;
              }
              if ($.player1.isInAnyCar()) {
                const _res392 = $.player1.getCoordinates();
$.player_x = _res392.x;
$.player_y = _res392.y;
$.player_z = _res392.z;
                if ($.press_moped4.locate2D($.player_x, $.player_y, 12.0, 12.0, false /* FALSE */)) {
                  $.press_moped4.setCruiseSpeed(0.0);
                  $.press_driver4.setObjLeaveCar($.press_moped4);
                }
                else {
                  if ($.press_moped4.locate2D($.player_x, $.player_y, 14.0, 14.0, false /* FALSE */)) {
                    $.press_moped4.setCruiseSpeed(1.0);
                  }
                  else {
                    if ($.press_moped4.locate2D($.player_x, $.player_y, 15.0, 15.0, false /* FALSE */)) {
                      $.press_moped4.setCruiseSpeed(2.0);
                    }
                    else {
                      if ($.press_moped4.locate2D($.player_x, $.player_y, 18.0, 18.0, false /* FALSE */)) {
                        $.press_moped4.setCruiseSpeed(3.0);
                      }
                      else {
                        if ($.press_moped4.locate2D($.player_x, $.player_y, 20.0, 20.0, false /* FALSE */)) {
                          $.press_moped4.setCruiseSpeed(4.0);
                        }
                        else {
                          $.press_moped4.setCruiseSpeed(40.0);
                        }
                      }
                    }
                  }
                }
              }
              else {
                if ($.player1.locateAnyMeansChar2D($.press_driver4, 13.0, 13.0, false)) {
                  $.press_driver4.setObjKillPlayerOnFoot($.player1);
                }
                else {
                  $.press_moped4.setCruiseSpeed(40.0);
                }
              }
              if (!(Car.IsDead($.press_moped4))) {
                if ($.press_moped4.locate3D($.mexican_car_stuck_x, $.mexican_car_stuck_y, $.mexican_car_stuck_z, 5.0, 5.0, 5.0, false)) {
                  if (TIMERA > 4000) {
                    if (!($.press_moped4.isOnScreen())) {
                      const _res393 = $.press_moped4.getCoordinates();
$.mopedcoord_1_x = _res393.x;
$.mopedcoord_1_y = _res393.y;
$.mopedcoord_1_z = _res393.z;
                      const _res394 = Path.GetClosestCarNodeWithHeading($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z);
$.mopedcoord_1_x = _res394.nodeX;
$.mopedcoord_1_y = _res394.nodeY;
$.mopedcoord_1_z = _res394.nodeZ;
$.moped_heading = _res394.angle;
                      if (!(Camera.IsPointOnScreen($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z, 3.0))) {
                        if (!(World.IsPointObscuredByAMissionEntity($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z, 3.0, 3.0, 2.0))) {
                          $.press_moped4.setCoordinates($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z);
                          $.press_moped4.setHeading($.moped_heading);
                          TIMERA = 0;
                        }
                      }
                    }
                  }
                }
                if (!($.press_moped4.locate3D($.mexican_car_stuck_x, $.mexican_car_stuck_y, $.mexican_car_stuck_z, 4.0, 4.0, 4.0, false))) {
                  const _res395 = $.press_moped4.getCoordinates();
$.mexican_car_stuck_x = _res395.x;
$.mexican_car_stuck_y = _res395.y;
$.mexican_car_stuck_z = _res395.z;
                  TIMERA = 0;
                }
              }
            }
            else {
              $.press_moped4.markAsNoLongerNeeded();
              if ($.player1.locateAnyMeansChar2D($.press_driver4, 13.0, 13.0, false)) {
                $.press_driver4.setObjKillPlayerOnFoot($.player1);
              }
              else {
                $.press_driver4_off_moped = 1;
                await steal_a_moped_4();  // SCM GOSUB steal_a_moped_4
              }
            }
          }
          else {
            $.press_moped4.markAsNoLongerNeeded();
            if (!($.player1.locateAnyMeansChar2D($.press_driver4, 13.0, 13.0, false))) {
              $.press_driver4_off_moped = 1;
              await steal_a_moped_4();  // SCM GOSUB steal_a_moped_4
            }
          }
        }
        else {
          $.all_attackers_alive--;
          if (!(Game.IsGerman())) {
            if ($.killing_bonus < 10) {
              if ($.first_time_trigger == 1) {
                Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
                Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
                $.player1.addScore(100);
                $.killing_bonus++;
              }
            }
          }
          $.press_driver4.markAsNoLongerNeeded();
          $.press_moped4.markAsNoLongerNeeded();
          $.flag_press4_moped_dead = 1;
        }


      }
      else {
        await make_cars();  // SCM GOSUB make_cars
      }
    }


    //deleting blips if cars are dead and removing vehicles and ped models from pool

    if (Car.IsDead($.mexican_car)) {
      if (!(Char.IsDead($.mexican_gunner))) {
        $.mexican_gunner.detachFromCar();
        $.mexican_gunner.explodeHead();
      }
      $.mexican_car_blip.remove();
      $.mexican_car.markAsNoLongerNeeded();
    }
    if (Car.IsDead($.mexican_car2)) {
      $.mexican_car2_blip.remove();
      $.mexican_car2.markAsNoLongerNeeded();
    }
    if (Car.IsDead($.mexican_car3)) {
      if (!(Char.IsDead($.mexican_gunner1))) {
        $.mexican_gunner1.detachFromCar();
        $.mexican_gunner1.explodeHead();
      }
      $.mexican_car3_blip.remove();
      $.mexican_car3.markAsNoLongerNeeded();
    }
    if (Car.IsDead($.mexican_car4)) {
      $.mexican_car4_blip.remove();
      $.mexican_car4.markAsNoLongerNeeded();
    }



    if (!(Char.IsDead($.mexican_gunner))) {
      if ($.player1.isInCar($.mexican_car)) {
        $.mexican_gunner.detachFromCar();
        if ($.gunner_attack == 0) {
          $.mexican_gunner.setObjKillPlayerAnyMeans($.player1);
          $.gunner_attack = 1;
        }
      }
    }
    if (!(Char.IsDead($.mexican_gunner1))) {
      if ($.player1.isInCar($.mexican_car3)) {
        $.mexican_gunner1.detachFromCar();
        if ($.gunner1_attack == 0) {
          $.mexican_gunner1.setObjKillPlayerAnyMeans($.player1);
          $.gunner1_attack = 1;
        }
      }
    }


    if (Char.IsDead($.mexican_gunner)) {
      $.mexican_gunner.detachFromCar();
      $.mexican_gunner.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.mexican_gunner1)) {
      $.mexican_gunner1.detachFromCar();
      $.mexican_gunner1.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.mexican_driver)) {
      $.mexican_driver.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.mexican_driver2)) {
      $.mexican_driver2.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.mexican_driver3)) {
      $.mexican_driver3.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.mexican_driver4)) {
      $.mexican_driver4.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.mexican_gunner)) {
      $.mexican_gunner.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.mexican_gunner1)) {
      $.mexican_gunner1.markAsNoLongerNeeded();
    }

    //instructing player1 to destroy cars after all guns are dropped

    if ($.gun_runner_goals == 1) {
      if (Car.IsDead($.mexican_car)) {
        if (Car.IsDead($.mexican_car2)) {
          if (Car.IsDead($.mexican_car3)) {
            if (Car.IsDead($.mexican_car4)) {
              // SCM GOTO → mission_phil1_passed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_phil1_passed"); // fallback: would break linear control flow
            }
          }
        }
      }
    }


    if (!(Car.IsDead($.mexican_car))) {
      if (!($.player1.locateAnyMeansCar2D($.mexican_car, 200.0, 200.0, false /* FALSE */))) {
        $.mexican_car.freezePositionAndDontLoadCollision(true /* TRUE */);
      }
      else {
        $.mexican_car.freezePositionAndDontLoadCollision(false /* FALSE */);
      }
    }
    else {
      if ($.driving_like_nutters_flag == 0) {
        $.driving_like_nutters_flag = 1;
      }
    }


    if (!(Car.IsDead($.mexican_car2))) {
      if (!($.player1.locateAnyMeansCar2D($.mexican_car2, 200.0, 200.0, false /* FALSE */))) {
        $.mexican_car2.freezePositionAndDontLoadCollision(true /* TRUE */);
      }
      else {
        $.mexican_car2.freezePositionAndDontLoadCollision(false /* FALSE */);
      }
    }
    else {
      if ($.driving_like_nutters_flag == 0) {
        $.driving_like_nutters_flag = 1;
      }
    }


    if (!(Car.IsDead($.mexican_car3))) {
      if (!($.player1.locateAnyMeansCar2D($.mexican_car3, 200.0, 200.0, false /* FALSE */))) {
        $.mexican_car3.freezePositionAndDontLoadCollision(true /* TRUE */);
      }
      else {
        $.mexican_car3.freezePositionAndDontLoadCollision(false /* FALSE */);
      }
    }
    else {
      if ($.driving_like_nutters_flag == 0) {
        $.driving_like_nutters_flag = 1;
      }
    }


    if (!(Car.IsDead($.mexican_car4))) {
      if (!($.player1.locateAnyMeansCar2D($.mexican_car4, 200.0, 200.0, false /* FALSE */))) {
        $.mexican_car4.freezePositionAndDontLoadCollision(true /* TRUE */);
      }
      else {
        $.mexican_car4.freezePositionAndDontLoadCollision(false /* FALSE */);
      }
    }
    else {
      if ($.driving_like_nutters_flag == 0) {
        $.driving_like_nutters_flag = 1;
      }
    }





  }
}



// Mission failed

async function mission_failed_phil1() {


  Text.PrintBig("m_fail", 5000, 1);
}




// mission passed

async function mission_phil1_passed() {


  Text.ClearPrints();
  Text.PrintWithNumberBig("M_PASS", 2000, 5000, 1);
  $.player1.addScore(2000);
  $.player1.clearWantedLevel();
  Audio.PlayMissionPassedTune(1);
  Stat.PlayerMadeProgress(1);
  Stat.RegisterMissionPassed("PHIL_1");
  $.phil_contact_blip.remove();
  $.flag_phil_mission1_passed = 1;
}




// mission cleanup

async function mission_cleanup_phil1() {


  if (!($.grenades_pickup.hasBeenCollected())) {
    $.grenades_pickup.remove();
  }
  $.mexican_car_blip.remove();
  $.mexican_car2_blip.remove();
  $.mexican_car3_blip.remove();
  $.mexican_car4_blip.remove();
  $.gun_blip1.remove();
  $.gun_blip2.remove();
  $.gun_blip3.remove();
  $.gun_blip4.remove();
  $.box1.delete();
  $.box2.delete();
  $.box3.delete();
  $.box4.delete();
  Streaming.MarkModelAsNoLongerNeeded(walton);
  Streaming.MarkModelAsNoLongerNeeded(WMYCR);
  Streaming.MarkModelAsNoLongerNeeded(faggio);
  Streaming.MarkModelAsNoLongerNeeded(python);
  Streaming.MarkModelAsNoLongerNeeded(shotgspa);
  Streaming.MarkModelAsNoLongerNeeded(ingramsl);
  Streaming.MarkModelAsNoLongerNeeded(M60);
  Streaming.MarkModelAsNoLongerNeeded(gunbox);
  Streaming.MarkModelAsNoLongerNeeded(patriot);
  Streaming.MarkModelAsNoLongerNeeded(uzi);
  $.gungun1.remove();
  $.gungun2.remove();
  $.gungun3.remove();
  $.gungun4.remove();
  ONMISSION = 0;
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}



///////////////////////////////////////////////////////////////////////////////////

async function gun_collected() {
  ///////////////////////////////////////////////////////////////////////////////////

  if ($.gun1_collected == 0) {
    if ($.create_gun1 == 1) {
      if ($.gungun1.hasBeenCollected()) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.gun_blip1.remove();
        $.player1_got_all_guns++;
        $.weapon_dropped--;
        $.gun1_collected = 1;
        $.create_gun1 = 0;
        if ($.weapon_dropped == 0) {
          $.no_car_blip1 = 0;
          $.no_car_blip2 = 0;
          $.no_car_blip3 = 0;
          $.no_car_blip4 = 0;
        }
        return;
      }
    }
  }


  if ($.gun2_collected == 0) {
    if ($.create_gun2 == 1) {
      if ($.gungun2.hasBeenCollected()) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.gun_blip2.remove();
        $.player1_got_all_guns++;
        $.weapon_dropped--;
        $.gun2_collected = 1;
        $.create_gun2 = 0;
        if ($.weapon_dropped == 0) {
          $.no_car_blip1 = 0;
          $.no_car_blip2 = 0;
          $.no_car_blip3 = 0;
          $.no_car_blip4 = 0;
        }
        return;
      }
    }
  }


  if ($.gun3_collected == 0) {
    if ($.create_gun3 == 1) {
      if ($.gungun3.hasBeenCollected()) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.gun_blip3.remove();
        $.player1_got_all_guns++;
        $.weapon_dropped--;
        $.gun3_collected = 1;
        $.create_gun3 = 0;
        if ($.weapon_dropped == 0) {
          $.no_car_blip1 = 0;
          $.no_car_blip2 = 0;
          $.no_car_blip3 = 0;
          $.no_car_blip4 = 0;
        }
        return;


      }
    }
  }


  if ($.gun4_collected == 0) {
    if ($.create_gun4 == 1) {
      if ($.gungun4.hasBeenCollected()) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.gun_blip4.remove();
        $.player1_got_all_guns++;
        $.weapon_dropped--;
        $.gun4_collected = 1;
        $.create_gun4 = 0;
        if ($.weapon_dropped == 0) {
          $.no_car_blip1 = 0;
          $.no_car_blip2 = 0;
          $.no_car_blip3 = 0;
          $.no_car_blip4 = 0;
        }
        return;


      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////

async function setting_cars_up() {
  ///////////////////////////////////////////////////////////////////////////////////
  //car speed

  if ($.driving_like_nutters_flag == 1) {
    const _res396 = $.mexican_car_var.getCoordinates();
$.mexican_car_x = _res396.x;
$.mexican_car_y = _res396.y;
$.mexican_car_z = _res396.z;
    const _res397 = $.player1.getCoordinates();
$.player_x = _res397.x;
$.player_y = _res397.y;
$.player_z = _res397.z;
    $.x_tem = $.player_x - $.mexican_car_x;
    $.y_tem = $.player_y - $.mexican_car_y;
    $.x_tem = $.x_tem * $.x_tem;
    $.y_tem = $.y_tem * $.y_tem;
    $.sum_x_y_tem = $.x_tem + $.y_tem;
    $.sum_x_y_tem = Math.Sqrt($.sum_x_y_tem);
    $.mexican_car_speed = 640.0 / $.sum_x_y_tem;
    if ($.mexican_car_speed > 20.0) {
      $.mexican_car_speed = 20.0;
    }
    if ($.attackers_coming_to_get_ya == 1) {
      if ($.mexican_car_speed < 20.0) {
        $.mexican_car_speed = 20.0;
      }
    }
    else {
      if ($.mexican_car_speed < 10.0) {
        $.mexican_car_speed = 10.0;
      }
    }
    $.mexican_car_var.setCruiseSpeed($.mexican_car_speed);
  }

  //driving style and either telling cars to ram player1 or telling cars to run away from player1


  if ($.weapon_knocked_from_back_of_truck_var == 1) {
    if (!(Char.IsDead($.mexican_driver_var))) {
      if ($.mexican_driver_var.isInCar($.mexican_car_var)) {
        if ($.set_mission_truck_var == 0) {
          $.mexican_car_var.setMission(3 /* MISSION_RAMPLAYER_CLOSE */);
          $.set_mission_truck_var = 1;
        }
        if ($.driving_like_nutters_flag == 0) {
          if (!(Car.IsDead($.mexican_car))) {
            $.mexican_car.setDrivingStyle(2);
          }
          if (!(Car.IsDead($.mexican_car2))) {
            $.mexican_car2.setDrivingStyle(2);
          }
          if (!(Car.IsDead($.mexican_car3))) {
            $.mexican_car3.setDrivingStyle(2);
          }
          if (!(Car.IsDead($.mexican_car4))) {
            $.mexican_car4.setDrivingStyle(2);
          }
          $.driving_like_nutters_flag = 1;
        }
      }
      else {
        $.mexican_driver_var.setObjKillPlayerAnyMeans($.player1);
      }
    }
  }


  if (!($.player1.locateAnyMeansCar2D($.mexican_car_var, 80.0, 80.0, false /* FALSE */))) {
    $.mexican_car_var.setOnlyDamagedByPlayer(true /* TRUE */);
  }
  else {
    $.mexican_car_var.setOnlyDamagedByPlayer(false /* FALSE */);
  }

  //car stuck


  if (!(Char.IsDead($.mexican_driver_var))) {
    if ($.mexican_driver_var.isInCar($.mexican_car_var)) {
      if (!(Car.IsDead($.mexican_car_var))) {
        if ($.mexican_car_var.locate3D($.mexican_car_stuck_x, $.mexican_car_stuck_y, $.mexican_car_stuck_z, 5.0, 5.0, 5.0, false)) {
          if (TIMERA > 4000) {
            if (!($.mexican_car_var.isOnScreen())) {
              const _res398 = $.mexican_car_var.getCoordinates();
$.mexican_car_x = _res398.x;
$.mexican_car_y = _res398.y;
$.mexican_car_z = _res398.z;
              const _res399 = Path.GetClosestCarNodeWithHeading($.mexican_car_x, $.mexican_car_y, $.mexican_car_z);
$.mexican_car_x = _res399.nodeX;
$.mexican_car_y = _res399.nodeY;
$.mexican_car_z = _res399.nodeZ;
$.mex_warp_heading = _res399.angle;
              if (!(World.IsPointObscuredByAMissionEntity($.mexican_car_x, $.mexican_car_y, $.mexican_car_z, 5.0, 5.0, 5.0))) {
                if (!(Camera.IsPointOnScreen($.mexican_car_x, $.mexican_car_y, $.mexican_car_z, 4.0))) {
                  $.mexican_car_var.setCoordinates($.mexican_car_x, $.mexican_car_y, $.mexican_car_z);
                  $.mexican_car_var.setHeading($.mex_warp_heading);
                  TIMERA = 0;
                }
              }
            }
          }
        }
        if (!($.mexican_car_var.locate3D($.mexican_car_stuck_x, $.mexican_car_stuck_y, $.mexican_car_stuck_z, 4.0, 4.0, 4.0, false))) {
          const _res400 = $.mexican_car_var.getCoordinates();
$.mexican_car_stuck_x = _res400.x;
$.mexican_car_stuck_y = _res400.y;
$.mexican_car_stuck_z = _res400.z;
          TIMERA = 0;
        }
      }
    }
    else {
      $.mexican_driver_var.setObjKillPlayerAnyMeans($.player1);
    }
  }

  //car in water


  if (!(Char.IsDead($.mexican_driver_var))) {
    if ($.mexican_driver_var.isInCar($.mexican_car_var)) {
      if (Car.IsDead($.mexican_car_var)) {
        if ($.mexican_car_var.isInWater()) {
          if (!($.player1.locateAnyMeansCar2D($.mexican_car_var, 50.0, 50.0, false))) {
            if (!($.mexican_car_var.isOnScreen())) {
              const _res401 = $.mexican_car_var.getCoordinates();
$.mexican_car_x = _res401.x;
$.mexican_car_y = _res401.y;
$.mexican_car_z = _res401.z;
              const _res402 = Path.GetClosestCarNodeWithHeading($.mexican_car_x, $.mexican_car_y, $.mexican_car_z);
$.mexican_car_x = _res402.nodeX;
$.mexican_car_y = _res402.nodeY;
$.mexican_car_z = _res402.nodeZ;
$.mex_warp_heading = _res402.angle;
              if (!(Camera.IsPointOnScreen($.mexican_car_x, $.mexican_car_y, $.mexican_car_z, 3.0))) {
                $.mexican_car_var.setCoordinates($.mexican_car_x, $.mexican_car_y, $.mexican_car_z);
                $.mexican_car_var.setHeading($.mex_warp_heading);
              }
            }
          }
        }
      }
    }
    else {
      $.mexican_driver_var.setObjKillPlayerAnyMeans($.player1);
    }
  }

  //car upsidedown


  if (!(Char.IsDead($.mexican_driver_var))) {
    if ($.mexican_driver_var.isInCar($.mexican_car_var)) {
      if ($.mexican_car_var.isUpsidedown() && $.mexican_car_var.isStopped()) {
        if (!($.mexican_car_var.isOnScreen())) {
          $.mexican_car_var.setUpsidedownNotDamaged(true /* TRUE */);
          const _res403 = $.mexican_car_var.getCoordinates();
$.mexican_car_x = _res403.x;
$.mexican_car_y = _res403.y;
$.mexican_car_z = _res403.z;
          const _res404 = Path.GetClosestCarNodeWithHeading($.mexican_car_x, $.mexican_car_y, $.mexican_car_z);
$.mexican_car_x = _res404.nodeX;
$.mexican_car_y = _res404.nodeY;
$.mexican_car_z = _res404.nodeZ;
$.mex_warp_heading = _res404.angle;
          if (!(Camera.IsPointOnScreen($.mexican_car_x, $.mexican_car_y, $.mexican_car_z, 3.0))) {
            $.mexican_car_var.setCoordinates($.mexican_car_x, $.mexican_car_y, $.mexican_car_z);
            $.mexican_car_var.setHeading($.mex_warp_heading);
            $.mexican_car_var.setUpsidedownNotDamaged(false /* FALSE */);
          }
        }
      }
    }
    else {
      $.mexican_driver_var.setObjKillPlayerAnyMeans($.player1);
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////

async function make_cars() {
  ///////////////////////////////////////////////////////////////////////////////////

  if ($.flag_press1_moped_dead == 1) {
    $.press_moped1.markAsNoLongerNeeded();
    $.press_driver1.markAsNoLongerNeeded();
    if (!($.player1.isInZone("HAITI"))) {
      $.press_moped1 = Car.Create(faggio, -984.7, -73.1, 9.9);
    }
    else {
      $.press_moped1 = Car.Create(faggio, -679.5, 652.6, 9.9);
      $.press_moped1.setHeading(173.4);
    }
    $.press_driver1 = Char.CreateInsideCar($.press_moped1, 4 /* PEDTYPE_CIVMALE */, WMYCR);


    $.press_driver1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
    $.press_moped1.setOnlyDamagedByPlayer(true /* TRUE */);
    $.press_moped1.setMission(5 /* MISSION_BLOCKPLAYER_CLOSE */);
    $.press_moped1.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
    $.all_attackers_alive++;
    $.flag_press1_moped_dead = 0;
  }


  if ($.flag_press2_moped_dead == 1) {
    $.press_moped2.markAsNoLongerNeeded();
    $.press_driver2.markAsNoLongerNeeded();
    if (!($.player1.isInZone("HAITI"))) {
      $.press_moped2 = Car.Create(faggio, -984.7, -78.1, 9.9);
    }
    else {
      $.press_moped2 = Car.Create(faggio, -679.5, 657.6, 9.9);
      $.press_moped2.setHeading(173.4);
    }
    $.press_driver2 = Char.CreateInsideCar($.press_moped2, 4 /* PEDTYPE_CIVMALE */, WMYCR);


    $.press_driver2.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
    $.press_moped2.setOnlyDamagedByPlayer(true /* TRUE */);
    $.press_moped2.setMission(5 /* MISSION_BLOCKPLAYER_CLOSE */);
    $.press_moped2.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
    $.all_attackers_alive++;
    $.flag_press2_moped_dead = 0;
  }


  if ($.flag_press3_moped_dead == 1) {
    $.press_moped3.markAsNoLongerNeeded();
    $.press_driver3.markAsNoLongerNeeded();
    if (!($.player1.isInZone("HAITI"))) {
      $.press_moped3 = Car.Create(faggio, -984.7, -83.1, 9.9);
    }
    else {
      $.press_moped3 = Car.Create(faggio, -679.5, 662.6, 9.9);
      $.press_moped3.setHeading(173.4);
    }
    $.press_driver3 = Char.CreateInsideCar($.press_moped3, 4 /* PEDTYPE_CIVMALE */, WMYCR);



    $.press_driver3.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
    $.press_moped3.setOnlyDamagedByPlayer(true /* TRUE */);
    $.press_moped3.setMission(5 /* MISSION_BLOCKPLAYER_CLOSE */);
    $.press_moped3.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
    $.all_attackers_alive++;
    $.flag_press3_moped_dead = 0;
  }


  if ($.flag_press4_moped_dead == 1) {
    $.press_moped4.markAsNoLongerNeeded();
    $.press_driver4.markAsNoLongerNeeded();
    if (!($.player1.isInZone("HAITI"))) {
      $.press_moped4 = Car.Create(faggio, -984.7, -88.1, 9.9);
    }
    else {
      $.press_moped4 = Car.Create(faggio, -679.5, 667.6, 9.9);
      $.press_moped4.setHeading(173.4);
    }
    $.press_driver4 = Char.CreateInsideCar($.press_moped4, 4 /* PEDTYPE_CIVMALE */, WMYCR);


    $.press_driver4.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
    $.press_moped4.setOnlyDamagedByPlayer(true /* TRUE */);
    $.press_moped4.setMission(5 /* MISSION_BLOCKPLAYER_CLOSE */);
    $.press_moped4.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
    $.all_attackers_alive++;
    $.flag_press4_moped_dead = 0;
  }


  if ($.first_time_trigger == 0) {
    $.first_time_trigger = 1;
  }
  ///////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////

async function steal_a_moped_1() {
  ///////////////////////////////////////////////////////////////////////////////////
  //attacker 1

  if ($.press_driver1_off_moped == 1) {
    if (!(Char.IsDead($.press_driver1))) {
      const _res405 = $.press_driver1.getCoordinates();
$.mopedcoord_1_x = _res405.x;
$.mopedcoord_1_y = _res405.y;
$.mopedcoord_1_z = _res405.z;
      if ($.player1.locateAnyMeansChar2D($.press_driver1, 50.0, 50.0, false)) {
        if (!($.player1.locateAnyMeansChar2D($.press_driver1, 13.0, 13.0, false))) {
          $.mopedcoord_2_x = $.mopedcoord_1_x + 20.0;
          $.mopedcoord_2_y = $.mopedcoord_1_y + 20.0;
          $.mopedcoord_1_x = $.mopedcoord_1_x - 20.0;
          $.mopedcoord_1_y = $.mopedcoord_1_y - 20.0;
          $.press_moped1.markAsNoLongerNeeded();
          $.press_moped1 = World.GetRandomCarOfTypeInArea($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_2_x, $.mopedcoord_2_y, -1);
          if (!($.press_moped1 == -1)) {
            $.press_moped1.lockDoors(1 /* CARLOCK_UNLOCKED */);
            $.press_moped1.setCruiseSpeed(0.0);
            $.press_driver1.setObjEnterCarAsDriver($.press_moped1);
            $.press_driver1.setRunning(true /* TRUE */);
          }
        }
      }
      else {
        const _res406 = Path.GetClosestCarNodeWithHeading($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z);
$.mopedcoord_1_x = _res406.nodeX;
$.mopedcoord_1_y = _res406.nodeY;
$.mopedcoord_1_z = _res406.nodeZ;
$.moped_heading = _res406.angle;
        if (!(Camera.IsPointOnScreen($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z, 3.0))) {
          if (!(World.IsPointObscuredByAMissionEntity($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z, 3.0, 3.0, 2.0))) {
            $.press_moped1.markAsNoLongerNeeded();
            $.press_moped1 = Car.Create(faggio, $.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z);
            $.press_moped1.setHeading($.moped_heading);
            if (!($.press_driver1.isInAnyCar())) {
              $.press_driver1.warpIntoCar($.press_moped1);
            }
          }
        }
      }
      if (!(Car.IsDead($.press_moped1))) {
        if (!(Char.IsDead($.press_driver1))) {
          if ($.press_driver1.isInCar($.press_moped1)) {
            $.press_moped1.setMission(5 /* MISSION_BLOCKPLAYER_CLOSE */);
            $.press_moped1.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
            $.press_driver1_off_moped = 0;
          }
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////

async function steal_a_moped_2() {
  ///////////////////////////////////////////////////////////////////////////////////
  //attacker 2

  if ($.press_driver2_off_moped == 1) {
    if (!(Char.IsDead($.press_driver2))) {
      const _res407 = $.press_driver2.getCoordinates();
$.mopedcoord_1_x = _res407.x;
$.mopedcoord_1_y = _res407.y;
$.mopedcoord_1_z = _res407.z;
      if ($.player1.locateAnyMeansChar2D($.press_driver2, 50.0, 50.0, false)) {
        if (!($.player1.locateAnyMeansChar2D($.press_driver2, 13.0, 13.0, false))) {
          $.mopedcoord_2_x = $.mopedcoord_1_x + 20.0;
          $.mopedcoord_2_y = $.mopedcoord_1_y + 20.0;
          $.mopedcoord_1_x = $.mopedcoord_1_x - 20.0;
          $.mopedcoord_1_y = $.mopedcoord_1_y - 20.0;
          $.press_moped2.markAsNoLongerNeeded();
          $.press_moped2 = World.GetRandomCarOfTypeInArea($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_2_x, $.mopedcoord_2_y, -1);
          if (!($.press_moped2 == -1)) {
            $.press_moped2.lockDoors(1 /* CARLOCK_UNLOCKED */);
            $.press_moped2.setCruiseSpeed(0.0);
            $.press_driver2.setObjEnterCarAsDriver($.press_moped2);
            $.press_driver2.setRunning(true /* TRUE */);
          }
        }
      }
      else {
        const _res408 = Path.GetClosestCarNodeWithHeading($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z);
$.mopedcoord_1_x = _res408.nodeX;
$.mopedcoord_1_y = _res408.nodeY;
$.mopedcoord_1_z = _res408.nodeZ;
$.moped_heading = _res408.angle;
        if (!(Camera.IsPointOnScreen($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z, 3.0))) {
          if (!(World.IsPointObscuredByAMissionEntity($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z, 3.0, 3.0, 2.0))) {
            $.press_moped2.markAsNoLongerNeeded();
            $.press_moped2 = Car.Create(faggio, $.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z);
            $.press_moped2.setHeading($.moped_heading);
            if (!($.press_driver2.isInAnyCar())) {
              $.press_driver2.warpIntoCar($.press_moped2);
            }
          }
        }
      }
      if (!(Car.IsDead($.press_moped2))) {
        if (!(Char.IsDead($.press_driver2))) {
          if ($.press_driver2.isInCar($.press_moped2)) {
            $.press_moped2.setMission(5 /* MISSION_BLOCKPLAYER_CLOSE */);
            $.press_moped2.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
            $.press_driver2_off_moped = 0;
          }
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////

async function steal_a_moped_3() {
  ///////////////////////////////////////////////////////////////////////////////////
  //attacker 3

  if ($.press_driver3_off_moped == 1) {
    if (!(Char.IsDead($.press_driver3))) {
      const _res409 = $.press_driver3.getCoordinates();
$.mopedcoord_1_x = _res409.x;
$.mopedcoord_1_y = _res409.y;
$.mopedcoord_1_z = _res409.z;
      if ($.player1.locateAnyMeansChar2D($.press_driver3, 50.0, 50.0, false)) {
        if (!($.player1.locateAnyMeansChar2D($.press_driver3, 13.0, 13.0, false))) {
          $.mopedcoord_2_x = $.mopedcoord_1_x + 20.0;
          $.mopedcoord_2_y = $.mopedcoord_1_y + 20.0;
          $.mopedcoord_1_x = $.mopedcoord_1_x - 20.0;
          $.mopedcoord_1_y = $.mopedcoord_1_y - 20.0;
          $.press_moped3.markAsNoLongerNeeded();
          $.press_moped3 = World.GetRandomCarOfTypeInArea($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_2_x, $.mopedcoord_2_y, -1);
          if (!($.press_moped3 == -1)) {
            $.press_moped3.lockDoors(1 /* CARLOCK_UNLOCKED */);
            $.press_moped3.setCruiseSpeed(0.0);
            $.press_driver3.setObjEnterCarAsDriver($.press_moped3);
            $.press_driver3.setRunning(true /* TRUE */);
          }
        }
      }
      else {
        const _res410 = Path.GetClosestCarNodeWithHeading($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z);
$.mopedcoord_1_x = _res410.nodeX;
$.mopedcoord_1_y = _res410.nodeY;
$.mopedcoord_1_z = _res410.nodeZ;
$.moped_heading = _res410.angle;
        if (!(Camera.IsPointOnScreen($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z, 3.0))) {
          if (!(World.IsPointObscuredByAMissionEntity($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z, 3.0, 3.0, 2.0))) {
            $.press_moped3.markAsNoLongerNeeded();
            $.press_moped3 = Car.Create(faggio, $.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z);
            $.press_moped3.setHeading($.moped_heading);
            if (!($.press_driver3.isInAnyCar())) {
              $.press_driver3.warpIntoCar($.press_moped3);
            }
          }
        }
      }
      if (!(Car.IsDead($.press_moped3))) {
        if (!(Char.IsDead($.press_driver3))) {
          if ($.press_driver3.isInCar($.press_moped3)) {
            $.press_moped3.setMission(5 /* MISSION_BLOCKPLAYER_CLOSE */);
            $.press_moped3.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
            $.press_driver3_off_moped = 0;
          }
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////

async function steal_a_moped_4() {
  ///////////////////////////////////////////////////////////////////////////////////
  //attacker 4

  if ($.press_driver4_off_moped == 1) {
    if (!(Char.IsDead($.press_driver4))) {
      const _res411 = $.press_driver4.getCoordinates();
$.mopedcoord_1_x = _res411.x;
$.mopedcoord_1_y = _res411.y;
$.mopedcoord_1_z = _res411.z;
      if ($.player1.locateAnyMeansChar2D($.press_driver4, 50.0, 50.0, false)) {
        if (!($.player1.locateAnyMeansChar2D($.press_driver4, 13.0, 13.0, false))) {
          $.mopedcoord_2_x = $.mopedcoord_1_x + 20.0;
          $.mopedcoord_2_y = $.mopedcoord_1_y + 20.0;
          $.mopedcoord_1_x = $.mopedcoord_1_x - 20.0;
          $.mopedcoord_1_y = $.mopedcoord_1_y - 20.0;
          $.press_moped4.markAsNoLongerNeeded();
          $.press_moped4 = World.GetRandomCarOfTypeInArea($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_2_x, $.mopedcoord_2_y, -1);
          if (!($.press_moped4 == -1)) {
            $.press_moped4.lockDoors(1 /* CARLOCK_UNLOCKED */);
            $.press_moped4.setCruiseSpeed(0.0);
            $.press_driver4.setObjEnterCarAsDriver($.press_moped4);
            $.press_driver4.setRunning(true /* TRUE */);
          }
        }
      }
      else {
        const _res412 = Path.GetClosestCarNodeWithHeading($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z);
$.mopedcoord_1_x = _res412.nodeX;
$.mopedcoord_1_y = _res412.nodeY;
$.mopedcoord_1_z = _res412.nodeZ;
$.moped_heading = _res412.angle;
        if (!(Camera.IsPointOnScreen($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z, 3.0))) {
          if (!(World.IsPointObscuredByAMissionEntity($.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z, 3.0, 3.0, 2.0))) {
            $.press_moped4.markAsNoLongerNeeded();
            $.press_moped4 = Car.Create(faggio, $.mopedcoord_1_x, $.mopedcoord_1_y, $.mopedcoord_1_z);
            $.press_moped4.setHeading($.moped_heading);
            if (!($.press_driver4.isInAnyCar())) {
              $.press_driver4.warpIntoCar($.press_moped4);
            }
          }
        }
      }
      if (!(Car.IsDead($.press_moped4))) {
        if (!(Char.IsDead($.press_driver4))) {
          if ($.press_driver4.isInCar($.press_moped4)) {
            $.press_moped4.setMission(5 /* MISSION_BLOCKPLAYER_CLOSE */);
            $.press_moped4.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
            $.press_driver4_off_moped = 0;
          }
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////

async function removing_car_blips() {
  ///////////////////////////////////////////////////////////////////////////////////

  if (!(Car.IsDead($.mexican_car))) {
    $.mexican_car_blip.remove();
    $.no_car_blip1 = 1;
  }
  if (!(Car.IsDead($.mexican_car2))) {
    $.mexican_car2_blip.remove();
    $.no_car_blip2 = 1;
  }
  if (!(Car.IsDead($.mexican_car3))) {
    $.mexican_car3_blip.remove();
    $.no_car_blip3 = 1;
  }
  if (!(Car.IsDead($.mexican_car4))) {
    $.mexican_car4_blip.remove();
    $.no_car_blip4 = 1;
  }
  ///////////////////////////////////////////////////////////////////////////////////

  return;
  ///////////////////////////////////////////////////////////////////////////////////



}

export async function phil1() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // ************************************ phil 1**********************************************
  // ************************************ Mexican Gun Runner**********************************
  // *****************************************************************************************
  // *****************************************************************************************

  // SCRIPT_NAME phil1
  // Mission start stuff

  await mission_start_phil1();  // SCM GOSUB mission_start_phil1
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_failed_phil1();  // SCM GOSUB mission_failed_phil1
  }
  await mission_cleanup_phil1();  // SCM GOSUB mission_cleanup_phil1
  // MissionBoundary
  // Variables for mission
  //people, cars and objects

  // VAR_INT mexican_car
  // VAR_INT mexican_car2
  // VAR_INT mexican_car3
  // VAR_INT mexican_car4
  // VAR_INT mexican_driver
  // VAR_INT mexican_driver2
  // VAR_INT mexican_driver3
  // VAR_INT mexican_driver4
  // VAR_INT gungun1
  // VAR_INT gungun2
  // VAR_INT gungun3
  // VAR_INT gungun4
  // VAR_INT press_moped1
  // VAR_INT press_moped2
  // VAR_INT press_moped3
  // VAR_INT press_moped4
  // VAR_INT press_driver1
  // VAR_INT press_driver2
  // VAR_INT press_driver3
  // VAR_INT press_driver4
  // VAR_INT mexican_gunner
  // VAR_INT mexican_gunner1
  // VAR_INT box1
  // VAR_INT box2
  // VAR_INT box3
  // VAR_INT box4
  // VAR_INT fake_plyr_car
  // VAR_INT grenades_pickup

  //blips

  // VAR_INT mexican_car_blip
  // VAR_INT mexican_car2_blip
  // VAR_INT mexican_car3_blip
  // VAR_INT mexican_car4_blip
  // VAR_INT gun_blip1
  // VAR_INT gun_blip2
  // VAR_INT gun_blip3
  // VAR_INT gun_blip4

  //flags

  // VAR_INT gun_runner_goals
  // VAR_INT mexican_car_health
  // VAR_INT mexican_car_health2
  // VAR_INT mexican_car_health3
  // VAR_INT mexican_car_health4
  // VAR_INT gun1_collected
  // VAR_INT gun2_collected
  // VAR_INT gun3_collected
  // VAR_INT gun4_collected
  // VAR_INT create_gun1
  // VAR_INT create_gun2
  // VAR_INT create_gun3
  // VAR_INT create_gun4
  // VAR_INT weapon_dropped
  // VAR_INT attackers_coming_to_get_ya
  // VAR_INT flag_press1_moped_dead
  // VAR_INT flag_press2_moped_dead
  // VAR_INT flag_press3_moped_dead
  // VAR_INT flag_press4_moped_dead
  // VAR_INT all_attackers_alive
  // VAR_INT press_driver1_off_moped
  // VAR_INT press_driver2_off_moped
  // VAR_INT press_driver3_off_moped
  // VAR_INT press_driver4_off_moped
  // VAR_FLOAT mexican_car_speed
  // VAR_INT player1_got_all_guns
  // VAR_INT mexican_car_var
  // VAR_INT mexican_driver_var
  // VAR_INT driving_like_nutters_flag
  // VAR_INT weapon_knocked_from_back_of_truck_var
  // VAR_INT weapon_knocked_from_back_of_truck1
  // VAR_INT weapon_knocked_from_back_of_truck2
  // VAR_INT weapon_knocked_from_back_of_truck3
  // VAR_INT weapon_knocked_from_back_of_truck4
  // VAR_INT no_car_blip1
  // VAR_INT no_car_blip2
  // VAR_INT no_car_blip3
  // VAR_INT no_car_blip4
  // VAR_INT first_time_trigger
  // VAR_INT killing_bonus
  // VAR_INT phil_speech1
  // VAR_INT phil_speech3
  // VAR_INT set_mission_truck1
  // VAR_INT set_mission_truck2
  // VAR_INT set_mission_truck3
  // VAR_INT set_mission_truck4
  // VAR_INT set_mission_truck_var
  // VAR_INT gunner_attack
  // VAR_INT gunner1_attack
  // VAR_INT bomb_help_flag
  // VAR_FLOAT groundz_box




  //coordinates

  // VAR_FLOAT mexican_car_x
  // VAR_FLOAT mexican_car_y
  // VAR_FLOAT mexican_car_z
  // VAR_FLOAT mexican_car_stuck_x
  // VAR_FLOAT mexican_car_stuck_y
  // VAR_FLOAT mexican_car_stuck_z
  // VAR_FLOAT mex_warp_heading
  // VAR_FLOAT x_tem
  // VAR_FLOAT y_tem
  // VAR_FLOAT sum_x_y_tem
  // VAR_FLOAT mopedcoord_1_x
  // VAR_FLOAT mopedcoord_1_y
  // VAR_FLOAT mopedcoord_1_z
  // VAR_FLOAT mopedcoord_2_x
  // VAR_FLOAT mopedcoord_2_y
  // VAR_FLOAT moped_heading
  // VAR_FLOAT box1x
  // VAR_FLOAT box1y
  // VAR_FLOAT box1z
  // VAR_FLOAT box2x
  // VAR_FLOAT box2y
  // VAR_FLOAT box2z
  // VAR_FLOAT box3x
  // VAR_FLOAT box3y
  // VAR_FLOAT box3z
  // VAR_FLOAT box4x
  // VAR_FLOAT box4y
  // VAR_FLOAT box4z

  //cutscene

  // VAR_INT cs_expltrk

  // ****************************************Mission Start************************************

}
