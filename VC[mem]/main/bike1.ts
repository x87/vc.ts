// Generated from main/bike1.sc

import { $ } from "../vars.mts";

async function mission_start_bike1() {


  Stat.RegisterMissionGiven();


  ONMISSION = 1;

  // player1 stuff


  $.player1_cpcounter_bike1 = 0;

  // Bike1 stuff


  $.bike1_cpcounter_bike1 = 0;


  $.bike1_locate_size_bike1 = 7.0;


  $.driver_bike1_health_bike1 = 100;

  // Bike2 stuff


  $.bike2_cpcounter_bike1 = 0;


  $.bike2_locate_size_bike1 = 7.0;


  $.driver_bike2_health_bike1 = 100;

  // bike3 stuff


  $.bike3_cpcounter_bike1 = 0;


  $.bike3_locate_size_bike1 = 7.0;


  $.driver_bike3_health_bike1 = 100;

  // General stuff


  $.gosub_cpcounter_bike1 = 0;


  $.timer_reset_flag = 0;


  $.gosub_rider_health_bike1 = 100;

  // Guy fallen off of bike stuff


  $.gosub_rider_x1_bike1 = 0.0;


  $.gosub_rider_y1_bike1 = 0.0;


  $.gosub_rider_x_bike1 = 0.0;


  $.gosub_rider_y_bike1 = 0.0;


  $.gosub_rider_z_bike1 = 0.0;


  $.flag_player1_cheated_bike1 = 0;


  $.gosub_driver_bike_bike1 = 0;


  $.player1_had_bike_message_bike1 = 0;

  // timer stuff


  $.race_timer_mins_bike1 = 0;


  $.race_timer_seconds_bike1 = 0;


  $.race_timer_seconds2_bike1 = 0;


  $.race_timer_bike1 = 0;

  // Heading stuff


  $.temp_int_bike1 = 0;


  await asyncWait(0);


  Text.LoadMissionText("BIKE1");


  Shortcut.SetDropoffPointForMission(-609.723, 658.861, 9.908, 279.440);




  // **************************************** Cut Scene **************************************


  Streaming.LoadSpecialCharacter(1, "CSbigm");


  Streaming.LoadSpecialCharacter(2, "CSplay");


  Streaming.LoadSpecialCharacter(3, "mgoona");


  Streaming.RequestModel(bka);


  Streaming.RequestModel(bkb);


  Streaming.LoadSpecialModel(CUTOBJ01, "poolq");


  Streaming.LoadSpecialModel(CUTOBJ02, "polbals");


  Streaming.SetAreaVisible(VIS_BIKER_BAR);


  Streaming.LoadScene(-597.02, 642.46, 11.0);


  World.SetExtraColors(15, false /* FALSE */);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasModelLoaded(bka)) || !(Streaming.HasModelLoaded(bkb))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);


  }


  Cutscene.Load("bike_1");


  Cutscene.SetOffset(-602.052, 636.289, 10.636);
  Camera.SetNearClip(0.1);


  $.cs_bigm = CutsceneObject.Create(SPECIAL01);
  $.cs_bigm.setAnim("CSbigm");


  $.cs_player = CutsceneObject.Create(SPECIAL02);
  $.cs_player.setAnim("CSplay");


  $.cs_mgoona = CutsceneObject.Create(SPECIAL03);
  $.cs_mgoona.setAnim("mgoona");


  $.cs_cougr = CutsceneObject.Create(bka);
  $.cs_cougr.setAnim("bka");


  $.cs_zepp = CutsceneObject.Create(bkb);
  $.cs_zepp.setAnim("bkb");


  $.cs_bmchcue = CutsceneObject.Create(CUTOBJ01);
  $.cs_bmchcue.setAnim("poolq01");


  $.cs_cougcue = CutsceneObject.Create(CUTOBJ01);
  $.cs_cougcue.setAnim("poolq02");


  $.cs_poolballs = CutsceneObject.Create(CUTOBJ02);
  $.cs_poolballs.setAnim("polbals");


  World.ClearArea(-597.25, 655.87, 10.06, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-597.25, 655.87, 10.06);
  $.player1.setHeading(0.0);


  Camera.DoFade(2000, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 5467) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM1_A", 10000, 1); //"Where's Baker?"


  while ($.cs_time < 11136) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM1_B", 10000, 1); //"I'm looking for a Big Mitch Baker..."


  while ($.cs_time < 13361) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM1_C", 10000, 1); //"Who's looking?"


  while ($.cs_time < 14457) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM1_D", 10000, 1); //"Tommy Vercetti.


  while ($.cs_time < 16423) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM1_E", 10000, 1); //"Vercetti.


  while ($.cs_time < 18634) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM1_F", 10000, 1); //"You don't look like the law, so that's bought you a minute.


  while ($.cs_time < 21688) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM1_G", 10000, 1); //"You better talk fast.


  while ($.cs_time < 22905) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM1_H", 10000, 1); //"Kent Paul said you might be interested in pulling security for a gig he's got set up."


  while ($.cs_time < 26588) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM1_I", 10000, 1); //"Kent Paul? Sheesh! No wonder he sent ya.


  while ($.cs_time < 30208) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM1_J", 10000, 1); //"The last time he was here he left through the window in nothing but his limey birthday suit"


  while ($.cs_time < 34442) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM1_K", 10000, 1); //"Are you interested or not?"


  while ($.cs_time < 36593) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM1_L", 10000, 1); //"We only do favours for our own."


  while ($.cs_time < 39183) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM1_M", 10000, 1); //"How do I join?"


  while ($.cs_time < 41838) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM1_N", 10000, 1); //"This ain't no country club, boy. Can you handle a bike?"


  while ($.cs_time < 45261) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM1_O", 10000, 1); //"Can you sit on a stool and drink?"


  while ($.cs_time < 47270) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BM1_P", 10000, 1); //"Cougar, Zeppelin; go see how this guy handles a bike..."


  while ($.cs_time < 51712) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 55482) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);


  }


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);


  Streaming.MarkModelAsNoLongerNeeded(bka);
  Streaming.MarkModelAsNoLongerNeeded(bkb);


  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);


  World.ClearExtraColors(false /* FALSE */);


  Streaming.SetAreaVisible(VIS_MAIN_MAP);


  Streaming.LoadScene(-597.25, 655.87, 10.06);

  // *************************************** END OF CUT SCENE ********************************

  // **************************************** Race Coordinates *******************************


  $.player1.setMood(PLAYER_MOOD_PISSED_OFF, 60000);


  Char.SetEnterCarRangeMultiplier(6.0);


  Audio.SetRadioChannel(V_ROCK, -1);


  $.total_checkpoints_bike1 = 18;

  // Player start point


  $.player1_x_bike1 = -592.65;
  $.player1_y_bike1 = 667.08;
  $.player1_z_bike1 = 9.91;

  // Check point 1


  $.cp1_x_bike1 = -537.77;
  $.cp1_y_bike1 = 674.27;
  $.cp1_z_bike1 = 9.90;

  // Check point 2


  $.cp2_x_bike1 = -478.51;
  $.cp2_y_bike1 = 803.08;
  $.cp2_z_bike1 = 9.91;

  // Check point 3


  $.cp3_x_bike1 = -387.36;
  $.cp3_y_bike1 = 1017.69;
  $.cp3_z_bike1 = 8.46;

  // Check point 4


  $.cp4_x_bike1 = -300.36;
  $.cp4_y_bike1 = 1285.44;
  $.cp4_z_bike1 = 10.59;

  // Check point 5


  $.cp5_x_bike1 = -487.11;
  $.cp5_y_bike1 = 1337.11;
  $.cp5_z_bike1 = 10.59;

  // Check point 6


  $.cp6_x_bike1 = -735.62;
  $.cp6_y_bike1 = 1314.60;
  $.cp6_z_bike1 = 10.59;

  // Check point 7


  $.cp7_x_bike1 = -817.54;
  $.cp7_y_bike1 = 1374.86;
  $.cp7_z_bike1 = 10.41;

  // Check point 8


  $.cp8_x_bike1 = -880.23;
  $.cp8_y_bike1 = 1441.79;
  $.cp8_z_bike1 = 10.74;

  // Check point 9


  $.cp9_x_bike1 = -683.27;
  $.cp9_y_bike1 = 1465.76;
  $.cp9_z_bike1 = 10.92;

  // Check point 10


  $.cp10_x_bike1 = -776.75;
  $.cp10_y_bike1 = 1383.71;
  $.cp10_z_bike1 = 10.86;

  // Check point 11


  $.cp11_x_bike1 = -873.98;
  $.cp11_y_bike1 = 1328.55;
  $.cp11_z_bike1 = 10.29;

  // Check point 12


  $.cp12_x_bike1 = -869.53;
  $.cp12_y_bike1 = 1107.01;
  $.cp12_z_bike1 = 9.90;

  // Check point 13


  $.cp13_x_bike1 = -873.40;
  $.cp13_y_bike1 = 953.70;
  $.cp13_z_bike1 = 9.90;

  // Check point 14


  $.cp14_x_bike1 = -871.27;
  $.cp14_y_bike1 = 775.91;
  $.cp14_z_bike1 = 9.90;

  // Check point 15


  $.cp15_x_bike1 = -726.25;
  $.cp15_y_bike1 = 749.28;
  $.cp15_z_bike1 = 9.92;

  // Check point 16


  $.cp16_x_bike1 = -623.68;
  $.cp16_y_bike1 = 743.44;
  $.cp16_z_bike1 = 9.42;

  // Check point 17


  $.cp17_x_bike1 = -516.60;
  $.cp17_y_bike1 = 733.58;
  $.cp17_z_bike1 = 9.65;

  // Check point 18


  $.cp18_x_bike1 = -596.92;
  $.cp18_y_bike1 = 666.82;
  $.cp18_z_bike1 = 9.91;

  // starting position of racer1


  $.bike1_stuck_x_bike1 = -592.65;
  $.bike1_stuck_y_bike1 = 665.35;
  $.bike1_stuck_z_bike1 = 9.91;


  $.bike2_stuck_x_bike1 = -592.65;
  $.bike2_stuck_y_bike1 = 663.15;
  $.bike2_stuck_z_bike1 = 9.91;


  $.bike3_stuck_x_bike1 = -592.65;
  $.bike3_stuck_y_bike1 = 661.26;
  $.bike3_stuck_z_bike1 = 9.91;

  // sets all the cars to face the correct way


  $.bike_headings_bike1 = 270.0;

  // Sets up coords of any roads I need to switch off


  $.road1_x_bike1 = -648.52;
  $.road1_y_bike1 = 629.85;
  $.road1_z_bike1 = 8.0;
  $.road2_x_bike1 = -499.21;
  $.road2_y_bike1 = 702.38;
  $.road2_z_bike1 = 15.0;

  // bike flag


  $.player_is_on_correct_bike_bike1 = 0;

  // Waiting for models to load


  Streaming.RequestModel(BKa); // biker model a


  Streaming.RequestModel(BKb); // biker model b


  Streaming.RequestModel(ANGEL);


  Streaming.RequestModel(178 /* UZI */);


  Audio.LoadMissionAudio(1, "bikerev" as any); // BIKE rev


  Audio.LoadMissionAudio(2, "BIKE1_1" as any); // How good are you


  while (!(Streaming.HasModelLoaded(BKa)) || !(Streaming.HasModelLoaded(BKb)) || !(Streaming.HasModelLoaded(ANGEL)) || !(Streaming.HasModelLoaded(178 /* UZI */)) || !(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);


  }


  World.SetCarDensityMultiplier(0.5); // half of normal

  // ***************************************** Bike Creation **********************************


  World.ClearAreaOfCars($.road1_x_bike1, $.road1_y_bike1, $.road1_z_bike1, $.road2_x_bike1, $.road2_y_bike1, $.road2_z_bike1);


  Path.SwitchRoadsOff($.road1_x_bike1, $.road1_y_bike1, $.road1_z_bike1, $.road2_x_bike1, $.road2_y_bike1, $.road2_z_bike1);

  // Creates bike1


  $.race_bike1 = Car.Create(ANGEL, $.bike1_stuck_x_bike1, $.bike1_stuck_y_bike1, $.bike1_stuck_z_bike1);


  $.race_bike1.setTraction(2.0);


  $.race_bike1.setHeading($.bike_headings_bike1);


  $.race_bike1.setDrivingStyle(2);


  $.race_bike1.setCruiseSpeed(63.0);


  $.race_bike1.setOnlyDamagedByPlayer(true /* TRUE */);

  // Biker1


  $.driver_bike1_bike1 = Char.CreateInsideCar($.race_bike1, 4 /* PEDTYPE_CIVMALE */, BKa);


  $.driver_bike1_bike1.shutUp(true /* TRUE */);


  $.driver_bike1_bike1.setDrownsInWater(false /* FALSE */);


  $.driver_bike1_bike1.clearThreatSearch();


  $.driver_bike1_bike1.setObjNoObj();


  $.driver_bike1_bike1.setOnlyDamagedByPlayer(true /* TRUE */);


  $.race_bike1.setIdle();

  // Creates bike 2


  $.race_bike2_bike1 = Car.Create(ANGEL, $.bike2_stuck_x_bike1, $.bike2_stuck_y_bike1, $.bike2_stuck_z_bike1);


  $.race_bike2_bike1.setTraction(2.0);


  $.race_bike2_bike1.setHeading($.bike_headings_bike1);


  $.race_bike2_bike1.setDrivingStyle(2);


  $.race_bike2_bike1.setCruiseSpeed(63.0);


  $.race_bike2_bike1.setOnlyDamagedByPlayer(true /* TRUE */);

  // Biker2


  $.driver_bike2_bike1 = Char.CreateInsideCar($.race_bike2_bike1, 4 /* PEDTYPE_CIVMALE */, BKb);


  $.driver_bike2_bike1.shutUp(true /* TRUE */);


  $.driver_bike2_bike1.setDrownsInWater(false /* FALSE */);


  $.driver_bike2_bike1.clearThreatSearch();


  $.driver_bike2_bike1.setObjNoObj();


  $.driver_bike2_bike1.setOnlyDamagedByPlayer(true /* TRUE */);


  $.race_bike2_bike1.setIdle();

  // Creates bike 3


  $.race_bike3_bike1 = Car.Create(ANGEL, $.bike3_stuck_x_bike1, $.bike3_stuck_y_bike1, $.bike3_stuck_z_bike1);


  $.race_bike3_bike1.setTraction(2.0);


  $.race_bike3_bike1.setHeading($.bike_headings_bike1);


  $.race_bike3_bike1.setDrivingStyle(2);


  $.race_bike3_bike1.setCruiseSpeed(63.0);


  $.race_bike3_bike1.setOnlyDamagedByPlayer(true /* TRUE */);

  // Biker3


  $.driver_bike3_bike1 = Char.CreateInsideCar($.race_bike3_bike1, 4 /* PEDTYPE_CIVMALE */, BKa);


  $.driver_bike3_bike1.shutUp(true /* TRUE */);


  $.driver_bike3_bike1.setDrownsInWater(false /* FALSE */);


  $.driver_bike3_bike1.clearThreatSearch();


  $.driver_bike3_bike1.setObjNoObj();


  $.driver_bike3_bike1.setOnlyDamagedByPlayer(true /* TRUE */);


  $.race_bike3_bike1.setIdle();


  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  Game.SetAllCarsCanBeDamaged(true /* TRUE */);
  $.player1.setVisible(true /* TRUE */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  $.blip_chase_bike1 = Blip.AddForCoord($.player1_x_bike1, $.player1_y_bike1, $.player1_z_bike1);


  Text.PrintNow("BM1_1", 5000, 1); //"~g~Get a Hog and get to the starting grid."

  // waiting for the player1 to get to the starting grid


  while (!($.player1.locateStoppedAnyMeans3D($.player1_x_bike1, $.player1_y_bike1, $.player1_z_bike1, 2.0, 2.0, 2.0, true)) || $.player_is_on_correct_bike_bike1 == 0) {
    await asyncWait(0);
    if ($.player1.isInModel(FREEWAY) || $.player1.isInModel(ANGEL)) {
      $.player_is_on_correct_bike_bike1 = 1;
    }
    else {
      $.player_is_on_correct_bike_bike1 = 0;
    }
    if ($.player1.locateStoppedAnyMeans3D($.player1_x_bike1, $.player1_y_bike1, $.player1_z_bike1, 2.0, 2.0, 2.0, true)) {
      if (!($.player1.isInModel(FREEWAY)) && !($.player1.isInModel(ANGEL))) {
        if ($.player1_had_bike_message_bike1 == 0) {
          Text.PrintNow("BM1_2", 5000, 1); //"You need to be on a Hog to take part!"
          $.player1_had_bike_message_bike1 = 1;
        }


      }


    }
    else {
      $.player1_had_bike_message_bike1 = 0;
    }
    if (Car.IsDead($.race_bike1)) {
      Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
      // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
    }
    else {
      if ($.player1.isTouchingVehicle($.race_bike1)) {
        $.flag_player1_cheated_bike1 = 1;
        // SCM GOTO → race_start_bike1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO race_start_bike1"); // fallback: would break linear control flow
      }


    }
    if (Car.IsDead($.race_bike2_bike1)) {
      Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
      // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
    }
    else {
      if ($.player1.isTouchingVehicle($.race_bike2_bike1)) {
        $.flag_player1_cheated_bike1 = 1;
        // SCM GOTO → race_start_bike1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO race_start_bike1"); // fallback: would break linear control flow
      }


    }
    if (Car.IsDead($.race_bike3_bike1)) {
      Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
      // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
    }
    else {
      if ($.player1.isTouchingVehicle($.race_bike3_bike1)) {
        $.flag_player1_cheated_bike1 = 1;
        // SCM GOTO → race_start_bike1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO race_start_bike1"); // fallback: would break linear control flow
      }


    }

    // Checks the health of bike 1 and rider1

    $.bike_health_bike1 = $.race_bike1.getHealth();
    if ($.bike_health_bike1 <= 999 || $.race_bike1.isTireBurst(ANY_WHEEL)) {
      $.bike_health_bike1 = 9;
      // SCM GOTO → race_start_bike1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO race_start_bike1"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.driver_bike1_bike1))) {
      $.driver_bike1_health_bike1 = $.driver_bike1_bike1.getHealth();
      if ($.driver_bike1_health_bike1 <= 99) {
        $.flag_player1_cheated_bike1 = 1;
        // SCM GOTO → race_start_bike1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO race_start_bike1"); // fallback: would break linear control flow
      }
      if (!($.driver_bike1_bike1.isInCar($.race_bike1))) {
        $.flag_player1_cheated_bike1 = 1;
        // SCM GOTO → race_start_bike1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO race_start_bike1"); // fallback: would break linear control flow
      }


    }
    else {
      Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
      // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
    }

    // Checks for bike2 and rider2

    $.bike2_health_bike1 = $.race_bike2_bike1.getHealth();
    if ($.bike2_health_bike1 <= 999 || $.race_bike2_bike1.isTireBurst(ANY_WHEEL)) {
      $.bike2_health_bike1 = 9;
      // SCM GOTO → race_start_bike1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO race_start_bike1"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.driver_bike2_bike1))) {
      $.driver_bike2_health_bike1 = $.driver_bike2_bike1.getHealth();
      if ($.driver_bike2_health_bike1 <= 99) {
        $.flag_player1_cheated_bike1 = 1;
        // SCM GOTO → race_start_bike1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO race_start_bike1"); // fallback: would break linear control flow
      }
      if (!($.driver_bike2_bike1.isInCar($.race_bike2_bike1))) {
        $.flag_player1_cheated_bike1 = 1;
        // SCM GOTO → race_start_bike1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO race_start_bike1"); // fallback: would break linear control flow
      }


    }
    else {
      Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
      // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
    }

    // Checks for bike3 and rider3

    $.bike3_health_bike1 = $.race_bike3_bike1.getHealth();
    if ($.bike3_health_bike1 <= 999 || $.race_bike3_bike1.isTireBurst(ANY_WHEEL)) {
      $.bike3_health_bike1 = 9;
      // SCM GOTO → race_start_bike1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO race_start_bike1"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.driver_bike3_bike1))) {
      $.driver_bike3_health_bike1 = $.driver_bike3_bike1.getHealth();
      if ($.driver_bike3_health_bike1 <= 99) {
        $.flag_player1_cheated_bike1 = 1;
        // SCM GOTO → race_start_bike1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO race_start_bike1"); // fallback: would break linear control flow
      }
      if (!($.driver_bike3_bike1.isInCar($.race_bike3_bike1))) {
        $.flag_player1_cheated_bike1 = 1;
        // SCM GOTO → race_start_bike1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO race_start_bike1"); // fallback: would break linear control flow
      }


    }
    else {
      Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
      // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
    }


  }
}


