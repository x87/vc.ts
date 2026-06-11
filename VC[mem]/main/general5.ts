// Generated from main/general5.sc

import { $ } from "../utils/vars.mts";
import { timed } from "../utils/scm.mts";

async function body() {
  ////////////////////////////////////////////////////////////////////////////////////////////


  ONMISSION = 1;


  // SCRIPT_NAME COL_5


  Stat.RegisterMissionGiven();


  await asyncWait(0);


  // VAR_FLOAT fly_to_x fly_to_y fly_to_z old_fly_to_z boat01_heading boat02_heading boat03_heading
  // VAR_FLOAT locate_size the_yacht_speed the_yacht_heading
  // VAR_FLOAT the_yacht_x_start the_yacht_y_start the_yacht_z_start


  Text.LoadMissionText("GENERA5");
  Shortcut.SetDropoffPointForMission(-163.0, -1439.4, 9.0, 201.5);


  $.the_yacht_speed = 0.0;


  $.killer_chopper_fly_to_counter = 0;
  $.killer_chopper_just_come_from = 0;


  $.initial_yacht_speedup = 0;
  $.killer_chopper_created = 0;
  $.gosub_heli_fly_to_counter = 0;
  $.gosub_heli_just_come_from = 0;
  $.random_flight = 0;
  $.car01_counter = 0;
  $.car01_goon1_counter = 0;
  $.car01_goon2_counter = 0;
  $.car01_goon3_counter = 0;
  $.car01_goon4_counter = 0;
  $.car02_counter = 0;
  $.car02_goon1_counter = 0;
  $.car02_goon2_counter = 0;
  $.car02_goon3_counter = 0;
  $.car02_goon4_counter = 0;
  $.heli1_counter = -2;


  $.is_audio_in_use = 0;
  $.audio_1_flag = 0;
  $.audio_2_flag = 0;
  $.audio_3_flag = 0;
  $.audio_4_flag = 0;
  $.audio_7_flag = 0;
  $.audio_9_flag = 0;
  $.audio_10_flag = 0;
  $.audio_11_flag = 0;
  $.audio_12_flag = 0;
  $.audio_13_flag = 0;
  $.audio_14_flag = 0;
  $.audio_15_flag = 0;
  $.audio_16_flag = 0;
  $.audio_1_timeout = 0;
  $.audio_2_timeout = 0;
  $.audio_3_timeout = 0;
  $.audio_4_timeout = 0;
  $.audio_7_timeout = 0;
  $.audio_9_timeout = 0;
  $.audio_10_timeout = 0;
  $.audio_11_timeout = 0;
  $.audio_12_timeout = 0;
  $.audio_13_timeout = 0;
  $.audio_14_timeout = 0;
  $.audio_15_timeout = 0;
  $.audio_16_timeout = 0;


  $.first_boats_dead = 0;
  $.boat01_dead = 0;
  $.boat02_dead = 0;
  $.boat03_dead = 0;
  $.first_boats_timer = 0;
  $.stop_for_barricade = 0;
  $.barricade_boat01_flag = -1;
  $.barricade_boat02_flag = -1;
  $.barricade_boat03_flag = -1;
  $.barricade_boat05_flag = -1;
  $.barricade_boat09_flag = -1;


  $.boarder_1_flag = 0;
  $.boarder_2_flag = 0;
  $.boarder_3_flag = 0;
  $.boarder_4_flag = 0;


  $.played_bridge_dialogue = 0;
  $.played_this_dialogue = 0;
  $.played_this_dialogue2 = 0;
  $.played_this_dialogue3 = 0;
  $.clear_route_flag = 0;
  $.played_audio_7_dialogue = 0;
  $.played_audio_9_dialogue = 0;
  $.played_audio_15_dialogue = 0;
  $.got_hunter_message = 0;


  $.cutscene_timer = 0;
  $.cutscene_counter = 0;


  $.created_bridge_scene = 0;


  $.next_text = 0;
  $.text_timer = 0;


  $.got_ammo_message = 0;
  $.got_health_message = 0;


  $.old_fly_to_z = 10.0;
  $.hunter_timer = 0;
  $.jetty_stuff_dude_flag = 0;
  $.heli_audio_counter = 0;
  $.given_player_smg_flag = 0;

  //heli1_death_counter = 0
  //heli2_death_counter = 0
  //killer_heli_death_counter = 0


  $.heli2_counter = -1;
  const _res241 = $.the_yacht.getCoordinates();
$.the_yacht_x = _res241.x;
$.the_yacht_y = _res241.y;
$.the_yacht_z = _res241.z;


  $.the_yacht_x_start = $.the_yacht_x;
  $.the_yacht_y_start = $.the_yacht_y;
  $.the_yacht_z_start = $.the_yacht_z;


  Char.SetThreatReactionRangeMultiplier(6.0);
  Clock.SetTimeOfDay(6, 0);
  Weather.ForceNow(0 /* WEATHER_SUNNY */);

  ////////////////////////////////////////////////////////////////////////////////////////////
  //CUTSCENE START////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////


  Streaming.LoadSpecialCharacter(1, "csplay");
  Streaming.LoadSpecialCharacter(2, "cscolo");
  Streaming.LoadSpecialCharacter(3, "cgona");
  Streaming.LoadSpecialCharacter(4, "cgonb");


  Streaming.RequestModel(yt_main_body);
  Streaming.RequestModel(yt_main_body2);
  Streaming.RequestModel(yt_doors14);
  Streaming.RequestModel(yt_tmp_boat);
  Streaming.RequestModel(lodmain_body);
  Streaming.RequestModel(big_poly_tings);
  Streaming.RequestModel(yt_gangplnk_tmp);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(yt_main_body)) || !(Streaming.HasModelLoaded(yt_main_body2)) || !(Streaming.HasModelLoaded(yt_doors14)) || !(Streaming.HasModelLoaded(yt_tmp_boat)) || !(Streaming.HasModelLoaded(lodmain_body)) || !(Streaming.HasModelLoaded(big_poly_tings))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(yt_gangplnk_tmp))) {
    await asyncWait(0);
  }


  Camera.SetNearClip(0.1);
  Cutscene.Load("COL_5A");


  const _res242 = $.the_yacht.getCoordinates();
$.the_yacht_x = _res242.x;
$.the_yacht_y = _res242.y;
$.the_yacht_z = _res242.z;
  $.the_yacht_x = $.the_yacht_x + 0.003;
  $.the_yacht_y = $.the_yacht_y - 1.381;
  $.the_yacht_z = $.the_yacht_z + 3.149;
  Cutscene.SetOffset($.the_yacht_x, $.the_yacht_y, $.the_yacht_z);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("csplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL02);
  $.cs_ken.setAnim("cscolo");


  $.cs_dude1 = CutsceneObject.Create(SPECIAL03);
  $.cs_dude1.setAnim("cgona");


  $.cs_dude2 = CutsceneObject.Create(SPECIAL04);
  $.cs_dude2.setAnim("cgonb");


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();


  $.cs_time = Cutscene.GetTime();


  $.cs_time_limit = 791;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Text.PrintNow("COL5A_1", 10000, 1); //Circumstances force a hasty departure amigo.


  $.cs_time_limit = 3435;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Text.PrintNow("COL5A_2", 10000, 1); //Whats the problem?


  $.cs_time_limit = 4140;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Text.PrintNow("COL5A_3", 10000, 1); //Uuh, The French want their missile technology back and after that last incident,


  $.cs_time_limit = 7919;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Text.PrintNow("COL5A_4", 10000, 1); //I feel it is time to find safer harbours.


  $.cs_time_limit = 9945;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Text.PrintNow("COL5A_5", 10000, 1); //Wouldn't it be safer to fly?


  $.cs_time_limit = 11371;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Text.PrintNow("COL5A_6", 10000, 1); //I'd be dead before I reached check-in. Besides, I need to get my merchandise out of the country.


  $.cs_time_limit = 16000;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Text.PrintNow("COL5A_7", 10000, 1); //Need another gun?


  $.cs_time_limit = 17365;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Text.PrintNow("COL5A_8", 10000, 1); //You, my friend, are worth ten guns...hahaha


  $.cs_time_limit = 21837;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);


  Streaming.MarkModelAsNoLongerNeeded(yt_main_body);
  Streaming.MarkModelAsNoLongerNeeded(yt_main_body2);
  Streaming.MarkModelAsNoLongerNeeded(yt_doors14);
  Streaming.MarkModelAsNoLongerNeeded(yt_tmp_boat);
  Streaming.MarkModelAsNoLongerNeeded(lodmain_body);
  Streaming.MarkModelAsNoLongerNeeded(big_poly_tings);
  Streaming.MarkModelAsNoLongerNeeded(yt_gangplnk_tmp);

  ////////////////////////////////////////////////////////////////////////////////////////////
  //CUTSCENE END//////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////


  $.player1.setMood(3 /* PLAYER_MOOD_WISECRACKING */, 60000);

  //IF IS_BUTTON_PRESSED PAD2 DPADUP//DEBUG!!!!!!!!!!
  //	GOTO col5b_cutscene			//DEBUG!!!!!!!!!!
  //ENDIF							//DEBUG!!!!!!!!!!


  Streaming.RequestModel(HUNTER);
  Streaming.RequestModel(DINGHY);
  Streaming.RequestModel(SPEEDER);
  Streaming.RequestModel(RIO);
  Streaming.RequestModel(WASHING);
  Streaming.RequestModel(MAVERICK);
  Streaming.RequestModel(MARQUIS);
  Streaming.RequestModel(TROPIC);
  Streaming.RequestModel(RUGER);
  Streaming.RequestModel(KATANA);
  Streaming.RequestModel(HMOST);
  Streaming.RequestModel(UZI);
  Streaming.RequestModel(COLT45);
  Streaming.LoadSpecialCharacter(1, "igcolon");
  Streaming.LoadSpecialCharacter(2, "cgona");
  //LOAD_SPECIAL_CHARACTER 3 fsfa


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasModelLoaded(HUNTER)) || !(Streaming.HasModelLoaded(DINGHY)) || !(Streaming.HasModelLoaded(SPEEDER)) || !(Streaming.HasModelLoaded(RIO)) || !(Streaming.HasModelLoaded(WASHING))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(MAVERICK)) || !(Streaming.HasModelLoaded(MARQUIS)) || !(Streaming.HasModelLoaded(TROPIC)) || !(Streaming.HasModelLoaded(KATANA)) || !(Streaming.HasModelLoaded(RUGER))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(HMOST)) || !(Streaming.HasModelLoaded(UZI)) || !(Streaming.HasModelLoaded(COLT45))) {
    await asyncWait(0);
  }


  $.player1.giveWeapon(10 /* WEAPONTYPE_KATANA */, 1);


  $.player1.addArmour(200);


  $.temp_int = $.player1.getHealth();
  if ($.temp_int < 100) {
    $.player1.setHealth(100);
  }


  $.pier_closed.delete();


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SetCarDensityMultiplier(0.0);
  World.SetPedDensityMultiplier(0.0);


  $.the_yacht3.delete();
  $.the_yacht7.delete();
  $.the_yacht8.delete();


  const _res243 = $.the_yacht.getOffsetInWorldCoords(-0.277, -16.662, 3.152);
$.the_yacht_x = _res243.x;
$.the_yacht_y = _res243.y;
$.the_yacht_z = _res243.z;
  $.player1.setCoordinates($.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
  $.player1.setHeading(0.0);
  Camera.SetBehindPlayer();

  //colonel 4.288 -5.171 4.029 //right side front
  //goon1 4.288 -11.674 4.029	//right side back
  //goon2 -4.2 -9.822 4.029 //left side
  //goon3 -1.931 -4.427 4.029	//by middle stairs
  //goon4 -3.043 -13.026 4.029 //by back left stairs
  //player1 -0.277 -16.662 3.152 //back middle


  $.colonel = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, $.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
  $.sailor = $.colonel;
  await setup_sailors();  // SCM GOSUB setup_sailors
  $.colonel.setSuffersCriticalHits(false /* FALSE */);
  $.colonel.setProofs(false /* FALSE */, false /* FALSE */, true /* TRUE */, true /* TRUE */, false /* FALSE */);
  $.colonel.setAccuracy(40);
  $.colonel.setHealth(500);
  $.colonel.attachToObject($.the_yacht, -2.5, -1.996, 4.179, 0, 360.0, 27 /* WEAPONTYPE_RUGER */); //4.288 -5.171 4.179 0 360.0 WEAPONTYPE_RUGER


  $.colonel_goon1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL02, $.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
  $.sailor = $.colonel_goon1;
  await setup_sailors();  // SCM GOSUB setup_sailors
  $.colonel_goon1.attachToObject($.the_yacht, 4.288, -11.674, 4.179, 0, 360.0, 27 /* WEAPONTYPE_RUGER */);


  $.colonel_goon2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL02, $.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
  $.sailor = $.colonel_goon2;
  await setup_sailors();  // SCM GOSUB setup_sailors
  $.colonel_goon2.attachToObject($.the_yacht, -4.215, -8.161, 4.179, 0, 360.0, 27 /* WEAPONTYPE_RUGER */);


  $.colonel_goon3 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL02, $.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
  $.sailor = $.colonel_goon3;
  await setup_sailors();  // SCM GOSUB setup_sailors
  $.colonel_goon3.attachToObject($.the_yacht, 4.267, -4.745, 4.179, 0, 360.0, 27 /* WEAPONTYPE_RUGER */);


  $.colonel_goon4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL02, $.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
  $.sailor = $.colonel_goon4;
  await setup_sailors();  // SCM GOSUB setup_sailors
  $.colonel_goon4.attachToObject($.the_yacht, -4.225, -12.46, 4.179, 0, 360.0, 27 /* WEAPONTYPE_RUGER */);


  $.the_path_spline.setSpeed(0.0);


  if (ONMISSION == 0) {
    $.heli1 = Car.Create(HUNTER, 36.0195, -447.5407, 15.0170);
    $.killer_chopper = Car.Create(HUNTER, 36.0195, -447.5407, 15.0170);
    $.killer_chopper_pilot = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.car01_goon1 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.car01_goon2 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.car01_goon3 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.car01_goon4 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.car02_goon1 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.car02_goon2 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.car02_goon3 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.car02_goon4 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.boarder_1 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.boarder_2 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.boarder_3 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.boarder_4 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.heli1_passenger1 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.heli1_passenger2 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.heli1_passenger3 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.heli2_passenger1 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.heli2_passenger2 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.heli2_passenger3 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 36.0195, -447.5407, 15.0170);
    $.car02 = Car.Create(WASHING, -238.2693, -1361.3296, 7.0786);
    $.car01 = Car.Create(WASHING, -238.2693, -1361.3296, 7.0786);


  }

  //Boats at jetty

  $.boat01 = Car.Create(MARQUIS, -327.2818, -1207.3, 6.0000);
  $.boat01.setHeading(90.0);
  $.boat01.setOnlyDamagedByPlayer(true /* TRUE */);
  $.boat02 = Car.Create(SPEEDER, -332.1327, -1221.6234, 6.0000);
  $.boat02.setHeading(90.0);
  $.boat02.setOnlyDamagedByPlayer(true /* TRUE */);


  $.boat03 = Car.Create(RIO, -332.6164, -1233.0079, 6.0000); //catamaran
  $.boat03.setHeading(90.0);
  $.boat03.setOnlyDamagedByPlayer(true /* TRUE */);


  $.game_timer = Clock.GetGameTimer();
  $.car01_timer = $.game_timer + 12000;


  await asyncWait(0);


  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Hud.SwitchWidescreen(true /* ON */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  Camera.SetFixedPosition(-410.4125, -1320.8638, 12.1604, 0.0, 0.0, 0.0); //SHOT OF YACHT PULLING AWAY
  Camera.PointAtPoint(-409.6047, -1320.2751, 12.1915, 2 /* JUMP_CUT */);
  $.cutscene_timer = $.game_timer + 6100;
}



