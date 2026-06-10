// Generated from main/cuban4.sc

import { $ } from "../vars.mts";

async function mission_start_cuban4() {


  Text.ClearThisPrint("M_FAIL");
  ONMISSION = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  Text.LoadMissionText("CUBAN4");
  Shortcut.SetDropoffPointForMission(-1173.5, -599.6, 10.2, 277.1);
  // *****************************************Set Flags/variables************************************


  $.trojan_horse_goal = 0;
  $.flag_cuban_trojan1_in_group_prot3 = 1;
  $.door_flag = 0;
  $.waiving_flag = 0;
  $.fake_car_node1 = 0;
  $.fake_car_node2 = 0;
  $.fake_car_node_var = 0;
  $.trojan_horse_var = 0;
  $.timer_reset1 = 0;
  $.all_bombs_set = 0;
  $.bomb1set = 0;
  $.bomb2set = 0;
  $.bomb3set = 0;
  $.playonce = 0;
  $.timerupyet = 0;
  $.bomb_timer = 46000;
  $.out_bomb_area = 0;
  $.printy_flaggy = 2;
  $.printy_flaggy2 = 0;
  $.player1_inside_compound = 0;
  $.haitian_engineers_created = 0;
  $.swap_positions = 0;
  $.waitstate = 0;
  $.start_timerb = 0;
  $.plyr_in_hait_car = 0;
  $.final_meeting_place = 0;
  $.walking_engineers = 0;
  $.waiving_engineer = 0;
  //andy_has_control = 1

  $.setting_up_attackers = 0;
  $.cub4_audio_flag1 = 0;
  $.cub4_audio_flag2 = 0;
  $.cub4_audio_flag3 = 0;
  $.cub4_audio_flag4 = 0;
  $.cub4_audio_flag5 = 0;
  $.cub4_audio_flag6 = 0;

  // ****************************************START OF CUTSCENE********************************

  Streaming.SetAreaVisible(VIS_COFFEE_SHOP);
  Cutscene.DisableShadows();
  World.ClearAreaOfChars(-1174.8, -609.0, 10.4, -116.3, -632.5, 15.3);
  World.SetCarDensityMultiplier(0.0);
  World.SetPedDensityMultiplier(0.0);


  Audio.LoadMissionAudio(1, "mono16" as any);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSumbto");
  Streaming.LoadSpecialCharacter(3, "floozyb");
  Streaming.LoadSpecialCharacter(4, "floozyc");
  Streaming.LoadSpecialCharacter(5, "CSpapa");


  Streaming.LoadSpecialModel(CUTOBJ01, "ccfan");
  Streaming.LoadSpecialModel(CUTOBJ02, "espreso");


  Streaming.LoadScene(-1169.0, -620.0, 10.791);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);
  }


  Cutscene.Load("cub_3");
  Cutscene.SetOffset(-1170.708, -608.327, 10.791);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_umbto = CutsceneObject.Create(SPECIAL02);
  $.cs_umbto.setAnim("CSumbto");


  $.cs_floozyb = CutsceneObject.Create(SPECIAL03);
  $.cs_floozyb.setAnim("floozyb");


  $.cs_floozyc = CutsceneObject.Create(SPECIAL04);
  $.cs_floozyc.setAnim("floozyc");


  $.cs_papa = CutsceneObject.Create(SPECIAL05);
  $.cs_papa.setAnim("CSpapa");


  $.cc_fan1 = CutsceneObject.Create(CUTOBJ01);
  Cutscene.SetAnimToLoop("ccfan");
  $.cc_fan1.setAnim("ccfan");


  $.cs_espreso = CutsceneObject.Create(CUTOBJ02);
  $.cs_espreso.setAnim("espreso");


  World.ClearArea(-1170.9, -603.7, 10.6, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-1170.9, -603.7, 10.6);
  $.player1.setHeading(15.3);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 1888) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_A", 10000, 1); // Hey, ladies. You know what I'm gonna do?


  while ($.cs_time < 5073) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_B", 10000, 1); // I'm gonna kill me a Haitian. And then?


  while ($.cs_time < 7958) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_C", 10000, 1); // Then I'm going to make love like a man.


  while ($.cs_time < 9915) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_D", 10000, 1); // You know that chica? Something like this.


  while ($.cs_time < 15514) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_E", 10000, 1); // Loser!


  while ($.cs_time < 17098) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_F", 10000, 1); // Prick.


  while ($.cs_time < 17491) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_G", 10000, 1); // Hey, baby,  I wouldn't touch you with a ten foot pole!


  while ($.cs_time < 21119) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_H", 10000, 1); // Umberto Robina, he likes the ladies! Not some goat in a skirt!


  while ($.cs_time < 26363) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_I", 10000, 1); // Tommy!! Tommy, Tommy,I love you, I love you! Let's go!


  while ($.cs_time < 31119) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_J", 10000, 1); // Go where? Can't I get a cup of coffee first?


  while ($.cs_time < 32804) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_K", 10000, 1); // No time for coffee! Besides, I just had one.


  while ($.cs_time < 36208) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_L", 10000, 1); // We gonna go take out the Haitians.


  while ($.cs_time < 38251) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_M", 10000, 1); // Tommy, How do you take out a snake?


  while ($.cs_time < 41602) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_N", 10000, 1); // You bite him in the ass! Hahaha!


  while ($.cs_time < 43148) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_O", 10000, 1); // Whatever you say, Umberto.


  while ($.cs_time < 44248) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_P", 10000, 1); // Tommy, Go and get us a little car.


  while ($.cs_time < 46776) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_Q", 10000, 1); // When you get it, come back and pick up my boy Pepe,


  while ($.cs_time < 49338) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_R", 10000, 1); // and take him out to such and such...


  while ($.cs_time < 53344) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_S", 10000, 1); // Hey Tommy! Tommy! Use their solvent as an explosive.


  while ($.cs_time < 59927) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_T", 10000, 1); // Boom! Bye bye!.


  while ($.cs_time < 62394) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_U", 10000, 1); // Umberto, what about you?


  while ($.cs_time < 64830) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_V", 10000, 1); // Oh, I'm going to stay behind, and watch over the cafe with poppa.


  while ($.cs_time < 68153) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB4_W", 10000, 1); // He's not feeling so good.


  while ($.cs_time < 69153) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 71424) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  Text.ClearPrints();


  await asyncWait(1000);


  if (!(Cutscene.WasSkipped())) {
    if (Audio.HasMissionAudioLoaded(1)) {
      Audio.PlayMissionAudio(1);
    }
  }


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
  Streaming.SetAreaVisible(VIS_MAIN_MAP);
  $.flag_player_in_cafe = 0;
  World.SetCarDensityMultiplier(1.0);
  World.SetPedDensityMultiplier(1.0);

  /*
  IF NOT WAS_CUTSCENE_SKIPPED
  WHILE NOT HAS_MISSION_AUDIO_FINISHED 1
  WAIT 0
  ENDWHILE
  ENDIF
  */
  // ******************************************END OF CUTSCENE********************************

  Camera.SetFadingColor(0, 0, 0);
  await asyncWait(500);
  Camera.SetBehindPlayer();
  //------------------REQUEST_MODELS ------------------------------

  $.player1.setMood(PLAYER_MOOD_PISSED_OFF, 60000);


  Game.SetThreatForPedType(PEDTYPE_GANG_HAITIAN, 1 /* THREAT_PLAYER1 */);


  Streaming.RequestModel(HNa);
  Streaming.RequestModel(HNb);
  Streaming.RequestModel(CBb);
  Streaming.RequestModel(CBa);


  Streaming.RequestModel(7 /* sniper */);
  Streaming.RequestModel(tec9);
  Streaming.RequestModel(voodoo);
  Streaming.RequestModel(dynamite);


  while (!(Streaming.HasModelLoaded(CBa)) || !(Streaming.HasModelLoaded(CBb)) || !(Streaming.HasModelLoaded(HNa)) || !(Streaming.HasModelLoaded(HNb))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(7 /* sniper */)) || !(Streaming.HasModelLoaded(tec9)) || !(Streaming.HasModelLoaded(voodoo)) || !(Streaming.HasModelLoaded(dynamite))) {
    await asyncWait(0);
  }

  //cheating the compilier into thinking i have created something which i havent (so it can be used later)

  if (ONMISSION == 0) {
    $.parking_place = Blip.AddForCoord(-1181.2, 83.8, 11.3);
    $.bombplace1 = Blip.AddForCoord(-1198.4, 104.8, 11.1);
    $.bombplace2 = Blip.AddForCoord(-1198.4, 106.6, 11.1);
    $.bombplace3 = Blip.AddForCoord(-1198.9, 108.3, 11.1);
    $.meetingplace1_blip = Blip.AddForCoord(-1037.4, 172.3, 10.0);
    $.final_meeting_place_blip = Blip.AddForCoord(-1084.1, 70.2, 10.8);
    $.random_haitian1 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1197.9, 82.5, 10.1);
    $.random_haitian2 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1189.0, 83.6, 10.1);
    $.random_haitian3 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1190.5, 68.5, 10.1);
  }

  //closing gate

  while (!($.haitian_gate.slide(-1114.5, 67.0, 10.1, 10.0, 10.0, 0.0, false /* FALSE */))) {
    await asyncWait(0);
  }

  //creating Trojan Horse for player1 to use.  In game, player1 will just be told to get a Haitian Car

  //CREATING TEST CAR

  $.testy_car = Car.Create(voodoo, -1071.3, -608.4, 9.7);


  //pepe

  $.cuban_trojan1 = Char.Create(PEDTYPE_GANG_GOLFER, CBb, -1170.0, -607.0, 10.6);
  $.cuban_trojan1.setAsPlayerFriend($.player1, true /* TRUE */);
  $.cuban_trojan1.giveWeapon(WEAPONTYPE_tec9, 30000);
  $.cuban_trojan1.clearThreatSearch();
  $.cuban_trojan1.setOnlyDamagedByPlayer(true /* TRUE */);
  $.cuban_trojan1.setCantBeDraggedOut(true /* TRUE */);
  $.cuban_trojan1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.cuban_trojan1.setHeedThreats(true /* TRUE */);
  $.cuban_trojan1.setRunning(true /* TRUE */);
  $.cuban_trojan1.setNeverTargeted(true /* TRUE */);



  Camera.DoFade(1500, 1 /* FADE_IN */);

  //creating haitian doorman


  $.haitian_doorman = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1116.8, 74.3, 10.1);
  $.haitian_doorman.setHeading(234.8);
  $.haitian_doorman.giveWeapon(WEAPONTYPE_tec9, 30000);
  $.haitian_doorman.clearThreatSearch();
  $.haitian_doorman.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.haitian_doorman.setHeedThreats(true /* TRUE */);
  $.haitian_doorman.setStayInSamePlace(true /* TRUE */);


  $.haitian_sniper = Char.Create(PEDTYPE_GANG_HAITIAN, HNb, -1179.4, 71.2, 23.9);
  $.haitian_sniper.setHeading(270.0);
  $.haitian_sniper.giveWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */, 30000);
  $.haitian_sniper.clearThreatSearch();
  $.haitian_sniper.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.haitian_sniper.setHeedThreats(true /* TRUE */);
  $.haitian_sniper.setStayInSamePlace(true /* TRUE */);


  //creating 2nd van and other drivers


  $.trojan_horse2 = Car.Create(voodoo, -1044.5, 172.7, 9.8);
  $.trojan_horse2.setHeading(180.8);
  $.trojan_horse2.setOnlyDamagedByPlayer(true /* TRUE */);
  $.trojan_horse2.setCruiseSpeed(0.0);
  $.trojan_horse2.lockDoors(2 /* CARLOCK_LOCKED */);
  $.trojan_horse2.setDrivingStyle(2);


  $.cuban_trojan2 = Char.CreateInsideCar($.trojan_horse2, PEDTYPE_GANG_GOLFER, CBb); //rico
  $.cuban_trojan2.setAsPlayerFriend($.player1, true /* TRUE */);
  $.cuban_trojan2.giveWeapon(WEAPONTYPE_tec9, 30000);
  $.cuban_trojan2.clearThreatSearch();
  $.cuban_trojan2.setCantBeDraggedOut(true /* TRUE */);
  $.cuban_trojan2.setNeverTargeted(true /* TRUE */);


  $.cuban_trojan3 = Char.CreateAsPassenger($.trojan_horse2, PEDTYPE_GANG_GOLFER, CBa, 0);
  $.cuban_trojan3.setAsPlayerFriend($.player1, true /* TRUE */);
  $.cuban_trojan3.giveWeapon(WEAPONTYPE_tec9, 30000);
  $.cuban_trojan3.clearThreatSearch();
  $.cuban_trojan3.setCantBeDraggedOut(true /* TRUE */);
  $.cuban_trojan3.setNeverTargeted(true /* TRUE */);


  //creating third van and other cubans


  $.trojan_horse3 = Car.Create(voodoo, -1040.4, 173.4, 9.9);
  $.trojan_horse3.setHeading(177.1);
  $.trojan_horse3.setOnlyDamagedByPlayer(true /* TRUE */);
  $.trojan_horse3.setCruiseSpeed(0.0);
  $.trojan_horse3.lockDoors(2 /* CARLOCK_LOCKED */);
  $.trojan_horse3.setDrivingStyle(2);


  $.cuban_trojan4 = Char.CreateInsideCar($.trojan_horse3, PEDTYPE_GANG_GOLFER, CBa);
  $.cuban_trojan4.setAsPlayerFriend($.player1, true /* TRUE */);
  $.cuban_trojan4.giveWeapon(WEAPONTYPE_tec9, 30000);
  $.cuban_trojan4.clearThreatSearch();
  $.cuban_trojan4.setCantBeDraggedOut(true /* TRUE */);
  $.cuban_trojan4.setNeverTargeted(true /* TRUE */);


  $.cuban_trojan5 = Char.CreateAsPassenger($.trojan_horse3, PEDTYPE_GANG_GOLFER, CBa, 0);
  $.cuban_trojan5.setAsPlayerFriend($.player1, true /* TRUE */);
  $.cuban_trojan5.giveWeapon(WEAPONTYPE_tec9, 30000);
  $.cuban_trojan5.clearThreatSearch();
  $.cuban_trojan5.setCantBeDraggedOut(true /* TRUE */);
  $.cuban_trojan5.setNeverTargeted(true /* TRUE */);


  $.trojan_horse2.markAsConvoyCar(true /* TRUE */);
  $.trojan_horse2.setStraightLineDistance(255);
  $.trojan_horse3.markAsConvoyCar(true /* TRUE */);
  $.trojan_horse3.setStraightLineDistance(255);



  $.cuban_trojan1.followPlayer($.player1);


  TIMERA = 0;
  TIMERB = 0;


  Text.PrintNow("CUB4_26", 5000, 1); //Head North into Little Haiti and steal a Voodoo car.
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////MEETING SECOND SET OF CUBANS////////////////////////////////////////////////////////////////////
//Waiting for player1 to meet with second Haitian car