// *********************************** Starts The Bike Race ********************************


async function race_start_bike1() {


  Audio.PlayMissionAudio(1); // Bike Rev
  Audio.PlayMissionAudio(2); // How good are you
  Text.PrintNow("BIKE1_1", 5000, 1); //"How good are you!"


  if ($.bike_health_bike1 == 9 || $.flag_player1_cheated_bike1 == 1 || $.bike2_health_bike1 == 9 || $.bike3_health_bike1 == 9) {
    Text.PrintBig("RACE1", 1200, 4); // "3..2..1.. GO GO GO!"
  }
  else {
    $.player1.setControl(false /* OFF */);
    Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
    Game.SetAllCarsCanBeDamaged(false /* FALSE */);
    Text.PrintBig("RACE2", 1100, 4); //"THREE"
    Sound.AddOneOffSound(0.0, 0.0, 0.0, 97 /* SOUND_RACE_START_3 */);
    await asyncWait(1000);
    Text.PrintBig("RACE3", 1100, 4); //"TWO"
    Sound.AddOneOffSound(0.0, 0.0, 0.0, 98 /* SOUND_RACE_START_2 */);
    if (Audio.HasMissionAudioFinished(2)) {
      Text.ClearThisPrint("BIKE1_1");
    }
    await asyncWait(1000);
    Text.PrintBig("RACE4", 1100, 4); //"ONE"
    Sound.AddOneOffSound(0.0, 0.0, 0.0, 99 /* SOUND_RACE_START_1 */);
    if (Audio.HasMissionAudioFinished(2)) {
      Text.ClearThisPrint("BIKE1_1");
    }
    await asyncWait(1000);
    Text.PrintBig("RACE5", 800, 4); //"GO!"
    Sound.AddOneOffSound(0.0, 0.0, 0.0, 100 /* SOUND_RACE_START_GO */);
    if (Audio.HasMissionAudioFinished(2)) {
      Text.ClearThisPrint("BIKE1_1");
    }
    $.player1.setControl(true /* ON */);
    Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
    Game.SetAllCarsCanBeDamaged(true /* TRUE */);
  }


  if (Audio.HasMissionAudioFinished(2)) {
    Text.ClearThisPrint("BIKE1_1");
  }


  if (Car.IsDead($.race_bike1)) {
    Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
    // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
  }
  else {
    StuckCarCheck.Add($.race_bike1, 1.0, 2000);
  }


  if (!(Char.IsDead($.driver_bike1_bike1))) {
    $.driver_bike1_bike1.shutUp(false /* FALSE */);
  }
  else {
    Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
    // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
  }


  if (Car.IsDead($.race_bike2_bike1)) {
    Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
    // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
  }
  else {
    StuckCarCheck.Add($.race_bike2_bike1, 1.0, 2000);
  }


  if (!(Char.IsDead($.driver_bike2_bike1))) {
    $.driver_bike2_bike1.shutUp(false /* FALSE */);
  }
  else {
    Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
    // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
  }


  if (Car.IsDead($.race_bike3_bike1)) {
    Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
    // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
  }
  else {
    StuckCarCheck.Add($.race_bike3_bike1, 1.0, 2000);
  }


  if (!(Char.IsDead($.driver_bike3_bike1))) {
    $.driver_bike3_bike1.shutUp(false /* FALSE */);
  }
  else {
    Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
    // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
  }


  $.blip_chase_bike1.remove();


  $.bike1_blip = Blip.AddForCharOld($.driver_bike1_bike1, 1 /* GREEN */, 1 /* MARKER_ONLY */);


  $.bike2_blip = Blip.AddForCharOld($.driver_bike2_bike1, 1 /* GREEN */, 1 /* MARKER_ONLY */);


  $.bike3_blip = Blip.AddForCharOld($.driver_bike3_bike1, 1 /* GREEN */, 1 /* MARKER_ONLY */);


  await get_next_checkpoint_bike1();  // SCM GOSUB get_next_checkpoint_bike1


  $.player1_cp_x_bike1 = $.gosub_cp_x_bike1;
  $.player1_cp_y_bike1 = $.gosub_cp_y_bike1;
  $.player1_cp_z_bike1 = $.gosub_cp_z_bike1;
  $.blip_2nd_x_bike1 = $.gosub_cp_2nd_x_bike1;
  $.blip_2nd_y_bike1 = $.gosub_cp_2nd_y_bike1;
  $.blip_2nd_z_bike1 = $.gosub_cp_2nd_z_bike1;


  $.bike1_cp_x_bike1 = $.gosub_cp_x_bike1;
  $.bike1_cp_y_bike1 = $.gosub_cp_y_bike1;
  $.bike1_cp_z_bike1 = $.gosub_cp_z_bike1;


  $.bike2_cp_x_bike1 = $.gosub_cp_x_bike1;
  $.bike2_cp_y_bike1 = $.gosub_cp_y_bike1;
  $.bike2_cp_z_bike1 = $.gosub_cp_z_bike1;


  $.bike3_cp_x_bike1 = $.gosub_cp_x_bike1;
  $.bike3_cp_y_bike1 = $.gosub_cp_y_bike1;
  $.bike3_cp_z_bike1 = $.gosub_cp_z_bike1;


  $.blip_chase_bike1 = Blip.AddForCoord($.player1_cp_x_bike1, $.player1_cp_y_bike1, $.player1_cp_z_bike1);


  $.second_blip_bike1_bike1 = Blip.AddForCoordOld($.blip_2nd_x_bike1, $.blip_2nd_y_bike1, $.blip_2nd_z_bike1, 5 /* PURPLE */, 2 /* BLIP_ONLY */);
  $.second_blip_bike1_bike1.changeScale(2);
  $.second_blip_bike1_bike1.dim(true /* TRUE */);

  // Checks for bike 1


  if (!(Char.IsDead($.driver_bike1_bike1))) {
    if (!(Car.IsDead($.race_bike1))) {
      if ($.driver_bike1_bike1.isInCar($.race_bike1)) {
        $.race_bike1.gotoCoordinates($.bike1_cp_x_bike1, $.bike1_cp_y_bike1, $.bike1_cp_z_bike1);
      }


    }


  }
  else {
    Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
    // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
  }


  await asyncWait(70);

  // checks for bike2


  if (!(Char.IsDead($.driver_bike2_bike1))) {
    if (!(Car.IsDead($.race_bike2_bike1))) {
      if ($.driver_bike2_bike1.isInCar($.race_bike2_bike1)) {
        $.race_bike2_bike1.gotoCoordinates($.bike2_cp_x_bike1, $.bike2_cp_y_bike1, $.bike2_cp_z_bike1);
      }


    }


  }
  else {
    Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
    // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
  }


  await asyncWait(90);

  // checks for bike3


  if (!(Char.IsDead($.driver_bike3_bike1))) {
    if (!(Car.IsDead($.race_bike3_bike1))) {
      if ($.driver_bike3_bike1.isInCar($.race_bike3_bike1)) {
        $.race_bike3_bike1.gotoCoordinates($.bike3_cp_x_bike1, $.bike3_cp_y_bike1, $.bike3_cp_z_bike1);
      }


    }


  }
  else {
    Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
    // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
  }

  //timer_started_bike1 = game_time_bike1

  // Starts the game timer


  Hud.DisplayTimerWithString($.$id.race_timer_bike1, TIMER_UP, "R_TIME");

  // The race code


  while ($.player1_cpcounter_bike1 < $.total_checkpoints_bike1) {
    await asyncWait(0);
    $.position_bike1 = 0;

    // Player checks

    if ($.player1.locateAnyMeans3D($.player1_cp_x_bike1, $.player1_cp_y_bike1, $.player1_cp_z_bike1, 6.0, 6.0, 6.0, false)) {
      if ($.player1.isInModel(FREEWAY) || $.player1.isInModel(ANGEL)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        ++$.player1_cpcounter_bike1;
        $.blip_chase_bike1.remove();
        $.second_blip_bike1_bike1.remove();
        $.gosub_cpcounter_bike1 = $.player1_cpcounter_bike1;
        await get_next_checkpoint_bike1();  // SCM GOSUB get_next_checkpoint_bike1
        $.player1_cp_x_bike1 = $.gosub_cp_x_bike1;
        $.player1_cp_y_bike1 = $.gosub_cp_y_bike1;
        $.player1_cp_z_bike1 = $.gosub_cp_z_bike1;
        $.blip_2nd_x_bike1 = $.gosub_cp_2nd_x_bike1;
        $.blip_2nd_y_bike1 = $.gosub_cp_2nd_y_bike1;
        $.blip_2nd_z_bike1 = $.gosub_cp_2nd_z_bike1;
        if ($.player1_cpcounter_bike1 == $.total_checkpoints_bike1) {
          // SCM GOTO → mission_bike1_passed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_bike1_passed"); // fallback: would break linear control flow
        }
        $.blip_chase_bike1 = Blip.AddForCoord($.player1_cp_x_bike1, $.player1_cp_y_bike1, $.player1_cp_z_bike1);
        if ($.player1_cpcounter_bike1 < 17) {
          $.second_blip_bike1_bike1 = Blip.AddForCoordOld($.blip_2nd_x_bike1, $.blip_2nd_y_bike1, $.blip_2nd_z_bike1, 5 /* PURPLE */, 2 /* BLIP_ONLY */);
          $.second_blip_bike1_bike1.dim(true /* ON */);
          $.second_blip_bike1_bike1.changeScale(2);
        }


      }


    }

    // Checks for bike1

    if (!(Char.IsDead($.driver_bike1_bike1))) {
      if (!(Car.IsDead($.race_bike1))) {
        $.gosub_race_bike_bike1 = $.race_bike1;
        $.gosub_cpcounter_bike1 = $.bike1_cpcounter_bike1;
        $.gosub_rider_bike1 = $.driver_bike1_bike1;
        $.gosub_cp_x_bike1 = $.bike1_cp_x_bike1;
        $.gosub_cp_y_bike1 = $.bike1_cp_y_bike1;
        $.gosub_cp_z_bike1 = $.bike1_cp_z_bike1;
        $.flag_gosub_rider_off_bike1 = $.driver_bike1_off_bike1;
        await player1_position_bike1();  // SCM GOSUB player1_position_bike1
        await bike_stuck_checks_bike1();  // SCM GOSUB bike_stuck_checks_bike1
        await water_checks_bike1();  // SCM GOSUB water_checks_bike1
        await rider_fallen_off_bike_bike1();  // SCM GOSUB rider_fallen_off_bike_bike1
        $.driver_bike1_bike1 = $.gosub_rider_bike1;
        $.race_bike1 = $.gosub_race_bike_bike1;
        $.driver_bike1_off_bike1 = $.flag_gosub_rider_off_bike1;
        if ($.driver_bike1_bike1.locateAnyMeans3D($.bike1_cp_x_bike1, $.bike1_cp_y_bike1, $.bike1_cp_z_bike1, $.bike1_locate_size_bike1, $.bike1_locate_size_bike1, $.bike1_locate_size_bike1, false) && $.driver_bike1_bike1.isInModel(ANGEL)) {
          ++$.bike1_cpcounter_bike1;
          $.gosub_cpcounter_bike1 = $.bike1_cpcounter_bike1;
          await get_next_checkpoint_bike1();  // SCM GOSUB get_next_checkpoint_bike1
          $.bike1_cp_x_bike1 = $.gosub_cp_x_bike1;
          $.bike1_cp_y_bike1 = $.gosub_cp_y_bike1;
          $.bike1_cp_z_bike1 = $.gosub_cp_z_bike1;
          if ($.bike1_cpcounter_bike1 == 17) {
            $.bike1_locate_size_bike1 = 6.0;
          }
          if ($.bike1_cpcounter_bike1 == $.total_checkpoints_bike1) {
            Text.PrintNow("RACEFA", 5000, 1); //"~r~You failed to win the race!"
            // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
          }
          if ($.driver_bike1_bike1.isInCar($.race_bike1)) {
            if ($.bike1_locate_size_bike1 == 7.0) {
              $.race_bike1.gotoCoordinates($.bike1_cp_x_bike1, $.bike1_cp_y_bike1, $.bike1_cp_z_bike1);
            }
            else {
              $.race_bike1.gotoCoordinatesAccurate($.bike1_cp_x_bike1, $.bike1_cp_y_bike1, $.bike1_cp_z_bike1);
            }


          }


        }


      }


    }
    else {
      Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
      // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
    }

    // checks for bike2

    if (!(Char.IsDead($.driver_bike2_bike1))) {
      if (!(Car.IsDead($.race_bike2_bike1))) {
        $.gosub_race_bike_bike1 = $.race_bike2_bike1;
        $.gosub_cpcounter_bike1 = $.bike2_cpcounter_bike1;
        $.gosub_rider_bike1 = $.driver_bike2_bike1;
        $.gosub_cp_x_bike1 = $.bike2_cp_x_bike1;
        $.gosub_cp_y_bike1 = $.bike2_cp_y_bike1;
        $.gosub_cp_z_bike1 = $.bike2_cp_z_bike1;
        $.flag_gosub_rider_off_bike1 = $.driver_bike2_off_bike1;
        await player1_position_bike1();  // SCM GOSUB player1_position_bike1
        await bike_stuck_checks_bike1();  // SCM GOSUB bike_stuck_checks_bike1
        await water_checks_bike1();  // SCM GOSUB water_checks_bike1
        await rider_fallen_off_bike_bike1();  // SCM GOSUB rider_fallen_off_bike_bike1
        $.driver_bike2_bike1 = $.gosub_rider_bike1;
        $.race_bike2_bike1 = $.gosub_race_bike_bike1;
        $.driver_bike2_off_bike1 = $.flag_gosub_rider_off_bike1;
        if ($.driver_bike2_bike1.locateAnyMeans3D($.bike2_cp_x_bike1, $.bike2_cp_y_bike1, $.bike2_cp_z_bike1, $.bike2_locate_size_bike1, $.bike2_locate_size_bike1, $.bike2_locate_size_bike1, false) && $.driver_bike2_bike1.isInModel(ANGEL)) {
          ++$.bike2_cpcounter_bike1;
          $.gosub_cpcounter_bike1 = $.bike2_cpcounter_bike1;
          await get_next_checkpoint_bike1();  // SCM GOSUB get_next_checkpoint_bike1
          $.bike2_cp_x_bike1 = $.gosub_cp_x_bike1;
          $.bike2_cp_y_bike1 = $.gosub_cp_y_bike1;
          $.bike2_cp_z_bike1 = $.gosub_cp_z_bike1;
          if ($.bike2_cpcounter_bike1 == 17) {
            $.bike2_locate_size_bike1 = 6.0;
          }
          if ($.bike2_cpcounter_bike1 == $.total_checkpoints_bike1) {
            Text.PrintNow("RACEFA", 5000, 1); //"~r~You failed to win the race!"
            // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
          }
          if ($.driver_bike2_bike1.isInCar($.race_bike2_bike1)) {
            if ($.bike2_locate_size_bike1 == 7.0) {
              $.race_bike2_bike1.gotoCoordinates($.bike2_cp_x_bike1, $.bike2_cp_y_bike1, $.bike2_cp_z_bike1);
            }
            else {
              $.race_bike2_bike1.gotoCoordinatesAccurate($.bike2_cp_x_bike1, $.bike2_cp_y_bike1, $.bike2_cp_z_bike1);
            }


          }


        }


      }


    }
    else {
      Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
      // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
    }

    // checks for bike 3

    if (!(Char.IsDead($.driver_bike3_bike1))) {
      if (!(Car.IsDead($.race_bike3_bike1))) {
        $.gosub_race_bike_bike1 = $.race_bike3_bike1;
        $.gosub_cpcounter_bike1 = $.bike3_cpcounter_bike1;
        $.gosub_rider_bike1 = $.driver_bike3_bike1;
        $.gosub_cp_x_bike1 = $.bike3_cp_x_bike1;
        $.gosub_cp_y_bike1 = $.bike3_cp_y_bike1;
        $.gosub_cp_z_bike1 = $.bike3_cp_z_bike1;
        $.flag_gosub_rider_off_bike1 = $.driver_bike3_off_bike1;
        await player1_position_bike1();  // SCM GOSUB player1_position_bike1
        await bike_stuck_checks_bike1();  // SCM GOSUB bike_stuck_checks_bike1
        await water_checks_bike1();  // SCM GOSUB water_checks_bike1
        await rider_fallen_off_bike_bike1();  // SCM GOSUB rider_fallen_off_bike_bike1
        $.driver_bike3_bike1 = $.gosub_rider_bike1;
        $.race_bike3_bike1 = $.gosub_race_bike_bike1;
        $.driver_bike3_off_bike1 = $.flag_gosub_rider_off_bike1;
        if ($.driver_bike3_bike1.locateAnyMeans3D($.bike3_cp_x_bike1, $.bike3_cp_y_bike1, $.bike3_cp_z_bike1, $.bike3_locate_size_bike1, $.bike3_locate_size_bike1, $.bike3_locate_size_bike1, false) && $.driver_bike3_bike1.isInModel(ANGEL)) {
          ++$.bike3_cpcounter_bike1;
          $.gosub_cpcounter_bike1 = $.bike3_cpcounter_bike1;
          await get_next_checkpoint_bike1();  // SCM GOSUB get_next_checkpoint_bike1
          $.bike3_cp_x_bike1 = $.gosub_cp_x_bike1;
          $.bike3_cp_y_bike1 = $.gosub_cp_y_bike1;
          $.bike3_cp_z_bike1 = $.gosub_cp_z_bike1;
          if ($.bike3_cpcounter_bike1 == 17) {
            $.bike3_locate_size_bike1 = 6.0;
          }
          if ($.bike3_cpcounter_bike1 == $.total_checkpoints_bike1) {
            Text.PrintNow("RACEFA", 5000, 1); //"~r~You failed to win the race!"
            // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
          }
          if ($.driver_bike3_bike1.isInCar($.race_bike3_bike1)) {
            if ($.bike3_locate_size_bike1 == 7.0) {
              $.race_bike3_bike1.gotoCoordinates($.bike3_cp_x_bike1, $.bike3_cp_y_bike1, $.bike3_cp_z_bike1);
            }
            else {
              $.race_bike3_bike1.gotoCoordinatesAccurate($.bike3_cp_x_bike1, $.bike3_cp_y_bike1, $.bike3_cp_z_bike1);
            }


          }


        }


      }


    }
    else {
      Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
      // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
    }

    // checks player1s position in the race

    if ($.position_bike1 == 0) {
      Text.PrintNow("FIRST", 100, 1); //"1st"
    }
    if ($.position_bike1 == 1) {
      Text.PrintNow("SECOND", 100, 1); //"2nd"
    }
    if ($.position_bike1 == 2) {
      Text.PrintNow("THIRD", 100, 1); //"3rd"
    }
    if ($.position_bike1 == 3) {
      Text.PrintNow("FOURTH", 100, 1); //"4th"
    }
    if ($.player1_cpcounter_bike1 == 17) {
      Fx.DrawCorona($.player1_cp_x_bike1, $.player1_cp_y_bike1, $.player1_cp_z_bike1, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 0, 0);
    }
    else {
      Fx.DrawCorona($.player1_cp_x_bike1, $.player1_cp_y_bike1, $.player1_cp_z_bike1, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }


  }


  Hud.ClearTimer($.$id.race_timer_bike1);


  StuckCarCheck.Remove($.race_bike1);
  StuckCarCheck.Remove($.race_bike2_bike1);
  StuckCarCheck.Remove($.race_bike3_bike1);


  // SCM GOTO → mission_bike1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_bike1_passed"); // fallback: would break linear control flow
}



// ****************************************** Mission Failed *******************************


async function mission_bike1_failed() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}