async function mission_general5_loop() {
  // SCM GOTO → mission_general5_loop lowered to endless loop
  while (true) {

    /*

    IF cutscene_counter >= 0
    IF cutscene_counter < 5
    IF IS_BUTTON_PRESSED PAD1 CROSS
    //PRINT_NOW skip 500 1
    SET_FIXED_CAMERA_POSITION -351.4564 -1232.3345 10.4296 0.0 0.0 0.0//3RD SHOT OF GUYS RUNNING UP JETTY
    POINT_CAMERA_AT_POINT -350.6927 -1231.6893 10.4065 JUMP_CUT
    cutscene_timer = game_timer
    cutscene_counter = 5
    ENDIF
    ENDIF
    ENDIF

    */



    await asyncWait(0);

    ///////////////////////////////////////////////////////////////////////////////////////////
    // MISSION STUFF //////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    $.game_timer = Clock.GetGameTimer();
    const _res244 = $.player1.getCoordinates();
$.player_x = _res244.x;
$.player_y = _res244.y;
$.player_z = _res244.z;
    $.player1.alterWantedLevel(0);


    if ($.player1.isInAnyCar()) {
      if (!($.player1.isInAnyBoat())) {
        if (!(Char.IsDead($.colonel))) {
          $.colonel.explodeHead();
        }
        Text.PrintNow("COL5_B3", 5000, 1); //~r~The Colonel is dead!
        Camera.SetFadingColor(225, 225, 225);
        Camera.DoFade(1000, 0 /* FADE_OUT */);
        while (Camera.GetFadingStatus()) {
          await asyncWait(0);
        }
        // SCM GOTO → mission_general5_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_general5_failed"); // fallback: would break linear control flow
      }
    }


    if ($.created_bridge_scene == 0) {
      const _res245 = $.scplayer.getWeaponInSlot(7);
$.weapon_type = _res245.weaponType;
$.ammo = _res245.weaponAmmo;
$.model = _res245.weaponModel;
      if ($.ammo < 1) {
        $.player1.giveWeapon(27 /* WEAPONTYPE_RUGER */, 180);
      }
    }


    if ($.given_player_smg_flag == 0) {
      const _res246 = $.scplayer.getWeaponInSlot(6);
$.weapon_type = _res246.weaponType;
$.ammo = _res246.weaponAmmo;
$.model = _res246.weaponModel;
      if ($.ammo < 1) {
        $.player1.giveWeapon(23 /* WEAPONTYPE_UZI */, 80);
        $.given_player_smg_flag = 1;
      }
    }



    if ($.stop_for_barricade == 2) {
      if ($.got_ammo_message == 0) {
        const _res247 = $.scplayer.getWeaponInSlot(7);
$.weapon_type = _res247.weaponType;
$.ammo = _res247.weaponAmmo;
$.model = _res247.weaponModel;
        if ($.ammo < 1) {
          Text.PrintNow("COL5_B6", 5000, 1); //You have run out of ammo, get more from the stairs on the top deck.
          $.text_timer = $.game_timer + 4000;
          $.got_ammo_message = 1;
        }
      }
      if ($.got_health_message == 0) {
        if (!($.player1.isHealthGreater(40))) {
          Text.PrintNow("COL5_B7", 5000, 1); //You are running low on health, get more from the stairs on the top deck.
          $.text_timer = $.game_timer + 4000;
          $.got_health_message = 1;
        }
      }
    }


    if ($.cutscene_counter == 0) {
      if ($.game_timer > $.cutscene_timer) {
        Camera.SetFixedPosition(-381.3522, -1363.9183, 18.9859, 0.0, 0.0, 0.0); //2ND SHOT OF YACHT PULLING AWAY
        Camera.PointAtPoint(-381.1456, -1362.9531, 18.8254, 2 /* JUMP_CUT */);
        $.cutscene_counter = 1;
      }
    }


    if ($.cutscene_counter == 1) {
      if ($.car01_counter > 0) {
        Streaming.LoadScene(-264.5628, -1231.9009, 10.8113);
        Camera.SetFixedPosition(-264.5628, -1231.9009, 10.8113, 0.0, 0.0, 0.0); //SHOT OF CARS SPEEDING UP
        if (!(Car.IsDead($.car01))) {
          Camera.PointAtCar($.car01, 15 /* FIXED */, 2 /* JUMP_CUT */);
        }
        $.cutscene_timer = $.game_timer + 5500;
        $.cutscene_counter = 2;
      }
    }


    if ($.cutscene_counter == 2) {
      if ($.game_timer > $.cutscene_timer) {
        Camera.SetFixedPosition(-233.0363, -1221.2832, 9.3205, 0.0, 0.0, 0.0); //SHOT OF GUYS RUNNING UP JETTY
        Camera.PointAtPoint(-233.9623, -1220.9071, 9.3547, 2 /* JUMP_CUT */);
        $.cutscene_timer = $.game_timer + 4000;
        $.cutscene_counter = 3;
      }
    }


    if ($.cutscene_counter == 3) {
      if ($.game_timer > $.cutscene_timer) {
        Camera.SetFixedPosition(-267.5756, -1219.9111, 10.2994, 0.0, 0.0, 0.0); //3RD SHOT OF GUYS RUNNING UP JETTY
        Camera.PointAtPoint(-268.5739, -1219.9662, 10.2809, 2 /* JUMP_CUT */);
        $.cutscene_timer = $.game_timer + 4000;
        $.cutscene_counter = 4;
      }
    }


    if ($.cutscene_counter == 4) {
      if ($.game_timer > $.cutscene_timer) {
        Camera.SetFixedPosition(-351.4564, -1232.3345, 10.4296, 0.0, 0.0, 0.0); //3RD SHOT OF GUYS RUNNING UP JETTY
        Camera.PointAtPoint(-350.6927, -1231.6893, 10.4065, 2 /* JUMP_CUT */);
        $.cutscene_timer = $.game_timer + 4000;
        $.cutscene_counter = 5;
      }
    }


    if ($.cutscene_counter == 5) {
      if ($.game_timer > $.cutscene_timer) {
        $.the_yacht_heading = $.the_yacht.getHeading();
        $.player1.setHeading($.the_yacht_heading);
        $.player1.setControl(true /* ON */);
        Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
        Hud.SwitchWidescreen(false /* OFF */);
        Game.SetAllCarsCanBeDamaged(true /* TRUE */);
        Camera.SetBehindPlayer();
        Camera.RestoreJumpcut();
        if ($.next_text == 1) {
          Text.PrintNow("COL5_B2", 5000, 1); //~g~Get up front and clear the route for the Colonel's yacht.
          $.text_timer = $.game_timer + 4000;
          ++$.next_text;
        }
        if ($.next_text == 0) {
          Text.PrintNow("COL5_B1", 5000, 1); //~g~Defend the Colonel and his yacht at all costs.
          $.text_timer = $.game_timer + 4000;
          ++$.next_text;
        }
        $.cutscene_counter = 6;
      }
    }
    if ($.cutscene_counter == 10) {
      if ($.game_timer > $.cutscene_timer) {
        Camera.SetFixedPosition(223.1382, 976.4195, 11.1547, 0.0, 0.0, 0.0); //215.2970 952.7535 9.5638 0.0 0.0 0.0//THRU BARRICADE
        Camera.PointAtPoint(222.8153, 975.4747, 11.2115, 2 /* JUMP_CUT */);
        Streaming.LoadScene(222.8153, 975.4747, 11.2115);
        $.cutscene_timer = $.game_timer + 4000;
        $.cutscene_counter = 5;
      }
    }


    if ($.cutscene_counter == 15) {
      if ($.game_timer > $.cutscene_timer) {
        Camera.SetFixedPosition(203.4923, 871.4227, 23.2555, 0.0, 0.0, 0.0); //2ND SHOT BEFORE FINAL CS PLAYS
        Camera.PointAtPoint(203.3397, 872.3857, 23.0336, 2 /* JUMP_CUT */);
        $.cutscene_timer = $.game_timer + 4000;
        $.cutscene_counter = 16;
      }
    }


    if ($.killer_chopper_created == 2) {
      if (!(Camera.GetFadingStatus())) {
        Camera.SetFixedPosition(75.9000, 748.5027, 10.4895, 0.0, 0.0, 0.0);
        if (!(Car.IsDead($.killer_chopper))) {
          Camera.PointAtCar($.killer_chopper, 15 /* FIXED */, 2 /* JUMP_CUT */);
        }
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(500, 1 /* FADE_IN */);
        World.ClearArea(189.6395, 888.1066, 12.6813, 60.0, true /* TRUE */);
        $.cutscene_timer = $.game_timer + 4000;
        $.cutscene_counter = 5;
        $.killer_chopper_created = 3;
      }
    }


    if ($.cutscene_counter == 16) {
      if ($.game_timer > $.cutscene_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(1500, 0 /* FADE_OUT */);
        while (Camera.GetFadingStatus()) {
          await asyncWait(0);
        }
        $.scplayer.freezePosition(true /* TRUE */);
        $.the_path_spline.setPosition(3250.0);
        $.the_path_spline.setSpeed(0.0);
        Camera.RestoreJumpcut();
        await asyncWait(0);
        await asyncWait(0);
        // SCM GOTO → col5b_cutscene (not lowered; manual jump required)
        throw new Error("unresolved GOTO col5b_cutscene"); // fallback: would break linear control flow
      }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////
    // YACHT STUFF ////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    const _res248 = $.the_yacht.getCoordinates();
$.the_yacht_x = _res248.x;
$.the_yacht_y = _res248.y;
$.the_yacht_z = _res248.z;
    $.the_yacht_heading = $.the_yacht.getHeading();


    if ($.initial_yacht_speedup == 0) {
      if ($.the_yacht_speed < 5.0) {
        $.the_yacht_speed += timed(0.01);
      }
      else {
        $.the_yacht_speed = 5.0;
        $.initial_yacht_speedup = 1;
      }
      $.the_path_spline.setSpeed($.the_yacht_speed);
    }


    if ($.first_boats_dead == 0) {
      if ($.the_yacht.locate2D(-277.999, 614.19, 25.0, 25.0, false)) {
        if ($.created_bridge_scene == 0) {
          $.created_bridge_scene = 1;
        }
        $.first_boats_dead = 3;
      }
      else {
        if ($.boat01_dead == 1 && $.boat02_dead == 1 && $.boat03_dead == 1) {
          $.first_boats_timer = $.game_timer + 8000;
          $.first_boats_dead = 1;
        }
      }
    }


    if ($.created_bridge_scene == 1) {
      $.car01.markAsNoLongerNeeded();
      $.car02.markAsNoLongerNeeded();
      $.boat01.markAsNoLongerNeeded();
      $.boat02.markAsNoLongerNeeded();
      $.boat03.markAsNoLongerNeeded();
      $.car01_goon1.markAsNoLongerNeeded();
      $.car01_goon2.markAsNoLongerNeeded();
      $.car01_goon3.markAsNoLongerNeeded();
      $.car01_goon4.markAsNoLongerNeeded();
      $.car02_goon1.markAsNoLongerNeeded();
      $.car02_goon2.markAsNoLongerNeeded();
      $.car02_goon3.markAsNoLongerNeeded();
      $.car02_goon4.markAsNoLongerNeeded();
      $.barricade_boat01 = Car.Create(DINGHY, 246.161, 934.99, 6.0);
      $.barricade_boat01.setHeading(165.0);
      $.barricade_boat01_dr = Char.CreateInsideCar($.barricade_boat01, 9 /* PEDTYPE_GANG_STREET */, HMOST);
      $.barricade_boat01_sh = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 274.1312, 969.9899, 23.4139);
      $.boat_shooter_ped = $.barricade_boat01_sh;
      await setup_boat_shooters();  // SCM GOSUB setup_boat_shooters
      $.barricade_boat01_sh.attachToCar($.barricade_boat01, 0.0742, -0.8961, 1.0623, 2 /* FACING_BACK */, 360.0, 23 /* WEAPONTYPE_UZI */);


      $.barricade_boat02 = Car.Create(DINGHY, 252.074, 929.9, 6.0);
      $.barricade_boat02.setHeading(165.0);
      $.barricade_boat02_dr = Char.CreateInsideCar($.barricade_boat02, 9 /* PEDTYPE_GANG_STREET */, HMOST);
      $.barricade_boat02_sh = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 274.1312, 969.9899, 23.4139);
      $.boat_shooter_ped = $.barricade_boat02_sh;
      await setup_boat_shooters();  // SCM GOSUB setup_boat_shooters
      $.barricade_boat02_sh.attachToCar($.barricade_boat02, 0.0742, -0.8961, 1.0623, 2 /* FACING_BACK */, 360.0, 23 /* WEAPONTYPE_UZI */);


      $.barricade_boat03 = Car.Create(RIO, 229.653, 929.049, 6.0);
      $.barricade_boat03.setHeading(124.5);
      $.barricade_boat03_dr = Char.CreateInsideCar($.barricade_boat03, 9 /* PEDTYPE_GANG_STREET */, HMOST);
      $.barricade_boat03_sh = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 274.1312, 969.9899, 23.4139);
      $.boat_shooter_ped = $.barricade_boat03_sh;
      await setup_boat_shooters();  // SCM GOSUB setup_boat_shooters
      $.barricade_boat03_sh.attachToCar($.barricade_boat03, 0.0, 4.0, 1.5, 0, 360.0, 23 /* WEAPONTYPE_UZI */);


      $.barricade_boat04 = Car.Create(TROPIC, 217.382, 940.656, 6.0);
      $.barricade_boat04.setHeading(-136.5);


      $.barricade_boat05 = Car.Create(DINGHY, 210.127, 932.185, 6.0);
      $.barricade_boat05.setHeading(166.5);
      $.barricade_boat05_dr = Char.CreateInsideCar($.barricade_boat05, 9 /* PEDTYPE_GANG_STREET */, HMOST);
      $.barricade_boat05_sh = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 274.1312, 969.9899, 23.4139);
      $.boat_shooter_ped = $.barricade_boat05_sh;
      await setup_boat_shooters();  // SCM GOSUB setup_boat_shooters
      $.barricade_boat05_sh.attachToCar($.barricade_boat05, 0.0742, -0.8961, 1.0623, 2 /* FACING_BACK */, 360.0, 23 /* WEAPONTYPE_UZI */);


      $.barricade_boat06 = Car.Create(MARQUIS, 201.639, 942.166, 6.0);
      $.barricade_boat06.setHeading(72.0);
      $.barricade_boat06_sh1 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 274.1312, 969.9899, 23.4139);
      $.boat_shooter_ped = $.barricade_boat06_sh1;
      await setup_boat_shooters();  // SCM GOSUB setup_boat_shooters
      $.barricade_boat06_sh1.attachToCar($.barricade_boat06, 0.0, -2.0, 1.2, 0, 360.0, 23 /* WEAPONTYPE_UZI */);
      $.barricade_boat06_sh2 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 274.1312, 969.9899, 23.4139);
      $.boat_shooter_ped = $.barricade_boat06_sh2;
      await setup_boat_shooters();  // SCM GOSUB setup_boat_shooters
      $.barricade_boat06_sh2.attachToCar($.barricade_boat06, 0.0, 6.0, 2.65, 0, 360.0, 23 /* WEAPONTYPE_UZI */);
      $.barricade_boat06_sh3 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 274.1312, 969.9899, 23.4139);
      $.boat_shooter_ped = $.barricade_boat06_sh3;
      await setup_boat_shooters();  // SCM GOSUB setup_boat_shooters
      $.barricade_boat06_sh3.attachToCar($.barricade_boat06, 0.0, 10.0, 1.9, 0, 360.0, 23 /* WEAPONTYPE_UZI */);
      $.barricade_boat07 = Car.Create(TROPIC, 187.631, 953.41, 6.0);
      $.barricade_boat07.setHeading(-126.0);


      $.barricade_boat08 = Car.Create(MARQUIS, 168.216, 955.625, 6.0);
      $.barricade_boat08.setHeading(-106.5);


      $.barricade_boat09 = Car.Create(TROPIC, 195.398, 767.808, 6.0);
      $.barricade_boat09.setHeading(-7.5);
      $.barricade_boat09_dr = Char.CreateInsideCar($.barricade_boat09, 9 /* PEDTYPE_GANG_STREET */, HMOST);
      $.created_bridge_scene = 2;
    }


    if ($.first_boats_dead == 1) {
      if ($.game_timer > $.first_boats_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(1500, 0 /* FADE_OUT */);
        $.first_boats_dead = 2;
      }
    }


    if ($.first_boats_dead == 3) {
      if ($.created_bridge_scene == 0) {
        $.created_bridge_scene = 1;
      }
      $.scplayer.freezePosition(false /* FALSE */);
      const _res249 = $.the_yacht.getOffsetInWorldCoords(-0.277, -16.662, 3.152);
$.the_yacht_x = _res249.x;
$.the_yacht_y = _res249.y;
$.the_yacht_z = _res249.z;
      if (!($.player1.isInAnyCar())) {
        $.player1.setCoordinates($.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
      }
      else {
        $.player1.warpFromCarToCoord($.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
      }
      $.player1.setHeading($.the_yacht_heading);
      Camera.SetBehindPlayer();
      Streaming.LoadScene($.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
      $.player1.setControl(false /* OFF */);
      Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
      Hud.SwitchWidescreen(true /* ON */);
      Game.SetAllCarsCanBeDamaged(false /* FALSE */);
      Camera.SetFixedPosition(160.3909, 797.2673, 7.6438, 0.0, 0.0, 0.0); //SHOT OF YACHT INFRONT OF MAINLAND
      Camera.PointAtPoint(159.4485, 797.5592, 7.8072, 2 /* JUMP_CUT */);
      $.cutscene_timer = $.game_timer + 8500;
      $.cutscene_counter = 10;
      await asyncWait(500);
      Camera.SetFadingColor(0, 0, 1);
      Camera.DoFade(1500, 1 /* FADE_IN */);
      //SET_OBJECT_PATH_SPEED the_path_spline 0.0
      $.first_boats_dead = 4;
    }


    if ($.first_boats_dead == 2) {
      if (!(Camera.GetFadingStatus())) {
        $.the_path_spline.setPosition(2700.0);
        $.scplayer.freezePosition(true /* TRUE */);
        $.first_boats_dead = 3;
      }
    }


    if ($.stop_for_barricade == 0) {
      if ($.the_yacht.locate2D(194.999, 891.496, 25.0, 25.0, false)) {
        $.stop_for_barricade = 1;
      }
    }


    if ($.stop_for_barricade == 1) {
      if ($.played_bridge_dialogue == 0) {
        if ($.audio_3_flag == 0) {
          $.audio_3_flag = 1;
          $.audio_3_timeout = $.game_timer + 5000;
        }
        $.played_bridge_dialogue = 1;
      }
      if (!($.the_yacht_speed == 0.0)) {
        if ($.the_yacht_speed < 0.0) {
          $.the_yacht_speed = 0.0;
        }
        else {
          $.the_yacht_speed -= timed(0.01);
        }
        $.the_path_spline.setSpeed($.the_yacht_speed);
      }
      else {
        $.stop_for_barricade = 2;
        //PICKUPS ON YACHT
        //CREATE_PICKUP HEALTH PICKUP_ON_STREET 189.6395 888.1066 12.6813 health_on_yacht
        //CREATE_PICKUP_WITH_AMMO RUGER PICKUP_ON_STREET 120 190.6359 887.7457 12.6813 ruger_on_yacht
        $.health_on_yacht = Pickup.Create(HEALTH, 2 /* PICKUP_ON_STREET */, 189.4928, 885.3084, 13.7132);
        $.ruger_on_yacht = Pickup.CreateWithAmmo(RUGER, 2 /* PICKUP_ON_STREET */, 120, 190.5261, 885.2347, 13.7132);
      }
    }


    if ($.stop_for_barricade == 2) {
      if ($.barricade_boat09_flag == -1) {
        $.barricade_boat09_flag = 1;
      }
      if ($.heli1_counter == -2) {
        $.heli1_timer = $.game_timer + 45000;
        $.heli1_counter = -1;
      }
      if ($.barricade_boat01_flag == -1) {
        $.barricade_boat01_flag = 0;
      }
      if ($.barricade_boat02_flag == -1) {
        $.barricade_boat02_flag = 0;
      }
      if ($.barricade_boat03_flag == -1) {
        $.barricade_boat03_flag = 0;
      }
      if ($.barricade_boat05_flag == -1) {
        $.barricade_boat05_flag = 0;
      }
    }


    if ($.clear_route_flag == 0) {
      if ($.killer_chopper_created > 0) {
        if (Car.IsDead($.killer_chopper)) {
          if (!(Car.IsDead($.barricade_boat06))) {
            Text.PrintNow("COL5_B2", 200, 1); //~g~Get up front and clear the route for the Colonel's yacht.
            //ADD_BLIP_FOR_CAR barricade_boat06 barricade_boat06_BLIP

          }
          else {
            $.cutscene_timer = $.game_timer + 6000;
            $.clear_route_flag = 1;
          }
        }
      }
    }
    if ($.clear_route_flag == 1) {
      if ($.game_timer > $.cutscene_timer) {
        $.boarder_1.markAsNoLongerNeeded();
        $.boarder_2.markAsNoLongerNeeded();
        $.boarder_3.markAsNoLongerNeeded();
        $.boarder_4.markAsNoLongerNeeded();
        $.heli1_passenger1.markAsNoLongerNeeded();
        $.heli1_passenger2.markAsNoLongerNeeded();
        $.heli1_passenger3.markAsNoLongerNeeded();
        $.heli2_passenger1.markAsNoLongerNeeded();
        $.heli2_passenger2.markAsNoLongerNeeded();
        $.heli2_passenger3.markAsNoLongerNeeded();
        $.barricade_boat06.delete();
        $.player1.setControl(false /* OFF */);
        Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
        Hud.SwitchWidescreen(true /* ON */);
        Game.SetAllCarsCanBeDamaged(false /* FALSE */);
        Camera.SetFixedPosition(218.3319, 1001.1410, 10.0492, 0.0, 0.0, 0.0); //1ST SHOT BEFORE FINAL CS STARTS
        Camera.PointAtPoint(218.0191, 1000.1914, 10.0691, 2 /* JUMP_CUT */);
        $.the_path_spline.setSpeed(5.0);
        World.ClearArea($.the_yacht_x, $.the_yacht_y, $.the_yacht_z, 100.0, true /* TRUE */);
        $.health_on_yacht.remove();
        $.ruger_on_yacht.remove();
        $.cutscene_timer = $.game_timer + 4000;
        $.cutscene_counter = 15;
        $.clear_route_flag = 2;
      }
    }


    if ($.clear_route_flag == 2) {
      if ($.game_timer > $.cutscene_timer) {
        if ($.the_yacht_speed < 5.0) {
          $.the_yacht_speed += timed(0.01);
        }
        else {
          $.the_yacht_speed = 5.0;
          $.clear_route_flag = 2;
        }
        $.the_path_spline.setSpeed($.the_yacht_speed);
      }
    }



    ///////////////////////////////////////////////////////////////////////////////////////////
    // COLONEL & GOONS STUFF //////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////


    if (!(Char.IsDead($.colonel))) {
      if ($.played_audio_15_dialogue == 0) {
        if (!($.player1.isHealthGreater(50))) {
          if ($.audio_15_flag == 0) {
            $.audio_15_flag = 1;
            $.audio_15_timeout = $.game_timer + 5000;
          }
          $.played_audio_15_dialogue = 1;
        }
      }
      if ($.played_audio_7_dialogue == 0) {
        if (!($.colonel.isHealthGreater(180))) {
          if ($.audio_7_flag == 0) {
            $.audio_7_flag = 1;
            $.audio_7_timeout = $.game_timer + 5000;
          }
          $.played_audio_7_dialogue = 1;
        }
      }
      if ($.played_audio_9_dialogue == 0) {
        if (!($.colonel.isHealthGreater(100))) {
          if ($.audio_9_flag == 0) {
            $.audio_9_flag = 1;
            $.audio_9_timeout = $.game_timer + 5000;
          }
          $.played_audio_9_dialogue = 1;
        }
      }
    }
    else {
      Text.PrintNow("COL5_B3", 5000, 1); //~r~The Colonel is dead!
      Camera.SetFadingColor(225, 225, 225);
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      // SCM GOTO → mission_general5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_general5_failed"); // fallback: would break linear control flow
    }


    if (Char.IsDead($.colonel_goon1)) {
      $.colonel_goon1.removeElegantly();
    }


    if (Char.IsDead($.colonel_goon2)) {
      $.colonel_goon2.removeElegantly();
    }


    if (Char.IsDead($.colonel_goon3)) {
      $.colonel_goon3.removeElegantly();
    }


    if (Char.IsDead($.colonel_goon4)) {
      $.colonel_goon4.removeElegantly();
    }


    ///////////////////////////////////////////////////////////////////////////////////////////
    // DINGHYS CIRCLING YACHT /////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////


    $.gosub_boat = $.barricade_boat01;
    $.gosub_boat_dr = $.barricade_boat01_dr;
    $.gosub_boat_sh = $.barricade_boat01_sh;
    $.gosub_boat_flag = $.barricade_boat01_flag;
    await boat_circle_yacht();  // SCM GOSUB boat_circle_yacht
    $.barricade_boat01 = $.gosub_boat;
    $.barricade_boat01_flag = $.gosub_boat_flag;


    $.gosub_boat = $.barricade_boat02;
    $.gosub_boat_dr = $.barricade_boat02_dr;
    $.gosub_boat_sh = $.barricade_boat02_sh;
    $.gosub_boat_flag = $.barricade_boat02_flag;
    await boat_circle_yacht();  // SCM GOSUB boat_circle_yacht
    $.barricade_boat02 = $.gosub_boat;
    $.barricade_boat02_flag = $.gosub_boat_flag;


    $.gosub_boat = $.barricade_boat05;
    $.gosub_boat_dr = $.barricade_boat05_dr;
    $.gosub_boat_sh = $.barricade_boat05_sh;
    $.gosub_boat_flag = $.barricade_boat05_flag;
    await boat_circle_yacht();  // SCM GOSUB boat_circle_yacht
    $.barricade_boat05 = $.gosub_boat;
    $.barricade_boat05_flag = $.gosub_boat_flag;


    ///////////////////////////////////////////////////////////////////////////////////////////
    // BARRICADE_BOAT03 STUFF /////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    if (!(Car.IsDead($.barricade_boat03))) {
      if (!(Char.IsDead($.barricade_boat03_dr))) {
        if ($.barricade_boat03_flag == 0) {
          $.barricade_boat03.setCruiseSpeed(10.0);
          $.barricade_boat03.goto(171.0578, 942.3843, 6.0);
          $.barricade_boat03_flag = 1;
        }
        if ($.barricade_boat03_flag == 1) {
          if ($.barricade_boat03.locate2D(171.0578, 942.3843, 8.0, 8.0, false)) {
            $.barricade_boat03.goto(148.7975, 947.8748, 6.0);
            $.barricade_boat03_flag = 2;
          }
        }
        if ($.barricade_boat03_flag == 2) {
          if ($.barricade_boat03.locate2D(148.7975, 947.8748, 8.0, 8.0, false)) {
            $.barricade_boat03.goto(129.6003, 936.7351, 6.0);
            $.barricade_boat03_flag = 3;
          }
        }
        if ($.barricade_boat03_flag == 3) {
          if ($.barricade_boat03.locate2D(129.6003, 936.7351, 8.0, 8.0, false)) {
            $.barricade_boat03.goto(122.3512, 920.2498, 6.0);
            $.barricade_boat03_flag = 4;
          }
        }
        if ($.barricade_boat03_flag == 4) {
          if ($.barricade_boat03.locate2D(122.3512, 920.2498, 8.0, 8.0, false)) {
            $.barricade_boat03.goto(124.6240, 909.1359, 6.0);
            $.barricade_boat03_flag = 5;
          }
        }
        if ($.barricade_boat03_flag == 5) {
          if ($.barricade_boat03.locate2D(124.6240, 909.1359, 8.0, 8.0, false)) {
            $.barricade_boat03.goto(138.0438, 900.7563, 6.0);
            $.barricade_boat03_flag = 6;
          }
        }
        if ($.barricade_boat03_flag == 6) {
          if ($.barricade_boat03.locate2D(138.0438, 900.7563, 8.0, 8.0, false)) {
            $.barricade_boat03.goto(161.4032, 891.2236, 6.0);
            $.barricade_boat03_flag = 7;
          }
        }
        if ($.barricade_boat03_flag == 7) {
          if ($.barricade_boat03.locate2D(161.4032, 891.2236, 8.0, 8.0, false)) {
            $.barricade_boat03.goto(176.3047, 887.8659, 6.0);
            $.barricade_boat03_flag = 8;
          }
        }
        if ($.barricade_boat03_flag == 8) {
          if ($.barricade_boat03.locate2D(176.3047, 887.8659, 8.0, 8.0, false)) {
            $.barricade_boat03.setCruiseSpeed(0.0);
            $.barricade_boat03.stop();
            $.barricade_boat03.anchor(true /* TRUE */);
            $.barricade_boat03.setMission(11 /* MISSION_STOP_FOREVER */);
            $.barricade_boat03_flag = 9;
          }
        }
      }
      else {
        $.barricade_boat03_dr.markAsNoLongerNeeded();
        $.barricade_boat03.markAsNoLongerNeeded();
        $.barricade_boat05 = -1;
      }
    }
    else {
      $.barricade_boat03_dr.markAsNoLongerNeeded();
      $.barricade_boat03.markAsNoLongerNeeded();
      $.barricade_boat05 = -1;
      $.barricade_boat03_flag = -1;
    }



    ///////////////////////////////////////////////////////////////////////////////////////////
    // BARRICADE_BOAT09 STUFF /////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    if (!(Car.IsDead($.barricade_boat09))) {
      if (!(Char.IsDead($.barricade_boat09_dr))) {
        if ($.barricade_boat09_flag == 1) {
          $.barricade_boat09.goto(200.4224, 885.9669, 6.0);
          $.barricade_boat09.setCruiseSpeed(8.0);
          $.barricade_boat09_flag = 2;
        }
        if ($.barricade_boat09_flag == 2) {
          if ($.barricade_boat09.locate2D(200.4224, 885.9669, 8.0, 8.0, false)) {
            $.barricade_boat09.setCruiseSpeed(0.0);
            $.barricade_boat09.setMission(11 /* MISSION_STOP_FOREVER */);
            $.barricade_boat09.stop();
            $.barricade_boat09.anchor(true /* TRUE */);
            $.barricade_boat09_flag = 3;
          }
        }
      }
      else {
        $.barricade_boat09.setMission(11 /* MISSION_STOP_FOREVER */);
        $.barricade_boat09.setCruiseSpeed(0.0);
        $.barricade_boat09.stop();
        $.barricade_boat09.anchor(true /* TRUE */);
        $.barricade_boat09.setStatus(4 /* STATUS_ABANDONED */);
        $.barricade_boat09.markAsNoLongerNeeded();
        $.barricade_boat09_dr.markAsNoLongerNeeded();
        $.barricade_boat09 = -1;
      }
    }
    else {
      $.barricade_boat09.markAsNoLongerNeeded();
      $.barricade_boat09_dr.markAsNoLongerNeeded();
      $.barricade_boat09 = -1;
      $.barricade_boat09_flag = -1;
    }


    ///////////////////////////////////////////////////////////////////////////////////////////
    // BOARDER_1 STUFF ////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    if ($.barricade_boat09_flag == 3) {
      if ($.boarder_1_flag == 0) {
        //IF NOT IS_POINT_ON_SCREEN 195.7159 886.0515 8.5 1.0
        const _res250 = $.player1.getCoordinates();
$.x = _res250.x;
$.y = _res250.y;
$.z = _res250.z;
        if ($.z > 11.2) {
          //IF NOT IS_AREA_OCCUPIED 195.2 885.5 7.3 196.2 886.5 9.5 FALSE FALSE TRUE FALSE FALSE
          $.boarder_1 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 195.7159, 886.0515, 8.0);
          $.goon = $.boarder_1;
          await set_up_boarders_shite();  // SCM GOSUB set_up_boarders_shite
          $.boarder_1_flag = 1;
          //ENDIF

        }
      }
    }
    if (!(Char.IsDead($.boarder_1))) {
      if ($.boarder_1_flag == 1) {
        if ($.boarder_1.isObjNoObj()) {
          $.boarder_1.setObjRunToCoord(196.3903, 888.9396);
          $.boarder_1.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_1.locateOnFoot2D(196.3903, 888.9396, 1.0, 1.0, false)) {
          $.boarder_1.setObjRunToCoord(194.5447, 914.6995);
          $.boarder_1.setUsePednodeSeek(false /* FALSE */);
          $.boarder_1_flag = 2;
        }
      }
      if ($.boarder_1_flag == 2) {
        if ($.boarder_1.isObjNoObj()) {
          $.boarder_1.setObjRunToCoord(194.5447, 914.6995);
          $.boarder_1.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_1.locateOnFoot2D(194.5447, 914.6995, 1.0, 1.0, false)) {
          $.boarder_1.setObjRunToCoord(192.4100, 901.3952);
          $.boarder_1.setUsePednodeSeek(false /* FALSE */);
          $.boarder_1_flag = 3;
        }
      }
      if ($.boarder_1_flag == 3) {
        if ($.boarder_1.isObjNoObj()) {
          $.boarder_1.setObjRunToCoord(192.4100, 901.3952);
          $.boarder_1.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_1.locateOnFoot2D(192.4100, 901.3952, 1.0, 1.0, false)) {
          $.boarder_1.setObjRunToCoord(196.3216, 899.4728);
          $.boarder_1.setUsePednodeSeek(false /* FALSE */);
          $.boarder_1_flag = 4;
        }
      }
      if ($.boarder_1_flag == 4) {
        if ($.boarder_1.isObjNoObj()) {
          $.boarder_1.setObjRunToCoord(196.3216, 899.4728);
          $.boarder_1.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_1.locateOnFoot2D(196.3216, 899.4728, 1.0, 1.0, false)) {
          $.boarder_1.setObjRunToCoord(192.9792, 875.6545);
          $.boarder_1.setUsePednodeSeek(false /* FALSE */);
          $.boarder_1_flag = 5;
        }
      }
      if ($.boarder_1_flag == 5) {
        if ($.boarder_1.isObjNoObj()) {
          $.boarder_1.setObjRunToCoord(192.9792, 875.6545);
        }
        if ($.boarder_1.locateOnFoot2D(192.9792, 875.6545, 1.0, 1.0, false)) {
          $.boarder_1.setObjRunToCoord(191.2296, 869.7584);
          $.boarder_1.setUsePednodeSeek(false /* FALSE */);
          $.boarder_1_flag = 6;
        }
      }
      if ($.boarder_1_flag == 6) {
        if ($.boarder_1.isObjNoObj()) {
          $.boarder_1.setObjRunToCoord(191.2296, 869.7584);
          $.boarder_1.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_1.locateOnFoot2D(191.2296, 869.7584, 2.0, 2.0, false)) {
          $.boarder_1.setObjKillPlayerOnFoot($.player1);
          if ($.audio_13_flag == 0) {
            $.audio_13_flag = 1;
            $.audio_13_timeout = $.game_timer + 5000;
          }
          $.boarder_1_flag = 7;
        }
      }
      if ($.boarder_1_flag == 7) {
        $.boarder_1.setObjKillPlayerOnFoot($.player1);
      }
    }
    else {
      $.boarder_1.removeElegantly();
      $.boarder_1_flag = 0;
    }

    ///////////////////////////////////////////////////////////////////////////////////////////
    // BOARDER_2 STUFF ////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    if ($.boarder_1_flag > 1) {
      if ($.boarder_2_flag == 0) {
        //IF NOT IS_POINT_ON_SCREEN 195.7159 886.0515 8.5 1.0
        const _res251 = $.player1.getCoordinates();
$.x = _res251.x;
$.y = _res251.y;
$.z = _res251.z;
        if ($.z > 11.2) {
          //IF NOT IS_AREA_OCCUPIED 195.2 885.5 7.3 196.2 886.5 9.5 FALSE FALSE TRUE FALSE FALSE
          $.boarder_2 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 195.7159, 886.0515, 8.0);
          $.goon = $.boarder_2;
          await set_up_boarders_shite();  // SCM GOSUB set_up_boarders_shite
          $.boarder_2_flag = 1;
          //ENDIF

        }
      }
    }
    if (!(Char.IsDead($.boarder_2))) {
      if ($.boarder_2_flag == 1) {
        if ($.boarder_2.isObjNoObj()) {
          $.boarder_2.setObjRunToCoord(196.3903, 888.9396);
          $.boarder_2.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_2.locateOnFoot2D(196.3903, 888.9396, 1.0, 1.0, false)) {
          $.boarder_2.setObjRunToCoord(194.5447, 914.6995);
          $.boarder_2.setUsePednodeSeek(false /* FALSE */);
          $.boarder_2_flag = 2;
        }
      }
      if ($.boarder_2_flag == 2) {
        if ($.boarder_2.isObjNoObj()) {
          $.boarder_2.setObjRunToCoord(194.5447, 914.6995);
          $.boarder_2.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_2.locateOnFoot2D(194.5447, 914.6995, 1.0, 1.0, false)) {
          $.boarder_2.setObjRunToCoord(192.4100, 901.3952);
          $.boarder_2.setUsePednodeSeek(false /* FALSE */);
          $.boarder_2_flag = 3;
        }
      }
      if ($.boarder_2_flag == 3) {
        if ($.boarder_2.isObjNoObj()) {
          $.boarder_2.setObjRunToCoord(192.4100, 901.3952);
          $.boarder_2.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_2.locateOnFoot2D(192.4100, 901.3952, 1.0, 1.0, false)) {
          $.boarder_2.setObjRunToCoord(187.9892, 900.3357);
          $.boarder_2.setUsePednodeSeek(false /* FALSE */);
          $.boarder_2_flag = 4;
        }
      }
      if ($.boarder_2_flag == 4) {
        if ($.boarder_2.isObjNoObj()) {
          $.boarder_2.setObjRunToCoord(187.9892, 900.3357);
          $.boarder_2.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_2.locateOnFoot2D(187.9892, 900.3357, 1.0, 1.0, false)) {
          $.boarder_2.setObjRunToCoord(184.6517, 876.7971);
          $.boarder_2.setUsePednodeSeek(false /* FALSE */);
          $.boarder_2_flag = 5;
        }
      }
      if ($.boarder_2_flag == 5) {
        if ($.boarder_2.isObjNoObj()) {
          $.boarder_2.setObjRunToCoord(184.6517, 876.7971);
          $.boarder_2.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_2.locateOnFoot2D(184.6517, 876.7971, 1.0, 1.0, false)) {
          $.boarder_2.setObjRunToCoord(184.4611, 870.8157);
          $.boarder_2.setUsePednodeSeek(false /* FALSE */);
          $.boarder_2_flag = 6;
        }
      }
      if ($.boarder_2_flag == 6) {
        if ($.boarder_2.isObjNoObj()) {
          $.boarder_2.setObjRunToCoord(184.4611, 870.8157);
          $.boarder_2.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_2.locateOnFoot2D(184.4611, 870.8157, 2.0, 2.0, false)) {
          $.boarder_2.setObjKillPlayerOnFoot($.player1);
          $.boarder_2_flag = 7;
        }
      }
      if ($.boarder_2_flag == 7) {
        $.boarder_2.setObjKillPlayerOnFoot($.player1);
      }
    }
    else {
      $.boarder_2.removeElegantly();
      $.boarder_2_flag = 0;
    }



    ///////////////////////////////////////////////////////////////////////////////////////////
    // boarder_3 STUFF ////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    if ($.barricade_boat03_flag == 9) {
      if ($.boarder_3_flag == 0) {
        //IF NOT IS_POINT_ON_SCREEN 184.5751 887.7821 8.5 1.0
        const _res252 = $.player1.getCoordinates();
$.x = _res252.x;
$.y = _res252.y;
$.z = _res252.z;
        if ($.z > 11.2) {
          //IF NOT IS_AREA_OCCUPIED 184.1 887.3 7.3 185.1 888.2 9.5 FALSE FALSE TRUE FALSE FALSE
          $.boarder_3 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 184.5751, 887.7821, 8.0);
          $.goon = $.boarder_3;
          await set_up_boarders_shite();  // SCM GOSUB set_up_boarders_shite
          $.boarder_3_flag = 1;
          //ENDIF

        }
      }
    }
    if (!(Char.IsDead($.boarder_3))) {
      if ($.boarder_3_flag == 1) {
        if ($.boarder_3.isObjNoObj()) {
          $.boarder_3.setObjRunToCoord(184.8738, 891.4559);
          $.boarder_3.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_3.locateOnFoot2D(184.8738, 891.4559, 1.0, 1.0, false)) {
          $.boarder_3.setObjRunToCoord(194.5447, 914.6995);
          $.boarder_3.setUsePednodeSeek(false /* FALSE */);
          $.boarder_3_flag = 2;
        }
      }
      if ($.boarder_3_flag == 2) {
        if ($.boarder_3.isObjNoObj()) {
          $.boarder_3.setObjRunToCoord(194.5447, 914.6995);
          $.boarder_3.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_3.locateOnFoot2D(194.5447, 914.6995, 1.0, 1.0, false)) {
          $.boarder_3.setObjRunToCoord(192.4100, 901.3952);
          $.boarder_3.setUsePednodeSeek(false /* FALSE */);
          $.boarder_3_flag = 3;
        }
      }
      if ($.boarder_3_flag == 3) {
        if ($.boarder_3.isObjNoObj()) {
          $.boarder_3.setObjRunToCoord(192.4100, 901.3952);
          $.boarder_3.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_3.locateOnFoot2D(192.4100, 901.3952, 1.0, 1.0, false)) {
          $.boarder_3.setObjRunToCoord(196.3216, 899.4728);
          $.boarder_3.setUsePednodeSeek(false /* FALSE */);
          $.boarder_3_flag = 4;
        }
      }
      if ($.boarder_3_flag == 4) {
        if ($.boarder_3.isObjNoObj()) {
          $.boarder_3.setObjRunToCoord(196.3216, 899.4728);
          $.boarder_3.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_3.locateOnFoot2D(196.3216, 899.4728, 1.0, 1.0, false)) {
          $.boarder_3.setObjRunToCoord(192.9792, 875.6545);
          $.boarder_3.setUsePednodeSeek(false /* FALSE */);
          $.boarder_3_flag = 5;
        }
      }
      if ($.boarder_3_flag == 5) {
        if ($.boarder_3.isObjNoObj()) {
          $.boarder_3.setObjRunToCoord(192.9792, 875.6545);
          $.boarder_3.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_3.locateOnFoot2D(192.9792, 875.6545, 1.0, 1.0, false)) {
          $.boarder_3.setObjRunToCoord(191.2296, 869.7584);
          $.boarder_3.setUsePednodeSeek(false /* FALSE */);
          $.boarder_3_flag = 6;
        }
      }
      if ($.boarder_3_flag == 6) {
        if ($.boarder_3.isObjNoObj()) {
          $.boarder_3.setObjRunToCoord(191.2296, 869.7584);
          $.boarder_3.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_3.locateOnFoot2D(191.2296, 869.7584, 2.0, 2.0, false)) {
          $.boarder_3.setObjKillPlayerOnFoot($.player1);
          if ($.audio_13_flag == 0) {
            $.audio_13_flag = 1;
            $.audio_13_timeout = $.game_timer + 5000;
          }
          $.boarder_3_flag = 7;
        }
      }
      if ($.boarder_3_flag == 7) {
        $.boarder_3.setObjKillPlayerOnFoot($.player1);
      }
    }
    else {
      $.boarder_3.removeElegantly();
      $.boarder_3_flag = 0;
    }

    ///////////////////////////////////////////////////////////////////////////////////////////
    // boarder_4 STUFF ////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    if ($.boarder_3_flag > 0) {
      if ($.boarder_4_flag == 0) {
        //IF NOT IS_POINT_ON_SCREEN 184.5751 887.7821 8.5 1.0
        const _res253 = $.player1.getCoordinates();
$.x = _res253.x;
$.y = _res253.y;
$.z = _res253.z;
        if ($.z > 11.2) {
          ////IF NOT IS_AREA_OCCUPIED 184.2 887.4 7.4 185.0 888.1 9.0 FALSE FALSE TRUE FALSE FALSE
          $.boarder_4 = Char.Create(9 /* PEDTYPE_GANG_STREET */, HMOST, 184.5751, 887.7821, 8.0);
          $.goon = $.boarder_4;
          await set_up_boarders_shite();  // SCM GOSUB set_up_boarders_shite
          $.boarder_4_flag = 1;
          //ENDIF

        }
      }
    }
    if (!(Char.IsDead($.boarder_4))) {
      if ($.boarder_4_flag == 1) {
        if ($.boarder_4.isObjNoObj()) {
          $.boarder_4.setObjRunToCoord(184.8738, 891.4559);
          $.boarder_4.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_4.locateOnFoot2D(184.8738, 891.4559, 1.0, 1.0, false)) {
          $.boarder_4.setObjRunToCoord(194.5447, 914.6995);
          $.boarder_4.setUsePednodeSeek(false /* FALSE */);
          $.boarder_4_flag = 2;
        }
      }
      if ($.boarder_4_flag == 2) {
        if ($.boarder_4.isObjNoObj()) {
          $.boarder_4.setObjRunToCoord(194.5447, 914.6995);
          $.boarder_4.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_4.locateOnFoot2D(194.5447, 914.6995, 1.0, 1.0, false)) {
          $.boarder_4.setObjRunToCoord(192.4100, 901.3952);
          $.boarder_4.setUsePednodeSeek(false /* FALSE */);
          $.boarder_4_flag = 3;
        }
      }
      if ($.boarder_4_flag == 3) {
        if ($.boarder_4.isObjNoObj()) {
          $.boarder_4.setObjRunToCoord(192.4100, 901.3952);
          $.boarder_4.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_4.locateOnFoot2D(192.4100, 901.3952, 1.0, 1.0, false)) {
          $.boarder_4.setObjRunToCoord(187.9892, 900.3357);
          $.boarder_4.setUsePednodeSeek(false /* FALSE */);
          $.boarder_4_flag = 4;
        }
      }
      if ($.boarder_4_flag == 4) {
        if ($.boarder_4.isObjNoObj()) {
          $.boarder_4.setObjRunToCoord(187.9892, 900.3357);
          $.boarder_4.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_4.locateOnFoot2D(187.9892, 900.3357, 1.0, 1.0, false)) {
          $.boarder_4.setObjRunToCoord(184.6517, 876.7971);
          $.boarder_4.setUsePednodeSeek(false /* FALSE */);
          $.boarder_4_flag = 5;
        }
      }
      if ($.boarder_4_flag == 5) {
        if ($.boarder_4.isObjNoObj()) {
          $.boarder_4.setObjRunToCoord(184.6517, 876.7971);
          $.boarder_4.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_4.locateOnFoot2D(184.6517, 876.7971, 1.0, 1.0, false)) {
          $.boarder_4.setObjRunToCoord(184.4611, 870.8157);
          $.boarder_4.setUsePednodeSeek(false /* FALSE */);
          $.boarder_4_flag = 6;
        }
      }
      if ($.boarder_4_flag == 6) {
        if ($.boarder_4.isObjNoObj()) {
          $.boarder_4.setObjRunToCoord(184.4611, 870.8157);
          $.boarder_4.setUsePednodeSeek(false /* FALSE */);
        }
        if ($.boarder_4.locateOnFoot2D(184.4611, 870.8157, 2.0, 2.0, false)) {
          $.boarder_4.setObjKillPlayerOnFoot($.player1);
          $.boarder_4_flag = 7;
        }
      }
      if ($.boarder_4_flag == 7) {
        $.boarder_4.setObjKillPlayerOnFoot($.player1);
      }
    }
    else {
      $.boarder_4.removeElegantly();
      $.boarder_4_flag = 0;
    }

    //195.7159 886.0515 8.0 //WARP DUDE FROM BOAT ONTO BOTTOM DECK
    //184.5751 887.7821 8.0

    //GOTOS TO GET ONTO TOP DECK
    //196.3903 888.9396//184.8738 891.4559
    //194.5447 914.6995
    //192.4100 901.3952
    //196.3216 899.4728//187.9892 900.3357
    //192.9792 875.6545//184.6517 876.7971
    //191.2296 869.7584//184.4611 870.8157


    ///////////////////////////////////////////////////////////////////////////////////////////
    // HELI1 STUFF ////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    if ($.heli1_counter == -1) {
      if ($.heli1_timer < $.game_timer) {
        $.heli1_counter = 0;
      }
    }


    if ($.heli1_counter == 0) {
      $.heli1 = Car.Create(MAVERICK, 314.2827, 993.9822, 13.2063);
      $.heli1_pilot = Char.CreateInsideCar($.heli1, 9 /* PEDTYPE_GANG_STREET */, HMOST);
      $.heli1.lockDoors(2 /* CARLOCK_LOCKED */);
      $.heli1_passenger1 = Char.CreateAsPassenger($.heli1, 9 /* PEDTYPE_GANG_STREET */, HMOST, 0);
      $.heli_passenger = $.heli1_passenger1;
      await setup_heli_passengers();  // SCM GOSUB setup_heli_passengers
      $.heli1_passenger2 = Char.CreateAsPassenger($.heli1, 9 /* PEDTYPE_GANG_STREET */, HMOST, 1);
      $.heli_passenger = $.heli1_passenger2;
      await setup_heli_passengers();  // SCM GOSUB setup_heli_passengers
      $.heli1_passenger3 = Char.CreateAsPassenger($.heli1, 9 /* PEDTYPE_GANG_STREET */, HMOST, 2);
      $.heli_passenger = $.heli1_passenger3;
      await setup_heli_passengers();  // SCM GOSUB setup_heli_passengers
      $.heli1.setForwardSpeed(0.1);
      $.heli1.gotoCoords(314.2827, 993.9822, 40.0, 30);
      $.heli1_counter = 1;
    }
    if ($.heli1_counter > 0) {
      if (!(Car.IsDead($.heli1))) {
        if (!(Char.IsDead($.heli1_pilot))) {
          if ($.heli1_counter == 1) {
            if ($.heli1.locate3D(314.2827, 993.9822, 40.0, 5.0, 5.0, 4.0, false)) {
              $.heli1_counter = 2;
            }
          }
          if ($.heli1_counter == 2) {
            $.heli1.gotoCoords(188.1993, 877.1445, 30.0, 20);
            if ($.next_text == 2) {
              Text.PrintNow("COL5_B5", 5000, 1); //~g~Shoot down the helicopters, do not endanger the yacht.
              $.text_timer = $.game_timer + 4000;
              if ($.audio_4_flag == 0) {
                $.audio_4_flag = 1;
                $.audio_4_timeout = $.game_timer + 5000;
              }
              $.next_text++;
            }
            if ($.heli1.locate3D(188.1993, 877.1445, 30.0, 10.0, 10.0, 5.0, false)) {
              $.heli1_counter = 3;
            }
          }
          if ($.heli1_counter == 3) {
            $.heli1.gotoCoords(188.1993, 877.1445, 16.0, 10);
            if ($.heli1.locate2D(188.1993, 877.1445, 5.0, 5.0, false)) {
              $.heli_dropoff_timer = $.game_timer + 100;
              $.heli1_counter = 4;
            }
          }
          if ($.heli1_counter == 4) {
            if ($.game_timer > $.heli_dropoff_timer) {
              if (!(Char.IsDead($.heli1_passenger1))) {
                $.heli1_passenger1.setObjKillPlayerOnFoot($.player1);
              }
              $.heli_dropoff_timer = $.game_timer + 100;
              $.heli1_counter = 5;
            }
          }
          if ($.heli1_counter == 5) {
            if ($.game_timer > $.heli_dropoff_timer) {
              if (!(Char.IsDead($.heli1_passenger2))) {
                $.heli1_passenger2.setObjKillPlayerOnFoot($.player1);
              }
              $.heli_dropoff_timer = $.game_timer + 80;
              $.heli1_counter = 6;
            }
          }
          if ($.heli1_counter == 6) {
            if ($.game_timer > $.heli_dropoff_timer) {
              if (!(Char.IsDead($.heli1_passenger3))) {
                $.heli1_passenger3.setObjKillPlayerOnFoot($.player1);
              }
              $.heli_dropoff_timer = $.game_timer + 1500;
              if ($.audio_12_flag == 0) {
                $.audio_12_flag = 1;
                $.audio_12_timeout = $.game_timer + 5000;
              }
              else {
                $.audio_12_flag = 0;
                if ($.audio_13_flag == 0) {
                  $.audio_13_flag = 1;
                  $.audio_13_timeout = $.game_timer + 5000;
                }
              }
              $.heli1_counter = 7;
            }
          }
          if ($.heli1_counter == 7) {
            if ($.game_timer > $.heli_dropoff_timer) {
              $.heli1.gotoCoords(189.1993, 879.1445, 30.0, 20);
              if ($.heli1.locate3D(189.1993, 879.1445, 30.0, 5.0, 5.0, 4.0, false)) {
                $.heli1_counter = 8;
              }
            }
          }
          if ($.heli1_counter == 8) {
            $.heli1.gotoCoords(314.2827, 993.9822, 40.0, 20);
            if ($.heli1.locate3D(314.2827, 993.9822, 40.0, 5.0, 5.0, 4.0, false)) {
              $.heli1_counter = 9;
            }
          }
          if ($.heli1_counter == 9) {
            $.heli1.gotoCoords(314.2827, 993.9822, 15.0, 20);
            if ($.heli1.locate3D(314.2827, 993.9822, 15.0, 5.0, 5.0, 4.0, false)) {
              $.heli1_passenger1.markAsNoLongerNeeded();
              $.heli1_passenger2.markAsNoLongerNeeded();
              $.heli1_passenger3.markAsNoLongerNeeded();
              $.heli1_passenger1 = Char.CreateAsPassenger($.heli1, 9 /* PEDTYPE_GANG_STREET */, HMOST, 0);
              $.heli_passenger = $.heli1_passenger1;
              await setup_heli_passengers();  // SCM GOSUB setup_heli_passengers
              $.heli1_passenger2 = Char.CreateAsPassenger($.heli1, 9 /* PEDTYPE_GANG_STREET */, HMOST, 1);
              $.heli_passenger = $.heli1_passenger2;
              await setup_heli_passengers();  // SCM GOSUB setup_heli_passengers
              $.heli1_passenger3 = Char.CreateAsPassenger($.heli1, 9 /* PEDTYPE_GANG_STREET */, HMOST, 2);
              $.heli_passenger = $.heli1_passenger3;
              await setup_heli_passengers();  // SCM GOSUB setup_heli_passengers
              $.heli1.gotoCoords(314.2827, 993.9822, 40.0, 20);
              $.heli1_counter = 1;
            }
          }
        }
        else {
          if (!(Char.IsDead($.heli1_passenger1))) {
            if ($.heli1_passenger1.isInAnyCar()) {
              $.heli1_passenger1.setObjLeaveAnyCar();
            }
          }
          if (!(Char.IsDead($.heli1_passenger2))) {
            if ($.heli1_passenger2.isInAnyCar()) {
              $.heli1_passenger2.setObjLeaveAnyCar();
            }
          }
          if (!(Char.IsDead($.heli1_passenger3))) {
            if ($.heli1_passenger3.isInAnyCar()) {
              $.heli1_passenger3.setObjLeaveAnyCar();
            }
          }
          //SET_CAR_STATUS heli1 STATUS_ABANDONED
          //SET_CAR_MISSION heli1 MISSION_NONE
          $.heli1.makeComeCrashingDown();
          $.heli1.closeAllDoors();
          $.heli1.markAsNoLongerNeeded();
          $.heli1_pilot.removeElegantly();
          $.heli1 = -1;
        }
      }
      else {
        $.heli1.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.heli1_passenger1)) {
        $.heli1_passenger1.removeElegantly();
      }
      if (Char.IsDead($.heli1_passenger2)) {
        $.heli1_passenger2.removeElegantly();
      }
      if (Char.IsDead($.heli1_passenger3)) {
        $.heli1_passenger3.removeElegantly();
      }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////
    // HELI2 STUFF ////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    if (Car.IsDead($.heli1) && $.heli1_counter > 0) {
      if ($.heli2_counter == -1) {
        $.heli2_counter = 0;
      }
    }
    if ($.heli1_counter > 4) {
      if ($.heli2_counter == -1) {
        $.heli2_counter = 0;
      }
    }


    if ($.heli2_counter == 0) {
      $.heli2 = Car.Create(MAVERICK, 302.9623, 909.7476, 11.6869);
      $.heli2_pilot = Char.CreateInsideCar($.heli2, 9 /* PEDTYPE_GANG_STREET */, HMOST);
      $.heli2.lockDoors(2 /* CARLOCK_LOCKED */);
      $.heli2_passenger1 = Char.CreateAsPassenger($.heli2, 9 /* PEDTYPE_GANG_STREET */, HMOST, 0);
      $.heli_passenger = $.heli2_passenger1;
      await setup_heli_passengers();  // SCM GOSUB setup_heli_passengers
      $.heli2_passenger2 = Char.CreateAsPassenger($.heli2, 9 /* PEDTYPE_GANG_STREET */, HMOST, 1);
      $.heli_passenger = $.heli2_passenger2;
      await setup_heli_passengers();  // SCM GOSUB setup_heli_passengers
      $.heli2_passenger3 = Char.CreateAsPassenger($.heli2, 9 /* PEDTYPE_GANG_STREET */, HMOST, 2);
      $.heli_passenger = $.heli2_passenger3;
      await setup_heli_passengers();  // SCM GOSUB setup_heli_passengers
      $.heli2.setForwardSpeed(0.1);
      $.heli2.gotoCoords(302.9623, 909.7476, 32.0, 30);
      $.heli2_counter = 1;
    }


    if ($.heli2_counter > 0) {
      if (!(Car.IsDead($.heli2))) {
        if (!(Char.IsDead($.heli2_pilot))) {
          if ($.heli2_counter == 1) {
            if ($.heli2.locate3D(302.9623, 909.7476, 32.0, 5.0, 5.0, 4.0, false)) {
              $.heli2_counter = 2;
            }
          }
          if ($.heli2_counter == 2) {
            $.heli2.gotoCoords(188.1993, 879.1445, 25.0, 20);
            if ($.heli2.locate3D(188.1993, 879.1445, 25.0, 10.0, 10.0, 5.0, false)) {
              if ($.audio_4_flag == 0) {
                $.audio_4_flag = 1;
                $.audio_4_timeout = $.game_timer + 5000;
              }
              $.heli2_counter = 3;
            }
          }
          if ($.heli2_counter == 3) {
            $.heli2.gotoCoords(188.1993, 879.1445, 16.0, 10);
            if ($.heli2.locate2D(188.1993, 879.1445, 5.0, 5.0, false)) {
              $.heli_dropoff_timer = $.game_timer + 100;
              $.heli2_counter = 4;
            }
          }
          if ($.heli2_counter == 4) {
            if ($.game_timer > $.heli_dropoff_timer) {
              if (!(Char.IsDead($.heli2_passenger1))) {
                $.heli2_passenger1.setObjKillPlayerOnFoot($.player1);
              }
              $.heli_dropoff_timer = $.game_timer + 100;
              $.heli2_counter = 5;
            }
          }
          if ($.heli2_counter == 5) {
            if ($.game_timer > $.heli_dropoff_timer) {
              if (!(Char.IsDead($.heli2_passenger2))) {
                $.heli2_passenger2.setObjKillPlayerOnFoot($.player1);
              }
              $.heli_dropoff_timer = $.game_timer + 80;
              $.heli2_counter = 6;
            }
          }
          if ($.heli2_counter == 6) {
            if ($.game_timer > $.heli_dropoff_timer) {
              if (!(Char.IsDead($.heli2_passenger3))) {
                $.heli2_passenger3.setObjKillPlayerOnFoot($.player1);
              }
              $.heli_dropoff_timer = $.game_timer + 1500;
              if ($.audio_14_flag == 0) {
                $.audio_14_flag = 1;
                $.audio_14_timeout = $.game_timer + 5000;
              }
              else {
                $.audio_14_flag = 0;
                if ($.audio_16_flag == 0) {
                  $.audio_16_flag = 1;
                  $.audio_16_timeout = $.game_timer + 5000;
                }
              }
              $.heli2_counter = 7;
            }
          }
          if ($.heli2_counter == 7) {
            if ($.game_timer > $.heli_dropoff_timer) {
              $.heli2.gotoCoords(189.1993, 879.1445, 30.0, 20);
              if ($.heli2.locate3D(189.1993, 879.1445, 30.0, 5.0, 5.0, 4.0, false)) {
                $.heli2_counter = 8;
              }
            }
          }
          if ($.heli2_counter == 8) {
            $.heli2.gotoCoords(302.9623, 909.7476, 32.0, 20);
            if ($.heli2.locate3D(302.9623, 909.7476, 32.0, 5.0, 5.0, 4.0, false)) {
              $.heli2_counter = 9;
            }
          }
          if ($.heli2_counter == 9) {
            $.heli2.gotoCoords(302.9623, 909.7476, 13.0, 20);
            if ($.heli2.locate3D(302.9623, 909.7476, 13.0, 5.0, 5.0, 4.0, false)) {
              $.heli2_passenger1.markAsNoLongerNeeded();
              $.heli2_passenger2.markAsNoLongerNeeded();
              $.heli2_passenger3.markAsNoLongerNeeded();
              $.heli2_passenger1 = Char.CreateAsPassenger($.heli2, 9 /* PEDTYPE_GANG_STREET */, HMOST, 0);
              $.heli_passenger = $.heli2_passenger1;
              await setup_heli_passengers();  // SCM GOSUB setup_heli_passengers
              $.heli2_passenger2 = Char.CreateAsPassenger($.heli2, 9 /* PEDTYPE_GANG_STREET */, HMOST, 1);
              $.heli_passenger = $.heli2_passenger2;
              await setup_heli_passengers();  // SCM GOSUB setup_heli_passengers
              $.heli2_passenger3 = Char.CreateAsPassenger($.heli2, 9 /* PEDTYPE_GANG_STREET */, HMOST, 2);
              $.heli_passenger = $.heli2_passenger3;
              await setup_heli_passengers();  // SCM GOSUB setup_heli_passengers
              $.heli2.gotoCoords(302.9623, 909.7476, 40.0, 20);
              $.heli2_counter = 1;
            }
          }
        }
        else {
          if (!(Char.IsDead($.heli2_passenger1))) {
            if ($.heli2_passenger1.isInAnyCar()) {
              $.heli2_passenger1.setObjLeaveAnyCar();
            }
          }
          if (!(Char.IsDead($.heli2_passenger2))) {
            if ($.heli2_passenger2.isInAnyCar()) {
              $.heli2_passenger2.setObjLeaveAnyCar();
            }
          }
          if (!(Char.IsDead($.heli2_passenger3))) {
            if ($.heli2_passenger3.isInAnyCar()) {
              $.heli2_passenger3.setObjLeaveAnyCar();
            }
          }
          //SET_CAR_STATUS heli2 STATUS_ABANDONED
          //SET_CAR_MISSION heli2 MISSION_NONE
          $.heli2.makeComeCrashingDown();
          $.heli2.closeAllDoors();
          $.heli2.markAsNoLongerNeeded();
          $.heli2_pilot.removeElegantly();
          $.heli2 = -1;
        }
      }
      else {
        $.heli2.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.heli2_passenger1)) {
        $.heli2_passenger1.removeElegantly();
      }
      if (Char.IsDead($.heli2_passenger2)) {
        $.heli2_passenger2.removeElegantly();
      }
      if (Char.IsDead($.heli2_passenger3)) {
        $.heli2_passenger3.removeElegantly();
      }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////
    // APACHE STUFF ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    if (!(Car.IsDead($.killer_chopper))) {
      if (!(Char.IsDead($.killer_chopper_pilot))) {
        $.gosub_heli = $.killer_chopper;
        await heli_do_flybys_over_yacht();  // SCM GOSUB heli_do_flybys_over_yacht
        if ($.killer_chopper.locate2D($.the_yacht_x, $.the_yacht_y, 40.0, 40.0, false)) {
          if ($.got_hunter_message == 0) {
            Text.PrintNow("COL5_B4", 5000, 1); //~g~Shoot the attacking helicopter out of the sky.
            $.text_timer = $.game_timer + 4000;
            $.got_hunter_message = 1;
          }
          $.killer_chopper.fireHunterGun();
        }
      }
      else {
        //GET_CAR_COORDINATES killer_chopper x y z
        //z = 0.0
        //HELI_GOTO_COORDS killer_chopper X Y Z 50
        //SET_CAR_STATUS killer_chopper STATUS_ABANDONED
        //SET_CAR_MISSION killer_chopper MISSION_NONE
        $.killer_chopper.makeComeCrashingDown();
        $.killer_chopper.closeAllDoors();
        $.killer_chopper.markAsNoLongerNeeded();
        $.killer_chopper_pilot.markAsNoLongerNeeded();
        $.killer_chopper = -1;
      }
    }
    else {
      $.killer_chopper.markAsNoLongerNeeded();
      $.killer_chopper_pilot.markAsNoLongerNeeded();
      if ($.killer_chopper_created == 0) {
        if (Car.IsDead($.heli1) && $.heli1_counter > 0) {
          if (Car.IsDead($.heli2) && $.heli2_counter > 0) {
            if ($.hunter_timer < $.game_timer) {
              $.player1.setControl(false /* OFF */);
              Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
              Hud.SwitchWidescreen(true /* ON */);
              Game.SetAllCarsCanBeDamaged(false /* FALSE */);
              Camera.SetFadingColor(0, 0, 1);
              Camera.DoFade(500, 0 /* FADE_OUT */);
              $.killer_chopper_created = 1;
            }
          }
          else {
            $.hunter_timer = $.game_timer + 8000;
          }
        }
        else {
          $.hunter_timer = $.game_timer + 8000;
        }
        if ($.killer_chopper_created == 1) {
          $.killer_chopper = Car.Create(HUNTER, 21.2864, 720.1946, 13.0);
          $.killer_chopper.setHeading(312.7112);
          $.killer_chopper_pilot = Char.CreateInsideCar($.killer_chopper, 9 /* PEDTYPE_GANG_STREET */, HMOST);
          $.killer_chopper.setHealth(2500);
          $.killer_chopper.lockDoors(2 /* CARLOCK_LOCKED */);
          $.killer_chopper.setForwardSpeed(30.0);
          $.killer_chopper_created = 2;
        }
      }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////
    // CAR01 BOAT02 BOAT03 STUFF //////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    if (!($.car01_counter == 4)) {
      if (!(Car.IsDead($.car01))) {
        if ($.car01_counter == 1) {
          if ($.car01.locate2D(-247.1728, -1215.7502, 26.0, 26.0, false)) {
            $.car01.setTempAction(6 /* TEMPACT_TURNLEFT */, 200);
            $.car01_timer = $.game_timer + 199;
            $.car01_counter = 2;
          }
        }
        if ($.car01_counter == 2) {
          if ($.game_timer > $.car01_timer) {
            $.car01.setTempAction(3 /* TEMPACT_HANDBRAKETURNLEFT */, 5000);
            $.car01_counter = 3;
          }
        }
        if ($.car01_counter == 3) {
          if ($.car01.isStopped()) {
            $.car01.setTempAction(1 /* TEMPACT_WAIT */, 5000);
            $.car01_counter = 4;
          }
        }
      }
      else {
        if ($.car01_counter == 0) {
          if ($.game_timer > $.car01_timer) {
            World.ClearArea(-238.2693, -1361.3296, 7.0786, 500.0, true /* TRUE */);
            $.car01 = Car.Create(WASHING, -238.2693, -1361.3296, 7.0786);
            $.car01.changeColor(0, 0);
            $.car01.setHeading(10.7405);
            $.car01_goon1 = Char.CreateInsideCar($.car01, 9 /* PEDTYPE_GANG_STREET */, HMOST);
            $.goon = $.car01_goon1;
            await setup_the_goons_shite();  // SCM GOSUB setup_the_goons_shite
            $.car01_goon2 = Char.CreateAsPassenger($.car01, 9 /* PEDTYPE_GANG_STREET */, HMOST, 0);
            $.goon = $.car01_goon2;
            await setup_the_goons_shite();  // SCM GOSUB setup_the_goons_shite
            $.car01_goon3 = Char.CreateAsPassenger($.car01, 9 /* PEDTYPE_GANG_STREET */, HMOST, 1);
            $.goon = $.car01_goon3;
            await setup_the_goons_shite();  // SCM GOSUB setup_the_goons_shite
            $.car01_goon4 = Char.CreateAsPassenger($.car01, 9 /* PEDTYPE_GANG_STREET */, HMOST, 2);
            $.goon = $.car01_goon4;
            await setup_the_goons_shite();  // SCM GOSUB setup_the_goons_shite
            $.car01.setCruiseSpeed(100.0);
            $.car01.setForwardSpeed(30.0);
            $.car01.setDrivingStyle(2);
            $.car01.gotoCoordinatesAccurate(-247.1728, -1215.7502, 7.0856);
            $.car01.setStraightLineDistance(255);
            //SET_CAR_MISSION car01 MISSION_GOTOCOORDS_ASTHECROWSWIMS
            $.car01_counter = 1;
          }
        }
      }
    }
    else {
      if (!(Char.IsDead($.car01_goon1))) {
        if ($.car01_goon1_counter == 0) {
          $.car01_goon1.setObjRunToCoord(-257.2504, -1214.4840);
          $.car01_goon1.setUsePednodeSeek(false /* FALSE */);
          $.car01_goon1_counter = 1;
        }
        if ($.car01_goon1_counter == 1) {
          if ($.car01_goon1.locateOnFoot2D(-257.2504, -1214.4840, 1.5, 1.5, false)) {
            $.car01_goon1.setObjRunToCoord(-266.0016, -1214.5647);
            $.car01_goon1.setUsePednodeSeek(false /* FALSE */);
            $.car01_goon1_counter = 2;
          }
        }
        if ($.car01_goon1_counter == 2) {
          if ($.car01_goon1.locateOnFoot2D(-266.0016, -1214.5647, 1.5, 1.5, false)) {
            $.car01_goon1.setObjRunToCoord(-321.7568, -1214.5964);
            $.car01_goon1.setUsePednodeSeek(false /* FALSE */);
            $.car01_goon1_counter = 3;
          }
        }
        if ($.car01_goon1_counter == 3) {
          if ($.car01_goon1.locateOnFoot2D(-321.7568, -1214.5964, 1.5, 1.5, false)) {
            $.car01_goon1.setObjRunToCoord(-323.5134, -1232.9800); //CATAMARAN
            $.car01_goon1.setUsePednodeSeek(false /* FALSE */);
            $.car01_goon1_counter = 4;
          }
        }
        if ($.car01_goon1_counter == 4) {
          if ($.car01_goon1.locateOnFoot2D(-323.5134, -1232.9800, 1.5, 1.5, false)) {
            if (!(Car.IsDead($.boat03))) {
              $.car01_goon1.attachToCar($.boat03, 0.0, 4.0, 1.5, 0, 360.0, 23 /* WEAPONTYPE_UZI */);
              $.car01_goon1_counter = 5;
            }
            else {
              $.car01_goon1.setObjKillPlayerOnFoot($.player1);
            }
          }
        }
        if ($.car01_goon1_counter == 5) {
          $.car01_goon1.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (!(Char.IsDead($.car01_goon2))) {
        if ($.car01_goon2_counter == 0) {
          $.car01_goon2.setObjRunToCoord(-257.2504, -1214.4840);
          $.car01_goon2.setUsePednodeSeek(false /* FALSE */);
          $.car01_goon2_counter = 1;
        }
        if ($.car01_goon2_counter == 1) {
          if ($.car01_goon2.locateOnFoot2D(-257.2504, -1214.4840, 1.5, 1.5, false)) {
            $.car01_goon2.setObjRunToCoord(-266.0016, -1214.5647);
            $.car01_goon2.setUsePednodeSeek(false /* FALSE */);
            $.car01_goon2_counter = 2;
          }
        }
        if ($.car01_goon2_counter == 2) {
          if ($.car01_goon2.locateOnFoot2D(-266.0016, -1214.5647, 1.5, 1.5, false)) {
            $.car01_goon2.setObjRunToCoord(-321.7568, -1214.5964);
            $.car01_goon2.setUsePednodeSeek(false /* FALSE */);
            $.car01_goon2_counter = 3;
          }
        }
        if ($.car01_goon2_counter == 3) {
          if ($.car01_goon2.locateOnFoot2D(-321.7568, -1214.5964, 1.5, 1.5, false)) {
            $.car01_goon2.setObjRunToCoord(-323.5134, -1232.9800); //CATAMARAN
            $.car01_goon2.setUsePednodeSeek(false /* FALSE */);
            $.car01_goon2_counter = 4;
          }
        }
        if ($.car01_goon2_counter == 4) {
          if ($.car01_goon2.locateOnFoot2D(-323.5134, -1232.9800, 1.5, 1.5, false)) {
            if (!(Car.IsDead($.boat03))) {
              $.car01_goon2.delete();
              $.car01_goon2 = Char.CreateInsideCar($.boat03, 9 /* PEDTYPE_GANG_STREET */, HMOST);
              $.car01_goon2_counter = 5;
            }
            else {
              $.car01_goon2.setObjKillPlayerOnFoot($.player1);
            }
          }
        }
      }
      if (!(Car.IsDead($.boat03))) {
        if (!(Char.IsDead($.car01_goon2))) {
          if ($.car01_goon1_counter == 5 && $.car01_goon2_counter == 5) {
            const _res254 = $.the_yacht.getOffsetInWorldCoords(-20.0, -20.0, 0.0);
$.x = _res254.x;
$.y = _res254.y;
$.z = _res254.z;
            if ($.boat03.locate3D($.x, $.y, 6.0, 5.0, 5.0, 5.0, false)) {
              $.boat03.setCruiseSpeed(2.0);
              $.heading = $.the_yacht.getHeading();
              $.boat03_heading = $.boat03.getHeading();
              $.heading_diff = $.heading - $.boat03_heading;
              if ($.heading_diff < -180.0) {
                $.heading_diff += 360.0;
              }
              if ($.heading_diff > 180.0) {
                $.heading_diff -= 360.0;
              }
              if ($.heading_diff < 0.0) {
                $.boat03_heading += timed(1.0);
              }
              else {
                $.boat03_heading -= timed(1.0);
              }
              if ($.heading_diff > 5.0 && $.heading_diff < -5.0) {
                $.boat03.setHeading($.boat03_heading);
              }
            }
            else {
              if ($.boat03.locate2D($.x, $.y, 10.0, 10.0, false)) {
                $.boat03.setCruiseSpeed(6.0);
                $.heading = $.the_yacht.getHeading();
                $.boat03_heading = $.boat03.getHeading();
                $.heading_diff = $.heading - $.boat03_heading;
                if ($.heading_diff < -180.0) {
                  $.heading_diff += 360.0;
                }
                if ($.heading_diff > 180.0) {
                  $.heading_diff -= 360.0;
                }
                if ($.heading_diff < 0.0) {
                  $.boat03_heading += timed(1.0);
                }
                else {
                  $.boat03_heading -= timed(1.0);
                }
                if ($.heading_diff > 5.0 && $.heading_diff < -5.0) {
                  $.boat03.setHeading($.boat03_heading);
                }
              }
              else {
                $.boat03.setCruiseSpeed(12.0);
              }
            }
            $.boat03.goto($.x, $.y, 6.0);
            if (!($.boat03.locate2D($.the_yacht_x, $.the_yacht_y, 300.0, 300.0, false))) {
              $.car01_goon1 = -1;
            }
            if (Char.IsDead($.car01_goon1)) {
              $.car02.markAsNoLongerNeeded();
              $.boat03.markAsNoLongerNeeded();
              $.boat03 = -1;
              $.car01_goon2.markAsNoLongerNeeded();
              $.car01_goon1.markAsNoLongerNeeded();
              $.boat03_dead = 1;
            }
          }
        }
        else {
          $.car02.markAsNoLongerNeeded();
          $.boat03.markAsNoLongerNeeded();
          $.boat03 = -1;
          $.car01_goon2.markAsNoLongerNeeded();
          $.car01_goon1.markAsNoLongerNeeded();
          $.boat03_dead = 1;
        }
      }
      else {
        if ($.played_this_dialogue == 0) {
          if (!(Car.IsDead($.boat01))) {
            if (Car.IsDead($.boat02)) {
              if ($.audio_2_flag == 0) {
                $.audio_2_flag = 1;
                $.audio_2_timeout = $.game_timer + 5000;
              }
              $.played_this_dialogue = 1;
            }
          }
        }
        $.car02.markAsNoLongerNeeded();
        $.boat03.markAsNoLongerNeeded();
        $.boat03 = -1;
        $.car01_goon2.markAsNoLongerNeeded();
        $.car01_goon1.markAsNoLongerNeeded();
        $.boat03_dead = 1;
      }
      if (!(Char.IsDead($.car01_goon3))) {
        if ($.car01_goon3_counter == 0) {
          $.car01_goon3.setObjRunToCoord(-257.2504, -1214.4840);
          $.car01_goon3.setUsePednodeSeek(false /* FALSE */);
          $.car01_goon3_counter = 1;
        }
        if ($.car01_goon3_counter == 1) {
          if ($.car01_goon3.locateOnFoot2D(-257.2504, -1214.4840, 1.5, 1.5, false)) {
            $.car01_goon3.setObjRunToCoord(-266.0016, -1214.5647);
            $.car01_goon3.setUsePednodeSeek(false /* FALSE */);
            $.car01_goon3_counter = 2;
          }
        }
        if ($.car01_goon3_counter == 2) {
          if ($.car01_goon3.locateOnFoot2D(-266.0016, -1214.5647, 1.5, 1.5, false)) {
            $.car01_goon3.setObjRunToCoord(-321.7568, -1214.5964);
            $.car01_goon3.setUsePednodeSeek(false /* FALSE */);
            $.car01_goon3_counter = 3;
          }
        }
        if ($.car01_goon3_counter == 3) {
          if ($.car01_goon3.locateOnFoot2D(-321.7568, -1214.5964, 1.5, 1.5, false)) {
            $.car01_goon3.setObjRunToCoord(-332.7804, -1217.1168);
            $.car01_goon3.setUsePednodeSeek(false /* FALSE */);
            $.car01_goon3_counter = 4;
          }
        }
        if ($.car01_goon3_counter == 4) {
          if ($.car01_goon3.locateOnFoot2D(-332.7804, -1217.1168, 2.0, 2.0, false)) {
            if (!(Car.IsDead($.boat02))) {
              $.car01_goon3.attachToCar($.boat02, 0.6462, 1.4897, 1.3333, 0, 360.0, 23 /* WEAPONTYPE_UZI */);
              $.car01_goon3_counter = 5;
            }
            else {
              $.car01_goon3.setObjKillPlayerOnFoot($.player1);
            }
          }
        }
        if ($.car01_goon1_counter == 5) {
          $.car01_goon3.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (!(Char.IsDead($.car01_goon4))) {
        if ($.car01_goon4_counter == 0) {
          $.car01_goon4.setObjRunToCoord(-257.2504, -1214.4840);
          $.car01_goon4.setUsePednodeSeek(false /* FALSE */);
          $.car01_goon4_counter = 1;
        }
        if ($.car01_goon4_counter == 1) {
          if ($.car01_goon4.locateOnFoot2D(-257.2504, -1214.4840, 1.5, 1.5, false)) {
            $.car01_goon4.setObjRunToCoord(-266.0016, -1214.5647);
            $.car01_goon4.setUsePednodeSeek(false /* FALSE */);
            $.car01_goon4_counter = 2;
          }
        }
        if ($.car01_goon4_counter == 2) {
          if ($.car01_goon4.locateOnFoot2D(-266.0016, -1214.5647, 1.5, 1.5, false)) {
            $.car01_goon4.setObjRunToCoord(-321.7568, -1214.5964);
            $.car01_goon4.setUsePednodeSeek(false /* FALSE */);
            $.car01_goon4_counter = 3;
          }
        }
        if ($.car01_goon4_counter == 3) {
          if ($.car01_goon4.locateOnFoot2D(-321.7568, -1214.5964, 1.5, 1.5, false)) {
            $.car01_goon4.setObjRunToCoord(-332.7804, -1217.1168);
            $.car01_goon4.setUsePednodeSeek(false /* FALSE */);
            $.car01_goon4_counter = 4;
          }
        }
        if ($.car01_goon4_counter == 4) {
          if ($.car01_goon4.locateOnFoot2D(-332.7804, -1217.1168, 2.0, 2.0, false)) {
            if (!(Car.IsDead($.boat02))) {
              $.car01_goon4.delete();
              $.car01_goon4 = Char.CreateInsideCar($.boat02, 9 /* PEDTYPE_GANG_STREET */, HMOST);
              $.car01_goon4_counter = 5;
            }
            else {
              $.car01_goon4.setObjKillPlayerOnFoot($.player1);
            }
          }
        }
      }
      if (!(Car.IsDead($.boat02))) {
        if (!(Char.IsDead($.car01_goon4))) {
          if ($.car01_goon3_counter == 5 && $.car01_goon4_counter == 5) {
            const _res255 = $.the_yacht.getOffsetInWorldCoords(-20.0, 0.0, 0.0);
$.x = _res255.x;
$.y = _res255.y;
$.z = _res255.z;
            if ($.boat02.locate3D($.x, $.y, 6.0, 5.0, 5.0, 5.0, false)) {
              $.boat02.setCruiseSpeed(2.0);
              $.heading = $.the_yacht.getHeading();
              $.boat02_heading = $.boat02.getHeading();
              $.heading_diff = $.heading - $.boat02_heading;
              if ($.heading_diff < -180.0) {
                $.heading_diff += 360.0;
              }
              if ($.heading_diff > 180.0) {
                $.heading_diff -= 360.0;
              }
              if ($.heading_diff < 0.0) {
                $.boat02_heading += timed(1.0);
              }
              else {
                $.boat02_heading -= timed(1.0);
              }
              if ($.heading_diff > 5.0 && $.heading_diff < -5.0) {
                $.boat02.setHeading($.boat02_heading);
              }
            }
            else {
              if ($.boat02.locate2D($.x, $.y, 10.0, 10.0, false)) {
                $.boat02.setCruiseSpeed(6.0);
                $.heading = $.the_yacht.getHeading();
                $.boat02_heading = $.boat02.getHeading();
                $.heading_diff = $.heading - $.boat02_heading;
                if ($.heading_diff < -180.0) {
                  $.heading_diff += 360.0;
                }
                if ($.heading_diff > 180.0) {
                  $.heading_diff -= 360.0;
                }
                if ($.heading_diff < 0.0) {
                  $.boat02_heading += timed(1.0);
                }
                else {
                  $.boat02_heading -= timed(1.0);
                }
                if ($.heading_diff > 5.0 && $.heading_diff < -5.0) {
                  $.boat02.setHeading($.boat02_heading);
                }
              }
              else {
                $.boat02.setCruiseSpeed(12.0);
              }
            }
            $.boat02.goto($.x, $.y, 6.0);
          }
          if (!($.boat02.locate2D($.the_yacht_x, $.the_yacht_y, 300.0, 300.0, false))) {
            $.car01_goon3 = -1;
          }
          if (Char.IsDead($.car01_goon3)) {
            $.car02.markAsNoLongerNeeded();
            $.boat02.markAsNoLongerNeeded();
            $.boat02 = -1;
            $.car01_goon4.markAsNoLongerNeeded();
            $.car01_goon3.markAsNoLongerNeeded();
            $.boat02_dead = 1;
          }
        }
        else {
          $.car02.markAsNoLongerNeeded();
          $.boat02.markAsNoLongerNeeded();
          $.boat02 = -1;
          $.car01_goon4.markAsNoLongerNeeded();
          $.car01_goon3.markAsNoLongerNeeded();
          $.boat02_dead = 1;
        }
      }
      else {
        if ($.played_this_dialogue == 0) {
          if (!(Car.IsDead($.boat01))) {
            if (Car.IsDead($.boat03)) {
              if ($.audio_2_flag == 0) {
                $.audio_2_flag = 1;
                $.audio_2_timeout = $.game_timer + 5000;
              }
              $.played_this_dialogue = 1;
            }
          }
        }
        $.car02.markAsNoLongerNeeded();
        $.boat02.markAsNoLongerNeeded();
        $.boat02 = -1;
        $.car01_goon4.markAsNoLongerNeeded();
        $.car01_goon3.markAsNoLongerNeeded();
        $.boat02_dead = 1;
      }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////
    // CAR02 BOAT01 STUFF /////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    if (!($.car02_counter == 4)) {
      if (!(Car.IsDead($.car02))) {
        if ($.car02_counter == 1) {
          if ($.car02.locate2D(-247.1728, -1215.7502, 33.0, 33.0, false)) {
            $.car02.setTempAction(7 /* TEMPACT_TURNRIGHT */, 200);
            $.car02_timer = $.game_timer + 199;
            $.car02_counter = 2;
          }
        }
        if ($.car02_counter == 2) {
          if ($.game_timer > $.car02_timer) {
            $.car02.setTempAction(4 /* TEMPACT_HANDBRAKETURNRIGHT */, 5000);
            $.car02_counter = 3;
          }
        }
        if ($.car02_counter == 3) {
          if ($.car02.isStopped()) {
            $.car02.setTempAction(1 /* TEMPACT_WAIT */, 5000);
            $.car02_counter = 4;
          }
        }
      }
      else {
        if ($.car02_counter == 0 && $.car01_counter > 0) {
          if (!(World.IsPointObscuredByAMissionEntity(-238.2693, -1361.3296, 7.0786, 4.0, 4.0, 4.0))) {
            $.car02 = Car.Create(WASHING, -238.2693, -1361.3296, 7.0786);
            $.car02.changeColor(0, 0);
            $.car02.setHeading(10.7405);
            Streaming.MarkModelAsNoLongerNeeded(WASHING);
            $.car02_goon1 = Char.CreateInsideCar($.car02, 9 /* PEDTYPE_GANG_STREET */, HMOST);
            $.goon = $.car02_goon1;
            await setup_the_goons_shite();  // SCM GOSUB setup_the_goons_shite
            $.car02_goon2 = Char.CreateAsPassenger($.car02, 9 /* PEDTYPE_GANG_STREET */, HMOST, 0);
            $.goon = $.car02_goon2;
            await setup_the_goons_shite();  // SCM GOSUB setup_the_goons_shite
            $.car02_goon3 = Char.CreateAsPassenger($.car02, 9 /* PEDTYPE_GANG_STREET */, HMOST, 1);
            $.goon = $.car02_goon3;
            await setup_the_goons_shite();  // SCM GOSUB setup_the_goons_shite
            $.car02_goon4 = Char.CreateAsPassenger($.car02, 9 /* PEDTYPE_GANG_STREET */, HMOST, 2);
            $.goon = $.car02_goon4;
            await setup_the_goons_shite();  // SCM GOSUB setup_the_goons_shite
            $.car02.setCruiseSpeed(100.0);
            $.car02.setForwardSpeed(30.0);
            $.car02.setDrivingStyle(2);
            $.car02.gotoCoordinatesAccurate(-247.1728, -1215.7502, 7.0856);
            $.car02.setStraightLineDistance(255);
            //SET_CAR_MISSION car02 MISSION_GOTOCOORDS_ASTHECROWSWIMS
            $.car02_counter = 1;
          }
        }
      }
    }
    else {
      if (!(Char.IsDead($.car02_goon1))) {
        $.jetty_stuff_dude = $.car02_goon1;
        $.jetty_stuff_dude_flag = $.car02_goon1_counter;
        await jetty_stuff();  // SCM GOSUB jetty_stuff
        $.car02_goon1_counter = $.jetty_stuff_dude_flag;
        if ($.car02_goon1_counter == 4) {
          if ($.car02_goon1.locateOnFoot2D(-328.9344, -1212.0651, 1.5, 1.5, false)) {
            if (!(Car.IsDead($.boat01))) {
              $.car02_goon1.attachToCar($.boat01, 0.0, -2.0, 1.2, 0, 360.0, 23 /* WEAPONTYPE_UZI */);
              $.car02_goon1_counter = 5;
            }
            else {
              $.car02_goon1.setObjKillPlayerOnFoot($.player1);
            }
          }
        }
        if ($.car02_goon1_counter == 5) {
          $.car02_goon1.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (!(Char.IsDead($.car02_goon2))) {
        $.jetty_stuff_dude = $.car02_goon2;
        $.jetty_stuff_dude_flag = $.car02_goon2_counter;
        await jetty_stuff();  // SCM GOSUB jetty_stuff
        $.car02_goon2_counter = $.jetty_stuff_dude_flag;
        if ($.car02_goon2_counter == 4) {
          if ($.car02_goon2.locateOnFoot2D(-328.9344, -1212.0651, 1.5, 1.5, false)) {
            if (!(Car.IsDead($.boat01))) {
              $.car02_goon2.attachToCar($.boat01, 0.0, 6.0, 2.65, 0, 360.0, 23 /* WEAPONTYPE_UZI */);
              $.car02_goon2_counter = 5;
            }
            else {
              $.car02_goon2.setObjKillPlayerOnFoot($.player1);
            }
          }
        }
        if ($.car02_goon2_counter == 5) {
          $.car02_goon2.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (!(Char.IsDead($.car02_goon3))) {
        $.jetty_stuff_dude = $.car02_goon3;
        $.jetty_stuff_dude_flag = $.car02_goon3_counter;
        await jetty_stuff();  // SCM GOSUB jetty_stuff
        $.car02_goon3_counter = $.jetty_stuff_dude_flag;
        if ($.car02_goon3_counter == 4) {
          if ($.car02_goon3.locateOnFoot2D(-328.9344, -1212.0651, 1.5, 1.5, false)) {
            if (!(Car.IsDead($.boat01))) {
              $.car02_goon3.attachToCar($.boat01, 0.0, 10.0, 1.9, 0, 360.0, 23 /* WEAPONTYPE_UZI */);
              $.car02_goon3_counter = 5;
            }
            else {
              $.car02_goon3.setObjKillPlayerOnFoot($.player1);
            }
          }
        }
        if ($.car02_goon3_counter == 5) {
          $.car02_goon3.setObjKillPlayerOnFoot($.player1);
        }
      }
      if (!(Char.IsDead($.car02_goon4))) {
        $.jetty_stuff_dude = $.car02_goon4;
        $.jetty_stuff_dude_flag = $.car02_goon4_counter;
        await jetty_stuff();  // SCM GOSUB jetty_stuff
        $.car02_goon4_counter = $.jetty_stuff_dude_flag;
        if ($.car02_goon4_counter == 4) {
          if ($.car02_goon4.locateOnFoot2D(-328.9344, -1212.0651, 1.5, 1.5, false)) {
            if (!(Car.IsDead($.boat01))) {
              $.car02_goon4.delete();
              $.car02_goon4 = Char.CreateInsideCar($.boat01, 9 /* PEDTYPE_GANG_STREET */, HMOST);
              $.boat01_timer = $.game_timer + 5000;
              $.car02_goon4_counter = 5;
            }
            else {
              $.car02_goon4.setObjKillPlayerOnFoot($.player1);
            }
          }
        }
      }
      if (!(Car.IsDead($.boat01))) {
        if (!(Char.IsDead($.car02_goon4))) {
          if ($.car02_goon1_counter == 5 && $.car02_goon2_counter == 5 && $.car02_goon3_counter == 5 && $.car02_goon4_counter == 5 && $.game_timer > $.boat01_timer) {
            if ($.played_this_dialogue2 == 0) {
              if ($.audio_1_flag == 0) {
                $.audio_1_flag = 1;
                $.audio_1_timeout = $.game_timer + 5000;
              }
              if (!(Car.IsDead($.boat01))) {
                //						IF NOT IS_CHAR_DEAD	colonel
                //							SET_CHAR_OBJ_DESTROY_CAR colonel boat01
                //						ENDIF
                if (!(Char.IsDead($.colonel_goon1))) {
                  $.colonel_goon1.setObjDestroyCar($.boat01);
                }
              }
              if (!(Car.IsDead($.boat02))) {
                if (!(Char.IsDead($.colonel_goon2))) {
                  $.colonel_goon2.setObjDestroyCar($.boat02);
                }
              }
              if (!(Car.IsDead($.boat03))) {
                if (!(Char.IsDead($.colonel_goon3))) {
                  $.colonel_goon3.setObjDestroyCar($.boat01);
                }
              }
              if (!(Car.IsDead($.boat03))) {
                if (!(Char.IsDead($.colonel_goon4))) {
                  $.colonel_goon4.setObjDestroyCar($.boat03);
                }
              }
              $.played_this_dialogue2 = 1;
            }
            const _res256 = $.the_yacht.getOffsetInWorldCoords(20.0, 20.0, 0.0);
$.x = _res256.x;
$.y = _res256.y;
$.z = _res256.z;
            $.heading = $.the_yacht.getHeading();
            $.boat01_heading = $.boat01.getHeading();
            $.heading_diff = $.heading - $.boat01_heading;
            if ($.heading_diff < -180.0) {
              $.heading_diff += 360.0;
            }
            if ($.heading_diff > 180.0) {
              $.heading_diff -= 360.0;
            }
            if ($.heading_diff < 0.0) {
              $.boat01_heading -= timed(2.0);
            }
            else {
              $.boat01_heading += timed(2.0);
            }
            if ($.heading_diff > 5.0 && $.heading_diff < -5.0) {
              $.boat01.setHeading($.boat01_heading);
            }
            if ($.boat01.locate3D($.x, $.y, 6.0, 10.0, 10.0, 5.0, false)) {
              $.boat01.setCruiseSpeed(2.0);
            }
            else {
              if ($.boat01.locate2D($.x, $.y, 30.0, 30.0, false)) {
                $.boat01.setCruiseSpeed(6.0);
              }
              else {
                $.boat01.setCruiseSpeed(12.0);
              }
            }
            $.boat01.goto($.x, $.y, 6.0);
          }
          if (!($.boat01.locate2D($.the_yacht_x, $.the_yacht_y, 300.0, 300.0, false))) {
            $.car02_goon1 = -1;
            $.car02_goon2 = -1;
            $.car02_goon3 = -1;
          }
          if (Char.IsDead($.car02_goon1)) {
            if (Char.IsDead($.car02_goon2)) {
              if (Char.IsDead($.car02_goon3)) {
                $.boat01.markAsNoLongerNeeded();
                $.boat01 = -1;
                $.car01.markAsNoLongerNeeded();
                $.car02_goon1.markAsNoLongerNeeded();
                $.car02_goon2.markAsNoLongerNeeded();
                $.car02_goon3.markAsNoLongerNeeded();
                $.car02_goon4.markAsNoLongerNeeded();
                $.boat01_dead = 1;
              }
            }
          }
        }
        else {
          $.boat01.markAsNoLongerNeeded();
          $.boat01 = -1;
          $.car01.markAsNoLongerNeeded();
          $.car02_goon1.markAsNoLongerNeeded();
          $.car02_goon2.markAsNoLongerNeeded();
          $.car02_goon3.markAsNoLongerNeeded();
          $.car02_goon4.markAsNoLongerNeeded();
          $.boat01_dead = 1;
        }
      }
      else {
        if ($.played_this_dialogue3 == 0) {
          if (!(Car.IsDead($.boat02)) || !(Car.IsDead($.boat03))) {
            if ($.audio_1_flag == 0) {
              $.audio_1_flag = 1;
              $.audio_1_timeout = $.game_timer + 5000;
            }
            $.played_this_dialogue3 = 1;
          }
        }
        $.boat01.markAsNoLongerNeeded();
        $.boat01 = -1;
        $.car01.markAsNoLongerNeeded();
        $.car02_goon1.markAsNoLongerNeeded();
        $.car02_goon2.markAsNoLongerNeeded();
        $.car02_goon3.markAsNoLongerNeeded();
        $.car02_goon4.markAsNoLongerNeeded();
        $.boat01_dead = 1;
      }
    }


    ///////////////////////////////////////////////////////////////////////////////////////////
    // AUDIO STUFF ////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    if ($.audio_1_flag > 0) {
      if ($.audio_1_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL5_1");
          $.audio_1_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general5_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_1_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.text_timer < $.game_timer) {
            Text.PrintNow("COL5_1", 10000, 1); //Port side! Port side!
          }
          $.audio_1_flag = 3;
        }
      }
      if ($.audio_1_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL5_1" as any);
          $.audio_1_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_1_timeout) {
            $.audio_1_flag = 0;
          }
        }
      }
    }


    if ($.audio_2_flag > 0) {
      if ($.audio_2_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL5_2");
          $.audio_2_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general5_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_2_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.text_timer < $.game_timer) {
            Text.PrintNow("COL5_2", 10000, 1); //They're attacking from starboard!
          }
          $.audio_2_flag = 3;
        }
      }
      if ($.audio_2_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL5_2" as any);
          $.audio_2_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_2_timeout) {
            $.audio_2_flag = 0;
          }
        }
      }
    }


    if ($.audio_3_flag > 0) {
      if ($.audio_3_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL5_3");
          $.audio_3_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general5_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_3_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.text_timer < $.game_timer) {
            Text.PrintNow("COL5_3", 10000, 1); //The bridge up ahead!
          }
          $.audio_3_flag = 3;
        }
      }
      if ($.audio_3_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL5_3" as any);
          $.audio_3_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_3_timeout) {
            $.audio_3_flag = 0;
          }
        }
      }
    }


    if ($.audio_4_flag > 0) {
      if ($.audio_4_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL5_17");
          Text.ClearThisPrint("COL5_18");
          Text.ClearThisPrint("COL5_19");
          Text.ClearThisPrint("COL5_20");
          Text.ClearThisPrint("COL5_21");
          Text.ClearThisPrint("COL5_22");
          $.audio_4_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general5_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_4_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.text_timer < $.game_timer) {
            if ($.heli_audio_counter == 0) {
              Text.PrintNow("COL5_17", 10000, 1); //Oh my god they've got a helicopter!
            }
            if ($.heli_audio_counter == 1) {
              Text.PrintNow("COL5_18", 10000, 1); //Shoot the helicopter!
            }
            if ($.heli_audio_counter == 2) {
              Text.PrintNow("COL5_19", 10000, 1); //Tommy, take that chopper out!
            }
            if ($.heli_audio_counter == 3) {
              Text.PrintNow("COL5_20", 10000, 1); //He's coming again!  Blow that chopper!
            }
            if ($.heli_audio_counter == 4) {
              Text.PrintNow("COL5_21", 10000, 1); //Look at the size of that chopper!
            }
            if ($.heli_audio_counter == 5) {
              Text.PrintNow("COL5_22", 10000, 1); //Here he comes again!
            }
          }
          ++$.heli_audio_counter;
          if ($.heli_audio_counter == 6) {
            $.heli_audio_counter = 0;
          }
          $.audio_4_flag = 3;
        }
      }
      if ($.audio_4_flag == 1) {
        if ($.is_audio_in_use == 0) {
          if ($.heli_audio_counter == 0) {
            Audio.LoadMissionAudio(1, "COL5_17" as any);
          }
          if ($.heli_audio_counter == 1) {
            Audio.LoadMissionAudio(1, "COL5_18" as any);
          }
          if ($.heli_audio_counter == 2) {
            Audio.LoadMissionAudio(1, "COL5_19" as any);
          }
          if ($.heli_audio_counter == 3) {
            Audio.LoadMissionAudio(1, "COL5_20" as any);
          }
          if ($.heli_audio_counter == 4) {
            Audio.LoadMissionAudio(1, "COL5_21" as any);
          }
          if ($.heli_audio_counter == 5) {
            Audio.LoadMissionAudio(1, "COL5_22" as any);
          }
          $.audio_4_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_4_timeout) {
            $.audio_4_flag = 0;
          }
        }
      }
    }

    //COLONEL DIALOGUE

    if ($.audio_7_flag > 0) {
      if ($.audio_7_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL5_7");
          $.audio_7_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general5_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_7_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.text_timer < $.game_timer) {
            Text.PrintNow("COL5_7", 10000, 1); //Stop shooting at me!
          }
          $.audio_7_flag = 3;
        }
      }
      if ($.audio_7_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL5_7" as any);
          $.audio_7_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_7_timeout) {
            $.audio_7_flag = 0;
          }
        }
      }
    }


    if ($.audio_9_flag > 0) {
      if ($.audio_9_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL5_9");
          $.audio_9_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general5_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_9_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.text_timer < $.game_timer) {
            Text.PrintNow("COL5_9", 10000, 1); //Tommy, stop them shooting at me!
          }
          $.audio_9_flag = 3;
        }
      }
      if ($.audio_9_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL5_9" as any);
          $.audio_9_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_9_timeout) {
            $.audio_9_flag = 0;
          }
        }
      }
    }


    if ($.audio_10_flag > 0) {
      if ($.audio_10_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL5_10");
          $.audio_10_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general5_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_10_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.text_timer < $.game_timer) {
            Text.PrintNow("COL5_10", 10000, 1); //I have diplomatic immunity!
          }
          $.audio_10_flag = 3;
        }
      }
      if ($.audio_10_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL5_10" as any);
          $.audio_10_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_10_timeout) {
            $.audio_10_flag = 0;
          }
        }
      }
    }


    if ($.audio_11_flag > 0) {
      if ($.audio_11_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL5_11");
          $.audio_11_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general5_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_11_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.text_timer < $.game_timer) {
            Text.PrintNow("COL5_11", 10000, 1); //Don't shoot, I am a Colonel!
          }
          $.audio_11_flag = 3;
        }
      }
      if ($.audio_11_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL5_11" as any);
          $.audio_11_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_11_timeout) {
            $.audio_11_flag = 0;
          }
        }
      }
    }


    if ($.audio_12_flag > 0) {
      if ($.audio_12_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL5_12");
          $.audio_12_flag = 4;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general5_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_12_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.text_timer < $.game_timer) {
            Text.PrintNow("COL5_12", 10000, 1); //Thomas, kill them, my country will love you.
          }
          $.audio_12_flag = 3;
        }
      }
      if ($.audio_12_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL5_12" as any);
          $.audio_12_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_12_timeout) {
            $.audio_12_flag = 0;
          }
        }
      }
    }


    if ($.audio_13_flag > 0) {
      if ($.audio_13_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL5_13");
          $.audio_13_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general5_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_13_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.text_timer < $.game_timer) {
            Text.PrintNow("COL5_13", 10000, 1); //Tommy, we are being over-run by the French!
          }
          $.audio_13_flag = 3;
        }
      }
      if ($.audio_13_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL5_13" as any);
          $.audio_13_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_13_timeout) {
            $.audio_13_flag = 0;
          }
        }
      }
    }


    if ($.audio_14_flag > 0) {
      if ($.audio_14_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL5_14");
          $.audio_14_flag = 4;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general5_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_14_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.text_timer < $.game_timer) {
            Text.PrintNow("COL5_14", 10000, 1); //Tommy, everywhere I look, there are French men, I hate it!
          }
          $.audio_14_flag = 3;
        }
      }
      if ($.audio_14_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL5_14" as any);
          $.audio_14_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_14_timeout) {
            $.audio_14_flag = 0;
          }
        }
      }
    }


    if ($.audio_15_flag > 0) {
      if ($.audio_15_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL5_15");
          $.audio_15_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general5_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_15_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.text_timer < $.game_timer) {
            Text.PrintNow("COL5_15", 10000, 1); //Tommy, how are you?
          }
          $.audio_15_flag = 3;
        }
      }
      if ($.audio_15_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL5_15" as any);
          $.audio_15_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_15_timeout) {
            $.audio_15_flag = 0;
          }
        }
      }
    }


    if ($.audio_16_flag > 0) {
      if ($.audio_16_flag == 3) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("COL5_16");
          $.audio_16_flag = 0;
          $.is_audio_in_use = 0;
          // SCM GOTO → mission_general5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general5_loop"); // fallback: would break linear control flow
        }
      }
      if ($.audio_16_flag == 2) {
        if (Audio.HasMissionAudioLoaded(1)) {
          Audio.PlayMissionAudio(1);
          if ($.text_timer < $.game_timer) {
            Text.PrintNow("COL5_16", 10000, 1); //This is for Piaf and Gainesbourg and your stupid french bread!
          }
          $.audio_16_flag = 3;
        }
      }
      if ($.audio_16_flag == 1) {
        if ($.is_audio_in_use == 0) {
          Audio.LoadMissionAudio(1, "COL5_16" as any);
          $.audio_16_flag = 2;
          $.is_audio_in_use = 1;
        }
        else {
          if ($.game_timer > $.audio_16_timeout) {
            $.audio_16_flag = 0;
          }
        }
      }
    }


  }
}



