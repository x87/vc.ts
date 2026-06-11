// Generated from main/prot1.sc

import { $ } from "../utils/vars.mts";

async function mission_start_protec1() {
  Text.ClearThisPrint("M_FAIL");
  ONMISSION = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  Text.LoadMissionText("PROT1");
  Shortcut.SetDropoffPointForMission(-288.2, -487.5, 9.8, 275.0);
  // *****************************************Set Flags/variables************************************


  $.ram_raid_goals = 0;
  $.ram_time = 301000;
  $.all_shops_rammed = 0;


  $.shop1_rammed = 0;
  $.shop2_rammed = 0;
  $.shop3_rammed = 0;
  $.shop4_rammed = 0;
  $.shop5_rammed = 0;


  $.glass1_smashed = 0;
  $.glass2_smashed = 0;
  $.glass3_smashed = 0;
  $.glass4_smashed = 0;
  $.glass5_smashed = 0;
  $.glass6_smashed = 0;
  $.glass7_smashed = 0;
  $.glass8_smashed = 0;
  $.glass9_smashed = 0;
  $.glass10_smashed = 0;
  $.glass11_smashed = 0;
  $.glass12_smashed = 0;
  $.glass13_smashed = 0;
  $.glass14_smashed = 0;
  $.glass15_smashed = 0;
  $.glass16_smashed = 0;
  $.glass17_smashed = 0;
  $.glass18_smashed = 0;
  $.glass19_smashed = 0;
  $.glass20_smashed = 0;
  $.glass21_smashed = 0;
  $.glass22_smashed = 0;
  $.glass23_smashed = 0;
  $.glass24_smashed = 0;
  $.glass25_smashed = 0;
  $.prot1_print_flag = 0;


  $.star1 = 0;
  $.star2 = 0;
  $.star3 = 0;
  $.star4 = 0;
  $.star5 = 0;


  // ****************************************START OF CUTSCENE********************************


  Streaming.SetAreaVisible(2 /* VIS_MANSION */);
  $.flag_player_in_mansion = 1;


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSken");
  Streaming.LoadSpecialCharacter(3, "CSbuddy");
  Streaming.LoadSpecialCharacter(4, "CSavery");


  Streaming.LoadScene(-378.62, -552.676, 18.534);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4))) {
    await asyncWait(0);


  }


  Cutscene.Load("bud_1");
  World.ClearArea(-378.6, -552.6, 25.5, 15.0, true /* TRUE */);
  World.ClearArea(-379.0, -564.6, 19.8, 15.0, true /* TRUE */);
  World.SetPedDensityMultiplier(0.0);
  Cutscene.SetOffset(-378.62, -552.676, 18.534);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL02);
  $.cs_ken.setAnim("CSken");


  $.cs_buddy = CutsceneObject.Create(SPECIAL03);
  $.cs_buddy.setAnim("CSbuddy");


  $.cs_avery = CutsceneObject.Create(SPECIAL04);
  $.cs_avery.setAnim("CSavery");



  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 498) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO1_A", 10000, 1); // Oh, We gotta redecorate this place - make it look older.


  while ($.cs_time < 3470) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO1_B", 10000, 1); // I can't stand this look. Tommy, whadaya say? Whadaya say we put a bar in...


  while ($.cs_time < 7473) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO1_C", 10000, 1); // I think I'm gonna keep you as my Lawyer, not my interior decorator. Got it?


  while ($.cs_time < 11644) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO1_D", 10000, 1); // Listen to me,


  while ($.cs_time < 12448) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO1_E", 10000, 1); // The time to take over in this town is now. It’s all out there waiting for us.


  while ($.cs_time < 16477) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO1_F", 10000, 1); // We need to start seizing territory,


  while ($.cs_time < 18657) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO1_G", 10000, 1); // let Vice City know we're the new players in town, know what I’m saying?


  while ($.cs_time < 21849) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO1_I", 10000, 1); // What you need is a legitimate front -real estate Tommy, real estate. Never done me any harm.


  while ($.cs_time < 26212) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO1_J", 10000, 1); // We need to start using some muscle or we can kiss all that hard work goodbye.


  while ($.cs_time < 30323) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO1_K", 10000, 1); // Local businesses know Diaz is dead, and they're refusing to pay protection!


  while ($.cs_time < 34351) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO1_L", 10000, 1); // Oh. We could try bribery...


  while ($.cs_time < 36310) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO1_M", 10000, 1); // Bribery? Screw bribery! I'll show you how to make 'em scared.


  while ($.cs_time < 40077) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO1_N", 10000, 1); // I'll be back in five minutes...


  while ($.cs_time < 41077) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 42112) {
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
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  World.SetPedDensityMultiplier(1.0);
  World.SetCarDensityMultiplier(1.0);


  $.flag_player_in_mansion = 0;
  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);

  // ******************************************END OF CUTSCENE********************************

  Camera.SetFadingColor(0, 0, 0);
  await asyncWait(500);
  Streaming.LoadScene(-375.9, -510.6, 16.2);
  $.player1.setCoordinates(-375.9, -544.6, 16.2);
  $.player1.setHeading(360.0);
  Camera.SetBehindPlayer();
  //------------------REQUEST_MODELS ------------------------------

  $.player1.setMood(3 /* PLAYER_MOOD_WISECRACKING */, 60000);
  $.weapon_shop2_blip.remove();
  $.hardware_shop2.remove();


  Streaming.RequestModel(stinger);


  while (!(Streaming.HasModelLoaded(stinger))) {
    await asyncWait(0);
  }


  $.free_stinger = Car.Create(stinger, -345.3, -524.6, 11.5);
  $.ram_raid_gun = Pickup.CreateWithAmmo(uzi, 3 /* PICKUP_ONCE */, 250, -347.8, -527.2, 12.7);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  Text.PrintNow("PRO1_11", 5000, 1); //Get to The North Point Mall in Vice Point.
  Text.Print("PRO1_01", 5000, 1); //Do a hit and run on the shop fronts and the owners will be begging for protection.


  Text.Print("PRO1_13", 5000, 1); //You have five minutes to smash them all.


  $.player1.setAutoAim(false /* FALSE */);

  //coffee shop

  $.glass1_blip = Blip.AddForCoord(459.9, 1004.1, 18.1);
  $.glass2_blip = Blip.AddForCoord(467.2, 1012.0, 18.1);
  //pearl necklace

  $.glass3_blip = Blip.AddForCoord(457.5, 1197.6, 18.1);
  $.glass4_blip = Blip.AddForCoord(463.8, 1207.4, 18.1);
  $.glass5_blip = Blip.AddForCoord(466.8, 1211.8, 18.1);
  //book shop

  $.glass6_blip = Blip.AddForCoord(369.9, 1222.0, 18.1);
  $.glass7_blip = Blip.AddForCoord(369.9, 1212.2, 18.1);
  //tower records

  $.glass8_blip = Blip.AddForCoord(356.5, 1120.0, 24.5);
  $.glass9_blip = Blip.AddForCoord(356.6, 1115.5, 24.5);
  $.glass10_blip = Blip.AddForCoord(361.1, 1110.2, 24.5);
  $.glass11_blip = Blip.AddForCoord(364.2, 1107.2, 24.5);
  $.glass12_blip = Blip.AddForCoord(367.0, 1104.2, 24.5);
  $.glass13_blip = Blip.AddForCoord(369.2, 1101.7, 24.5);
  //gash upstairs

  $.glass14_blip = Blip.AddForCoord(403.1, 1022.0, 24.5);
  $.glass15_blip = Blip.AddForCoord(403.1, 1033.0, 24.5);
  $.glass16_blip = Blip.AddForCoord(406.7, 1041.0, 24.5);
  $.glass17_blip = Blip.AddForCoord(421.0, 1041.0, 24.5);
  $.glass18_blip = Blip.AddForCoord(425.1, 1035.7, 24.5);
  $.glass19_blip = Blip.AddForCoord(425.1, 1021.8, 24.5);
  //gash downstairs

  $.glass20_blip = Blip.AddForCoord(403.1, 1024.6, 18.1);
  $.glass21_blip = Blip.AddForCoord(403.1, 1033.0, 18.1);
  $.glass22_blip = Blip.AddForCoord(406.7, 1041.0, 18.1);
  $.glass23_blip = Blip.AddForCoord(421.0, 1041.0, 18.1);
  $.glass24_blip = Blip.AddForCoord(425.1, 1035.7, 18.1);
  $.glass25_blip = Blip.AddForCoord(425.1, 1021.8, 18.1);


  Hud.DisplayTimer($.$id.ram_time, 1 /* TIMER_DOWN */);
}