async function meeting_second_car_loop() {
  // SCM GOTO → meeting_second_car_loop lowered to endless loop
  while (true) {


    await asyncWait(0);

    /*
    //TEST
    IF IS_BUTTON_PRESSED PAD1 CROSS
    GOTO test_explosion
    ENDIF
    */


    //making sure player1 is in a haitian car


    if ($.plyr_in_hait_car == 0) {
      if ($.player1.isInAnyCar()) {
        $.trojan_horse = $.player1.storeCarIsIn();
        if (!(Car.IsDead($.trojan_horse))) {
          if ($.trojan_horse.isModel(voodoo)) {
            Game.ClearThreatForPedType(PEDTYPE_GANG_HAITIAN, 1 /* THREAT_PLAYER1 */);
            $.meetingplace1_blip.remove();
            $.final_meeting_place_blip.remove();
            if (!(Char.IsDead($.cuban_trojan1))) {
              if ($.player1.locateAnyMeansChar3D($.cuban_trojan1, 8.0, 8.0, 8.0, false /* FALSE */)) {
                Audio.LoadMissionAudio(1, "CUB4_6" as any);
                while (!(Audio.HasMissionAudioLoaded(1))) {
                  await asyncWait(0);
                }
                Text.PrintNow("CUB4_13", 5000, 1); //Oye, let's go find our muchachos!
                Audio.PlayMissionAudio(1);
                while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_trojan1))) {
                  await asyncWait(0);
                }
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("CUB4_13");
                if ($.final_meeting_place == 0) {
                  $.meetingplace1_blip = Blip.AddForCoord(-1037.4, 172.3, 10.0);
                }
                else {
                  $.final_meeting_place_blip = Blip.AddForCoord(-1084.1, 70.2, 10.8);
                }
                if ($.printy_flaggy2 == 0) {
                  Text.PrintNow("CUB4_27", 5000, 1); //Go and meet up with Rico and the other Cubans.
                  $.printy_flaggy2 = 1;
                }
                $.plyr_in_hait_car = 1;
              }
            }
          }
          else {
            Game.SetThreatForPedType(PEDTYPE_GANG_HAITIAN, 1 /* THREAT_PLAYER1 */);
            $.trojan_horse.markAsNoLongerNeeded();
            $.plyr_in_hait_car = 0;
          }
        }
      }
    }



    //getting player to follow blips


    if ($.plyr_in_hait_car == 1) {
      if (!(Car.IsDead($.trojan_horse))) {
        if ($.player1.isInCar($.trojan_horse)) {
          if ($.final_meeting_place == 0) {
            if (!(Char.IsDead($.cuban_trojan1))) {
              if ($.cuban_trojan1.isInPlayersGroup($.player1)) {
                if ($.player1.locateStoppedInCar3D(-1037.4, 172.3, 10.0, 3.0, 3.0, 10.0, true /* TRUE */)) {
                  $.meetingplace1_blip.remove();
                  // ******************************************START OF CUTSCENE******************************
                  $.player1.setControl(false /* OFF */);
                  Hud.SwitchWidescreen(true /* ON */);
                  World.ClearAreaOfCars(-1072.2, 70.7, 10.2, -1011.2, 200.7, 15.2);
                  Camera.SetFixedPosition(-1029.6, 169.7, 13.1, 0.0, 0.0, 0.0);
                  Camera.PointAtPoint(-1030.5, 170.0, 12.9, 2 /* JUMP_CUT */);
                  if (!(Car.IsDead($.trojan_horse2))) {
                    if (!(Car.IsDead($.trojan_horse3))) {
                      $.trojan_horse2.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
                      $.trojan_horse3.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
                    }
                  }
                  Audio.LoadMissionAudio(1, "CUB4_2" as any);
                  Audio.LoadMissionAudio(2, "CUB4_1" as any);
                  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
                    await asyncWait(0);
                  }
                  Text.PrintNow("CUB4_08", 4000, 1); //Hola, Amigos.
                  Audio.PlayMissionAudio(1);
                  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_trojan1))) {
                    await asyncWait(0);
                  }
                  Audio.ClearMissionAudio(1);
                  Text.ClearThisPrint("CUB4_08");


                  Text.PrintNow("CUB4_07", 4000, 1); //The solvent is round the back, amigo.
                  Audio.PlayMissionAudio(2);
                  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.cuban_trojan1))) {
                    await asyncWait(0);
                  }
                  Audio.ClearMissionAudio(2);
                  Text.ClearThisPrint("CUB4_07");
                  Audio.LoadMissionAudio(1, "CUB4_3" as any);
                  Audio.LoadMissionAudio(2, "CUB4_4" as any);
                  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
                    await asyncWait(0);
                  }
                  Text.PrintNow("CUB4_09", 4000, 1); //Bueno. Haitian Putas. Muerte.
                  Audio.PlayMissionAudio(1);
                  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_trojan1))) {
                    await asyncWait(0);
                  }
                  Audio.ClearMissionAudio(1);
                  Text.ClearThisPrint("CUB4_09");
                  if (!(Car.IsDead($.trojan_horse2))) {
                    $.trojan_horse2.setCruiseSpeed(10.0);
                    $.trojan_horse2.gotoCoordinates(-1072.2, 70.7, 11.2);
                  }
                  Text.PrintNow("CUB4_10", 4000, 1); //Vamos
                  Audio.PlayMissionAudio(2);
                  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.cuban_trojan1))) {
                    await asyncWait(0);
                  }
                  Audio.ClearMissionAudio(2);
                  Text.ClearThisPrint("CUB4_10");
                  Audio.LoadMissionAudio(1, "CUB4_5" as any);
                  Audio.LoadMissionAudio(2, "CUB4_7" as any);
                  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
                    await asyncWait(0);
                  }
                  Text.PrintNow("CUB4_11", 4000, 1); //Vamos indeed.
                  Audio.PlayMissionAudio(1);
                  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_trojan1))) {
                    await asyncWait(0);
                  }
                  Audio.ClearMissionAudio(1);
                  Text.ClearThisPrint("CUB4_11");
                  if (!(Car.IsDead($.trojan_horse3))) {
                    $.trojan_horse3.setCruiseSpeed(10.0);
                    $.trojan_horse3.gotoCoordinates(-1072.2, 70.7, 11.2);
                  }
                  Text.PrintNow("CUB4_14", 4000, 1); //Follow my compadres.
                  Audio.PlayMissionAudio(2);
                  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.cuban_trojan1))) {
                    await asyncWait(0);
                  }
                  Audio.ClearMissionAudio(2);
                  Text.ClearThisPrint("CUB4_14");
                  await asyncWait(3000);
                  Camera.RestoreJumpcut();
                  $.player1.setControl(true /* ON */);
                  Hud.SwitchWidescreen(false /* OFF */);
                  // ******************************************END OF CUTSCENE********************************
                  if (!(Car.IsDead($.trojan_horse2))) {
                    $.trojan_horse2.setCruiseSpeed(0.0);
                    $.trojan_horse2.setCoordinates(-1101.2, 70.0, 10.8);
                    $.trojan_horse2.setHeading(87.8);
                  }
                  if (!(Car.IsDead($.trojan_horse3))) {
                    $.trojan_horse3.setCruiseSpeed(0.0);
                    $.trojan_horse3.setCoordinates(-1093.0, 70.6, 10.8);
                    $.trojan_horse3.setHeading(90.6);
                  }
                  $.final_meeting_place_blip = Blip.AddForCoord(-1084.1, 70.2, 10.8);
                  Text.PrintNow("CUB4_28", 5000, 1); //Join the other Cubans at the Haitian Drugs Factory.
                  $.final_meeting_place = 1;
                }
                $.printy_flaggy = 0;
              }
            }
          }
          else {
            if ($.player1.locateStoppedInCar3D(-1084.1, 70.2, 10.8, 5.0, 5.0, 10.0, true /* TRUE */)) {
              $.final_meeting_place_blip.remove();
              // SCM GOTO → following_cubans_into_base (not lowered; manual jump required)
              throw new Error("unresolved GOTO following_cubans_into_base"); // fallback: would break linear control flow
            }
          }
        }
        else {
          if ($.printy_flaggy == 0) {
            Audio.LoadMissionAudio(1, "CUB4_5A" as any);
            while (!(Audio.HasMissionAudioLoaded(1))) {
              await asyncWait(0);
            }
            Text.PrintNow("CUB4_12", 5000, 1); //Hey, we need a Haitian gang car!
            Audio.PlayMissionAudio(1);
            while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_trojan1))) {
              await asyncWait(0);
            }
            Audio.ClearMissionAudio(1);
            Text.ClearThisPrint("CUB4_12");
            $.printy_flaggy = 1;
          }
          $.meetingplace1_blip.remove();
          $.final_meeting_place_blip.remove();
          $.plyr_in_hait_car = 0;
        }
      }
    }

    //checking cuban is still in player1s group

    if (TIMERB > 5000) {
      if (!(Char.IsDead($.cuban_trojan1))) {
        if ($.flag_cuban_trojan1_in_group_prot3 == 1) {
          if (!($.cuban_trojan1.isInPlayersGroup($.player1))) {
            Text.PrintNow("CUB4_24", 5000, 1); //You've left Pepe behind, go and get him.
            $.meetingplace1_blip.remove();
            $.final_meeting_place_blip.remove();
            $.radar_blip_cuban_trojan1 = Blip.AddForChar($.cuban_trojan1);
            $.flag_cuban_trojan1_in_group_prot3 = 0;
          }
        }
        if ($.flag_cuban_trojan1_in_group_prot3 == 0) {
          if ($.player1.locateAnyMeansChar3D($.cuban_trojan1, 8.0, 8.0, 8.0, false /* FALSE */)) {
            $.cuban_trojan1.followPlayer($.player1);
            $.radar_blip_cuban_trojan1.remove();
            $.meetingplace1_blip.remove();
            $.final_meeting_place_blip.remove();
            if (!($.player1.isInModel(voodoo))) {
              if ($.printy_flaggy == 0) {
                Audio.LoadMissionAudio(1, "CUB4_5A" as any);
                while (!(Audio.HasMissionAudioLoaded(1))) {
                  await asyncWait(0);
                }
                Text.PrintNow("CUB4_12", 5000, 1); //Hey, we need a Haitian gang car!
                Audio.PlayMissionAudio(1);
                while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_trojan1))) {
                  await asyncWait(0);
                }
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("CUB4_12");
                $.printy_flaggy = 1;
              }
            }
            else {
              Audio.LoadMissionAudio(1, "CUB4_6" as any);
              while (!(Audio.HasMissionAudioLoaded(1))) {
                await asyncWait(0);
              }
              Text.PrintNow("CUB4_13", 5000, 1); //Oye, let's go find our muchachos!
              Audio.PlayMissionAudio(1);
              while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_trojan1))) {
                await asyncWait(0);
              }
              Audio.ClearMissionAudio(1);
              Text.ClearThisPrint("CUB4_13");
            }
            if (!(Char.IsDead($.cuban_trojan1))) {
              if ($.cuban_trojan1.isInPlayersGroup($.player1)) {
                if (!(Car.IsDead($.trojan_horse))) {
                  if ($.trojan_horse.isModel(voodoo)) {
                    if ($.player1.isInCar($.trojan_horse)) {
                      if ($.final_meeting_place == 0) {
                        $.meetingplace1_blip = Blip.AddForCoord(-1037.4, 172.3, 10.0);
                      }
                      else {
                        $.final_meeting_place_blip = Blip.AddForCoord(-1084.1, 70.2, 10.8);
                      }
                    }
                  }
                }
              }
            }
            $.flag_cuban_trojan1_in_group_prot3 = 1;
          }
        }
      }
      else {
        Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
        // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
      }
      $.printy_flaggy = 0;
    }


    //players speech

    if (TIMERA > 5000) {
      if (!(Char.IsDead($.cuban_trojan1))) {
        if ($.cuban_trojan1.isInPlayersGroup($.player1)) {
          if ($.player1.locateAnyMeansChar3D($.cuban_trojan1, 8.0, 8.0, 8.0, false /* FALSE */)) {
            if ($.cub4_audio_flag1 == 0) {
              if ($.player1.isInArea2D(-1222.1, -346.7, -996.3, -365.2, false /* FALSE */)) {
                Audio.LoadMissionAudio(1, "CUB4_11" as any);
                while (!(Audio.HasMissionAudioLoaded(1))) {
                  await asyncWait(0);
                  if ($.final_meeting_place == 0) {
                    Sphere.Draw(-1037.4, 172.3, 10.0, 3.0);
                  }
                  else {
                    Sphere.Draw(-1084.1, 70.2, 10.8, 5.0);
                  }
                }
                Text.PrintNow("CUB4_18", 5000, 1); //Man, this a nice part of town...
                Audio.PlayMissionAudio(1);
                while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_trojan1))) {
                  await asyncWait(0);
                  if ($.final_meeting_place == 0) {
                    Sphere.Draw(-1037.4, 172.3, 10.0, 3.0);
                  }
                  else {
                    Sphere.Draw(-1084.1, 70.2, 10.8, 5.0);
                  }
                }
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("CUB4_18");
                $.cub4_audio_flag1 = 1;
              }
            }
            if ($.cub4_audio_flag2 == 0) {
              if ($.player1.isInArea2D(-989.3, -436.5, -1011.2, -500.6, false /* FALSE */)) {
                Audio.LoadMissionAudio(1, "CUB4_13" as any);
                while (!(Audio.HasMissionAudioLoaded(1))) {
                  await asyncWait(0);
                  if ($.final_meeting_place == 0) {
                    Sphere.Draw(-1037.4, 172.3, 10.0, 3.0);
                  }
                  else {
                    Sphere.Draw(-1084.1, 70.2, 10.8, 5.0);
                  }
                }
                Text.PrintNow("CUB4_20", 5000, 1); //I had a beautiful woman... lived around this neighborhood.
                Audio.PlayMissionAudio(1);
                while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_trojan1))) {
                  await asyncWait(0);
                  if ($.final_meeting_place == 0) {
                    Sphere.Draw(-1037.4, 172.3, 10.0, 3.0);
                  }
                  else {
                    Sphere.Draw(-1084.1, 70.2, 10.8, 5.0);
                  }
                }
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("CUB4_20");
                $.cub4_audio_flag2 = 1;
              }
            }
            if ($.cub4_audio_flag3 == 0) {
              if ($.player1.isInArea2D(-1186.1, -95.5, -1054.3, -51.6, false /* FALSE */)) {
                Audio.LoadMissionAudio(1, "CUB4_12" as any);
                while (!(Audio.HasMissionAudioLoaded(1))) {
                  await asyncWait(0);
                  if ($.final_meeting_place == 0) {
                    Sphere.Draw(-1037.4, 172.3, 10.0, 3.0);
                  }
                  else {
                    Sphere.Draw(-1084.1, 70.2, 10.8, 5.0);
                  }
                }
                Text.PrintNow("CUB4_19", 5000, 1); //This place is a dump, man.
                Audio.PlayMissionAudio(1);
                while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_trojan1))) {
                  await asyncWait(0);
                  if ($.final_meeting_place == 0) {
                    Sphere.Draw(-1037.4, 172.3, 10.0, 3.0);
                  }
                  else {
                    Sphere.Draw(-1084.1, 70.2, 10.8, 5.0);
                  }
                }
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("CUB4_19");
                $.cub4_audio_flag3 = 1;
              }
            }
            if ($.cub4_audio_flag4 == 0) {
              if ($.player1.isInArea2D(-1063.6, 101.9, -1078.9, 67.0, false /* FALSE */)) {
                Audio.LoadMissionAudio(1, "CUB4_14" as any);
                while (!(Audio.HasMissionAudioLoaded(1))) {
                  await asyncWait(0);
                  if (!(Car.IsDead($.trojan_horse))) {
                    if ($.trojan_horse.isModel(voodoo)) {
                      if ($.player1.isInCar($.trojan_horse)) {
                        if ($.final_meeting_place == 0) {
                          Sphere.Draw(-1037.4, 172.3, 10.0, 3.0);
                        }
                        else {
                          Sphere.Draw(-1084.1, 70.2, 10.8, 5.0);
                        }
                      }
                    }
                  }
                }
                Text.PrintNow("CUB4_21", 5000, 1); //You know, they do nice pizzas here.
                Audio.PlayMissionAudio(1);
                while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_trojan1))) {
                  await asyncWait(0);
                  if (!(Car.IsDead($.trojan_horse))) {
                    if ($.trojan_horse.isModel(voodoo)) {
                      if ($.player1.isInCar($.trojan_horse)) {
                        if ($.final_meeting_place == 0) {
                          Sphere.Draw(-1037.4, 172.3, 10.0, 3.0);
                        }
                        else {
                          Sphere.Draw(-1084.1, 70.2, 10.8, 5.0);
                        }
                      }
                    }
                  }
                }
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("CUB4_21");
                $.cub4_audio_flag4 = 1;
              }
            }
            if ($.cub4_audio_flag5 == 0) {
              if (TIMERA > 60000) {
                Audio.LoadMissionAudio(1, "CUB4_16" as any);
                while (!(Audio.HasMissionAudioLoaded(1))) {
                  await asyncWait(0);
                  if (!(Car.IsDead($.trojan_horse))) {
                    if ($.trojan_horse.isModel(voodoo)) {
                      if ($.player1.isInCar($.trojan_horse)) {
                        if ($.final_meeting_place == 0) {
                          Sphere.Draw(-1037.4, 172.3, 10.0, 3.0);
                        }
                        else {
                          Sphere.Draw(-1084.1, 70.2, 10.8, 5.0);
                        }
                      }
                    }
                  }
                }
                Text.PrintNow("CUB4_23", 5000, 1); //You lost, man?
                Audio.PlayMissionAudio(1);
                while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_trojan1))) {
                  await asyncWait(0);
                  if (!(Car.IsDead($.trojan_horse))) {
                    if ($.trojan_horse.isModel(voodoo)) {
                      if ($.player1.isInCar($.trojan_horse)) {
                        if ($.final_meeting_place == 0) {
                          Sphere.Draw(-1037.4, 172.3, 10.0, 3.0);
                        }
                        else {
                          Sphere.Draw(-1084.1, 70.2, 10.8, 5.0);
                        }
                      }
                    }
                  }
                }
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("CUB4_23");
                $.cub4_audio_flag5 = 1;
              }
            }
            if ($.cub4_audio_flag6 == 0) {
              if ($.player1.isInAnyCar()) {
                if ($.player1.isInArea2D(-1045.9, 138.2, -1012.2, 198.7, false /* FALSE */)) {
                  Audio.LoadMissionAudio(1, "CUB4_15" as any);
                  while (!(Audio.HasMissionAudioLoaded(1))) {
                    await asyncWait(0);
                    if (!(Car.IsDead($.trojan_horse))) {
                      if ($.trojan_horse.isModel(voodoo)) {
                        if ($.player1.isInCar($.trojan_horse)) {
                          if ($.final_meeting_place == 0) {
                            Sphere.Draw(-1037.4, 172.3, 10.0, 3.0);
                          }
                          else {
                            Sphere.Draw(-1084.1, 70.2, 10.8, 5.0);
                          }
                        }
                      }
                    }
                  }
                  Text.PrintNow("CUB4_22", 5000, 1); //Whoah, man. You drive like a crazy bitch!
                  Audio.PlayMissionAudio(1);
                  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_trojan1))) {
                    await asyncWait(0);
                    if (!(Car.IsDead($.trojan_horse))) {
                      if ($.trojan_horse.isModel(voodoo)) {
                        if ($.player1.isInCar($.trojan_horse)) {
                          if ($.final_meeting_place == 0) {
                            Sphere.Draw(-1037.4, 172.3, 10.0, 3.0);
                          }
                          else {
                            Sphere.Draw(-1084.1, 70.2, 10.8, 5.0);
                          }
                        }
                      }
                    }
                  }
                  Audio.ClearMissionAudio(1);
                  Text.ClearThisPrint("CUB4_22");
                  $.cub4_audio_flag6 = 1;
                }
              }
            }
          }
        }
      }
    }



    //failing mission objectives


    if ($.player1.isShootingInArea(-1208.7, 42.5, -1077.4, 126.0, false /* FALSE */)) {
      if (!(Char.IsDead($.haitian_doorman))) {
        $.haitian_doorman.setObjRunToCoord(-1170.9, 87.6);
      }
      Text.PrintNow("CUB4_04", 5000, 1); //You've alerted the base, there is no way we will get in now!
      // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
    }


    if (Char.IsDead($.cuban_trojan2) || Char.IsDead($.cuban_trojan3) || Char.IsDead($.cuban_trojan4) || Char.IsDead($.cuban_trojan5)) {
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
    }




    if (Car.IsDead($.trojan_horse2) || Car.IsDead($.trojan_horse3)) {
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
    }


    if (Char.IsDead($.haitian_doorman)) {
      Text.PrintNow("CUB4_04", 5000, 1); //You've alerted the base, there is no way we will get in now!
      // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
    }


  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////SECOND SET OF CUBANS MET////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////GOING THROUGH GATE//////////////////////////////////////////////////////////////////////////////