////////////////////////////////////////////////////////////////////////////////////////////

async function col5b_cutscene() {
  ////////////////////////////////////////////////////////////////////////////////////////////


  $.game_timer = Clock.GetGameTimer();
  $.breakout_timer = $.game_timer + 5000;


  while (!($.player1.canStartMission()) && $.game_timer < $.breakout_timer) {
    await asyncWait(0);
    $.game_timer = Clock.GetGameTimer();
  }


  $.player1.makeSafeForCutscene();
  //SET_FADING_COLOUR 0 0 1
  //DO_FADE 1500 FADE_OUT
  //WHILE GET_FADING_STATUS
  //	WAIT 0
  //ENDWHILE

  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(false /* OFF */);


  $.boat01.delete();
  $.boat02.delete();
  $.boat03.delete();
  $.car01.delete();
  $.car02.delete();
  $.gosub_heli.delete();
  $.killer_chopper.delete();
  $.heli1.delete();
  $.barricade_boat01.delete();
  $.barricade_boat02.delete();
  $.barricade_boat03.delete();
  $.barricade_boat04.delete();
  $.barricade_boat05.delete();
  $.barricade_boat06.delete();
  $.barricade_boat07.delete();
  $.barricade_boat08.delete();
  $.barricade_boat09.delete();
  $.heli2.delete();
  $.gosub_boat.delete();
  $.car01_goon1.delete();
  $.car01_goon2.delete();
  $.car01_goon3.delete();
  $.car01_goon4.delete();
  $.car02_goon1.delete();
  $.car02_goon2.delete();
  $.car02_goon3.delete();
  $.car02_goon4.delete();
  $.colonel.delete();
  $.colonel_goon1.delete();
  $.colonel_goon2.delete();
  $.colonel_goon3.delete();
  $.colonel_goon4.delete();
  $.killer_chopper_pilot.delete();
  $.heli1_pilot.delete();
  $.heli1_passenger1.delete();
  $.heli1_passenger2.delete();
  $.heli1_passenger3.delete();
  $.heli2_pilot.delete();
  $.heli2_passenger1.delete();
  $.heli2_passenger2.delete();
  $.heli2_passenger3.delete();
  $.boarder_1.delete();
  $.boarder_2.delete();
  $.boarder_3.delete();
  $.boarder_4.delete();
  $.barricade_boat01_dr.delete();
  $.barricade_boat01_sh.delete();
  $.barricade_boat02_dr.delete();
  $.barricade_boat02_sh.delete();
  $.barricade_boat03_sh.delete();
  $.barricade_boat05_dr.delete();
  $.barricade_boat05_sh.delete();
  $.barricade_boat06_sh1.delete();
  $.barricade_boat06_sh2.delete();
  $.barricade_boat06_sh3.delete();
  $.barricade_boat03_dr.delete();
  $.barricade_boat09_dr.delete();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);


  Streaming.LoadSpecialCharacter(1, "csplay");
  Streaming.LoadSpecialCharacter(2, "cscolo");


  const _res257 = $.the_yacht.getCoordinates();