async function ram_raid_loop() {
  // SCM GOTO → ram_raid_loop lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.flag_player_in_mall == 1) {
      if ($.prot1_print_flag == 0) {
        Text.PrintNow("PRO1_12", 5000, 1); //Smash the panes of glass in each shop front and the owners will be begging for new protection.
        $.prot1_print_flag = 1;
      }
      if ($.all_shops_rammed == 25) {
        $.ram_raid_goals = 1;
      }
      else {
        //coffee shop
        if ($.shop1_rammed < 2) {
          if ($.glass1_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(459.9, 1004.1, 19.7)) {
              $.shop1_rammed++;
              $.glass1_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass1_blip.remove();
            }
          }
          if ($.glass2_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(467.2, 1012.0, 19.7)) {
              $.shop1_rammed++;
              $.glass2_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass2_blip.remove();
            }
          }
        }
        if ($.shop1_rammed == 2) {
          Audio.LoadMissionAudio(1, "BUD1_1" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          Text.PrintNow("PRO1_04", 4000, 1); //My livelihood, destroyed!
          Audio.PlayMissionAudio(1);
          while (!(Audio.HasMissionAudioFinished(1))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("PRO1_04");
          $.shop1_rammed = 3;
        }
        if ($.shop1_rammed == 3) {
          Audio.LoadMissionAudio(2, "BUD1_9" as any);
          while (!(Audio.HasMissionAudioLoaded(2))) {
            await asyncWait(0);
          }
          Text.PrintNow("PRO1_09", 4000, 1); //My livelihood, destroyed!
          Audio.PlayMissionAudio(2);
          while (!(Audio.HasMissionAudioFinished(2))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(2);
          Text.ClearThisPrint("PRO1_09");
          $.shop1_rammed = 4;
        }

        //Pearl Necklace
        if ($.shop2_rammed < 3) {
          if ($.glass3_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(457.5, 1197.6, 19.7)) {
              $.shop2_rammed++;
              $.glass3_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass3_blip.remove();
            }
          }
          if ($.glass4_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(463.8, 1207.4, 19.7)) {
              $.shop2_rammed++;
              $.glass4_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass4_blip.remove();
            }
          }
          if ($.glass5_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(466.8, 1211.8, 19.7)) {
              $.shop2_rammed++;
              $.glass5_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass5_blip.remove();
            }
          }
        }
        if ($.shop2_rammed == 3) {
          Audio.LoadMissionAudio(1, "BUD1_2" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          Text.PrintNow("PRO1_05", 4000, 1); //Ruined...RUINED!!
          Audio.PlayMissionAudio(1);
          while (!(Audio.HasMissionAudioFinished(1))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("PRO1_05");
          $.shop2_rammed = 4;
        }

        //Book shop
        if ($.shop3_rammed < 2) {
          if ($.glass6_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(369.9, 1222.0, 19.7)) {
              $.shop3_rammed++;
              $.glass6_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass6_blip.remove();
            }
          }
          if ($.glass7_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(369.9, 1212.2, 19.7)) {
              $.shop3_rammed++;
              $.glass7_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass7_blip.remove();
            }
          }
        }
        if ($.shop3_rammed == 2) {
          Audio.LoadMissionAudio(1, "BUD1_3" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          Text.PrintNow("PRO1_06", 4000, 1); //I pay through the ass for protection!
          Audio.PlayMissionAudio(1);
          while (!(Audio.HasMissionAudioFinished(1))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("PRO1_06");
          $.shop3_rammed = 3;
        }
        if ($.shop3_rammed == 3) {
          Audio.LoadMissionAudio(2, "BUD1_10" as any);
          while (!(Audio.HasMissionAudioLoaded(2))) {
            await asyncWait(0);
          }
          Text.PrintNow("PRO1_10", 4000, 1); //I run this town now. ME!
          Audio.PlayMissionAudio(2);
          while (!(Audio.HasMissionAudioFinished(2))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(2);
          Text.ClearThisPrint("PRO1_10");
          $.shop3_rammed = 4;
        }

        //Record Shop
        if ($.shop4_rammed < 6) {
          if ($.glass8_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(356.5, 1120.0, 25.7)) {
              $.shop4_rammed++;
              $.glass8_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass8_blip.remove();
            }
          }
          if ($.glass9_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(356.6, 1115.5, 25.7)) {
              $.shop4_rammed++;
              $.glass9_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass9_blip.remove();
            }
          }
          if ($.glass10_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(361.1, 1110.2, 25.7)) {
              $.shop4_rammed++;
              $.glass10_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass10_blip.remove();
            }
          }


          if ($.glass11_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(364.2, 1107.2, 25.7)) {
              $.shop4_rammed++;
              $.glass11_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass11_blip.remove();
            }
          }
          if ($.glass12_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(367.0, 1104.2, 25.7)) {
              $.shop4_rammed++;
              $.glass12_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass12_blip.remove();
            }
          }
          if ($.glass13_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(369.2, 1101.7, 25.7)) {
              $.shop4_rammed++;
              $.glass13_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass13_blip.remove();
            }
          }
        }
        if ($.shop4_rammed == 6) {
          Audio.LoadMissionAudio(1, "BUD1_4" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          Text.PrintNow("PRO1_07", 4000, 1); //My beautiful window display!
          Audio.PlayMissionAudio(1);
          while (!(Audio.HasMissionAudioFinished(1))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("PRO1_07");
          $.shop4_rammed = 7;
        }

        //GASH Top half
        if ($.shop5_rammed < 12) {
          if ($.glass14_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(403.1, 1022.0, 25.7)) {
              $.shop5_rammed++;
              $.glass14_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass14_blip.remove();
            }
          }
          if ($.glass15_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(403.1, 1033.0, 25.7)) {
              $.shop5_rammed++;
              $.glass15_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass15_blip.remove();
            }
          }
          if ($.glass16_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(406.7, 1041.0, 25.7)) {
              $.shop5_rammed++;
              $.glass16_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass16_blip.remove();
            }
          }


          if ($.glass17_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(421.0, 1041.0, 25.7)) {
              $.shop5_rammed++;
              $.glass17_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass17_blip.remove();
            }
          }
          if ($.glass18_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(425.1, 1035.7, 25.7)) {
              $.shop5_rammed++;
              $.glass18_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass18_blip.remove();
            }
          }
          if ($.glass19_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(425.1, 1021.8, 25.7)) {
              $.shop5_rammed++;
              $.glass19_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass19_blip.remove();
            }
          }


          //GASH Bottom half

          if ($.glass20_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(403.1, 1024.6, 19.7)) {
              $.shop5_rammed++;
              $.glass20_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass20_blip.remove();
            }
          }
          if ($.glass21_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(403.1, 1033.0, 19.7)) {
              $.shop5_rammed++;
              $.glass21_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass21_blip.remove();
            }
          }
          if ($.glass22_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(406.7, 1041.0, 19.7)) {
              $.shop5_rammed++;
              $.glass22_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass22_blip.remove();
            }
          }


          if ($.glass23_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(421.0, 1041.0, 19.7)) {
              $.shop5_rammed++;
              $.glass23_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass23_blip.remove();
            }
          }
          if ($.glass24_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(425.1, 1035.7, 19.7)) {
              $.shop5_rammed++;
              $.glass24_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass24_blip.remove();
            }
          }
          if ($.glass25_smashed == 0) {
            if (World.HasGlassBeenShatteredNearby(425.1, 1021.8, 19.7)) {
              $.shop5_rammed++;
              $.glass25_smashed = 1;
              $.all_shops_rammed++;
              Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
              $.glass25_blip.remove();
            }
          }
        }
        if ($.shop5_rammed == 12) {
          Audio.LoadMissionAudio(1, "BUD1_5" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          Text.PrintNow("PRO1_08", 4000, 1); //My store. My wonderful store.
          Audio.PlayMissionAudio(1);
          while (!(Audio.HasMissionAudioFinished(1))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("PRO1_08");
          $.shop5_rammed = 13;
        }
        if ($.all_shops_rammed > 4) {
          if ($.star1 == 0) {
            $.player1.alterWantedLevelNoDrop(1);
            $.star1 = 1;
          }
        }
        if ($.all_shops_rammed > 9) {
          if ($.star2 == 0) {
            $.player1.alterWantedLevelNoDrop(2);
            $.star2 = 1;
          }
        }
        if ($.all_shops_rammed > 14) {
          if ($.star3 == 0) {
            $.player1.alterWantedLevelNoDrop(3);
            $.star3 = 1;
          }
        }
        if ($.all_shops_rammed > 19) {
          if ($.star4 == 0) {
            $.player1.alterWantedLevelNoDrop(4);
            $.star4 = 1;
          }
        }
        if ($.all_shops_rammed > 24) {
          if ($.star5 == 0) {
            $.player1.alterWantedLevelNoDrop(5);
            $.star5 = 1;
          }
        }
      }
    }


    //player1 fails if timer runs out


    if ($.ram_time == 0) {
      Text.PrintNow("PRO1_03", 5000, 1); //This was suppose to be a hit and run, not a hit and have a coffee.
      // SCM GOTO → mission_failed_protec1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_protec1"); // fallback: would break linear control flow
    }


    //player1 must get out of mall


    if ($.ram_raid_goals == 1) {
      // ******************************************END OF CUTSCENE********************************
      //PRINTWORKS PURCHASING PICKUP
      //REMOVE_BLIP print_works_blip
      $.print_works_pickup.remove();
      $.print_works_blip = Blip.AddShortRangeSpriteForContactPoint($.printbuyX, $.printbuyY, $.printbuyZ, 25 /* RADAR_SPRITE_PROPERTY */);
      $.print_works_blip.changeDisplay(2 /* BLIP_ONLY */);
      $.print_works_pickup = Pickup.CreateForSaleProperty($.printbuyX, $.printbuyY, $.printbuyZ, $.printworks_price, "PRNT_L"); //Press R3 to purchase the Print Works for $~1~
      // START_NEW_SCRIPT print_buy_loop 
      //CAR SHOWROOM PURCHASING PICKUP
      //REMOVE_BLIP carbuy_blip
      $.carbuy_pickup.remove();
      $.carbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.carbuyX, $.carbuyY, $.carbuyZ, 25 /* RADAR_SPRITE_PROPERTY */);
      $.carbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      $.carbuy_pickup = Pickup.CreateForSaleProperty($.carbuyX, $.carbuyY, $.carbuyZ, $.carbuy_price, "CAR_L"); //Press R3 to purchase the Car Showroom for $~1~
      // START_NEW_SCRIPT property_car_loop 
      //FILM STUDIO PURCHASING PICKUP
      //REMOVE_BLIP pornbuy_blip
      $.pornbuy_pickup.remove();
      $.pornbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.pornbuyX, $.pornbuyY, $.pornbuyZ, 25 /* RADAR_SPRITE_PROPERTY */);
      $.pornbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      $.pornbuy_pickup = Pickup.CreateForSaleProperty($.pornbuyX, $.pornbuyY, $.pornbuyZ, $.pornbuy_price, "PORN_L"); //Press R3 to purchase the Film Studios for $~1~
      // START_NEW_SCRIPT pornbuy_loop 
      //ICECREAM FACTORY PURCHASING PICKUP
      //REMOVE_BLIP icebuy_blip
      $.icebuy_pickup.remove();
      $.icebuy_blip = Blip.AddShortRangeSpriteForContactPoint($.icebuyX, $.icebuyY, $.icebuyZ, 25 /* RADAR_SPRITE_PROPERTY */);
      $.icebuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      $.icebuy_pickup = Pickup.CreateForSaleProperty($.icebuyX, $.icebuyY, $.icebuyZ, $.icebuy_price, "ICE_L"); //Press R3 to purchase the Icecream Factory for $~1~
      // START_NEW_SCRIPT icebuy_loop 
      //TAXI FIRM PURCHASING PICKUP
      //REMOVE_BLIP taxibuy_blip
      $.taxibuy_pickup.remove();
      $.taxibuy_blip = Blip.AddShortRangeSpriteForContactPoint($.taxibuyX, $.taxibuyY, $.taxibuyZ, 25 /* RADAR_SPRITE_PROPERTY */);
      $.taxibuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      $.taxibuy_pickup = Pickup.CreateForSaleProperty($.taxibuyX, $.taxibuyY, $.taxibuyZ, $.taxibuy_price, "TAXI_L"); //Press R3 to purchase the Taxi Company for $~1~
      // START_NEW_SCRIPT taxibuy_loop 
      //THE MALIBU PURCHASING PICKUP
      //REMOVE_BLIP bankbuy_blip
      $.bankbuy_pickup.remove();
      $.bankbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.bankbuyX, $.bankbuyY, $.bankbuyZ, 25 /* RADAR_SPRITE_PROPERTY */);
      $.bankbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      $.bankbuy_pickup = Pickup.CreateForSaleProperty($.bankbuyX, $.bankbuyY, $.bankbuyZ, $.bankbuy_price, "BANK_L"); //Press R3 to purchase The Malibu for $~1~
      // START_NEW_SCRIPT bankbuy_loop 
      //BOAT YARD PURCHASING PICKUP
      //REMOVE_BLIP boatbuy_blip
      $.boatbuy_pickup.remove();
      $.boatbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.boatbuyX, $.boatbuyY, $.boatbuyZ, 25 /* RADAR_SPRITE_PROPERTY */);
      $.boatbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      $.boatbuy_pickup = Pickup.CreateForSaleProperty($.boatbuyX, $.boatbuyY, $.boatbuyZ, $.boatbuy_price, "BOAT_L"); //Press R3 to purchase the Boat Yard for $~1~
      // START_NEW_SCRIPT boatbuy_loop 
      //STRIP CLUB PURCHASING PICKUP
      $.strpbuy_pickup.remove();
      $.strpbuy_pickup = Pickup.CreateForSaleProperty($.strpbuyX, $.strpbuyY, $.strpbuyZ, $.strpbuy_price, "STRP_L"); //Press R3 to purchase the Car Showroom for $~1~
      $.strpbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.strpbuyX, $.strpbuyY, $.strpbuyZ, 25 /* RADAR_SPRITE_PROPERTY */);
      $.strpbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      // START_NEW_SCRIPT strpbuy_loop 
      $.player1.setControl(false /* OFF */);
      Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
      Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
      Camera.DoFade(1500, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Hud.SwitchWidescreen(true /* ON */);
      Clock.SetTimeOfDay(22, 0);
      if ($.flag_player_in_mall == 1) {
        Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);
      }
      World.SetCarDensityMultiplier(0.0);
      World.SetPedDensityMultiplier(0.0);
      Streaming.LoadScene(475.4, -67.8, 19.6);
      Camera.DoFade(1500, 1 /* FADE_IN */);
      Camera.SetFixedPosition(524.9, -88.8, 15.6, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(498.2, -74.0, 13.6, 2 /* JUMP_CUT */);
      TIMERB = 0;
      Text.PrintNow("BUYP1", 8000, 1); //You can now buy property in certain areas of the map
      while (!(TIMERB > 8000)) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
          // SCM GOTO → skip_prop_cut (not lowered; manual jump required)
          throw new Error("unresolved GOTO skip_prop_cut"); // fallback: would break linear control flow
        }
      }
      TIMERB = 0;
      Camera.SetFixedPosition(495.7, -79.5, 12.6, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(488.6, -79.7, 12.3, 2 /* JUMP_CUT */);
      Text.PrintNow("BUYP2", 8000, 1); //If you see a green house pickup, you can buy the property.
      while (!(TIMERB > 8000)) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
          // SCM GOTO → skip_prop_cut (not lowered; manual jump required)
          throw new Error("unresolved GOTO skip_prop_cut"); // fallback: would break linear control flow
        }
      }
      TIMERB = 0;
      Text.PrintNow("BUYP3", 8000, 1); //Stand inside the pickup then press L1 to purchase that property.
      while (!(TIMERB > 8000)) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
          // SCM GOTO → skip_prop_cut (not lowered; manual jump required)
          throw new Error("unresolved GOTO skip_prop_cut"); // fallback: would break linear control flow
        }
      }
      // SCM label skip_prop_cut
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      if ($.flag_player_in_mall == 1) {
        Streaming.SetAreaVisible(4 /* VIS_MALL */);
      }
      World.SetCarDensityMultiplier(1.0);
      World.SetPedDensityMultiplier(1.0);
      const _res432 = $.player1.getCoordinates();