//getting player1 to follow other car up to entry gate


async function following_cubans_into_base() {


  Text.PrintNow("CUB4_03", 5000, 1); //Stay in the car until safely parked inside the compound.


  if (!(Car.IsDead($.trojan_horse2))) {
    $.trojan_horse2.gotoCoordinatesAccurate(-1108.8, 69.8, 10.8);
    $.trojan_horse2.setCruiseSpeed(2.0);
  }
}



async function mini_trojan_loop() {
  // SCM GOTO → mini_trojan_loop lowered to endless loop
  while (true) {


    await asyncWait(0);

    //waiting for lead car to reach gate


    if (!(Car.IsDead($.trojan_horse2))) {
      if ($.trojan_horse2.locate2D(-1108.8, 69.8, 3.0, 3.0, false /* FALSE */)) {
        // SCM GOTO → haitian_opening_gate (not lowered; manual jump required)
        throw new Error("unresolved GOTO haitian_opening_gate"); // fallback: would break linear control flow
      }
    }
    else {
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
    }

    //player1 must stay inside car


    if (!(Car.IsDead($.trojan_horse))) {
      if (!($.player1.isInCar($.trojan_horse))) {
        Text.PrintNow("CUB4_10", 5000, 1); //You were told to stay in the car!  There is no way they will let us in now.
        // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
      }
    }

    //failing mission objectives


    if ($.player1.isShootingInArea(-1208.7, 42.5, -1077.4, 126.0, false /* FALSE */)) {
      if (!(Char.IsDead($.haitian_sniper))) {
        $.haitian_sniper.setObjKillPlayerAnyMeans($.player1);
      }
      if (!(Char.IsDead($.haitian_doorman))) {
        $.haitian_doorman.setObjRunToCoord(-1170.9, 87.6);
      }
      Text.PrintNow("CUB4_09", 5000, 1); //You've alerted the base, there is no way we will get in now!
      // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
    }


    if (Char.IsDead($.haitian_doorman)) {
      Text.PrintNow("CUB4_09", 5000, 1); //You've alerted the base, there is no way we will get in now!
      // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
    }


    if (Char.IsDead($.cuban_trojan1) || Car.IsDead($.trojan_horse3)) {
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
    }


  }
}