// *************************************** Mission Passed **********************************


async function mission_bike1_passed() {


  $.flag_bikers_mission1_passed = 1;
  Stat.RegisterMissionPassed("BIKE_1");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();


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


  if ($.biker_bar_sound2_added == 0) {
    $.bike_bar_loop2 = Sound.AddContinuous(-596.018, 640.916, 12.0, SOUND_NEW_BUILDING_BAR_2); //Biker bar
    $.biker_bar_sound2_added = 1;
  }


  $.race_timer_seconds_bike1 = $.race_timer_bike1 / 1000;


  Stat.RegisterFastestTime(0, $.race_timer_seconds_bike1);

  /// Works out race time in mins and seconds


  $.race_timer_mins_bike1 = $.race_timer_seconds_bike1 / 60;
  $.race_timer_seconds2_bike1 = $.race_timer_mins_bike1 * 60;
  $.race_timer_seconds_bike1 = $.race_timer_seconds_bike1 - $.race_timer_seconds2_bike1;


  Text.PrintWithNumberBig("M_PASS", 1000, 5000, 1); // "Mission Passed!"
  $.player1.addScore(1000);


  if ($.race_timer_seconds_bike1 >= 10) {
    Text.PrintWith2NumbersNow("RACETM", $.race_timer_mins_bike1, $.race_timer_seconds_bike1, 5000, 1);
  }
  else {
    Text.PrintWith2NumbersNow("RACETM2", $.race_timer_mins_bike1, $.race_timer_seconds_bike1, 5000, 1);
  }


  if (Game.IsGerman()) {
    // START_NEW_SCRIPT bikers_mission3_loop
  }
  else {
    // START_NEW_SCRIPT bikers_mission2_loop
  }
}