$.player_x = _res432.x;
$.player_y = _res432.y;
$.player_z = _res432.z;
      Streaming.LoadScene($.player_x, $.player_y, $.player_z);
      Camera.SetBehindPlayer();
      Camera.RestoreJumpcut();
      $.player1.setControl(true /* ON */);
      Hud.SwitchWidescreen(false /* OFF */);
      Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
      Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
      Camera.DoFade(1000, 1 /* FADE_IN */);
      $.player1.clearWantedLevel();
      // ******************************************END OF CUTSCENE********************************
      // SCM GOTO → mission_passed_protec1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_passed_protec1"); // fallback: would break linear control flow
    }


  }
}


// Mission failed

async function mission_failed_protec1() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}




// mission passed

async function mission_passed_protec1() {


  Text.ClearPrints();
  Text.PrintWithNumberBig("M_PASS", 2000, 5000, 1); //"Mission Passed!"
  //START_NEW_SCRIPT cloth7

  Audio.PlayMissionPassedTune(1);
  $.player1.addScore(2000);
  Stat.PlayerMadeProgress(1);
  Stat.RegisterMissionPassed("BUD_1");
  $.protect_contact_blip.remove();
  $.protect_contact_blip = Blip.AddSpriteForContactPoint(-397.4, -561.3, 18.7, 29 /* RADAR_SPRITE_TOMMY */);
  // START_NEW_SCRIPT protect_mission2_loop 
  $.laser_in_stock = 1;
  $.flag_protect_mission1_passed = 1;
}