//waiting for haitian doorman to open the gate


async function haitian_opening_gate() {
  // SCM GOTO → haitian_opening_gate lowered to endless loop
  while (true) {


    await asyncWait(0);

    //getting doorman to wave at lead van


    if ($.door_flag == 0) {
      if (!(Char.IsDead($.haitian_doorman))) {
        if (!($.haitian_doorman.locateOnFoot2D(-1115.6, 71.6, 2.0, 2.0, false /* FALSE */))) {
          $.haitian_doorman.setStayInSamePlace(false /* FALSE */);
          $.haitian_doorman.setObjGotoCoordOnFoot(-1115.6, 71.6);
        }
        else {
          if ($.haitian_doorman.isObjectivePassed()) {
            $.haitian_doorman.setStayInSamePlace(true /* TRUE */);
            $.haitian_doorman.setHeading(261.1);
            $.haitian_doorman.setWaitState(16 /* WAITSTATE_PLAYANIM_TAXI */, 1000);
            Audio.LoadMissionAudio(1, "CUB4_8" as any);
            while (!(Audio.HasMissionAudioLoaded(1))) {
              await asyncWait(0);
            }
            Text.PrintNow("CUB4_15", 4000, 1); //Ok, in you go...
            Audio.PlayMissionAudio(1);
            while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.haitian_doorman))) {
              await asyncWait(0);
            }
            Audio.ClearMissionAudio(1);
            Text.ClearThisPrint("CUB4_15");
            $.door_flag = 1;
          }
        }
      }
      else {
        Text.PrintNow("CUB4_09", 5000, 1); //You've alerted the base, there is no way we will get in now!
        // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
      }
    }

    //getting doorman to open gate


    if ($.door_flag == 1) {
      if (!(Char.IsDead($.haitian_doorman))) {
        if (!($.haitian_doorman.locateOnFoot2D(-1116.8, 74.3, 2.0, 2.0, false /* FALSE */))) {
          $.haitian_doorman.setStayInSamePlace(false /* FALSE */);
          $.haitian_doorman.setObjGotoCoordOnFoot(-1116.8, 74.3);
        }
        else {
          if ($.haitian_doorman.isObjectivePassed()) {
            $.haitian_doorman.setStayInSamePlace(true /* TRUE */);
            $.haitian_doorman.setHeading(234.8);
            Sound.AddOneOffSound(-1114.64, 72.85, 11.13, SOUND_POLICE_CELL_DOOR_CLUNK);
            $.gate_slide_loop = Sound.AddContinuous(-1114.64, 72.85, 11.13, SOUND_POLICE_CELL_DOOR_SLIDING_LOOP);
            while (!($.haitian_gate.slide(-1114.5, 73.0, 10.1, 0.1, 0.1, 0.0, false /* FALSE */))) {
              await asyncWait(0);
            }
            $.gate_slide_loop.remove();
            $.door_flag = 2;
          }
        }
      }
      else {
        Text.PrintNow("CUB4_09", 5000, 1); //You've alerted the base, there is no way we will get in now!
        // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
      }
    }

    //getting lead van to make its way towards the base


    if (!(Car.IsDead($.trojan_horse2))) {
      if (!(Car.IsDead($.trojan_horse3))) {
        if ($.door_flag == 2) {
          $.trojan_horse2.gotoCoordinatesAccurate(-1126.1, 70.5, 10.8);
          $.trojan_horse3.gotoCoordinatesAccurate(-1126.1, 70.5, 10.8);
          // SCM GOTO → the_hornets_nest (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_hornets_nest"); // fallback: would break linear control flow
        }
      }
      else {
        Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
        // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
      }
    }
    else {
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
    }


    //failing mission objectives


    if ($.player1.isShootingInArea(-1208.7, 42.5, -1077.4, 126.0, false /* FALSE */)) {
      if (!(Char.IsDead($.haitian_sniper))) {
        $.haitian_sniper.setObjKillPlayerAnyMeans($.player1);
      }
      if (!(Char.IsDead($.haitian_doorman))) {
        $.haitian_doorman.setObjRunToCoord(-1170.9, 87.6);
      }
      Text.PrintNow("CUB4_09", 5000, 1); //You've alerted the base, there is no way we will get in now!
      // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
    }


    if (!(Car.IsDead($.trojan_horse))) {
      if (!($.player1.isInCar($.trojan_horse))) {
        Text.PrintNow("CUB4_10", 5000, 1); //You were told to stay in the car!  There is no way they will let us in now.
        // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
      }
    }


    if (Char.IsDead($.cuban_trojan1) || Car.IsDead($.trojan_horse3)) {
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
    }


    if (Char.IsDead($.cuban_trojan2) || Char.IsDead($.cuban_trojan3) || Char.IsDead($.cuban_trojan4) || Char.IsDead($.cuban_trojan5)) {
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
    }


    if (Char.IsDead($.haitian_doorman)) {
      Text.PrintNow("CUB4_04", 5000, 1); //You've alerted the base, there is no way we will get in now!
      // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
    }


  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////GATE PASSED/////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////DRIVING TO PARKING PLACE////////////////////////////////////////////////////////////////////////
//waiting for player1 to follow into centre of base