$.the_yacht_x = _res257.x;
$.the_yacht_y = _res257.y;
$.the_yacht_z = _res257.z;
  $.the_yacht_x = $.the_yacht_x + 0.003;
  $.the_yacht_y = $.the_yacht_y - 1.381;
  $.the_yacht_z = $.the_yacht_z + 3.149;
  Streaming.LoadScene($.the_yacht_x, $.the_yacht_y, $.the_yacht_z);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }


  Cutscene.Load("COL_5B");
  Camera.SetNearClip(0.1);


  Cutscene.SetOffset($.the_yacht_x, $.the_yacht_y, $.the_yacht_z);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("csplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL02);
  $.cs_ken.setAnim("cscolo");

  //CLEAR_AREA xyz 1.0 TRUE
  //SET_PLAYER_COORDINATES player1 -10.2859 -939.8060 9.4023
  //SET_PLAYER_HEADING player1 270.0


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();


  $.cs_time = Cutscene.GetTime();


  $.cs_time_limit = 5880;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Text.PrintNow("COL5B_1", 10000, 1); //Thomas, you have protected and served me well.


  $.cs_time_limit = 8941;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Text.PrintNow("COL5B_2", 10000, 1); //But now you must leave us before we reach the open seas.


  $.cs_time_limit = 12276;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Text.PrintNow("COL5B_3", 10000, 1); //I will lower my personal launch. Keep it my friend, a token of my gratitude.


  $.cs_time_limit = 17735;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Text.PrintNow("COL5B_4", 10000, 1); //Thank you, Colonel.


  $.cs_time_limit = 18884;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Text.PrintNow("COL5B_5", 10000, 1); //One more request; while I'm away, could you keep an eye on Mercedes for me?


  $.cs_time_limit = 24046;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Text.PrintNow("COL5B_6", 10000, 1); //I think she can look after herself, but sure, I'll keep an eye out.


  $.cs_time_limit = 27722;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Text.PrintNow("COL5B_7", 10000, 1); //Thank you my friend. Until I return.


  $.cs_time_limit = 30400;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Text.PrintNow("COL5B_8", 10000, 1); //Adios amigo.


  $.cs_time_limit = 32127;
  await wait_for_cs_time();  // SCM GOSUB wait_for_cs_time
  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);

  ////////////////////////////////////////////////////////////////////////////////////////////
  //CUTSCENE END//////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  $.the_yacht5.delete();
  const _res258 = $.the_yacht.getOffsetInWorldCoords(0.0, -50.0, 0.0);