// mission cleanup

async function mission_cleanup_protec1() {
  ONMISSION = 0;
  $.player1.setAutoAim(true /* TRUE */);
  $.weapon_shop2_blip.remove();
  $.hardware_shop2.remove();
  $.weapon_shop2_blip = Blip.AddShortRangeSpriteForCoord(364.8, 1051.5, 21.0, 16 /* RADAR_SPRITE_GUN */);
  $.hardware_shop2 = Blip.AddShortRangeSpriteForCoord(364.8, 1086.5, 21.0, 18 /* RADAR_SPRITE_HARDWARE */);
  $.glass1_blip.remove();
  $.glass2_blip.remove();
  $.glass3_blip.remove();
  $.glass4_blip.remove();
  $.glass5_blip.remove();
  $.glass6_blip.remove();
  $.glass7_blip.remove();
  $.glass8_blip.remove();
  $.glass9_blip.remove();
  $.glass10_blip.remove();
  $.glass11_blip.remove();
  $.glass12_blip.remove();
  $.glass13_blip.remove();
  $.glass14_blip.remove();
  $.glass15_blip.remove();
  $.glass16_blip.remove();
  $.glass17_blip.remove();
  $.glass18_blip.remove();
  $.glass19_blip.remove();
  $.glass20_blip.remove();
  $.glass21_blip.remove();
  $.glass22_blip.remove();
  $.glass23_blip.remove();
  $.glass24_blip.remove();
  $.glass25_blip.remove();



  if (!($.ram_raid_gun.hasBeenCollected())) {
    $.ram_raid_gun.remove();
  }
  Streaming.MarkModelAsNoLongerNeeded(stinger);
  $.player1.setControl(true /* on */);
  Hud.ClearTimer($.$id.ram_time);
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}