// *************************************** Mission Cleanup *********************************


async function mission_cleanup_bike1() {


  ONMISSION = 0;
  World.SetCarDensityMultiplier(1.0); // Sets this back to normal
  Path.SwitchRoadsOn($.road1_x_bike1, $.road1_y_bike1, $.road1_z_bike1, $.road2_x_bike1, $.road2_y_bike1, $.road2_z_bike1);
  $.blip_chase_bike1.remove();
  $.second_blip_bike1_bike1.remove();
  $.bike1_blip.remove();
  $.bike2_blip.remove();
  $.bike3_blip.remove();
  Streaming.MarkModelAsNoLongerNeeded(BKa);
  Streaming.MarkModelAsNoLongerNeeded(BKb);
  Streaming.MarkModelAsNoLongerNeeded(ANGEL);
  Streaming.MarkModelAsNoLongerNeeded(178 /* UZI */);
  Hud.ClearTimer($.$id.race_timer_bike1);
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}


// Next check point


async function get_next_checkpoint_bike1() {


  if ($.gosub_cpcounter_bike1 == 0) {
    $.gosub_cp_x_bike1 = $.cp1_x_bike1;
    $.gosub_cp_y_bike1 = $.cp1_y_bike1;
    $.gosub_cp_z_bike1 = $.cp1_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp2_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp2_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp2_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 1) {
    $.gosub_cp_x_bike1 = $.cp2_x_bike1;
    $.gosub_cp_y_bike1 = $.cp2_y_bike1;
    $.gosub_cp_z_bike1 = $.cp2_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp3_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp3_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp3_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 2) {
    $.gosub_cp_x_bike1 = $.cp3_x_bike1;
    $.gosub_cp_y_bike1 = $.cp3_y_bike1;
    $.gosub_cp_z_bike1 = $.cp3_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp4_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp4_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp4_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 3) {
    $.gosub_cp_x_bike1 = $.cp4_x_bike1;
    $.gosub_cp_y_bike1 = $.cp4_y_bike1;
    $.gosub_cp_z_bike1 = $.cp4_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp5_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp5_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp5_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 4) {
    $.gosub_cp_x_bike1 = $.cp5_x_bike1;
    $.gosub_cp_y_bike1 = $.cp5_y_bike1;
    $.gosub_cp_z_bike1 = $.cp5_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp6_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp6_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp6_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 5) {
    $.gosub_cp_x_bike1 = $.cp6_x_bike1;
    $.gosub_cp_y_bike1 = $.cp6_y_bike1;
    $.gosub_cp_z_bike1 = $.cp6_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp7_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp7_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp7_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 6) {
    $.gosub_cp_x_bike1 = $.cp7_x_bike1;
    $.gosub_cp_y_bike1 = $.cp7_y_bike1;
    $.gosub_cp_z_bike1 = $.cp7_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp8_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp8_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp8_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 7) {
    $.gosub_cp_x_bike1 = $.cp8_x_bike1;
    $.gosub_cp_y_bike1 = $.cp8_y_bike1;
    $.gosub_cp_z_bike1 = $.cp8_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp9_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp9_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp9_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 8) {
    $.gosub_cp_x_bike1 = $.cp9_x_bike1;
    $.gosub_cp_y_bike1 = $.cp9_y_bike1;
    $.gosub_cp_z_bike1 = $.cp9_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp10_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp10_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp10_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 9) {
    $.gosub_cp_x_bike1 = $.cp10_x_bike1;
    $.gosub_cp_y_bike1 = $.cp10_y_bike1;
    $.gosub_cp_z_bike1 = $.cp10_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp11_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp11_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp11_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 10) {
    $.gosub_cp_x_bike1 = $.cp11_x_bike1;
    $.gosub_cp_y_bike1 = $.cp11_y_bike1;
    $.gosub_cp_z_bike1 = $.cp11_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp12_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp12_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp12_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 11) {
    $.gosub_cp_x_bike1 = $.cp12_x_bike1;
    $.gosub_cp_y_bike1 = $.cp12_y_bike1;
    $.gosub_cp_z_bike1 = $.cp12_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp13_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp13_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp13_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 12) {
    $.gosub_cp_x_bike1 = $.cp13_x_bike1;
    $.gosub_cp_y_bike1 = $.cp13_y_bike1;
    $.gosub_cp_z_bike1 = $.cp13_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp14_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp14_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp14_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 13) {
    $.gosub_cp_x_bike1 = $.cp14_x_bike1;
    $.gosub_cp_y_bike1 = $.cp14_y_bike1;
    $.gosub_cp_z_bike1 = $.cp14_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp15_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp15_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp15_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 14) {
    $.gosub_cp_x_bike1 = $.cp15_x_bike1;
    $.gosub_cp_y_bike1 = $.cp15_y_bike1;
    $.gosub_cp_z_bike1 = $.cp15_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp16_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp16_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp16_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 15) {
    $.gosub_cp_x_bike1 = $.cp16_x_bike1;
    $.gosub_cp_y_bike1 = $.cp16_y_bike1;
    $.gosub_cp_z_bike1 = $.cp16_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp17_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp17_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp17_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 16) {
    $.gosub_cp_x_bike1 = $.cp17_x_bike1;
    $.gosub_cp_y_bike1 = $.cp17_y_bike1;
    $.gosub_cp_z_bike1 = $.cp17_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp18_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp18_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp18_z_bike1;
  }


  if ($.gosub_cpcounter_bike1 == 17) {
    $.gosub_cp_x_bike1 = $.cp18_x_bike1;
    $.gosub_cp_y_bike1 = $.cp18_y_bike1;
    $.gosub_cp_z_bike1 = $.cp18_z_bike1;
    $.gosub_cp_2nd_x_bike1 = $.cp18_x_bike1;
    $.gosub_cp_2nd_y_bike1 = $.cp18_y_bike1;
    $.gosub_cp_2nd_z_bike1 = $.cp18_z_bike1;
  }
}