async function the_hornets_nest() {


  await asyncWait(0);

  //engineers checking out generator outside court


  if (!(Car.IsDead($.trojan_horse2))) {
    if ($.trojan_horse2.locate2D(-1126.1, 70.5, 3.0, 3.0, false /* FALSE */)) {
      if ($.haitian_engineers_created == 0) {
        $.haitian_engineer3 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1143.4, 84.5, 11.1);
        $.haitian_engineer3.setHeading(190.2);
        $.haitian_engineer3.giveWeapon(WEAPONTYPE_tec9, 30000);
        $.haitian_engineer3.clearThreatSearch();
        $.haitian_engineer3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.haitian_engineer3.setHeedThreats(true /* TRUE */);
        $.haitian_engineer4 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1143.4, 83.3, 11.1);
        $.haitian_engineer4.setHeading(190.2);
        $.haitian_engineer4.giveWeapon(WEAPONTYPE_tec9, 30000);
        $.haitian_engineer4.clearThreatSearch();
        $.haitian_engineer4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.haitian_engineer4.setHeedThreats(true /* TRUE */);
        $.hait_defender1 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1168.2, 106.7, 10.1);
        $.hait_defender1.setHeading(271.4);
        $.hait_defender1.giveWeapon(WEAPONTYPE_tec9, 30000);
        $.hait_defender1.clearThreatSearch();
        $.hait_defender1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.hait_defender1.setHeedThreats(true /* TRUE */);
        $.hait_defender2 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1166.0, 107.1, 10.1);
        $.hait_defender2.setHeading(92.5);
        $.hait_defender2.giveWeapon(WEAPONTYPE_tec9, 30000);
        $.hait_defender2.clearThreatSearch();
        $.hait_defender2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.hait_defender2.setHeedThreats(true /* TRUE */);
        Game.SetCharsChatting($.hait_defender1, $.hait_defender2, 100000);
        $.haitian_engineers_created = 1;
      }
    }
    if (!(Char.IsDead($.haitian_engineer3))) {
      if (!(Char.IsDead($.haitian_engineer4))) {
        if ($.trojan_horse2.isInArea2D(-1135.2, 73.2, -1130.8, 67.9, false /* FALSE */)) {
          if ($.walking_engineers == 0) {
            $.haitian_engineer3.setObjGotoCoordOnFoot(-1141.5, 73.5);
            $.haitian_engineer4.setObjGotoCoordOnFoot(-1141.5, 64.3);
            $.walking_engineers = 1;
          }
        }
        if ($.haitian_engineer3.locateAnyMeans2D(-1141.5, 73.5, 2.0, 2.0, false /* FALSE */)) {
          if ($.start_timerb == 0) {
            TIMERB = 0;
            $.start_timerb = 1;
          }
          if ($.player1.isInArea2D(-1135.2, 68.2, -1140.8, 73.9, false /* FALSE */)) {
            if ($.waiving_engineer == 0) {
              $.haitian_engineer3.setWaitState(16 /* WAITSTATE_PLAYANIM_TAXI */, 800);
              TIMERB = 0;
              $.waiving_engineer = 1;
            }
          }
          if (TIMERB > 5000) {
            $.waiving_engineer = 1;
          }
          if ($.waiving_engineer == 1) {
            if ($.walking_engineers == 1) {
              if (TIMERB > 800) {
                $.haitian_engineer3.setObjGotoCoordOnFoot(-1141.5, 61.9);
                $.walking_engineers = 2;
              }
            }
          }
        }
      }
    }
  }


  //getting doorman to wave at player1


  if ($.waiving_flag == 0) {
    if (!(Car.IsDead($.trojan_horse))) {
      if (!(Char.IsDead($.haitian_doorman))) {
        if ($.trojan_horse.locate2D(-1114.6, 70.5, 5.0, 5.0, false /* FALSE */)) {
          $.haitian_doorman.setWaitState(16 /* WAITSTATE_PLAYANIM_TAXI */, 800);
          $.waiving_flag = 1;
          //andy_has_control = 0 //giving control back to game to work gate

        }
      }
    }
    else {
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
    }
  }

  //FUCKING CUNTING ARSEING HELL OF A PISH JOB TRYING TO GET TWO CARS TO GO TEN CUNTING YARDS (Chris, yes look bad words.  now get back to work :P )

  if (!(Car.IsDead($.trojan_horse))) {
    if (!(Car.IsDead($.trojan_horse2))) {
      if (!(Car.IsDead($.trojan_horse3))) {

        //1st car

        if ($.fake_car_node1 == 0) {
          if (!($.trojan_horse2.locate2D(-1126.1, 70.5, 3.0, 3.0, false /* FALSE */))) {
            $.trojan_horse2.gotoCoordinatesAccurate(-1126.1, 70.5, 10.8);
            $.trojan_horse2.setCruiseSpeed(5.0);
          }
          else {
            $.fake_car_node1 = 1;
          }
        }
        if ($.fake_car_node1 == 1) {
          if (!($.trojan_horse2.locate2D(-1140.9, 71.2, 3.0, 3.0, false /* FALSE */))) {
            $.trojan_horse2.gotoCoordinatesAccurate(-1140.9, 71.2, 10.8);
            $.trojan_horse2.setCruiseSpeed(5.0);
          }
          else {
            $.fake_car_node1 = 2;
          }
        }
        if ($.fake_car_node1 == 2) {
          if (!($.trojan_horse2.locate2D(-1160.0, 70.7, 3.0, 3.0, false /* FALSE */))) {
            $.trojan_horse2.gotoCoordinatesAccurate(-1160.0, 70.7, 11.3);
            $.trojan_horse2.setCruiseSpeed(5.0);
          }
          else {
            $.fake_car_node1 = 3;
          }
        }
        if ($.fake_car_node1 == 3) {
          if (!($.trojan_horse2.locate2D(-1180.2, 92.9, 3.0, 3.0, false /* FALSE */))) {
            $.trojan_horse2.gotoCoordinatesAccurate(-1180.2, 92.9, 11.3);
            $.trojan_horse2.setCruiseSpeed(20.0);
          }
          else {
            $.trojan_horse2.setTempAction(5 /* TEMPACT_HANDBRAKESTRAIGHT */, 10000);
            $.trojan_horse2.setCruiseSpeed(0.0);
            $.parking_place.remove();
            $.parking_place = Blip.AddForCoord(-1181.2, 83.8, 11.3);
            Text.PrintNow("CUB4_32", 5000, 1); //Park the car at the blip and get out.
            $.fake_car_node1 = 4;
          }
        }

        //2nd car

        if ($.fake_car_node2 == 0) {
          if (!($.trojan_horse3.locate2D(-1126.1, 70.5, 3.0, 3.0, false /* FALSE */))) {
            $.trojan_horse3.gotoCoordinatesAccurate(-1126.1, 70.5, 10.8);
            $.trojan_horse3.setCruiseSpeed(5.0);
          }
          else {
            $.fake_car_node2 = 1;
          }
        }
        if ($.fake_car_node2 == 1) {
          if (!($.trojan_horse3.locate2D(-1140.9, 71.2, 3.0, 3.0, false /* FALSE */))) {
            $.trojan_horse3.gotoCoordinatesAccurate(-1140.9, 71.2, 10.8);
            $.trojan_horse3.setCruiseSpeed(5.0);
          }
          else {
            $.fake_car_node2 = 2;
          }
        }
        if ($.fake_car_node2 == 2) {
          if (!($.trojan_horse3.locate2D(-1160.0, 70.7, 3.0, 3.0, false /* FALSE */))) {
            $.trojan_horse3.gotoCoordinatesAccurate(-1160.0, 70.7, 10.8);
            $.trojan_horse3.setCruiseSpeed(5.0);
          }
          else {
            $.fake_car_node2 = 3;
          }
        }
        if ($.fake_car_node2 == 3) {
          if (!($.trojan_horse3.locate2D(-1166.2, 85.1, 3.0, 3.0, false /* FALSE */))) {
            $.trojan_horse3.gotoCoordinatesAccurate(-1166.2, 85.1, 10.8);
            $.trojan_horse3.setCruiseSpeed(20.0);
          }
          else {
            $.trojan_horse3.setTempAction(4 /* TEMPACT_HANDBRAKETURNRIGHT */, 10000);
            $.trojan_horse3.setCruiseSpeed(0.0);
            $.fake_car_node2 = 4;
          }
        }

        //waiting for player1 to reach parking place

        if ($.fake_car_node1 == 4) {
          if (!($.trojan_horse.locate3D(-1181.2, 83.8, 11.3, 5.0, 5.0, 5.0, true /* TRUE */))) {
            $.fake_car_node1 = 4;
          }
          else {
            await set_up_for_laying_bombs();  // SCM GOSUB set_up_for_laying_bombs
            // SCM GOTO → trojan_horse_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO trojan_horse_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }


  //failing mission objectives


  if (Char.IsDead($.cuban_trojan1) || Car.IsDead($.trojan_horse2) || Car.IsDead($.trojan_horse3)) {
    Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
    // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
  }


  if (Char.IsDead($.cuban_trojan2) || Char.IsDead($.cuban_trojan3) || Char.IsDead($.cuban_trojan4) || Char.IsDead($.cuban_trojan5)) {
    Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
    // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
  }


  if ($.waiving_flag == 0) {
    if ($.player1.isShootingInArea(-1208.7, 42.5, -1077.4, 126.0, false /* FALSE */)) {
      if (!(Char.IsDead($.haitian_sniper))) {
        $.haitian_sniper.setObjKillPlayerAnyMeans($.player1);
      }
      if (!(Char.IsDead($.haitian_doorman))) {
        $.haitian_doorman.setObjRunToCoord(-1170.9, 87.6);
      }
    }
  }



  if (!(Car.IsDead($.trojan_horse))) {
    if ($.player1.isInArea2D(-1158.0, 61.1, -1199.6, 109.2, false /* FALSE */)) {
      if (!($.player1.isInCar($.trojan_horse))) {
        await set_up_for_laying_bombs();  // SCM GOSUB set_up_for_laying_bombs
        // SCM GOTO → trojan_horse_loop (not lowered; manual jump required)
        throw new Error("unresolved GOTO trojan_horse_loop"); // fallback: would break linear control flow
      }
    }
  }


  // SCM GOTO → the_hornets_nest (not lowered; manual jump required)
  throw new Error("unresolved GOTO the_hornets_nest"); // fallback: would break linear control flow
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////PARKED UP AND READY TO ROCK AND ROLL////////////////////////////////////////////////////////////



  $.bombplace1 = Blip.AddForCoord(-1187.2, 103.0, 10.1);
  $.bombplace2 = Blip.AddForCoord(-1181.5, 81.2, 10.1);
  $.bombplace3 = Blip.AddForCoord(-1173.6, 70.2, 16.9);
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////SETTING BOMBS UP////////////////////////////////////////////////////////////////////////////////

async function trojan_horse_loop() {
  // SCM GOTO → trojan_horse_loop lowered to endless loop
  while (true) {


    await asyncWait(0);

    //Setting bombs



    if ($.trojan_horse_goal == 0) {
      if ($.printy_flaggy == 0) {
        Text.PrintNow("CUB4_29", 5000, 1); //Walk into each of the markers to plant a bomb at that location.
        Text.Print("CUB4_02", 5000, 1); //Go plant the bombs with a 45 second timer.
        Text.Print("CUB4_30", 5000, 1); //After all three bombs are planted, get clear of the factory before it blows.
        $.printy_flaggy = 1;
      }
      if ($.all_bombs_set == 3) {
        Audio.LoadMissionAudio(1, "CUB4_10" as any);
        while (!(Audio.HasMissionAudioLoaded(1))) {
          await asyncWait(0);
        }
        Text.PrintNow("CUB4_17", 5000, 1); //RUN!!
        Text.Print("CUB4_31", 5000, 1); //Get clear of the factory!!
        Audio.PlayMissionAudio(1);
        while (!(Audio.HasMissionAudioFinished(1))) {
          await asyncWait(0);
        }
        Audio.ClearMissionAudio(1);
        Text.ClearThisPrint("CUB4_17");
        if (!(Char.IsDead($.cuban_trojan2))) {
          $.cuban_trojan2.setStayInSamePlace(false /* FALSE */);
          $.cuban_trojan2.followPlayer($.player1);
        }
        if (!(Char.IsDead($.cuban_trojan3))) {
          $.cuban_trojan3.setStayInSamePlace(false /* FALSE */);
          $.cuban_trojan3.followPlayer($.player1);
        }
        if (!(Char.IsDead($.cuban_trojan4))) {
          $.cuban_trojan4.setStayInSamePlace(false /* FALSE */);
          $.cuban_trojan4.followPlayer($.player1);
        }
        if (!(Char.IsDead($.cuban_trojan5))) {
          $.cuban_trojan5.setStayInSamePlace(false /* FALSE */);
          $.cuban_trojan5.followPlayer($.player1);
        }
        $.trojan_horse_goal = 1;
      }
      else {
        if ($.bomb1set == 0) {
          if ($.player1.locateStoppedOnFoot3D(-1187.2, 103.0, 10.1, 1.0, 1.0, 2.0, true /* TRUE */)) {
            if ($.timer_reset1 == 0) {
              TIMERA = 0;
              $.timer_reset1 = 1;
            }
            // SCM label lsd1
            await asyncWait(0);
            if (TIMERA < 2100) {
              if ($.playonce == 0) {
                $.player1.setControl(false /* OFF */);
                Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
                $.scplayer.setHeading(344.6);
                Camera.SetBehindPlayer();
                $.scplayer.setWaitState(WAITSTATE_BOMBER, 2000);
                $.playonce = 1;
              }
              // SCM GOTO → lsd1 (not lowered; manual jump required)
              throw new Error("unresolved GOTO lsd1"); // fallback: would break linear control flow
            }
            else {
              Sound.AddOneOffSound(-1187.2, 104.2, 11.2, SOUND_IMRAN_ARM_BOMB);
              $.dynamite1 = ScriptObject.Create(dynamite, -1187.2, 104.2, 11.2);
              $.dynamite1.setCollision(false /* FALSE */);
              $.dynamite1.setDynamic(false /* FALSE */);


              $.player1.setControl(true /* ON */);
              Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
              $.playonce = 0;
              $.timer_reset1 = 0;
              $.bomb1set = 1;
              $.bombplace1.remove();
              $.all_bombs_set++;
            }
          }
        }
        if ($.bomb2set == 0) {
          if ($.player1.locateStoppedOnFoot3D(-1180.2, 81.2, 10.1, 1.0, 1.0, 2.0, true /* TRUE */)) {
            if ($.timer_reset1 == 0) {
              TIMERA = 0;
              $.timer_reset1 = 1;
            }
            // SCM label lsd2
            await asyncWait(0);
            if (TIMERA < 2100) {
              if ($.playonce == 0) {
                $.player1.setControl(false /* OFF */);
                Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
                $.scplayer.setHeading(25.0);
                Camera.SetBehindPlayer();
                $.scplayer.setWaitState(WAITSTATE_BOMBER, 2000);
                $.playonce = 1;
              }
              // SCM GOTO → lsd2 (not lowered; manual jump required)
              throw new Error("unresolved GOTO lsd2"); // fallback: would break linear control flow
            }
            else {
              Sound.AddOneOffSound(-1181.5, 82.1, 11.2, SOUND_IMRAN_ARM_BOMB);
              $.dynamite2 = ScriptObject.Create(dynamite, -1181.5, 82.1, 11.2);
              $.dynamite2.setCollision(false /* FALSE */);
              $.dynamite2.setDynamic(false /* FALSE */);
              $.player1.setControl(true /* ON */);
              Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
              $.playonce = 0;
              $.timer_reset1 = 0;
              $.bomb2set = 1;
              $.bombplace2.remove();
              $.all_bombs_set++;
            }
          }
        }
        if ($.bomb3set == 0) {
          if ($.player1.locateStoppedOnFoot3D(-1173.6, 70.2, 16.9, 1.0, 1.0, 2.0, true /* TRUE */)) {
            if ($.timer_reset1 == 0) {
              TIMERA = 0;
              $.timer_reset1 = 1;
            }
            // SCM label lsd3
            await asyncWait(0);
            if (TIMERA < 2100) {
              if ($.playonce == 0) {
                $.player1.setControl(false /* OFF */);
                Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
                $.scplayer.setHeading(7.5);
                Camera.SetBehindPlayer();
                $.scplayer.setWaitState(WAITSTATE_BOMBER, 2000);
                $.playonce = 1;
              }
              // SCM GOTO → lsd3 (not lowered; manual jump required)
              throw new Error("unresolved GOTO lsd3"); // fallback: would break linear control flow
            }
            else {
              Sound.AddOneOffSound(-1174.0, 71.1, 18.0, SOUND_IMRAN_ARM_BOMB);
              $.dynamite3 = ScriptObject.Create(dynamite, -1174.0, 71.1, 18.0);
              $.dynamite3.setCollision(false /* FALSE */);
              $.dynamite3.setDynamic(false /* FALSE */);
              $.player1.setControl(true /* ON */);
              Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
              $.playonce = 0;
              $.timer_reset1 = 0;
              $.bomb3set = 1;
              $.bombplace3.remove();
              $.all_bombs_set++;
            }
          }
        }
        if ($.all_bombs_set == 1) {
          if ($.timerupyet == 0) {
            Hud.DisplayTimer($.$id.bomb_timer, TIMER_DOWN);
            $.timerupyet = 1;
          }
        }
      }
      if ($.setting_up_attackers == 0) {
        if (!(Car.IsDead($.trojan_horse2))) {
          $.trojan_horse2.lockDoors(1 /* CARLOCK_UNLOCKED */);
          $.trojan_horse2.setOnlyDamagedByPlayer(false /* FALSE */);
          if (!(Char.IsDead($.cuban_trojan2))) {
            $.cuban_trojan2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            $.cuban_trojan2.setObjLeaveCar($.trojan_horse2);
            $.cuban_trojan2.setThreatSearch(THREAT_GANG_HAITIAN);
            $.cuban_trojan2.setThreatSearch(64 /* THREAT_COP */);
            $.cuban_trojan2.setThreatSearch(65536 /* THREAT_EMERGENCY */);
            $.cuban_trojan2.setObjRunToCoord(-1184.6, 92.3);
          }
          if (!(Char.IsDead($.cuban_trojan3))) {
            $.cuban_trojan3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            $.cuban_trojan3.setObjLeaveCar($.trojan_horse2);
            $.cuban_trojan3.setThreatSearch(THREAT_GANG_HAITIAN);
            $.cuban_trojan3.setThreatSearch(64 /* THREAT_COP */);
            $.cuban_trojan3.setThreatSearch(65536 /* THREAT_EMERGENCY */);
            $.cuban_trojan3.setObjRunToCoord(-1184.9, 100.2);
          }
        }
        if (!(Car.IsDead($.trojan_horse3))) {
          $.trojan_horse3.lockDoors(1 /* CARLOCK_UNLOCKED */);
          $.trojan_horse3.setOnlyDamagedByPlayer(false /* FALSE */);
          if (!(Char.IsDead($.cuban_trojan4))) {
            $.cuban_trojan4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            $.cuban_trojan4.setObjLeaveCar($.trojan_horse3);
            $.cuban_trojan4.setThreatSearch(THREAT_GANG_HAITIAN);
            $.cuban_trojan4.setThreatSearch(64 /* THREAT_COP */);
            $.cuban_trojan4.setThreatSearch(65536 /* THREAT_EMERGENCY */);
            $.cuban_trojan4.setObjRunToCoord(-1157.7, 73.5);
          }
          if (!(Char.IsDead($.cuban_trojan5))) {
            $.cuban_trojan5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            $.cuban_trojan5.setObjLeaveCar($.trojan_horse3);
            $.cuban_trojan5.setThreatSearch(THREAT_GANG_HAITIAN);
            $.cuban_trojan5.setThreatSearch(64 /* THREAT_COP */);
            $.cuban_trojan5.setThreatSearch(65536 /* THREAT_EMERGENCY */);
            $.cuban_trojan5.setObjRunToCoord(-1157.5, 69.5);
          }
        }
        $.setting_up_attackers = 1;
      }
      else {
        if (!(Char.IsDead($.cuban_trojan2))) {
          if (!($.cuban_trojan2.locateOnFoot2D(-1184.6, 92.3, 1.0, 1.0, false /* FALSE */))) {
            $.cuban_trojan2.setStayInSamePlace(false /* FALSE */);
            $.cuban_trojan2.setObjRunToCoord(-1184.6, 92.3);
          }
          else {
            if ($.cuban_trojan2.isObjectivePassed()) {
              $.cuban_trojan2.setStayInSamePlace(true /* TRUE */);
              $.cuban_trojan2.setHeading(256.8);
            }
          }
        }
        if (!(Char.IsDead($.cuban_trojan3))) {
          if (!($.cuban_trojan3.locateOnFoot2D(-1184.9, 100.2, 1.0, 1.0, false /* FALSE */))) {
            $.cuban_trojan3.setStayInSamePlace(false /* FALSE */);
            $.cuban_trojan3.setObjRunToCoord(-1184.9, 100.2);
          }
          else {
            if ($.cuban_trojan3.isObjectivePassed()) {
              $.cuban_trojan3.setStayInSamePlace(true /* TRUE */);
              $.cuban_trojan3.setHeading(257.4);
            }
          }
        }
        if (!(Char.IsDead($.cuban_trojan4))) {
          if (!($.cuban_trojan4.locateOnFoot2D(-1157.7, 73.5, 1.0, 1.0, false /* FALSE */))) {
            $.cuban_trojan4.setStayInSamePlace(false /* FALSE */);
            $.cuban_trojan4.setObjRunToCoord(-1157.7, 73.5);
          }
          else {
            if ($.cuban_trojan4.isObjectivePassed()) {
              $.cuban_trojan4.setStayInSamePlace(true /* TRUE */);
              $.cuban_trojan4.setHeading(256.8);
            }
          }
        }
        if (!(Char.IsDead($.cuban_trojan5))) {
          if (!($.cuban_trojan5.locateOnFoot2D(-1157.5, 69.5, 1.0, 1.0, false /* FALSE */))) {
            $.cuban_trojan5.setStayInSamePlace(false /* FALSE */);
            $.cuban_trojan5.setObjRunToCoord(-1157.5, 69.5);
          }
          else {
            if ($.cuban_trojan5.isObjectivePassed()) {
              $.cuban_trojan5.setStayInSamePlace(true /* TRUE */);
              $.cuban_trojan5.setHeading(257.4);
            }
          }
        }
      }
    }

    //what happens if timer runs out


    if ($.timerupyet == 1) {
      if ($.bomb_timer == 0) {
        Text.PrintNow("CUB4_06", 5000, 1); //You failed to set all the bombs and we have had to abort the explosion.
        // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
      }
    }



    //getting out of bomb area


    if ($.trojan_horse_goal == 1) {
      if ($.player1.isInArea2D(-1077.4, 125.9, -1200.0, 47.9, false /* FALSE */)) {
        $.trojan_horse_goal = 1;
      }
      else {
        // ******************************************START OF Final end to haitians CUTSCENE******************************


        // SCM label test_explosion
        World.ClearArea(-1191.1, 84.8, 11.1, 50.0, true /* TRUE */);
        Hud.ClearTimer($.$id.bomb_timer);
        if (!(Char.IsDead($.haitian_engineer3))) {
          $.haitian_engineer3.markAsNoLongerNeeded();
        }
        if (!(Char.IsDead($.haitian_engineer4))) {
          $.haitian_engineer4.markAsNoLongerNeeded();
        }
        if (!(Char.IsDead($.hait_defender1))) {
          $.hait_defender1.markAsNoLongerNeeded();
        }
        if (!(Char.IsDead($.hait_defender2))) {
          $.hait_defender2.markAsNoLongerNeeded();
        }
        if (!(Char.IsDead($.random_haitian1))) {
          $.random_haitian1.markAsNoLongerNeeded();
        }
        if (!(Char.IsDead($.random_haitian2))) {
          $.random_haitian2.markAsNoLongerNeeded();
        }
        if (!(Char.IsDead($.random_haitian3))) {
          $.random_haitian3.markAsNoLongerNeeded();
        }
        if (!(Car.IsDead($.trojan_horse2))) {
          $.trojan_horse2.markAsNoLongerNeeded();
        }
        $.haitian_engineer3 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1180.2, 81.2, 10.1);
        $.haitian_engineer3.setHeading(25.0);
        $.haitian_engineer3.setWaitState(WAITSTATE_USE_ATM, 999999);
        $.haitian_engineer4 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1197.1, 70.3, 10.1);
        $.haitian_engineer4.setAnimGroup(18 /* ANIM_PANIC_CHUNKYPED */);
        $.haitian_engineer4.setObjRunToCoord(-1169.6, 109.2);
        $.hait_defender1 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1197.4, 74.9, 10.1);
        $.hait_defender1.setAnimGroup(18 /* ANIM_PANIC_CHUNKYPED */);
        $.hait_defender1.setObjRunToCoord(-1169.6, 109.2);
        $.hait_defender2 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1189.8, 81.2, 10.1);
        $.hait_defender2.setAnimGroup(18 /* ANIM_PANIC_CHUNKYPED */);
        $.hait_defender2.setObjRunToCoord(-1169.6, 109.2);
        $.random_haitian1 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1189.0, 83.6, 10.1);
        $.random_haitian1.setAnimGroup(18 /* ANIM_PANIC_CHUNKYPED */);
        $.random_haitian1.setObjRunToCoord(-1169.6, 109.2);
        $.random_haitian2 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1190.5, 68.5, 10.1);
        $.random_haitian2.setAnimGroup(18 /* ANIM_PANIC_CHUNKYPED */);
        $.random_haitian2.setObjRunToCoord(-1169.6, 109.2);
        $.trojan_horse2 = Car.Create(voodoo, -1166.2, 85.1, 9.8);
        $.trojan_horse2.setHeading(112.8);


        await asyncWait(1000);
        $.player1.setControl(false /* OFF */);
        Hud.SwitchWidescreen(true /* ON */);
        $.player1.setVisible(false /* FALSE */);
        Camera.SetFixedPosition(-1198.59, 75.79, 13.74, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(-1184.6, 74.4, 15.3, 2 /* JUMP_CUT */);
        await asyncWait(2000);

        //first two explosions in doorway and first strut
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 2 /* EXPLOSION_ROCKET */); //strut in far left corner
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1175.8, 70.6, 16.9, 2 /* EXPLOSION_ROCKET */); //outside office upstairs
        Fx.AddExplosion(-1175.8, 70.6, 16.9, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1175.8, 70.6, 16.9, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1175.8, 70.6, 16.9, 5 /* EXPLOSION_HELI */);
        Camera.Shake(900);
        await asyncWait(1000);
        Camera.SetFixedPosition(-1196.61, 68.74, 18.19, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(-1187.74, 83.15, 14.59, 2 /* JUMP_CUT */);
        await asyncWait(500);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 2 /* EXPLOSION_ROCKET */); //strut in far left corner
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 2 /* EXPLOSION_ROCKET */); //strut as you go in
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 5 /* EXPLOSION_HELI */);
        Camera.Shake(900);
        await asyncWait(1000);
        //
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 2 /* EXPLOSION_ROCKET */); //strut in far left corner
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 2 /* EXPLOSION_ROCKET */); //strut as you go in
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 2 /* EXPLOSION_ROCKET */); //above strut in far left corner
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 2 /* EXPLOSION_ROCKET */); //above strut as you go in
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 5 /* EXPLOSION_HELI */);
        Camera.Shake(900);
        await asyncWait(1000);
        //
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 2 /* EXPLOSION_ROCKET */); //strut in far left corner
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 2 /* EXPLOSION_ROCKET */); //strut as you go in
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 2 /* EXPLOSION_ROCKET */); //above strut in far left corner
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 5 /* EXPLOSION_HELI */);
        Camera.Shake(300);
        await asyncWait(300);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 2 /* EXPLOSION_ROCKET */); //above strut as you go in
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 2 /* EXPLOSION_ROCKET */); //above far strut as you go in
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 2 /* EXPLOSION_ROCKET */); //far strut as you go in
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 5 /* EXPLOSION_HELI */);
        Camera.Shake(900);
        await asyncWait(1000);
        //
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 2 /* EXPLOSION_ROCKET */); //strut in far left corner
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 2 /* EXPLOSION_ROCKET */); //strut as you go in
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 2 /* EXPLOSION_ROCKET */); //above strut in far left corner
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 5 /* EXPLOSION_HELI */);
        Camera.Shake(200);
        await asyncWait(200);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 2 /* EXPLOSION_ROCKET */); //above strut as you go in
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 2 /* EXPLOSION_ROCKET */); //above far strut as you go in
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 2 /* EXPLOSION_ROCKET */); //far strut as you go in
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 5 /* EXPLOSION_HELI */);
        Camera.Shake(100);
        await asyncWait(100);
        Fx.AddExplosion(-1189.7, 83.6, 17.1, 2 /* EXPLOSION_ROCKET */); //above last remaining strut
        Fx.AddExplosion(-1189.7, 83.6, 17.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1189.7, 83.6, 17.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1189.7, 83.6, 17.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1189.7, 83.6, 10.1, 2 /* EXPLOSION_ROCKET */); //last remaining strut
        Fx.AddExplosion(-1189.7, 83.6, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1189.7, 83.6, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1189.7, 83.6, 10.1, 5 /* EXPLOSION_HELI */);
        Camera.Shake(1400);
        await asyncWait(1500);
        //
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 2 /* EXPLOSION_ROCKET */); //strut in far left corner
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 2 /* EXPLOSION_ROCKET */); //strut as you go in
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 5 /* EXPLOSION_HELI */);
        Camera.Shake(400);
        await asyncWait(400);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 2 /* EXPLOSION_ROCKET */); //above strut in far left corner
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 2 /* EXPLOSION_ROCKET */); //above strut as you go in
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 2 /* EXPLOSION_ROCKET */); //above far strut as you go in
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 2 /* EXPLOSION_ROCKET */); //far strut as you go in
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 5 /* EXPLOSION_HELI */);
        Camera.Shake(300);
        await asyncWait(300);
        Fx.AddExplosion(-1189.7, 83.6, 17.1, 2 /* EXPLOSION_ROCKET */); //above last remaining strut
        Fx.AddExplosion(-1189.7, 83.6, 17.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1189.7, 83.6, 17.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1189.7, 83.6, 17.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1189.7, 83.6, 10.1, 2 /* EXPLOSION_ROCKET */); //last remaining strut
        Fx.AddExplosion(-1189.7, 83.6, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1189.7, 83.6, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1189.7, 83.6, 10.1, 5 /* EXPLOSION_HELI */);


        Camera.Shake(1400);
        await asyncWait(1500);
        //
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 2 /* EXPLOSION_ROCKET */); //strut in far left corner
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 2 /* EXPLOSION_ROCKET */); //strut as you go in
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 5 /* EXPLOSION_HELI */);
        Camera.Shake(200);
        await asyncWait(200);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 2 /* EXPLOSION_ROCKET */); //above strut in far left corner
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 2 /* EXPLOSION_ROCKET */); //above strut as you go in
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 2 /* EXPLOSION_ROCKET */); //above far strut as you go in
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 2 /* EXPLOSION_ROCKET */); //far strut as you go in
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 5 /* EXPLOSION_HELI */);
        Camera.Shake(100);
        await asyncWait(100);
        Fx.AddExplosion(-1189.7, 83.6, 17.1, 2 /* EXPLOSION_ROCKET */); //above last remaining strut
        Fx.AddExplosion(-1189.7, 83.6, 17.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1189.7, 83.6, 17.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1189.7, 83.6, 17.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1189.7, 83.6, 10.1, 2 /* EXPLOSION_ROCKET */); //last remaining strut
        Fx.AddExplosion(-1189.7, 83.6, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1189.7, 83.6, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1189.7, 83.6, 10.1, 5 /* EXPLOSION_HELI */);


        Camera.Shake(900);
        await asyncWait(1000);

        //

        Camera.SetFixedPosition(-1159.03, 108.49, 15.35, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(-1180.11, 90.65, 16.05, 2 /* JUMP_CUT */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 2 /* EXPLOSION_ROCKET */); //strut in far left corner
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1182.8, 76.7, 10.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 2 /* EXPLOSION_ROCKET */); //strut as you go in
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1196.4, 101.8, 10.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 2 /* EXPLOSION_ROCKET */); //above strut in far left corner
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1181.4, 76.8, 17.3, 5 /* EXPLOSION_HELI */);
        Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, -1184.97, 96.72, 11.13, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 11000);
        Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, -1184.97, 96.72, 11.13, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 11000);
        Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, -1184.97, 96.72, 11.13, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 11000);
        Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, -1184.97, 96.72, 11.13, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 11000);
        Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, -1184.97, 96.72, 11.13, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 11000);
        Camera.Shake(600);
        await asyncWait(600);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 2 /* EXPLOSION_ROCKET */); //above strut as you go in
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1187.69, 102.0, 17.2, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 2 /* EXPLOSION_ROCKET */); //above far strut as you go in
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1198.1, 103.2, 17.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 2 /* EXPLOSION_ROCKET */); //far strut as you go in
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1198.1, 103.2, 10.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1189.7, 83.6, 17.1, 2 /* EXPLOSION_ROCKET */); //above last remaining strut
        Fx.AddExplosion(-1189.7, 83.6, 17.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1189.7, 83.6, 17.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1189.7, 83.6, 17.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1189.7, 83.6, 10.1, 2 /* EXPLOSION_ROCKET */); //last remaining strut
        Fx.AddExplosion(-1189.7, 83.6, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1189.7, 83.6, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1189.7, 83.6, 10.1, 5 /* EXPLOSION_HELI */);
        Camera.Shake(200);
        await asyncWait(200);
        Fx.AddExplosion(-1197.0, 89.5, 17.1, 2 /* EXPLOSION_ROCKET */); //last space
        Fx.AddExplosion(-1197.0, 89.5, 17.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1197.0, 89.5, 17.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1197.0, 89.5, 17.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1197.0, 89.5, 10.1, 2 /* EXPLOSION_ROCKET */); //last space
        Fx.AddExplosion(-1197.0, 89.5, 10.1, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1197.0, 89.5, 10.1, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1197.0, 89.5, 10.1, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1196.61, 68.74, 18.19, 2 /* EXPLOSION_ROCKET */); //in front of camera
        Fx.AddExplosion(-1196.61, 68.74, 18.19, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1196.61, 68.74, 18.19, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1196.61, 68.74, 18.19, 5 /* EXPLOSION_HELI */);
        Camera.Shake(1000);
        await asyncWait(1000);
        //

        Fx.AddExplosion(-1171.06, 68.74, 20.34, 2 /* EXPLOSION_ROCKET */); //windows blowing out
        Fx.AddExplosion(-1171.06, 68.74, 20.34, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1171.06, 68.74, 20.34, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1171.06, 68.74, 20.34, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1171.06, 74.74, 20.34, 2 /* EXPLOSION_ROCKET */); //windows blowing out
        Fx.AddExplosion(-1171.06, 74.74, 20.34, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1171.06, 74.74, 20.34, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1171.06, 74.74, 20.34, 5 /* EXPLOSION_HELI */);
        Camera.Shake(100);
        await asyncWait(100);
        Fx.AddExplosion(-1171.06, 79.74, 20.34, 2 /* EXPLOSION_ROCKET */); //windows blowing out
        Fx.AddExplosion(-1171.06, 79.74, 20.34, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1171.06, 79.74, 20.34, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1171.06, 79.74, 20.34, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1171.06, 85.74, 20.34, 2 /* EXPLOSION_ROCKET */); //windows blowing out
        Fx.AddExplosion(-1171.06, 85.74, 20.34, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1171.06, 85.74, 20.34, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1171.06, 85.74, 20.34, 5 /* EXPLOSION_HELI */);
        Camera.Shake(100);
        await asyncWait(100);
        Fx.AddExplosion(-1171.06, 90.74, 20.34, 2 /* EXPLOSION_ROCKET */); //windows blowing out
        Fx.AddExplosion(-1171.06, 90.74, 20.34, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1171.06, 90.74, 20.34, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1171.06, 90.74, 20.34, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1171.06, 96.74, 20.34, 2 /* EXPLOSION_ROCKET */); //windows blowing out
        Fx.AddExplosion(-1171.06, 96.74, 20.34, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1171.06, 96.74, 20.34, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1171.06, 96.74, 20.34, 5 /* EXPLOSION_HELI */);
        Camera.Shake(100);
        await asyncWait(100);
        Fx.AddExplosion(-1171.06, 103.74, 20.34, 2 /* EXPLOSION_ROCKET */); //windows blowing out
        Fx.AddExplosion(-1171.06, 103.74, 20.34, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1171.06, 103.74, 20.34, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1171.06, 103.74, 20.34, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(-1179.06, 105.74, 20.34, 2 /* EXPLOSION_ROCKET */); //windows blowing out
        Fx.AddExplosion(-1179.06, 105.74, 20.34, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1179.06, 105.74, 20.34, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1179.06, 105.74, 20.34, 5 /* EXPLOSION_HELI */);
        Camera.Shake(100);
        await asyncWait(100);
        Fx.AddExplosion(-1188.06, 105.74, 20.34, 2 /* EXPLOSION_ROCKET */); //windows blowing out
        Fx.AddExplosion(-1188.06, 105.74, 20.34, 9 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion(-1188.06, 105.74, 20.34, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion(-1188.06, 105.74, 20.34, 5 /* EXPLOSION_HELI */);
        if (!(Car.IsDead($.trojan_horse2))) {
          if (!($.player1.isInCar($.trojan_horse2))) {
            $.trojan_horse2.setCanBeDamaged(true /* TRUE */);
            $.trojan_horse2.explode();
          }
        }
        if (!(Car.IsDead($.trojan_horse3))) {
          if (!($.player1.isInCar($.trojan_horse3))) {
            $.trojan_horse3.setCanBeDamaged(true /* TRUE */);
            $.trojan_horse3.explode();
          }
        }
        Camera.SetFadingColor(255, 255, 255);
        Camera.DoFade(400, 0 /* FADE_OUT */);
        Fx.AddExplosion(-1159.03, 108.49, 10.35, 5 /* EXPLOSION_HELI */);
        while (Camera.GetFadingStatus()) {
          await asyncWait(0);
        }
        if (!($.player1.isDead())) {
          World.SwapNearestBuildingModel(-1165.346, 85.534, 17.783, 80.0, build1, buildblown);
        }
        if (!($.player1.isDead())) {
          World.SwapNearestBuildingModel(-1165.346, 85.534, 17.783, 80.0, hdrugfactoryint, hdrugfactorypol);
        }
        if (!($.player1.isDead())) {
          World.SwapNearestBuildingModel(-1165.346, 85.534, 17.783, 80.0, LODld1, LODldblown);
        }
        $.dynamite1.delete();
        $.dynamite2.delete();
        $.dynamite3.delete();
        $.bomb_timer = 0;
        Fx.AddExplosion(-1159.03, 108.49, 10.35, 5 /* EXPLOSION_HELI */);
        Camera.DoFade(1600, 1 /* FADE_IN */);



        await asyncWait(5000);
        const _res177 = $.player1.getCoordinates();
$.player_x = _res177.x;
$.player_y = _res177.y;
$.player_z = _res177.z;
        Streaming.LoadScene($.player_x, $.player_y, $.player_z);
        // ******************************************END OF Final end to haitians CUTSCENE********************************
        // SCM GOTO → mission_passed_cuban4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_passed_cuban4"); // fallback: would break linear control flow
      }
    }

    //if player1 leaves before setting up the timers

    if (!($.all_bombs_set == 3)) {
      if (!($.player1.isInArea2D(-1111.6, 125.9, -1200.0, 47.9, false /* FALSE */))) {
        Text.PrintNow("CUB4_06", 5000, 1); //You failed to set all the bombs and we have had to abort the explosion.
        // SCM GOTO → mission_failed_cuban4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_cuban4"); // fallback: would break linear control flow
      }
    }



  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////MISSION PASSED//////////////////////////////////////////////////////////////////////////////////

// Mission failed

async function mission_failed_cuban4() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}