export async function prot1() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************Protection 1************************************
  // *****************************************Shakedown****************************************
  // *****************************************************************************************
  // *****************************************************************************************

  // SCRIPT_NAME protec1
  // Mission start stuff

  await mission_start_protec1();  // SCM GOSUB mission_start_protec1
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_failed_protec1();  // SCM GOSUB mission_failed_protec1
  }
  await mission_cleanup_protec1();  // SCM GOSUB mission_cleanup_protec1
  // MissionBoundary

  // Variables for mission
  //people, cars and objects

  // VAR_INT free_stinger
  // VAR_INT ram_raid_gun

  //blips

  // VAR_INT glass1_blip
  // VAR_INT glass2_blip
  // VAR_INT glass3_blip
  // VAR_INT glass4_blip
  // VAR_INT glass5_blip
  // VAR_INT glass6_blip
  // VAR_INT glass7_blip
  // VAR_INT glass8_blip
  // VAR_INT glass9_blip
  // VAR_INT glass10_blip
  // VAR_INT glass11_blip
  // VAR_INT glass12_blip
  // VAR_INT glass13_blip
  // VAR_INT glass14_blip
  // VAR_INT glass15_blip
  // VAR_INT glass16_blip
  // VAR_INT glass17_blip
  // VAR_INT glass18_blip
  // VAR_INT glass19_blip
  // VAR_INT glass20_blip
  // VAR_INT glass21_blip
  // VAR_INT glass22_blip
  // VAR_INT glass23_blip
  // VAR_INT glass24_blip
  // VAR_INT glass25_blip


  //flags

  // VAR_INT ram_raid_goals
  // VAR_INT ram_time
  // VAR_INT all_shops_rammed
  // VAR_INT shop1_rammed
  // VAR_INT shop2_rammed
  // VAR_INT shop3_rammed
  // VAR_INT shop4_rammed
  // VAR_INT shop5_rammed
  // VAR_INT glass1_smashed
  // VAR_INT glass2_smashed
  // VAR_INT glass3_smashed
  // VAR_INT glass4_smashed
  // VAR_INT glass5_smashed
  // VAR_INT glass6_smashed
  // VAR_INT glass7_smashed
  // VAR_INT glass8_smashed
  // VAR_INT glass9_smashed
  // VAR_INT glass10_smashed
  // VAR_INT glass11_smashed
  // VAR_INT glass12_smashed
  // VAR_INT glass13_smashed
  // VAR_INT glass14_smashed
  // VAR_INT glass15_smashed
  // VAR_INT glass16_smashed
  // VAR_INT glass17_smashed
  // VAR_INT glass18_smashed
  // VAR_INT glass19_smashed
  // VAR_INT glass20_smashed
  // VAR_INT glass21_smashed
  // VAR_INT glass22_smashed
  // VAR_INT glass23_smashed
  // VAR_INT glass24_smashed
  // VAR_INT glass25_smashed
  // VAR_INT prot1_print_flag
  // VAR_INT star1
  // VAR_INT star2
  // VAR_INT star3
  // VAR_INT star4
  // VAR_INT star5




  // ****************************************Mission Start************************************

}