$.the_yacht_x = _res258.x;
$.the_yacht_y = _res258.y;
$.the_yacht_z = _res258.z;
  $.colonels_launch = Car.Create(SPEEDER, $.the_yacht_x, $.the_yacht_y, 6.0);
  //CREATE_CAR DINGHY 132.5211 1277.7527 6.0 colonels_launch

  $.colonels_launch.setHeading(270.0);


  if (!($.player1.isInAnyCar())) {
    $.player1.warpIntoCar($.colonels_launch);
  }
  else {
    const _res259 = $.player1.getCoordinates();
$.x = _res259.x;
$.y = _res259.y;
$.z = _res259.z;
    $.z += 1.0;
    $.player1.warpFromCarToCoord($.x, $.y, $.z);
    await asyncWait(0);
    if (!(Car.IsDead($.colonels_launch))) {
      $.player1.warpIntoCar($.colonels_launch);
    }
  }


  $.scplayer.freezePosition(false /* FALSE */);
  Camera.SetBehindPlayer();
  Camera.RestoreJumpcut();


  $.the_yacht.delete();
  $.the_yacht2.delete();
  $.the_yacht3.delete();
  $.the_yacht4.delete();
  $.the_yacht5.delete();
  $.the_yacht6.delete();
  $.the_yacht7.delete();
  $.the_yacht8.delete();


  $.the_path_spline.clear();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  // SCM GOTO → mission_general5_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_general5_passed"); // fallback: would break linear control flow
}