// Bike stuck checks


async function bike_stuck_checks_bike1() {


  $.bike_health_bike1 = $.gosub_race_bike_bike1.getHealth();


  if ($.bike_health_bike1 < 500) {
    $.gosub_race_bike_bike1.setHealth(1000);
  }


  if ($.gosub_rider_bike1.isInCar($.gosub_race_bike_bike1)) {
    if (!(Char.IsDead($.gosub_rider_bike1))) {
      if (StuckCarCheck.IsCarStuck($.gosub_race_bike_bike1)) {
        if (!($.gosub_race_bike_bike1.isOnScreen()) && !($.player1.locateAnyMeansChar3D($.gosub_rider_bike1, 30.0, 30.0, 30.0, false /* FALSE */))) {
          const _res99 = $.gosub_race_bike_bike1.getCoordinates();
$.bike_x_bike1 = _res99.x;
$.bike_y_bike1 = _res99.y;
$.bike_z_bike1 = _res99.z;
          const _res100 = Path.GetClosestCarNode($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1);
$.bike_x_bike1 = _res100.nodeX;
$.bike_y_bike1 = _res100.nodeY;
$.bike_z_bike1 = _res100.nodeZ;
          if (!(World.IsPointObscuredByAMissionEntity($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1, 4.0, 4.0, 3.0))) {
            if (!(Camera.IsPointOnScreen($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1, 4.0))) {
              $.gosub_race_bike_bike1.setCoordinates($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1);
              $.gosub_race_bike_bike1.turnToFaceCoord($.gosub_cp_x_bike1, $.gosub_cp_y_bike1);
              if ($.gosub_rider_bike1.isInCar($.gosub_race_bike_bike1)) {
                if ($.bike1_locate_size_bike1 == 7.0 || $.bike2_locate_size_bike1 == 7.0 || $.bike3_locate_size_bike1 == 7.0) {
                  $.gosub_race_bike_bike1.setDrivingStyle(2);
                  $.gosub_race_bike_bike1.setCruiseSpeed(63.0);
                  $.gosub_race_bike_bike1.gotoCoordinates($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
                }
                else {
                  $.gosub_race_bike_bike1.setDrivingStyle(2);
                  $.gosub_race_bike_bike1.setCruiseSpeed(63.0);
                  $.gosub_race_bike_bike1.gotoCoordinatesAccurate($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
                }


              }
              $.timer_reset_flag = 0;
            }


          }
          else {
            const _res101 = Path.GetNthClosestCarNode($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1, 2);
$.bike_x_bike1 = _res101.x;
$.bike_y_bike1 = _res101.y;
$.bike_z_bike1 = _res101.z;
            if (!(World.IsPointObscuredByAMissionEntity($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1, 4.0, 4.0, 3.0))) {
              if (!(Camera.IsPointOnScreen($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1, 4.0))) {
                $.gosub_race_bike_bike1.setCoordinates($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1);
                $.gosub_race_bike_bike1.turnToFaceCoord($.gosub_cp_x_bike1, $.gosub_cp_y_bike1);
                if ($.gosub_rider_bike1.isInCar($.gosub_race_bike_bike1)) {
                  if ($.bike1_locate_size_bike1 == 7.0 || $.bike2_locate_size_bike1 == 7.0 || $.bike3_locate_size_bike1 == 7.0) {
                    $.gosub_race_bike_bike1.setDrivingStyle(2);
                    $.gosub_race_bike_bike1.setCruiseSpeed(63.0);
                    $.gosub_race_bike_bike1.gotoCoordinates($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
                  }
                  else {
                    $.gosub_race_bike_bike1.setDrivingStyle(2);
                    $.gosub_race_bike_bike1.setCruiseSpeed(63.0);
                    $.gosub_race_bike_bike1.gotoCoordinatesAccurate($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
                  }


                }
                $.timer_reset_flag = 0;
              }


            }


          }


        }


      }


    }


  }


  $.temp_int_bike1 = $.player1_cpcounter_bike1 - 2;


  if ($.gosub_cpcounter_bike1 < $.temp_int_bike1) {
    if (!(Car.IsDead($.gosub_race_bike_bike1))) {
      if (!(Char.IsDead($.gosub_rider_bike1))) {
        if ($.gosub_rider_bike1.isInCar($.gosub_race_bike_bike1)) {
          if (!($.gosub_race_bike_bike1.isOnScreen())) {
            if (!(World.IsPointObscuredByAMissionEntity($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1, 4.0, 4.0, 3.0))) {
              if (!(Camera.IsPointOnScreen($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1, 4.0))) {
                $.gosub_race_bike_bike1.setCoordinates($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
                $.gosub_race_bike_bike1.turnToFaceCoord($.player1_cp_x_bike1, $.player1_cp_y_bike1);
                $.gosub_race_bike_bike1.setForwardSpeed(30.0);
              }


            }


          }


        }


      }


    }


  }
}


// Rider fallen off bike checks


async function rider_fallen_off_bike_bike1() {


  if (!(Char.IsDead($.gosub_rider_bike1))) {
    $.gosub_rider_health_bike1 = $.gosub_rider_bike1.getHealth();
    if (!($.gosub_rider_bike1.isInAnyCar())) {
      $.flag_gosub_rider_off_bike1 = 1;
      if (!($.gosub_rider_bike1.isOnScreen())) {
        if (!($.player1.locateAnyMeansChar3D($.gosub_rider_bike1, 20.0, 20.0, 10.0, false /* FALSE */))) {
          const _res102 = $.gosub_rider_bike1.getCoordinates();
$.gosub_rider_x_bike1 = _res102.x;
$.gosub_rider_y_bike1 = _res102.y;
$.gosub_rider_z_bike1 = _res102.z;
          const _res103 = Path.GetClosestCarNode($.gosub_rider_x_bike1, $.gosub_rider_y_bike1, $.gosub_rider_z_bike1);
$.bike_x_bike1 = _res103.nodeX;
$.bike_y_bike1 = _res103.nodeY;
$.bike_z_bike1 = _res103.nodeZ;
          if (!(World.IsPointObscuredByAMissionEntity($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1, 4.0, 4.0, 3.0))) {
            if (!(Camera.IsPointOnScreen($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1, 4.0))) {
              StuckCarCheck.Remove($.gosub_race_bike_bike1);
              $.gosub_race_bike_bike1.markAsNoLongerNeeded();
              $.gosub_race_bike_bike1 = Car.Create(ANGEL, $.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1);
              StuckCarCheck.Add($.gosub_race_bike_bike1, 1.0, 2000);
              $.gosub_rider_bike1.setObjNoObj();
              $.gosub_rider_bike1.warpIntoCar($.gosub_race_bike_bike1);
              $.gosub_race_bike_bike1.turnToFaceCoord($.gosub_cp_x_bike1, $.gosub_cp_y_bike1);
              if ($.gosub_rider_bike1.isInCar($.gosub_race_bike_bike1)) {
                if ($.bike1_locate_size_bike1 == 7.0 || $.bike2_locate_size_bike1 == 7.0 || $.bike3_locate_size_bike1 == 7.0) {
                  $.gosub_race_bike_bike1.setDrivingStyle(2);
                  $.gosub_race_bike_bike1.setCruiseSpeed(63.0);
                  $.gosub_race_bike_bike1.gotoCoordinates($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
                }
                else {
                  $.gosub_race_bike_bike1.setDrivingStyle(2);
                  $.gosub_race_bike_bike1.setCruiseSpeed(63.0);
                  $.gosub_race_bike_bike1.gotoCoordinatesAccurate($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
                }


              }


            }
            else {
              const _res104 = Path.GetNthClosestCarNode($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1, 2);
$.bike_x_bike1 = _res104.x;
$.bike_y_bike1 = _res104.y;
$.bike_z_bike1 = _res104.z;
              if (!(World.IsPointObscuredByAMissionEntity($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1, 4.0, 4.0, 3.0))) {
                if (!(Camera.IsPointOnScreen($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1, 4.0))) {
                  StuckCarCheck.Remove($.gosub_race_bike_bike1);
                  $.gosub_race_bike_bike1.markAsNoLongerNeeded();
                  $.gosub_race_bike_bike1 = Car.Create(ANGEL, $.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1);
                  StuckCarCheck.Add($.gosub_race_bike_bike1, 1.0, 2000);
                  $.gosub_rider_bike1.setObjNoObj();
                  $.gosub_rider_bike1.warpIntoCar($.gosub_race_bike_bike1);
                  $.gosub_race_bike_bike1.turnToFaceCoord($.gosub_cp_x_bike1, $.gosub_cp_y_bike1);
                  if ($.gosub_rider_bike1.isInCar($.gosub_race_bike_bike1)) {
                    if ($.bike1_locate_size_bike1 == 7.0 || $.bike2_locate_size_bike1 == 7.0 || $.bike3_locate_size_bike1 == 7.0) {
                      $.gosub_race_bike_bike1.setDrivingStyle(2);
                      $.gosub_race_bike_bike1.setCruiseSpeed(63.0);
                      $.gosub_race_bike_bike1.gotoCoordinates($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
                    }
                    else {
                      $.gosub_race_bike_bike1.setDrivingStyle(2);
                      $.gosub_race_bike_bike1.setCruiseSpeed(63.0);
                      $.gosub_race_bike_bike1.gotoCoordinatesAccurate($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
                    }


                  }


                }


              }


            }


          }


        }


      }
      else {
        if (!(Car.IsDead($.gosub_race_bike_bike1))) {
          $.gosub_rider_bike1.setRunning(true /* TRUE */);
          $.gosub_rider_bike1.setObjEnterCarAsDriver($.gosub_race_bike_bike1);
          if ($.gosub_rider_bike1.isInCar($.gosub_race_bike_bike1)) {
            if ($.bike1_locate_size_bike1 == 7.0 || $.bike2_locate_size_bike1 == 7.0 || $.bike3_locate_size_bike1 == 7.0) {
              $.gosub_race_bike_bike1.setDrivingStyle(2);
              $.gosub_race_bike_bike1.setCruiseSpeed(63.0);
              $.gosub_race_bike_bike1.gotoCoordinates($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
            }
            else {
              $.gosub_race_bike_bike1.setDrivingStyle(2);
              $.gosub_race_bike_bike1.setCruiseSpeed(63.0);
              $.gosub_race_bike_bike1.gotoCoordinatesAccurate($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
            }


          }


        }
        else {
          $.gosub_rider_bike1.setObjKillPlayerOnFoot($.player1);
          $.gosub_rider_bike1.giveWeapon(3 /* WEAPONTYPE_UZI */, 300000); // set to infinate ammo
        }


      }


    }
    else {
      if ($.flag_gosub_rider_off_bike1 == 1) {
        if ($.gosub_rider_bike1.isInCar($.gosub_race_bike_bike1)) {
          if ($.bike1_locate_size_bike1 == 7.0 || $.bike2_locate_size_bike1 == 7.0 || $.bike3_locate_size_bike1 == 7.0) {
            $.gosub_race_bike_bike1.setDrivingStyle(2);
            $.gosub_race_bike_bike1.setCruiseSpeed(63.0);
            $.gosub_race_bike_bike1.gotoCoordinates($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
            $.flag_gosub_rider_off_bike1 = 0;
          }
          else {
            $.gosub_race_bike_bike1.setDrivingStyle(2);
            $.gosub_race_bike_bike1.setCruiseSpeed(63.0);
            $.gosub_race_bike_bike1.gotoCoordinatesAccurate($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
            $.flag_gosub_rider_off_bike1 = 0;
          }


        }


      }


    }


  }
}



// Player position checks


async function player1_position_bike1() {


  if ($.player1_cpcounter_bike1 == $.gosub_cpcounter_bike1) {
    const _res105 = $.gosub_rider_bike1.getCoordinates();
$.bike_x_bike1 = _res105.x;
$.bike_y_bike1 = _res105.y;
$.bike_z_bike1 = _res105.z;
    $.difference_x_float_d_bike1 = $.bike_x_bike1 - $.player1_cp_x_bike1;
    $.difference_y_float_d_bike1 = $.bike_y_bike1 - $.player1_cp_y_bike1;
    $.difference_x_float_d_bike1 = $.difference_x_float_d_bike1 * $.difference_x_float_d_bike1;
    $.difference_y_float_d_bike1 = $.difference_y_float_d_bike1 * $.difference_y_float_d_bike1;
    $.sum_difference_d_xy_bike1 = $.difference_x_float_d_bike1 + $.difference_y_float_d_bike1;
    $.bike_distance_from_cp_bike1 = Math.Sqrt($.sum_difference_d_xy_bike1);
    const _res106 = $.player1.getCoordinates();
$.bike_x_bike1 = _res106.x;
$.bike_y_bike1 = _res106.y;
$.bike_z_bike1 = _res106.z;
    $.difference_x_float_d_bike1 = $.bike_x_bike1 - $.player1_cp_x_bike1;
    $.difference_y_float_d_bike1 = $.bike_y_bike1 - $.player1_cp_y_bike1;
    $.difference_x_float_d_bike1 = $.difference_x_float_d_bike1 * $.difference_x_float_d_bike1;
    $.difference_y_float_d_bike1 = $.difference_y_float_d_bike1 * $.difference_y_float_d_bike1;
    $.sum_difference_d_xy_bike1 = $.difference_x_float_d_bike1 + $.difference_y_float_d_bike1;
    $.player1_distance_from_cp_bike1 = Math.Sqrt($.sum_difference_d_xy_bike1);
    if ($.player1_distance_from_cp_bike1 > $.bike_distance_from_cp_bike1) {
      ++$.position_bike1;
    }
  }
  else {
    if ($.player1_cpcounter_bike1 < $.gosub_cpcounter_bike1) {
      ++$.position_bike1;
    }
  }
}


// water checks


async function water_checks_bike1() {


  if (!(Char.IsDead($.gosub_rider_bike1))) {
    if ($.gosub_rider_bike1.isInWater()) {
      if (!($.gosub_rider_bike1.isOnScreen())) {
        if (!($.player1.locateAnyMeansChar3D($.gosub_rider_bike1, 10.0, 10.0, 10.0, false /* FALSE */))) {
          const _res107 = $.gosub_rider_bike1.getCoordinates();
$.gosub_rider_x_bike1 = _res107.x;
$.gosub_rider_y_bike1 = _res107.y;
$.gosub_rider_z_bike1 = _res107.z;
          const _res108 = Path.GetClosestCarNode($.gosub_rider_x_bike1, $.gosub_rider_y_bike1, $.gosub_rider_z_bike1);
$.bike_x_bike1 = _res108.nodeX;
$.bike_y_bike1 = _res108.nodeY;
$.bike_z_bike1 = _res108.nodeZ;
          if (!(World.IsPointObscuredByAMissionEntity($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1, 4.0, 4.0, 3.0))) {
            if (!(Char.IsDead($.gosub_rider_bike1))) {
              if (!(Camera.IsPointOnScreen($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1, 4.0))) {
                StuckCarCheck.Remove($.gosub_race_bike_bike1);
                $.gosub_race_bike_bike1.markAsNoLongerNeeded();
                $.gosub_race_bike_bike1 = Car.Create(ANGEL, $.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1);
                StuckCarCheck.Add($.gosub_race_bike_bike1, 1.0, 2000);
                $.gosub_rider_bike1.setObjNoObj();
                $.gosub_rider_bike1.warpIntoCar($.gosub_race_bike_bike1);
                $.gosub_race_bike_bike1.turnToFaceCoord($.gosub_cp_x_bike1, $.gosub_cp_y_bike1);
                if ($.gosub_rider_bike1.isInCar($.gosub_race_bike_bike1)) {
                  if ($.bike1_locate_size_bike1 == 7.0 || $.bike2_locate_size_bike1 == 7.0 || $.bike3_locate_size_bike1 == 7.0) {
                    $.gosub_race_bike_bike1.setDrivingStyle(2);
                    $.gosub_race_bike_bike1.setCruiseSpeed(63.0);
                    $.gosub_race_bike_bike1.gotoCoordinates($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
                  }
                  else {
                    $.gosub_race_bike_bike1.setDrivingStyle(2);
                    $.gosub_race_bike_bike1.setCruiseSpeed(63.0);
                    $.gosub_race_bike_bike1.gotoCoordinatesAccurate($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
                  }


                }


              }


            }
            else {
              Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
              // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
            }


          }
          else {
            const _res109 = Path.GetNthClosestCarNode($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1, 2);
$.bike_x_bike1 = _res109.x;
$.bike_y_bike1 = _res109.y;
$.bike_z_bike1 = _res109.z;
            if (!(World.IsPointObscuredByAMissionEntity($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1, 4.0, 4.0, 3.0))) {
              if (!(Char.IsDead($.gosub_rider_bike1))) {
                if (!(Camera.IsPointOnScreen($.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1, 4.0))) {
                  StuckCarCheck.Remove($.gosub_race_bike_bike1);
                  $.gosub_race_bike_bike1.markAsNoLongerNeeded();
                  $.gosub_race_bike_bike1 = Car.Create(ANGEL, $.bike_x_bike1, $.bike_y_bike1, $.bike_z_bike1);
                  StuckCarCheck.Add($.gosub_race_bike_bike1, 1.0, 2000);
                  $.gosub_rider_bike1.setObjNoObj();
                  $.gosub_rider_bike1.warpIntoCar($.gosub_race_bike_bike1);
                  $.gosub_race_bike_bike1.turnToFaceCoord($.gosub_cp_x_bike1, $.gosub_cp_y_bike1);
                  if ($.gosub_rider_bike1.isInCar($.gosub_race_bike_bike1)) {
                    if ($.bike1_locate_size_bike1 == 7.0 || $.bike2_locate_size_bike1 == 7.0 || $.bike3_locate_size_bike1 == 7.0) {
                      $.gosub_race_bike_bike1.setDrivingStyle(2);
                      $.gosub_race_bike_bike1.setCruiseSpeed(63.0);
                      $.gosub_race_bike_bike1.gotoCoordinates($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
                    }
                    else {
                      $.gosub_race_bike_bike1.setDrivingStyle(2);
                      $.gosub_race_bike_bike1.setCruiseSpeed(63.0);
                      $.gosub_race_bike_bike1.gotoCoordinatesAccurate($.gosub_cp_x_bike1, $.gosub_cp_y_bike1, $.gosub_cp_z_bike1);
                    }


                  }


                }


              }
              else {
                Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
                // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
              }


            }


          }


        }


      }


    }


  }
  else {
    Text.PrintNow("BM1_3", 5000, 1); //"The racers have been attacked!"
    // SCM GOTO → mission_bike1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bike1_failed"); // fallback: would break linear control flow
  }
}

export async function bike1() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // ************************************ Biker Gang Mission One *****************************
  // **************************************** The Bike Race **********************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // SCRIPT_NAME bike1

  // Mission start stuff


  await mission_start_bike1();  // SCM GOSUB mission_start_bike1


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_bike1_failed();  // SCM GOSUB mission_bike1_failed
  }


  await mission_cleanup_bike1();  // SCM GOSUB mission_cleanup_bike1


  // MissionBoundary


  // Variables for mission

  // ******************************** Variables for mission **********************************

  // Player stuff


  // VAR_FLOAT player1_distance_from_cp_bike1


  // VAR_FLOAT player1_cp_x_bike1


  // VAR_FLOAT player1_cp_y_bike1


  // VAR_FLOAT player1_cp_z_bike1


  // VAR_FLOAT blip_2nd_x_bike1


  // VAR_FLOAT blip_2nd_y_bike1


  // VAR_FLOAT blip_2nd_z_bike1


  // VAR_FLOAT player1_x_bike1


  // VAR_FLOAT player1_y_bike1


  // VAR_FLOAT player1_z_bike1


  // VAR_INT player1_cpcounter_bike1



  // VAR_INT driver_bike1_bike1


  // VAR_INT driver_bike1_health_bike1

  //VAR_FLOAT driver1_x_bike1

  //VAR_FLOAT driver1_y_bike1

  //VAR_FLOAT driver1_z_bike1


  // VAR_FLOAT bike1_locate_size_bike1


  // VAR_FLOAT bike1_stuck_x_bike1


  // VAR_FLOAT bike1_stuck_y_bike1


  // VAR_FLOAT bike1_stuck_z_bike1


  // VAR_FLOAT bike1_cp_x_bike1


  // VAR_FLOAT bike1_cp_y_bike1


  // VAR_FLOAT bike1_cp_z_bike1


  // VAR_INT race_bike1


  // VAR_INT bike1_cpcounter_bike1


  // VAR_INT bike1_blip

  // Bike2


  // VAR_INT driver_bike2_bike1


  // VAR_INT driver_bike2_health_bike1


  // VAR_FLOAT bike2_locate_size_bike1


  // VAR_FLOAT bike2_stuck_x_bike1


  // VAR_FLOAT bike2_stuck_y_bike1


  // VAR_FLOAT bike2_stuck_z_bike1


  // VAR_FLOAT bike2_cp_x_bike1


  // VAR_FLOAT bike2_cp_y_bike1


  // VAR_FLOAT bike2_cp_z_bike1


  // VAR_INT race_bike2_bike1


  // VAR_INT bike2_cpcounter_bike1


  // VAR_INT bike2_blip


  // VAR_INT bike2_health_bike1

  // Bike3 Stuff


  // VAR_INT driver_bike3_bike1


  // VAR_INT driver_bike3_health_bike1


  // VAR_FLOAT bike3_locate_size_bike1


  // VAR_FLOAT bike3_stuck_x_bike1


  // VAR_FLOAT bike3_stuck_y_bike1


  // VAR_FLOAT bike3_stuck_z_bike1


  // VAR_FLOAT bike3_cp_x_bike1


  // VAR_FLOAT bike3_cp_y_bike1


  // VAR_FLOAT bike3_cp_z_bike1


  // VAR_INT race_bike3_bike1


  // VAR_INT bike3_cpcounter_bike1


  // VAR_INT bike3_blip


  // VAR_INT bike3_health_bike1

  // General stuff


  // VAR_FLOAT bike_x_bike1


  // VAR_FLOAT bike_y_bike1


  // VAR_FLOAT bike_z_bike1


  // VAR_FLOAT bike_headings_bike1


  // VAR_FLOAT difference_x_float_d_bike1


  // VAR_FLOAT difference_y_float_d_bike1


  // VAR_FLOAT sum_difference_d_xy_bike1


  // VAR_FLOAT bike_distance_from_cp_bike1

  // Used for switching off any roads I cant have cars on


  // VAR_FLOAT road1_x_bike1


  // VAR_FLOAT road1_y_bike1


  // VAR_FLOAT road1_z_bike1


  // VAR_FLOAT road2_x_bike1


  // VAR_FLOAT road2_y_bike1


  // VAR_FLOAT road2_z_bike1

  // Check point stuff


  // VAR_FLOAT cp1_x_bike1 cp1_y_bike1 cp1_z_bike1


  // VAR_FLOAT cp2_x_bike1 cp2_y_bike1 cp2_z_bike1


  // VAR_FLOAT cp3_x_bike1 cp3_y_bike1 cp3_z_bike1


  // VAR_FLOAT cp4_x_bike1 cp4_y_bike1 cp4_z_bike1


  // VAR_FLOAT cp5_x_bike1 cp5_y_bike1 cp5_z_bike1


  // VAR_FLOAT cp6_x_bike1 cp6_y_bike1 cp6_z_bike1


  // VAR_FLOAT cp7_x_bike1 cp7_y_bike1 cp7_z_bike1


  // VAR_FLOAT cp8_x_bike1 cp8_y_bike1 cp8_z_bike1


  // VAR_FLOAT cp9_x_bike1 cp9_y_bike1 cp9_z_bike1


  // VAR_FLOAT cp10_x_bike1 cp10_y_bike1 cp10_z_bike1


  // VAR_FLOAT cp11_x_bike1 cp11_y_bike1 cp11_z_bike1


  // VAR_FLOAT cp12_x_bike1 cp12_y_bike1 cp12_z_bike1


  // VAR_FLOAT cp13_x_bike1 cp13_y_bike1 cp13_z_bike1


  // VAR_FLOAT cp14_x_bike1 cp14_y_bike1 cp14_z_bike1


  // VAR_FLOAT cp15_x_bike1 cp15_y_bike1 cp15_z_bike1


  // VAR_FLOAT cp16_x_bike1 cp16_y_bike1 cp16_z_bike1


  // VAR_FLOAT cp17_x_bike1 cp17_y_bike1 cp17_z_bike1


  // VAR_FLOAT cp18_x_bike1 cp18_y_bike1 cp18_z_bike1


  // VAR_FLOAT gosub_cp_x_bike1


  // VAR_FLOAT gosub_cp_y_bike1


  // VAR_FLOAT gosub_cp_z_bike1


  // VAR_FLOAT gosub_cp_2nd_x_bike1


  // VAR_FLOAT gosub_cp_2nd_y_bike1


  // VAR_FLOAT gosub_cp_2nd_z_bike1

  // General stuff


  // VAR_INT blip_chase_bike1


  // VAR_INT second_blip_bike1_bike1


  // VAR_INT bike_health_bike1


  // VAR_INT gosub_race_bike_bike1


  // VAR_INT gosub_cpcounter_bike1


  // VAR_INT position_bike1


  // VAR_INT race_timer_bike1


  // VAR_INT total_checkpoints_bike1


  // VAR_INT timer_reset_flag

  // Guys fallen off of bike checks


  // VAR_INT gosub_rider_bike1


  // VAR_FLOAT gosub_rider_x_bike1


  // VAR_FLOAT gosub_rider_y_bike1


  // VAR_FLOAT gosub_rider_z_bike1


  // VAR_FLOAT gosub_rider_x1_bike1


  // VAR_FLOAT gosub_rider_y1_bike1


  // VAR_INT flag_player1_cheated_bike1


  // VAR_INT gosub_rider_health_bike1


  // VAR_INT gosub_driver_bike_bike1


  // VAR_INT player1_had_bike_message_bike1

  // Timer Stuff


  // VAR_INT race_timer_mins_bike1


  // VAR_INT race_timer_seconds_bike1


  // VAR_INT race_timer_seconds2_bike1


  // VAR_INT player_is_on_correct_bike_bike1


  // VAR_INT temp_int_bike1

  // New flag to check if guy has fallen off of bike


  // VAR_INT flag_gosub_rider_off_bike1


  $.flag_gosub_rider_off_bike1 = 0;


  // VAR_INT driver_bike1_off_bike1


  $.driver_bike1_off_bike1 = 0;


  // VAR_INT driver_bike2_off_bike1


  $.driver_bike2_off_bike1 = 0;


  // VAR_INT driver_bike3_off_bike1


  $.driver_bike3_off_bike1 = 0;

  // ****************************************Mission Start************************************


}