// mission passed

async function mission_passed_cuban4() {


  Text.ClearPrints();
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1); //"Mission Passed!"
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  $.player1.addScore(10000);
  Stat.PlayerMadeProgress(1);
  //opening haitian gate
  //andy_has_control = 1

  while (!($.haitian_gate.slide(-1114.5, 73.0, 10.1, 10.0, 10.0, 0.0, false /* FALSE */))) {
    await asyncWait(0);
  }
  Stat.RegisterMissionPassed("CUB_4");
  $.cuban_contact_blip.remove();
  Zone.SetPedInfo("GHETTO1", 1 /* DAY */, 13, 0, 100, 0, 0, 0, 0, 0, 0, 0, 20); //Haitians
  Zone.SetPedInfo("GHETTO1", 0 /* NIGHT */, 10, 0, 100, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("GHETTO1", 1 /* DAY */, 12, 0, 100, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("GHETTO1", 0 /* NIGHT */, 10, 0, 100, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetPedInfo("GHETTO2", 1 /* DAY */, 13, 100, 0, 0, 0, 0, 0, 0, 0, 0, 20); //Cubans
  Zone.SetPedInfo("GHETTO2", 0 /* NIGHT */, 10, 100, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("GHETTO2", 1 /* DAY */, 12, 100, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("GHETTO2", 0 /* NIGHT */, 10, 100, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Game.ClearThreatForPedType(PEDTYPE_GANG_HAITIAN, THREAT_GANG_CUBAN);
  Game.ClearThreatForPedType(PEDTYPE_GANG_CUBAN, THREAT_GANG_HAITIAN);
  if ($.bomb_timer == 0) {
    $.haitbase_pickup = Pickup.CreateWithAmmo(minigun, 14 /* PICKUP_ON_STREET_SLOW */, 100, -1184.17, 102.62, 17.5);
    $.bomb_timer = 1;
  }
  $.flag_cuban_mission4_passed = 1;
}




// mission cleanup

async function mission_cleanup_cuban4() {
  ONMISSION = 0;
  $.player1.setControl(true /* on */);
  //andy_has_control = 0 //reseting gate

  Game.ClearThreatForPedType(PEDTYPE_GANG_HAITIAN, THREAT_GANG_GOLFER);
  Streaming.MarkModelAsNoLongerNeeded(HNa);
  Streaming.MarkModelAsNoLongerNeeded(HNb);
  Streaming.MarkModelAsNoLongerNeeded(CBa);
  Streaming.MarkModelAsNoLongerNeeded(CBb);
  Streaming.MarkModelAsNoLongerNeeded(7 /* sniper */);
  Streaming.MarkModelAsNoLongerNeeded(tec9);
  Streaming.MarkModelAsNoLongerNeeded(voodoo);
  Streaming.MarkModelAsNoLongerNeeded(dynamite);
  Hud.ClearTimer($.$id.bomb_timer);
  $.meetingplace1_blip.remove();
  $.final_meeting_place_blip.remove();
  $.radar_blip_cuban_trojan1.remove();
  $.bombplace1.remove();
  $.bombplace2.remove();
  $.bombplace3.remove();
  $.parking_place.remove();
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}



///////////////////////////////////////////////////////////////////////////////////////////

async function set_up_for_laying_bombs() {
  ///////////////////////////////////////////////////////////////////////////////////////////

  $.parking_place.remove();
  $.scplayer = $.player1.getChar();
  $.bombplace1 = Blip.AddForCoord(-1187.2, 103.0, 10.1);
  $.bombplace2 = Blip.AddForCoord(-1180.2, 81.2, 10.1);
  $.bombplace3 = Blip.AddForCoord(-1173.6, 70.2, 16.9);
  if (!(Char.IsDead($.cuban_trojan1))) {
    $.cuban_trojan1.setThreatSearch(THREAT_GANG_HAITIAN);
    $.cuban_trojan1.setThreatSearch(64 /* THREAT_COP */);
    $.cuban_trojan1.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.haitian_engineer3))) {
    $.haitian_engineer3.setThreatSearch(THREAT_GANG_CUBAN);
    $.haitian_engineer3.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.haitian_engineer3.setThreatSearch(64 /* THREAT_COP */);
    $.haitian_engineer3.setHeading(4.7);
    $.haitian_engineer3.setObjKillPlayerAnyMeans($.player1);
  }
  if (!(Char.IsDead($.haitian_engineer4))) {
    $.haitian_engineer4.setThreatSearch(THREAT_GANG_CUBAN);
    $.haitian_engineer4.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.haitian_engineer4.setThreatSearch(64 /* THREAT_COP */);
    $.haitian_engineer4.setHeading(4.7);
    $.haitian_engineer4.setObjKillPlayerAnyMeans($.player1);
  }
  if (!(Char.IsDead($.hait_defender1))) {
    $.hait_defender1.setThreatSearch(THREAT_GANG_CUBAN);
    $.hait_defender1.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.hait_defender1.setThreatSearch(64 /* THREAT_COP */);
    if (!(Char.IsDead($.hait_defender2))) {
      Game.SetCharsChatting($.hait_defender1, $.hait_defender2, 100000);
    }
  }
  if (!(Char.IsDead($.hait_defender2))) {
    $.hait_defender2.setThreatSearch(THREAT_GANG_CUBAN);
    $.hait_defender2.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.hait_defender2.setThreatSearch(64 /* THREAT_COP */);
  }
  if (!(Char.IsDead($.haitian_doorman))) {
    $.haitian_doorman.setThreatSearch(THREAT_GANG_CUBAN);
    $.haitian_doorman.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.haitian_doorman.setThreatSearch(64 /* THREAT_COP */);
    $.haitian_doorman.setHeading(109.6);
    $.haitian_doorman.setStayInSamePlace(true /* TRUE */);
  }


  $.haitian_doorman2 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1115.2, 67.0, 10.1);
  $.haitian_doorman2.setHeading(85.4);
  $.haitian_doorman2.giveWeapon(WEAPONTYPE_tec9, 30000);
  $.haitian_doorman2.clearThreatSearch();
  $.haitian_doorman2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.haitian_doorman2.setThreatSearch(THREAT_GANG_CUBAN);
  $.haitian_doorman2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.haitian_doorman2.setThreatSearch(64 /* THREAT_COP */);
  $.haitian_doorman2.setHeedThreats(true /* TRUE */);
  $.haitian_doorman2.setStayInSamePlace(true /* TRUE */);


  $.hait_defender3 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1182.3, 80.5, 10.1);
  $.hait_defender3.setHeading(355.1);
  $.hait_defender3.giveWeapon(WEAPONTYPE_tec9, 30000);
  $.hait_defender3.clearThreatSearch();
  $.hait_defender3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.hait_defender3.setThreatSearch(THREAT_GANG_CUBAN);
  $.hait_defender3.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.hait_defender3.setThreatSearch(64 /* THREAT_COP */);
  $.hait_defender3.setHeedThreats(true /* TRUE */);
  $.hait_defender3.setStayInSamePlace(true /* TRUE */);


  $.hait_defender4 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1192.2, 102.7, 10.1);
  $.hait_defender4.setHeading(109.6);
  $.hait_defender4.giveWeapon(WEAPONTYPE_tec9, 30000);
  $.hait_defender4.clearThreatSearch();
  $.hait_defender4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.hait_defender4.setThreatSearch(THREAT_GANG_CUBAN);
  $.hait_defender4.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.hait_defender4.setThreatSearch(64 /* THREAT_COP */);
  $.hait_defender4.setHeedThreats(true /* TRUE */);
  $.hait_defender4.setStayInSamePlace(true /* TRUE */);


  $.hait_defender5 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1183.4, 67.0, 16.9);
  $.hait_defender5.setHeading(12.0);
  $.hait_defender5.giveWeapon(WEAPONTYPE_tec9, 30000);
  $.hait_defender5.clearThreatSearch();
  $.hait_defender5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.hait_defender5.setThreatSearch(THREAT_GANG_CUBAN);
  $.hait_defender5.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.hait_defender5.setThreatSearch(64 /* THREAT_COP */);
  $.hait_defender5.setHeedThreats(true /* TRUE */);
  $.hait_defender5.setStayInSamePlace(true /* TRUE */);


  $.random_haitian1 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1197.9, 82.5, 10.1);
  $.random_haitian1.setHeading(347.0);
  $.random_haitian1.giveWeapon(WEAPONTYPE_tec9, 30000);
  $.random_haitian1.clearThreatSearch();
  $.random_haitian1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.random_haitian1.setThreatSearch(THREAT_GANG_CUBAN);
  $.random_haitian1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.random_haitian1.setThreatSearch(64 /* THREAT_COP */);
  $.random_haitian1.setHeedThreats(true /* TRUE */);
  $.random_haitian1.setStayInSamePlace(true /* TRUE */);


  $.random_haitian2 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1189.0, 83.6, 10.1);
  $.random_haitian2.setHeading(20.0);
  $.random_haitian2.giveWeapon(WEAPONTYPE_tec9, 30000);
  $.random_haitian2.clearThreatSearch();
  $.random_haitian2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.random_haitian2.setThreatSearch(THREAT_GANG_CUBAN);
  $.random_haitian2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.random_haitian2.setThreatSearch(64 /* THREAT_COP */);
  $.random_haitian2.setHeedThreats(true /* TRUE */);
  $.random_haitian2.setStayInSamePlace(true /* TRUE */);


  $.random_haitian3 = Char.Create(PEDTYPE_GANG_HAITIAN, HNa, -1190.5, 68.5, 10.1);
  $.random_haitian3.setHeading(13.8);
  $.random_haitian3.giveWeapon(WEAPONTYPE_tec9, 30000);
  $.random_haitian3.clearThreatSearch();
  $.random_haitian3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.random_haitian3.setThreatSearch(THREAT_GANG_CUBAN);
  $.random_haitian3.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.random_haitian3.setThreatSearch(64 /* THREAT_COP */);
  $.random_haitian3.setHeedThreats(true /* TRUE */);
  $.random_haitian3.setStayInSamePlace(true /* TRUE */);


  if (!(Car.IsDead($.trojan_horse2))) {
    $.trojan_horse2.setOnlyDamagedByPlayer(true /* TRUE */);
  }
  if (!(Car.IsDead($.trojan_horse3))) {
    $.trojan_horse3.setOnlyDamagedByPlayer(true /* TRUE */);
  }
  Game.SetThreatForPedType(PEDTYPE_GANG_HAITIAN, 1 /* THREAT_PLAYER1 */);
  Game.SetThreatForPedType(PEDTYPE_GANG_HAITIAN, THREAT_GANG_GOLFER);


  Audio.LoadMissionAudio(1, "CUB4_9" as any);
  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
  }
  Text.PrintNow("CUB4_16", 4000, 1); //I'm going to plant the bomb, cover me!
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("CUB4_16");
  //closing gate

  while (!($.haitian_gate.slide(-1114.5, 67.0, 10.1, 10.0, 10.0, 0.0, false /* FALSE */))) {
    await asyncWait(0);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////

  return;
  ///////////////////////////////////////////////////////////////////////////////////////////



}