////////////////////////////////////////////////////////////////////////////////////////////

async function boat_circle_yacht() {
  ////////////////////////////////////////////////////////////////////////////////////////////

  if (!(Car.IsDead($.gosub_boat))) {
    if (!(Char.IsDead($.gosub_boat_dr))) {
      if ($.gosub_boat_flag == 0) {
        $.gosub_boat.goto(210.4842, 914.7000, 6.0);
        if ($.gosub_boat.locate3D(210.4842, 914.7000, 6.0, 8.0, 8.0, 8.0, false)) {
          $.gosub_boat_flag = 1;
        }
      }
      if ($.gosub_boat_flag == 1) {
        $.gosub_boat.goto(209.1303, 871.3950, 6.0);
        if ($.gosub_boat.locate3D(209.1303, 871.3950, 6.0, 8.0, 8.0, 8.0, false)) {
          $.gosub_boat_flag = 2;
        }
      }
      if ($.gosub_boat_flag == 2) {
        $.gosub_boat.goto(190.7315, 844.9837, 6.0);
        if ($.gosub_boat.locate3D(190.7315, 844.9837, 6.0, 8.0, 8.0, 8.0, false)) {
          $.gosub_boat_flag = 3;
        }
      }
      if ($.gosub_boat_flag == 3) {
        $.gosub_boat.goto(166.0, 862.7161, 6.0);
        if ($.gosub_boat.locate3D(166.0, 862.7161, 6.0, 8.0, 8.0, 8.0, false)) {
          $.gosub_boat_flag = 4;
        }
      }
      if ($.gosub_boat_flag == 4) {
        $.gosub_boat.goto(173.0, 907.8094, 6.0);
        if ($.gosub_boat.locate3D(173.0, 907.8094, 6.0, 8.0, 8.0, 8.0, false)) {
          $.gosub_boat_flag = 5;
        }
      }
      if ($.gosub_boat_flag == 5) {
        $.gosub_boat.goto(196.3743, 924.7827, 6.0);
        if ($.gosub_boat.locate3D(196.3743, 924.7827, 6.0, 8.0, 8.0, 8.0, false)) {
          $.gosub_boat_flag = 0;
        }
      }
      if ($.gosub_boat_flag == 6) {
        $.gosub_boat.goto(210.4842, 914.7000, 6.0);
        if ($.gosub_boat.locate3D(210.4842, 914.7000, 6.0, 8.0, 8.0, 8.0, false)) {
          $.gosub_boat_flag = 0;
        }
      }
    }
    else {
      $.gosub_boat_dr.markAsNoLongerNeeded();
      $.gosub_boat.markAsNoLongerNeeded();
      $.gosub_boat = -1;
    }
    if (!(Char.IsDead($.gosub_boat_sh))) {
      $.gosub_boat_sh.setObjKillPlayerOnFoot($.player1);
    }
    else {
      $.gosub_boat_dr.markAsNoLongerNeeded();
      $.gosub_boat_sh.markAsNoLongerNeeded();
      $.gosub_boat.markAsNoLongerNeeded();
      $.gosub_boat = -1;
    }
  }
  else {
    $.gosub_boat_dr.markAsNoLongerNeeded();
    $.gosub_boat.markAsNoLongerNeeded();
    $.gosub_boat = -1;
  }
}




////////////////////////////////////////////////////////////////////////////////////////////

async function heli_do_flybys_over_yacht() {
  ////////////////////////////////////////////////////////////////////////////////////////////


  const _res260 = $.player1.getCoordinates();
$.player_x = _res260.x;
$.player_y = _res260.y;
$.player_z = _res260.z;


  $.fly_to_z = $.old_fly_to_z;


  if ($.gosub_heli == $.killer_chopper) {
    $.gosub_heli_fly_to_counter = $.killer_chopper_fly_to_counter;
    $.gosub_heli_just_come_from = $.killer_chopper_just_come_from;
  }


  if ($.gosub_heli_fly_to_counter == 0) {
    $.fly_to_x = $.player_x;
    $.fly_to_y = $.player_y;
    $.fly_to_z = $.player_z + 7.0;
  }
  else {
    if ($.gosub_heli_fly_to_counter == 1) {
      $.fly_to_x = $.player_x + 70.0;
      $.fly_to_y = $.player_y + 70.0;
      $.fly_to_z = $.player_z + 22.0;
      $.gosub_heli_just_come_from = 1;
    }
    if ($.gosub_heli_fly_to_counter == 2) {
      $.fly_to_x = $.player_x + 70.0;
      $.fly_to_y = $.player_y;
      $.fly_to_z = $.player_z + 14.0;
      $.gosub_heli_just_come_from = 2;
    }
    if ($.gosub_heli_fly_to_counter == 3) {
      $.fly_to_x = $.player_x + 70.0;
      $.fly_to_y = $.player_y - 70.0;
      $.fly_to_z = $.player_z + 14.0;
      $.gosub_heli_just_come_from = 3;
    }
    if ($.gosub_heli_fly_to_counter == 4) {
      $.fly_to_x = $.player_x;
      $.fly_to_y = $.player_y - 70.0;
      $.fly_to_z = $.player_z + 14.0;
      $.gosub_heli_just_come_from = 4;
    }
    if ($.gosub_heli_fly_to_counter == 5) {
      $.fly_to_x = $.player_x - 70.0;
      $.fly_to_y = $.player_y - 70.0;
      $.fly_to_z = $.player_z + 14.0;
      $.gosub_heli_just_come_from = 5;
    }
    if ($.gosub_heli_fly_to_counter == 6) {
      $.fly_to_x = $.player_x - 70.0;
      $.fly_to_y = $.player_y;
      $.fly_to_z = $.player_z + 14.0;
      $.gosub_heli_just_come_from = 6;
    }
    if ($.gosub_heli_fly_to_counter == 7) {
      $.fly_to_x = $.player_x - 70.0;
      $.fly_to_y = $.player_y + 70.0;
      $.fly_to_z = $.player_z + 22.0;
      $.gosub_heli_just_come_from = 7;
    }
    if ($.gosub_heli_fly_to_counter == 8) {
      $.fly_to_x = $.player_x;
      $.fly_to_y = $.player_y + 70.0;
      $.fly_to_z = $.player_z + 22.0;
      $.gosub_heli_just_come_from = 8;
    }
  }


  const _res261 = $.gosub_heli.getCoordinates();
$.x = _res261.x;
$.y = _res261.y;
$.z = _res261.z;
  $.ground_z = World.GetGroundZFor3DCoord($.x, $.y, $.z);
  $.ground_z += 10.0;
  if ($.fly_to_z < $.ground_z) {
    $.old_fly_to_z = $.fly_to_z;
    $.fly_to_z = $.ground_z;
  }


  $.gosub_heli.gotoCoords($.fly_to_x, $.fly_to_y, $.fly_to_z, 40);


  if ($.gosub_heli_fly_to_counter == 0) {
    $.locate_size = 10.0;
  }
  else {
    $.locate_size = 15.0;
  }


  if ($.gosub_heli.locate3D($.fly_to_x, $.fly_to_y, $.fly_to_z, $.locate_size, $.locate_size, 10.0, false)) {
    $.random_flight = Math.RandomIntInRange(0, 3);
    if ($.gosub_heli_fly_to_counter == 0) {
      if ($.gosub_heli_just_come_from == 0) {
        $.gosub_heli_just_come_from = 1;
      }
      if ($.gosub_heli_just_come_from == 1) {
        if ($.random_flight == 0) {
          $.gosub_heli_fly_to_counter = 5;
        }
        if ($.random_flight == 1 || $.random_flight == 2) {
          $.gosub_heli_fly_to_counter = 6;
        }
      }
      if ($.gosub_heli_just_come_from == 2) {
        if ($.random_flight == 0) {
          $.gosub_heli_fly_to_counter = 6;
        }
        if ($.random_flight == 1 || $.random_flight == 2) {
          $.gosub_heli_fly_to_counter = 7;
        }
      }
      if ($.gosub_heli_just_come_from == 3) {
        if ($.random_flight == 0) {
          $.gosub_heli_fly_to_counter = 7;
        }
        if ($.random_flight == 1 || $.random_flight == 2) {
          $.gosub_heli_fly_to_counter = 8;
        }
      }
      if ($.gosub_heli_just_come_from == 4) {
        if ($.random_flight == 0) {
          $.gosub_heli_fly_to_counter = 7;
        }
        if ($.random_flight == 1) {
          $.gosub_heli_fly_to_counter = 8;
        }
        if ($.random_flight == 2) {
          $.gosub_heli_fly_to_counter = 1;
        }
      }
      if ($.gosub_heli_just_come_from == 5) {
        if ($.random_flight == 0 || $.random_flight == 1) {
          $.gosub_heli_fly_to_counter = 8;
        }
        if ($.random_flight == 2) {
          $.gosub_heli_fly_to_counter = 1;
        }
      }
      if ($.gosub_heli_just_come_from == 6) {
        if ($.random_flight == 0 || $.random_flight == 1) {
          $.gosub_heli_fly_to_counter = 1;
        }
        if ($.random_flight == 2) {
          $.gosub_heli_fly_to_counter = 2;
        }
      }
      if ($.gosub_heli_just_come_from == 7) {
        if ($.random_flight == 0) {
          $.gosub_heli_fly_to_counter = 2;
        }
        if ($.random_flight == 1) {
          $.gosub_heli_fly_to_counter = 3;
        }
        if ($.random_flight == 2) {
          $.gosub_heli_fly_to_counter = 4;
        }
      }
      if ($.gosub_heli_just_come_from == 8) {
        if ($.random_flight == 0) {
          $.gosub_heli_fly_to_counter = 3;
        }
        if ($.random_flight == 1) {
          $.gosub_heli_fly_to_counter = 4;
        }
        if ($.random_flight == 2) {
          $.gosub_heli_fly_to_counter = 5;
        }
      }
    }
    else {
      $.gosub_heli_fly_to_counter = 0;
    }
  }


  if ($.gosub_heli == $.killer_chopper) {
    $.killer_chopper_fly_to_counter = $.gosub_heli_fly_to_counter;
    $.killer_chopper_just_come_from = $.gosub_heli_just_come_from;
  }
}