export async function cuban4() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************Cuban 4*****************************************
  // ***************************************Trojan Voodoo*************************************
  // *****************************************************************************************
  // *****************************************************************************************

  // SCRIPT_NAME cuban4
  // Mission start stuff

  await mission_start_cuban4();  // SCM GOSUB mission_start_cuban4
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_failed_cuban4();  // SCM GOSUB mission_failed_cuban4
  }
  await mission_cleanup_cuban4();  // SCM GOSUB mission_cleanup_cuban4
  // MissionBoundary

  // Variables for mission
  //people, cars and objects

  // VAR_INT trojan_horse
  // VAR_INT cuban_trojan1
  // VAR_INT trojan_horse2
  // VAR_INT trojan_horse3
  // VAR_INT cuban_trojan2
  // VAR_INT cuban_trojan3
  // VAR_INT cuban_trojan4
  // VAR_INT cuban_trojan5
  // VAR_INT haitian_doorman
  // VAR_INT haitian_sniper
  // VAR_INT haitian_engineer3
  // VAR_INT haitian_engineer4
  // VAR_INT walking_engineers
  // VAR_INT waiving_engineer
  // VAR_INT hait_defender1
  // VAR_INT hait_defender2
  // VAR_INT hait_defender3
  // VAR_INT hait_defender4
  // VAR_INT hait_defender5
  // VAR_INT haitian_doorman2
  // VAR_INT haitbase_pickup
  // VAR_INT dynamite1
  // VAR_INT dynamite2
  // VAR_INT dynamite3
  // VAR_INT random_haitian1
  // VAR_INT random_haitian2
  // VAR_INT random_haitian3

  //blips

  // VAR_INT meetingplace1_blip
  // VAR_INT final_meeting_place_blip
  // VAR_INT radar_blip_cuban_trojan1
  // VAR_INT bombplace1
  // VAR_INT bombplace2
  // VAR_INT bombplace3
  // VAR_INT parking_place

  //flags

  // VAR_INT trojan_horse_goal
  // VAR_INT flag_cuban_trojan1_in_group_prot3
  // VAR_INT door_flag
  // VAR_INT waiving_flag
  // VAR_INT fake_car_node1
  // VAR_INT fake_car_node2
  // VAR_INT fake_car_node_var
  // VAR_INT trojan_horse_var
  // VAR_INT timer_reset1
  // VAR_INT all_bombs_set
  // VAR_INT bomb1set
  // VAR_INT bomb2set
  // VAR_INT bomb3set
  // VAR_INT playonce
  // VAR_INT timerupyet
  // VAR_INT bomb_timer
  // VAR_INT out_bomb_area
  // VAR_INT printy_flaggy
  // VAR_INT printy_flaggy2
  // VAR_INT player1_inside_compound
  // VAR_INT haitian_engineers_created
  // VAR_INT swap_positions
  // VAR_INT waitstate
  // VAR_INT start_timerb
  // VAR_INT plyr_in_hait_car
  // VAR_INT final_meeting_place
  // VAR_INT setting_up_attackers
  // VAR_INT cub4_audio_flag1
  // VAR_INT cub4_audio_flag2
  // VAR_INT cub4_audio_flag3
  // VAR_INT cub4_audio_flag4
  // VAR_INT cub4_audio_flag5
  // VAR_INT cub4_audio_flag6



  //testy var ints

  // VAR_INT testy_car

  // ****************************************Mission Start************************************

}