async function wait_for_cs_time() {
  while ($.cs_time < $.cs_time_limit) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
}




async function setup_the_goons_shite() {
  $.goon.clearThreatSearch();
  $.goon.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
  $.goon.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.goon.setRunning(true /* TRUE */);
  $.goon.setUsePednodeSeek(false /* FALSE */);
  $.goon.setStayInSamePlace(true /* TRUE */);
}



async function set_up_boarders_shite() {
  $.goon.setStayInSamePlace(true /* TRUE */);
  $.goon.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 9999);
  $.goon.clearThreatSearch();
  $.goon.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.goon.setThreatSearch(1048576 /* THREAT_GUN */);
  $.goon.setHeedThreats(true /* TRUE */);
  $.goon.setObjRunToCoord(196.3903, 888.9396);
  $.goon.setUsePednodeSeek(false /* FALSE */);
  $.goon.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.goon.setIgnoreThreatsBehindObjects(true /* TRUE */);
  $.goon.setCeaseAttackTimer(1500);
}



async function setup_boat_shooters() {
  $.boat_shooter_ped.setStayInSamePlace(true /* TRUE */);
  $.boat_shooter_ped.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 9999);
  $.boat_shooter_ped.clearThreatSearch();
  $.boat_shooter_ped.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.boat_shooter_ped.setHeedThreats(true /* TRUE */);
  $.boat_shooter_ped.setUsePednodeSeek(false /* FALSE */);
  $.boat_shooter_ped.setObjKillPlayerOnFoot($.player1);
  $.boat_shooter_ped.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
}



async function setup_heli_passengers() {
  $.heli_passenger.setStayInSamePlace(true /* TRUE */);
  $.heli_passenger.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 9999);
  $.heli_passenger.clearThreatSearch();
  $.heli_passenger.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.heli_passenger.setThreatSearch(1048576 /* THREAT_GUN */);
  $.heli_passenger.setHeedThreats(true /* TRUE */);
  $.heli_passenger.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
}



async function setup_sailors() {
  $.sailor.setAsPlayerFriend($.player1, true /* TRUE */);
  $.sailor.clearThreatSearch();
  $.sailor.setThreatSearch(512 /* THREAT_GANG_STREET */);
  $.sailor.setHeedThreats(true /* TRUE */);
  $.sailor.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.sailor.setStayInSamePlace(true /* TRUE */);
  $.sailor.setUsePednodeSeek(false /* FALSE */);
  $.sailor.setAccuracy(15);
  $.sailor.setNeverTargeted(true /* TRUE */);
  $.sailor.setIgnoreThreatsBehindObjects(true /* TRUE */);
}



////////////////////////////////////////////////////////////////////////////////////////////

async function onFailed() {
  ////////////////////////////////////////////////////////////////////////////////////////////

  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"


  const _res262 = $.the_yacht.getCoordinates();
$.the_yacht_x = _res262.x;
$.the_yacht_y = _res262.y;
$.the_yacht_z = _res262.z;
  $.heading = $.the_yacht.getHeading();


  $.temp_yacht = ScriptObject.CreateNoOffset(yt_main_body, $.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
  $.temp_yacht.setHeading($.heading);
  $.temp_yacht.markAsNoLongerNeeded();


  $.temp_yacht = ScriptObject.CreateNoOffset(yt_main_body2, $.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
  $.temp_yacht.setHeading($.heading);
  $.temp_yacht.markAsNoLongerNeeded();


  $.temp_yacht = ScriptObject.CreateNoOffset(yt_doors14, $.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
  $.temp_yacht.setHeading($.heading);
  $.temp_yacht.markAsNoLongerNeeded();


  $.temp_yacht = ScriptObject.CreateNoOffset(yt_tmp_boat, $.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
  $.temp_yacht.setHeading($.heading);
  $.temp_yacht.markAsNoLongerNeeded();


  $.temp_yacht = ScriptObject.CreateNoOffset(lodmain_body, $.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
  $.temp_yacht.setHeading($.heading);
  $.temp_yacht.markAsNoLongerNeeded();


  $.temp_yacht = -1;


  $.the_path_spline.setPosition(0.0);
  $.the_path_spline.setSpeed(0.0);
  const _res263 = $.the_yacht.getCoordinates();
$.the_yacht_x = _res263.x;
$.the_yacht_y = _res263.y;
$.the_yacht_z = _res263.z;
  $.the_yacht7 = ScriptObject.CreateNoOffset(yt_gangplnk_tmp, $.the_yacht_x_start, $.the_yacht_y_start, $.the_yacht_z_start);
  $.the_yacht7.dontRemove();
  $.the_yacht8 = ScriptObject.CreateNoOffset(yacht_chunk_kb, $.the_yacht_x_start, $.the_yacht_y_start, $.the_yacht_z_start);
  $.the_yacht8.dontRemove();
  if (!(HAS_DEATHARREST_BEEN_EXECUTED())) {
    Streaming.RequestCollision(-244.2799, -1360.6704);
    Streaming.LoadScene(-244.2799, -1360.6704, 7.0786);
    World.ClearArea(-244.2799, -1360.6704, 7.0786, 1.0, true /* TRUE */);
    if (!($.player1.isInAnyCar())) {
      $.player1.setCoordinates(-244.2799, -1360.6704, 7.0786);
    }
    else {
      $.player1.warpFromCarToCoord(-244.2799, -1360.6704, 7.0786);
    }
    $.player1.setHeading(279.1362);
    Camera.SetBehindPlayer();
    Camera.RestoreJumpcut();
    Camera.SetFadingColor(225, 225, 225);
    Camera.DoFade(1000, 1 /* FADE_IN */);
  }
}




////////////////////////////////////////////////////////////////////////////////////////////

async function mission_general5_passed() {
  ////////////////////////////////////////////////////////////////////////////////////////////


  $.flag_general_mission5_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 5000, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(5000);
  $.general_contact_blip.remove();
  Stat.RegisterMissionPassed("COL_5");
  Audio.PlayMissionPassedTune(1);
  Stat.PlayerMadeProgress(1);
}




////////////////////////////////////////////////////////////////////////////////////////////

async function cleanup() {
  ////////////////////////////////////////////////////////////////////////////////////////////


  ONMISSION = 0;


  $.timer_mobile_start = Clock.GetGameTimer();


  $.car01_goon1.removeElegantly();
  $.car01_goon2.removeElegantly();
  $.car01_goon3.removeElegantly();
  $.car01_goon4.removeElegantly();
  $.car02_goon1.removeElegantly();
  $.car02_goon2.removeElegantly();
  $.car02_goon3.removeElegantly();
  $.car02_goon4.removeElegantly();
  $.colonel.removeElegantly();
  $.colonel_goon1.removeElegantly();
  $.colonel_goon2.removeElegantly();
  $.colonel_goon3.removeElegantly();
  $.colonel_goon4.removeElegantly();
  $.killer_chopper_pilot.removeElegantly();
  $.heli1_pilot.removeElegantly();
  $.heli1_passenger1.removeElegantly();
  $.heli1_passenger2.removeElegantly();
  $.heli1_passenger3.removeElegantly();
  $.heli2_pilot.removeElegantly();
  $.heli2_passenger1.removeElegantly();
  $.heli2_passenger2.removeElegantly();
  $.heli2_passenger3.removeElegantly();
  $.boarder_1.removeElegantly();
  $.boarder_2.removeElegantly();
  $.boarder_3.removeElegantly();
  $.boarder_4.removeElegantly();
  $.barricade_boat01_dr.removeElegantly();
  $.barricade_boat01_sh.removeElegantly();
  $.barricade_boat02_dr.removeElegantly();
  $.barricade_boat02_sh.removeElegantly();
  $.barricade_boat03_sh.removeElegantly();
  $.barricade_boat05_dr.removeElegantly();
  $.barricade_boat05_sh.removeElegantly();
  $.barricade_boat06_sh1.removeElegantly();
  $.barricade_boat06_sh2.removeElegantly();
  $.barricade_boat06_sh3.removeElegantly();
  $.barricade_boat03_dr.removeElegantly();
  $.barricade_boat09_dr.removeElegantly();


  $.health_on_yacht.remove();
  $.ruger_on_yacht.remove();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);


  Weather.Release();


  Streaming.MarkModelAsNoLongerNeeded(UZI);
  Streaming.MarkModelAsNoLongerNeeded(COLT45);
  Streaming.MarkModelAsNoLongerNeeded(HUNTER);
  Streaming.MarkModelAsNoLongerNeeded(DINGHY);
  Streaming.MarkModelAsNoLongerNeeded(SPEEDER);
  Streaming.MarkModelAsNoLongerNeeded(RIO);
  Streaming.MarkModelAsNoLongerNeeded(WASHING);
  Streaming.MarkModelAsNoLongerNeeded(RUGER);
  Streaming.MarkModelAsNoLongerNeeded(MAVERICK);
  Streaming.MarkModelAsNoLongerNeeded(MARQUIS);
  Streaming.MarkModelAsNoLongerNeeded(TROPIC);
  Streaming.MarkModelAsNoLongerNeeded(KATANA);
  Streaming.MarkModelAsNoLongerNeeded(HMOST);


  Mission.Finish();
}

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////





async function jetty_stuff() {
  if ($.jetty_stuff_dude_flag == 0) {
    $.jetty_stuff_dude.setObjRunToCoord(-257.2504, -1214.4840);
    $.jetty_stuff_dude.setUsePednodeSeek(false /* FALSE */);
    $.jetty_stuff_dude_flag = 1;
  }
  if ($.jetty_stuff_dude_flag == 1) {
    if ($.jetty_stuff_dude.locateOnFoot2D(-257.2504, -1214.4840, 1.5, 1.5, false)) {
      $.jetty_stuff_dude.setObjRunToCoord(-266.0016, -1214.5647);
      $.jetty_stuff_dude.setUsePednodeSeek(false /* FALSE */);
      $.jetty_stuff_dude_flag = 2;
    }
  }
  if ($.jetty_stuff_dude_flag == 2) {
    if ($.jetty_stuff_dude.locateOnFoot2D(-266.0016, -1214.5647, 1.5, 1.5, false)) {
      $.jetty_stuff_dude.setObjRunToCoord(-321.7568, -1214.5964);
      $.jetty_stuff_dude.setUsePednodeSeek(false /* FALSE */);
      $.jetty_stuff_dude_flag = 3;
    }
  }
  if ($.jetty_stuff_dude_flag == 3) {
    if ($.jetty_stuff_dude.locateOnFoot2D(-321.7568, -1214.5964, 1.5, 1.5, false)) {
      $.jetty_stuff_dude.setObjRunToCoord(-328.9344, -1212.0651);
      $.jetty_stuff_dude.setUsePednodeSeek(false /* FALSE */);
      $.jetty_stuff_dude_flag = 4;
    }
  }
}

export async function general5() {
  ////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////// General Mission 5 ////////////////////////////////////
  ///////////////////////////////// Defend the General's Yacht ///////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////
  ///// The General has had enough of the heat and wants out of Miami.  When the player    ///
  ///// arrives at the contact point the General will start moving his yacht out to sea.   ///
  ///// The <Shining Path Rebels?> chose this moment to launch an all out attack on the 	 ///
  ///// yacht.  The player1 must stay up on deck with an M-16 defending the boat from the  ///
  ///// attackers.  They'll be closing in in boats, helicopters, following on land in cars ///
  ///// On foot, jumping from bridges as the yacht passes underneath.  The player1 must 	 ///
  ///// hold them off till the General is far enough out to sea to make a clean getaway.   ///
  ///// Then the player1 will get back to land using the General's personal launch.		 ///
  ////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////

  await body();  // SCM GOSUB mission_start_general5


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_general5_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_general5


  ////////////////////////////////////////////////////////////////////////////////////////////
  //VARS FOR MISSION//////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////

  //PEDS OBJECTS CARS ETC

  // VAR_INT car01_goon1 car01_goon2 car01_goon3 car01_goon4 boat01 boat02 boat03 car01
  // VAR_INT car02_goon1 car02_goon2 car02_goon3 car02_goon4 car02
  // VAR_INT colonels_launch colonel colonel_goon1 colonel_goon2 colonel_goon3 gosub_heli killer_chopper killer_chopper_pilot
  // VAR_INT heli1 temp_yacht goon
  // VAR_INT barricade_boat01 barricade_boat02 barricade_boat03 barricade_boat04 barricade_boat05
  // VAR_INT barricade_boat06 barricade_boat07 barricade_boat08 barricade_boat09
  // VAR_INT boarder_1 boarder_2 boarder_3 boarder_4
  // VAR_INT heli1_pilot heli1_passenger1 heli1_passenger2 heli1_passenger3
  // VAR_INT barricade_boat01_dr barricade_boat01_sh barricade_boat02_dr barricade_boat02_sh
  // VAR_INT barricade_boat03_sh barricade_boat05_dr barricade_boat05_sh barricade_boat06_sh1
  // VAR_INT barricade_boat06_sh2 barricade_boat06_sh3 barricade_boat03_dr barricade_boat09_dr
  // VAR_INT heli2 heli2_pilot heli2_passenger1 heli2_passenger2 heli2_passenger3
  // VAR_INT health_on_yacht ruger_on_yacht colonel_goon4
  // VAR_INT gosub_boat gosub_boat_dr gosub_boat_sh boat_shooter_ped sailor heli_passenger jetty_stuff_dude
  //COUNTERS FLAGS TIMERS ETC

  // VAR_INT heli_dropoff_timer hunter_timer given_player_smg_flag
  // VAR_INT initial_yacht_speedup killer_chopper_created weapon_type ammo model
  // VAR_INT gosub_heli_fly_to_counter gosub_heli_just_come_from random_flight
  // VAR_INT killer_chopper_fly_to_counter killer_chopper_just_come_from
  // VAR_INT car01_counter car01_timer car01_goon1_counter car01_goon2_counter car01_goon3_counter car01_goon4_counter
  // VAR_INT car02_counter car02_timer car02_goon1_counter car02_goon2_counter car02_goon3_counter car02_goon4_counter
  // VAR_INT heli1_counter heli2_counter boat01_timer stop_for_barricade barricade_boat09_flag
  // VAR_INT first_boats_dead boat01_dead boat02_dead boat03_dead first_boats_timer got_ammo_message got_health_message
  // VAR_INT boarder_1_flag boarder_2_flag gosub_boat_flag jetty_stuff_dude_flag
  // VAR_INT boarder_3_flag boarder_4_flag cs_time_limit heli1_timer heli_audio_counter
  // VAR_INT barricade_boat01_flag barricade_boat02_flag barricade_boat05_flag created_bridge_scene
  // VAR_INT played_bridge_dialogue played_this_dialogue played_this_dialogue2 played_this_dialogue3
  // VAR_INT clear_route_flag played_audio_7_dialogue played_audio_9_dialogue played_audio_15_dialogue
  // VAR_INT got_hunter_message cutscene_timer cutscene_counter barricade_boat03_flag next_text text_timer
  //VAR_INT heli1_death_counter heli2_death_counter killer_heli_death_counter
  //COORD MATHS

  //LOAD_AND_LAUNCH_MISSION_EXCLUSIVE	stuff
  //VAR_INT cs_dude1 cs_dude2 game_timer temp_int
  //VAR_INT is_audio_in_use audio_1_flag audio_2_flag audio_3_flag audio_4_flag
  //VAR_INT audio_7_flag audio_9_flag audio_10_flag audio_11_flag audio_12_flag audio_13_flag
  //VAR_INT audio_14_flag audio_15_flag audio_16_flag
  //VAR_INT audio_1_timeout audio_2_timeout audio_3_timeout audio_4_timeout
  //VAR_INT audio_7_timeout audio_9_timeout audio_10_timeout audio_11_timeout audio_12_timeout audio_13_timeout
  //VAR_INT audio_14_timeout audio_15_timeout audio_16_timeout
  //VAR_FLOAT heading_diff heading

  ////////////////////////////////////////////////////////////////////////////////////////////

}
