// Generated from main/rock1.sc

import { $ } from "../utils/vars.mts";

async function mission_start_rock1() {


  Stat.RegisterMissionGiven();


  ONMISSION = 1;

  // Mercedes


  $.flag_merc_in_group_rock1 = 0;


  $.flag_merc_dead_rock1 = 0;

  // dealer1


  $.flag_dealer1_dead_rock1 = 0;


  $.deal_local_x_rock1 = -513.988;


  $.deal_local_y_rock1 = 1133.143;


  $.deal_local_z_rock1 = 10.08;


  $.flag_had_horn_mess_rock1 = 0;


  $.flag_done_cutscene_rock1 = 0;


  $.flag_dealer1_created_rock1 = 0;


  $.flag_dealer1_in_car_rock1 = 0;

  // Drug1


  $.flag_drug1_collected_rock1 = 0;


  $.drug1_x_rock1 = 0.0;


  $.drug1_y_rock1 = 0.0;


  $.drug1_z_rock1 = 0.0;


  $.flag_drug1_created_rock1 = 0;

  // General


  $.counter_number_drugs_collected = 0;

  //this timer is used for the final drive back to the studio

  $.timer_rock1 = 91000;


  $.flag_had_car_message_rock1 = 0;


  $.flag_had_car2_message_rock1 = 0;


  $.player_in_correct_vehicle_rock1 = 0;

  // Dealer car stuff


  $.flag_dealer_car_rock1 = 0;


  $.flag_dealer_foot_rock1 = 0;


  $.dealer_doing_stuff_rock1 = 0;


  await asyncWait(0);


  Text.LoadMissionText("ROCK1");


  Shortcut.SetDropoffPointForMission(-860.688, 1169.914, 9.997, 185.460);



  // ****************************************START OF CUTSCENE********************************


  Streaming.LoadSpecialCharacter(1, "CSdick");
  Streaming.LoadSpecialCharacter(2, "CSjezz");
  Streaming.LoadSpecialCharacter(3, "CSkent");
  Streaming.LoadSpecialCharacter(4, "CSpercy");
  Streaming.LoadSpecialCharacter(5, "CSplay");


  Streaming.SetAreaVisible(9 /* VIS_STUDIO */);


  Streaming.LoadScene(-879.75, 1157.77, 17.81);


  World.SetExtraColors(17, false /* FALSE */);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5))) {
    await asyncWait(0);


  }


  Cutscene.Load("rok_1");


  Cutscene.SetOffset(-879.823, 1158.479, 16.776);


  Camera.SetNearClip(0.1);


  $.cs_dick = CutsceneObject.Create(SPECIAL01);
  $.cs_dick.setAnim("CSdick");


  $.cs_jezz = CutsceneObject.Create(SPECIAL02);
  $.cs_jezz.setAnim("CSjezz");


  $.cs_kent = CutsceneObject.Create(SPECIAL03);
  $.cs_kent.setAnim("CSkent");


  $.cs_percy = CutsceneObject.Create(SPECIAL04);
  $.cs_percy.setAnim("CSpercy");


  $.cs_player = CutsceneObject.Create(SPECIAL05);
  $.cs_player.setAnim("CSplay");


  World.ClearArea(-871.90, 1159.46, 10.07, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-871.90, 1159.46, 10.07);
  $.player1.setHeading(270.0);


  Camera.DoFade(2000, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 1056) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_A", 10000, 1); //"AlllllllRrrrighttt!


  while ($.cs_time < 5224) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_B", 10000, 1); //"Brilliant, bloody brilliant!


  while ($.cs_time < 7304) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_C", 10000, 1); //"Heeey, Tommy! Glad you could make it.


  while ($.cs_time < 9427) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_D", 10000, 1); //"Hey, you ever met Love Fist before?


  while ($.cs_time < 11052) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_E", 10000, 1); //"No, I haven't, but I've always loved your music.


  while ($.cs_time < 12782) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_F", 10000, 1); //"Let me introduce you to the band.


  while ($.cs_time < 14396) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_G", 10000, 1); //"This is P, Percy, dick, and Willy, and that was Jezz in the both earlier,


  while ($.cs_time < 18961) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_H", 10000, 1); //"and guys, I want you to meet a good friend of mine.


  while ($.cs_time < 21292) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_I", 10000, 1); //"This is Tommy. We go way back.


  while ($.cs_time < 22918) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_J", 10000, 1); //"Alright, pal.


  while ($.cs_time < 24055) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_K", 10000, 1); //"And eh, what was your name again?


  while ($.cs_time < 26610) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_L", 10000, 1); //"Leave it out Jezz You remember,


  while ($.cs_time < 28351) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_M", 10000, 1); //"don't be playing those games wiht me mate,


  while ($.cs_time < 29855) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_N", 10000, 1); //"I'm too crafty for that, sunshine!


  while ($.cs_time < 34583) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_O", 10000, 1); //"You see, the thing is, Tommy, the boys need some help.


  while ($.cs_time < 38289) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_P", 10000, 1); //"They ain't too connected here, don't have the old how's your father.


  while ($.cs_time < 41099) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_Q", 10000, 1); //"We need some drugs, pal!


  while ($.cs_time < 43119) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_R", 10000, 1); //"Gonna get on the old Love Fist fury, you know?!


  while ($.cs_time < 46114) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_S", 10000, 1); //"Well, this is Vice City man. What's the problem?


  while ($.cs_time < 48332) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_U", 10000, 1); //"Love Juice, man!


  while ($.cs_time < 49782) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_T", 10000, 1); //"We need Love Juice man, ken?

  //WHILE cs_time < 50936
  //	WAIT 0
  //	GET_CUTSCENE_TIME cs_time
  //ENDWHILE

  //PRINT_NOW ( RBM1_U ) 10000 1 //"Love Juice, man!


  while ($.cs_time < 52122) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_V", 10000, 1); //"Love Juice?


  while ($.cs_time < 53173) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_W", 10000, 1); //"Aye, two parts boomshine, 1 part trumpet, 5 fizz bombs and a litre of petrol.


  while ($.cs_time < 58523) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_X", 10000, 1); //"Can you help us out pal?


  while ($.cs_time < 59953) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_Y", 10000, 1); //"Aw, it would really mean a lot to the boys.


  while ($.cs_time < 61300) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("RBM1_Z", 10000, 1); //"You can do that for the boys, right?


  while ($.cs_time < 62839) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);


  }


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);


  World.ClearExtraColors(false /* FALSE */);


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.UnloadSpecialCharacter(5);


  Streaming.LoadScene(-871.90, 1159.46, 10.07);


  $.player1.setMood(3 /* PLAYER_MOOD_WISECRACKING */, 60000);

  // ****************************************END OF CUTSCENE**********************************

  // Waiting for the ped models to load


  Streaming.RequestModel(BMYBB);


  Streaming.RequestModel(BUDDYSHOT);


  Streaming.RequestModel(STINGER);


  Streaming.RequestModel(PCJ600);


  Streaming.LoadSpecialCharacter(6, "igmerc");


  Streaming.RequestModel(cellphone);


  while (!(Streaming.HasModelLoaded(BUDDYSHOT)) || !(Streaming.HasModelLoaded(STINGER)) || !(Streaming.HasModelLoaded(PCJ600)) || !(Streaming.HasSpecialCharacterLoaded(6)) || !(Streaming.HasModelLoaded(cellphone)) || !(Streaming.HasModelLoaded(BMYBB))) {
    await asyncWait(0);


  }

  // this stuff has to be here cos of daft compiler


  $.radar_blip_studio_rock1 = Blip.AddForCoord(-867.8, 1165.7, 10.2);
  $.radar_blip_studio_rock1.remove();


  $.drug1_rock1 = Pickup.Create(briefcase, 3 /* PICKUP_ONCE */, $.drug1_x_rock1, $.drug1_y_rock1, $.drug1_z_rock1);


  $.radar_blip_drug1_rock1 = Blip.AddForPickup($.drug1_rock1);


  $.radar_blip_drug1_rock1.remove();


  $.drug1_rock1.remove();


  $.dealer1_rock1 = Char.Create(4 /* PEDTYPE_CIVMALE */, BMYBB, 308.24, -621.28, 8.9);
  $.radar_blip_dealer1_rock1 = Blip.AddForChar($.dealer1_rock1);


  $.radar_blip_dealer1_rock1.remove();
  $.dealer1_rock1.delete();


  // end of daft compiler stuff

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  Text.PrintNow("RBM1_12", 4000, 1); //"Go and collect the ingredients for "Love juice from the dealer."


  $.radar_blip_deal_rock1 = Blip.AddForCoord($.deal_local_x_rock1, $.deal_local_y_rock1, $.deal_local_z_rock1);

  // ********************** Waiting for the player to collect all the drugs ******************


  while (!($.counter_number_drugs_collected == 1)) {
    await asyncWait(0);

    // Creates dealer1

    if ($.flag_dealer1_created_rock1 == 0) {
      if ($.flag_done_cutscene_rock1 == 0) {
        if ($.player1.locateAnyMeans3D($.deal_local_x_rock1, $.deal_local_y_rock1, $.deal_local_z_rock1, 2.0, 2.0, 2.0, false /* FALSE */)) {
          if ($.player1.isInFlyingVehicle() || $.player1.isInAnyBoat()) {
            if ($.flag_had_car_message_rock1 == 0) {
              Text.PrintNow("RBM1_14", 5000, 1); //"You need a car!
              $.flag_had_car_message_rock1 = 1;
            }


          }
          else {
            if ($.player1.locateStoppedOnFoot3D($.deal_local_x_rock1, $.deal_local_y_rock1, $.deal_local_z_rock1, 2.0, 2.0, 2.0, false /* FALSE */)) {
              if ($.flag_had_car_message_rock1 == 0) {
                Text.PrintNow("RBM1_14", 5000, 1); //"You need a car!
                $.flag_had_car_message_rock1 = 1;
              }


            }


          }


        }
        else {
          $.flag_had_car_message_rock1 = 0;
        }


        if ($.player1.locateStoppedInCar3D($.deal_local_x_rock1, $.deal_local_y_rock1, $.deal_local_z_rock1, 2.0, 2.0, 2.0, true /* TRUE */) && !($.player1.isInFlyingVehicle()) && !($.player1.isInAnyBoat())) {
          if ($.flag_had_horn_mess_rock1 == 0) {
            Text.PrintNow("HORN", 5000, 1); //"Press the horn!"
            $.flag_had_horn_mess_rock1 = 1;
          }
          if ($.player1.isSittingInAnyCar() && $.player1.isPressingHorn()) {
            $.cutcar_rock1 = $.player1.storeCarIsIn();
            if (!(Car.IsDead($.cutcar_rock1))) {
              $.cutcar_rock1.lockDoors(4 /* CARLOCK_LOCKED_PLAYER_INSIDE */);
            }
            $.player1.setControl(false /* OFF */);
            Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
            Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
            await asyncWait(500);
            await dealer_cutscene();  // SCM GOSUB dealer_cutscene
          }


        }
        else {
          $.flag_had_horn_mess_rock1 = 0;
        }


      }


    }

    // Drug1 collection

    if ($.flag_drug1_created_rock1 == 1) {
      if ($.flag_drug1_collected_rock1 == 0) {
        await drug1_collection_rock1();  // SCM GOSUB drug1_collection_rock1
      }


    }

    // DEALER 1 STUFF

    if ($.flag_dealer1_created_rock1 == 1) {
      if ($.flag_dealer1_dead_rock1 == 0) {
        if (Char.IsDead($.dealer1_rock1)) {
          $.radar_blip_dealer1_rock1.remove();
          if ($.flag_done_cutscene_rock1 == 0) {
            Text.PrintNow("RBM1_10", 5000, 1); //"You idiot we have lost the mercandise!"
            // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
          }
          else {
            if ($.dealer1_rock1.hasBeenDamagedByWeapon(15 /* WEAPONTYPE_MOLOTOV */) || $.dealer1_rock1.hasBeenDamagedByWeapon(31 /* WEAPONTYPE_FLAMETHROWER */) || $.dealer1_rock1.hasBeenDamagedByWeapon(41 /* WEAPONTYPE_EXPLOSION */)) {
              Text.PrintNow("RBM1_10", 5000, 1); //"You idiot we have lost the mercandise!"
              // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
            }
            else {
              if (Char.DoesExist($.dealer1_rock1)) {
                const _res460 = World.GetDeadCharPickupCoords($.dealer1_rock1);
$.drug1_x_rock1 = _res460.x;
$.drug1_y_rock1 = _res460.y;
$.drug1_z_rock1 = _res460.z;
                $.drug1_rock1 = Pickup.Create(briefcase, 3 /* PICKUP_ONCE */, $.drug1_x_rock1, $.drug1_y_rock1, $.drug1_z_rock1);
                $.radar_blip_drug1_rock1 = Blip.AddForPickup($.drug1_rock1);
                $.flag_drug1_created_rock1 = 1;
              }
              else {
                Text.PrintNow("RBM1_10", 5000, 1); //"You idiot we have lost the mercandise!"
                // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
              }


            }


          }
          $.flag_dealer1_dead_rock1 = 1;


        }
        else {
          if ($.flag_drug1_created_rock1 == 0) {
            if ($.dealer1_rock1.isInWater()) {
              Text.PrintNow("RBM1_10", 5000, 1); //"You idiot we have lost the mercandise!"
              // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
            }


          }
          if (!(Char.IsDead($.dealer1_rock1))) {
            if ($.flag_done_cutscene_rock1 == 1) {
              if (!($.dealer1_rock1.isOnScreen())) {
                if (!($.player1.locateAnyMeansChar3D($.dealer1_rock1, 180.0, 180.0, 180.0, false /* FALSE */))) {
                  $.radar_blip_dealer1_rock1.remove();
                  Text.PrintNow("RBM1_15", 5000, 1); //"You idiot you have lost the dealer, the cash and drugs!"
                  // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
                }


              }
              if ($.dealer_doing_stuff_rock1 == 0) {
                if (!($.dealer1_rock1.isInAnyCar())) {
                  if ($.dealer1_rock1.isOnScreen()) {
                    $.dealer1_rock1.setObjKillPlayerAnyMeans($.player1);
                    $.dealer_doing_stuff_rock1 = 1;
                  }


                }


              }
              if ($.flag_dealer1_in_car_rock1 == 0) {
                if ($.dealer1_rock1.isInAnyCar()) {
                  $.dealer1_rock1.setObjNoObj();
                  $.car3_rock1 = $.dealer1_rock1.storeCarIsIn();
                  $.car3_rock1.addUpsidedownCheck();
                  StuckCarCheck.Add($.car3_rock1, 0.1, 2000);
                  $.car3_rock1.setCruiseSpeed(40.0);
                  $.car3_rock1.setDrivingStyle(2);
                  $.car3_rock1.wanderRandomly();
                  $.dealer_doing_stuff_rock1 = 0;
                  $.flag_dealer1_in_car_rock1 = 1;
                }


              }
              if ($.flag_dealer1_in_car_rock1 == 1) {
                if (!(Car.IsDead($.car3_rock1))) {
                  if ($.car3_rock1.isStuckOnRoof() || StuckCarCheck.IsCarStuck($.car3_rock1) || $.car3_rock1.isOnFire()) {
                    $.dealer1_rock1.setObjLeaveCar($.car3_rock1);
                    $.dealer_doing_stuff_rock1 = 0;
                  }


                }


              }
              if ($.flag_dealer1_in_car_rock1 == 1) {
                if (!($.dealer1_rock1.isInAnyCar())) {
                  $.car3_rock1.removeUpsidedownCheck();
                  StuckCarCheck.Remove($.car3_rock1);
                  $.car3_rock1.markAsNoLongerNeeded();
                  $.dealer_doing_stuff_rock1 = 0;
                  $.flag_dealer1_in_car_rock1 = 0;
                }


              }


            }


          }


        }


      }


    }


  }

  // ********************************** KENT PAUL PHONE CALL *********************************


  $.car3_rock1.markAsNoLongerNeeded();
  $.dealer1_rock1.markAsNoLongerNeeded();


  TIMERA = 0;


  Audio.LoadMissionAudio(1, "mobring" as any);
  Audio.LoadMissionAudio(2, "mob_07a" as any); // Hey mate, the guys could do with some company, if you know what I mean..


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);


  }


  while (TIMERA < 3000) {
    await asyncWait(0);


  }


  Audio.PlayMissionAudio(1);


  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);


  }


  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);


  if ($.scplayer.isOnFoot()) {
    $.scplayer.setAnsweringMobile(true /* TRUE */);
    await asyncWait(1250);
  }


  Audio.LoadMissionAudio(1, "mob_07b" as any); // I know just the girl


  Audio.PlayMissionAudio(2);
  Text.PrintNow("MOB_07A", 10000, 1); //"Hey mate, the guys could do with some company, if you know what I mean.."


  while (!(Audio.HasMissionAudioFinished(2))) {
    await asyncWait(0);


  }


  Text.ClearThisPrint("MOB_07A");


  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);


  }


  Audio.PlayMissionAudio(1);
  Text.PrintNow("MOB_07B", 5000, 1); //"I know just the girl


  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);


  }


  Text.ClearThisPrint("MOB_07B");


  if ($.scplayer.isOnFoot()) {
    $.scplayer.setAnsweringMobile(false /* FALSE */);
  }


  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);

  // ********************************* Player is sent to get Mercecdes ***********************


  Text.PrintNow("RBM1_1", 5000, 1); //"Go and collect Mercedes from the strip club!"


  $.mercedes_rock1 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, SPECIAL06, 297.849, 289.728, 16.64);
  $.mercedes_rock1.clearThreatSearch();
  $.mercedes_rock1.setHeading(270.0);
  $.mercedes_rock1.setAnimGroup(46 /* ANIM_SEXY_WOMANPED */);
  $.mercedes_rock1.setSuffersCriticalHits(false /* FALSE */);
  $.mercedes_rock1.setAsPlayerFriend($.player1, true /* TRUE */);
  $.mercedes_rock1.setNeverTargeted(true /* TRUE */);


  $.radar_blip_coord2_rock1 = Blip.AddForCoord(304.747, 291.581, 15.238);


  $.blob_flag = 1;


  while (!($.player1.locateStoppedInCar3D(304.747, 291.581, 15.238, 3.0, 3.0, 4.0, $.blob_flag)) || !($.player1.isSittingInAnyCar()) || $.player_in_correct_vehicle_rock1 == 0) {
    await asyncWait(0);
    if (Char.IsDead($.mercedes_rock1)) {
      Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
      $.flag_merc_dead_rock1 = 1;
      $.blob_flag = 0;
      // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
    }


    if ($.player1.isInAnyBoat() || $.player1.isInModel(HUNTER)) {
      $.player_in_correct_vehicle_rock1 = 0;
    }
    else {
      $.player_in_correct_vehicle_rock1 = 1;
    }
    if ($.player1.locateAnyMeans3D(304.747, 291.581, 15.238, 3.0, 3.0, 4.0, false /* FALSE */)) {
      if ($.player1.isInAnyBoat() || $.player1.isInModel(HUNTER)) {
        if ($.flag_had_car2_message_rock1 == 0) {
          Text.PrintNow("RBM1_14", 5000, 1); //"You need a car!
          $.flag_had_car2_message_rock1 = 1;
        }


      }
      else {
        if ($.player1.locateOnFoot3D(304.747, 291.581, 15.238, 3.0, 3.0, 4.0, false /* FALSE */)) {
          if ($.flag_had_car2_message_rock1 == 0) {
            Text.PrintNow("RBM1_14", 5000, 1); //"You need a car!
            $.flag_had_car2_message_rock1 = 1;
          }


        }


      }


    }
    else {
      $.flag_had_car2_message_rock1 = 0;
    }


  }


  $.radar_blip_coord2_rock1.remove();

  // mini cut scene with Mercedes


  Hud.SwitchWidescreen(true /* ON */);


  $.player1.setControl(false /* OFF */);


  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);


  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);


  $.car_rock1 = $.player1.storeCarIsIn();


  $.scplayer.setCantBeDraggedOut(true /* TRUE */);


  World.ClearArea(297.020, 299.427, 17.47, 1.0, false /* FALSE */);


  Camera.SetFixedPosition(297.020, 299.427, 17.47, 0.0, 0.0, 0.0);


  Camera.PointAtPoint(297.473, 298.532, 17.43, 2 /* JUMP_CUT */);


  if (Car.IsDead($.car_rock1)) {
    // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
  }
  else {
    if (!(Char.IsDead($.mercedes_rock1))) {
      $.mercedes_rock1.setObjEnterCarAsPassenger($.car_rock1);
    }
    else {
      Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
      $.flag_merc_dead_rock1 = 1;
      // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
    }


  }

  // Waiting for Mercedes to get into the car


  Audio.LoadMissionAudio(1, "ROK1_5" as any); // Hey Mercedes!


  Audio.LoadMissionAudio(2, "ROK1_6" as any); //Hiya, Tommy. And how are you?"


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
    if (Char.IsDead($.mercedes_rock1)) {
      Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
      $.flag_merc_dead_rock1 = 1;
      // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_rock1)) {
      if (Char.IsDead($.mercedes_rock1)) {
        Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
        $.flag_merc_dead_rock1 = 1;
        // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
      }
      else {
        // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
      }


    }


  }


  Audio.PlayMissionAudio(1);
  Text.PrintNow("ROK1_5", 5000, 1); //"Hey Mercedes!"


  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
    if (Char.IsDead($.mercedes_rock1)) {
      Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
      $.flag_merc_dead_rock1 = 1;
      // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_rock1)) {
      if (Char.IsDead($.mercedes_rock1)) {
        Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
        $.flag_merc_dead_rock1 = 1;
        // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
      }
      else {
        // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
      }


    }


  }


  Text.ClearThisPrint("ROK1_5");
  Audio.LoadMissionAudio(1, "ROK1_7" as any); //Just fine. Listen, you fancy having Love Fist?"


  Audio.PlayMissionAudio(2); // Hiya, Tommy. And how are you?
  Text.PrintNow("ROK1_6", 5000, 1); //"Hiya, Tommy. And how are you?


  while (!(Audio.HasMissionAudioFinished(2)) || !(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
    if (Char.IsDead($.mercedes_rock1)) {
      Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
      $.flag_merc_dead_rock1 = 1;
      // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_rock1)) {
      if (Char.IsDead($.mercedes_rock1)) {
        Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
        $.flag_merc_dead_rock1 = 1;
        // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
      }
      else {
        // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
      }


    }


  }


  Text.ClearThisPrint("ROK1_6");
  Audio.LoadMissionAudio(2, "ROK1_8" as any); //Ok, but just as a favour I expect returned


  Audio.PlayMissionAudio(1);
  Text.PrintNow("ROK1_7", 5000, 1); //"Just fine. Listen, you fancy having Love Fist? )


  while (!(Audio.HasMissionAudioFinished(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
    if (Char.IsDead($.mercedes_rock1)) {
      Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
      $.flag_merc_dead_rock1 = 1;
      // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_rock1)) {
      if (Char.IsDead($.mercedes_rock1)) {
        Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
        $.flag_merc_dead_rock1 = 1;
        // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
      }
      else {
        // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
      }


    }


  }


  Text.ClearThisPrint("ROK1_7");
  Audio.PlayMissionAudio(2);
  Text.PrintNow("ROK1_8", 5000, 1); //"Ok, but just as a favour I expect returned


  while (!(Audio.HasMissionAudioFinished(2))) {
    await asyncWait(0);
    if (Char.IsDead($.mercedes_rock1)) {
      Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
      $.flag_merc_dead_rock1 = 1;
      // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_rock1)) {
      if (Char.IsDead($.mercedes_rock1)) {
        Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
        $.flag_merc_dead_rock1 = 1;
        // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
      }
      else {
        // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
      }


    }


  }


  Text.ClearThisPrint("ROK1_8");


  while (!($.mercedes_rock1.isInCar($.car_rock1))) {
    await asyncWait(0);
    if (Char.IsDead($.mercedes_rock1)) {
      Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
      $.flag_merc_dead_rock1 = 1;
      // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_rock1)) {
      if (Char.IsDead($.mercedes_rock1)) {
        Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
        $.flag_merc_dead_rock1 = 1;
        // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
      }
      else {
        // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
      }


    }


  }


  if (!(Char.IsDead($.mercedes_rock1))) {
    $.mercedes_rock1.followPlayer($.player1);
    $.mercedes_rock1.setRunning(true /* TRUE */);
  }
  else {
    Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
    $.flag_merc_dead_rock1 = 1;
    // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
  }


  $.flag_merc_in_group_rock1 = 1;


  Hud.SwitchWidescreen(false /* OFF */);


  $.scplayer.setCantBeDraggedOut(false /* FALSE */);


  Camera.RestoreJumpcut();


  $.player1.setControl(true /* ON */);


  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);


  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);


  Text.PrintNow("RBM1_13", 7000, 1); //"Get the love juice before the band are needed on stage"


  $.radar_blip_studio_rock1 = Blip.AddForCoord(-867.8, 1165.7, 10.2);


  Hud.DisplayTimer($.$id.timer_rock1, 1 /* TIMER_DOWN */);


  $.blob_flag = 1;

  // Waiting for the player1 to deliver all the drugs


  while (!($.mercedes_rock1.locateStoppedAnyMeans3D(-867.8, 1165.7, 10.2, 4.0, 4.0, 4.0, $.blob_flag))) {
    await asyncWait(0);
    if ($.flag_merc_dead_rock1 == 0) {
      if (Char.IsDead($.mercedes_rock1)) {
        Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
        $.flag_merc_dead_rock1 = 1;
        // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
      }
      else {
        if ($.flag_merc_in_group_rock1 == 1) {
          if (!($.mercedes_rock1.isInPlayersGroup($.player1))) {
            $.radar_blip_studio_rock1.remove();
            $.radar_blip_merc_rock1 = Blip.AddForChar($.mercedes_rock1);
            Text.PrintNow("HEY", 5000, 1); //"Don't leave her behind!"
            $.blob_flag = 0;
            $.flag_merc_in_group_rock1 = 0;
          }


        }
        if ($.flag_merc_in_group_rock1 == 0) {
          if ($.player1.locateAnyMeansChar2D($.mercedes_rock1, 8.0, 8.0, false /* FALSE */)) {
            $.radar_blip_merc_rock1.remove();
            Text.PrintNow("RBM1_13", 7000, 1); //"Get the love juice before the band are needed on stage"
            $.mercedes_rock1.followPlayer($.player1);
            $.radar_blip_studio_rock1 = Blip.AddForCoord(-867.8, 1165.7, 10.2);
            $.blob_flag = 1;
            $.flag_merc_in_group_rock1 = 1;
          }


        }


      }


    }
    if ($.timer_rock1 == 0) {
      Text.PrintNow("RBM1_7", 5000, 1); //"You did not get the drugs in time!"
      // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
    }


  }
}


// Everybody is at the club


async function end_cut_rock1() {


  Hud.ClearTimer($.$id.timer_rock1);
  $.radar_blip_studio_rock1.remove();


  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);


  if (Char.IsDead($.mercedes_rock1)) {
    Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
    // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
  }
  else {
    $.mercedes_rock1.leaveGroup();
    $.mercedes_rock1.setAnimGroup(46 /* ANIM_SEXY_WOMANPED */);
  }


  Camera.SetFixedPosition(-874.13, 1153.04, 14.37, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-873.68, 1153.89, 14.10, 2 /* JUMP_CUT */);


  Audio.LoadMissionAudio(1, "merc_39" as any);


  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
    if (Char.IsDead($.mercedes_rock1)) {
      Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
      // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
    }


  }


  if (!(Char.IsDead($.mercedes_rock1))) {
    if (!($.mercedes_rock1.isInAnyCar())) {
      $.mercedes_rock1.turnToFacePlayer($.player1);
    }


  }
  else {
    Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
    // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
  }


  Audio.PlayMissionAudio(1);
  Text.PrintNow("MERC_39", 5000, 1); //"I'll see you later, big boy."


  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
    if (Char.IsDead($.mercedes_rock1)) {
      Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
      // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
    }


  }


  Text.ClearThisPrint("MERC_39");


  if ($.mercedes_rock1.isInAnyCar()) {
    $.cutcar2_rock1 = $.mercedes_rock1.storeCarIsIn();
    $.mercedes_rock1.setObjLeaveCar($.cutcar2_rock1);
    while ($.mercedes_rock1.isInAnyCar()) {
      await asyncWait(0);
      if (Char.IsDead($.mercedes_rock1)) {
        Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
        // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
      }
      if (Car.IsDead($.cutcar2_rock1)) {
        if (Char.IsDead($.mercedes_rock1)) {
          Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
          // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
        }


      }


    }


  }


  $.mercedes_rock1.setObjGotoCoordOnFoot(-873.33, 1161.28);


  TIMERA = 0;


  while (TIMERA < 3000) {
    await asyncWait(0);
    if (Char.IsDead($.mercedes_rock1)) {
      Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
      // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
    }


  }


  World.ClearArea(-872.90, 1153.53, 11.72, 1.0, false /* FALSE */);
  Camera.SetFixedPosition(-872.90, 1153.53, 11.72, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-873.31, 1154.47, 11.48, 2 /* JUMP_CUT */);


  if (!(Char.IsDead($.mercedes_rock1))) {
    $.mercedes_rock1.setIdle();
    $.mercedes_rock1.setCoordinates(-872.40, 1159.86, 10.09);
    $.mercedes_rock1.setObjNoObj();
  }
  else {
    Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
    // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
  }


  $.mercedes_rock1.setObjGotoCoordOnFoot(-883.26, 1159.30);


  TIMERB = 0;


  while (TIMERB < 2500) {
    await asyncWait(0);
    if (Char.IsDead($.mercedes_rock1)) {
      Text.PrintNow("RBM1_8", 5000, 1); //"You idiot Mercedes is dead!"
      // SCM GOTO → mission_rock1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rock1_failed"); // fallback: would break linear control flow
    }


  }


  Hud.SwitchWidescreen(false /* OFF */);
  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  Camera.RestoreJumpcut();
  $.mercedes_rock1.delete();


  // SCM GOTO → mission_rock1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_rock1_passed"); // fallback: would break linear control flow
}



// ****************************************** Mission Failed *******************************


async function mission_rock1_failed() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}





// *************************************** Mission Passed **********************************


async function mission_rock1_passed() {


  $.flag_rock_mission1_passed = 1;
  Stat.RegisterMissionPassed("ROCK_1");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  Text.PrintWithNumberBig("M_PASS", 2000, 5000, 1); //"Mission Passed!"
  $.player1.addScore(2000);
  // START_NEW_SCRIPT rock_mission2_loop 
}




// *************************************** Mission Cleanup *********************************


async function mission_cleanup_rock1() {


  ONMISSION = 0;


  World.SetCarDensityMultiplier(1.0);


  if (!(Car.IsDead($.car3_rock1))) {
    $.car3_rock1.removeUpsidedownCheck();
    StuckCarCheck.Remove($.car3_rock1);
  }


  if (!(Char.IsDead($.mercedes_rock1))) {
    $.mercedes_rock1.removeElegantly();
  }


  if ($.player1.isPlaying()) {
    if (!($.player1.isInAnyCar())) {
      $.scplayer.setAnsweringMobile(false /* FALSE */);
    }


  }


  $.radar_blip_merc_rock1.remove();
  $.radar_blip_deal_rock1.remove();
  $.radar_blip_coord2_rock1.remove();
  $.radar_blip_studio_rock1.remove();
  $.radar_blip_drug1_rock1.remove();
  $.radar_blip_dealer1_rock1.remove();
  Hud.ClearTimer($.$id.timer_rock1);
  $.drug1_rock1.remove();
  Streaming.MarkModelAsNoLongerNeeded(BMYBB);
  Streaming.MarkModelAsNoLongerNeeded(BUDDYSHOT);
  Streaming.MarkModelAsNoLongerNeeded(STINGER);
  Streaming.MarkModelAsNoLongerNeeded(PCJ600);
  Streaming.MarkModelAsNoLongerNeeded(cellphone);
  Streaming.UnloadSpecialCharacter(6);
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}


// mini scutscene for the player and dealer1


async function dealer_cutscene() {


  Hud.SwitchWidescreen(true /* ON */);
  $.cutcar_rock1 = $.player1.storeCarIsIn();
  Text.ClearThisPrint("HORN"); // Removes the horn message to stop it being displayed in cutscene
  $.scplayer = $.player1.getChar();
  Hud.FreezeTimer(true /* TRUE */);
  $.radar_blip_deal_rock1.remove();


  Audio.LoadMissionAudio(1, "ROK1_9" as any); // Thanks for the money sucker


  Audio.LoadMissionAudio(2, "ROK1_1a" as any); //Looking for something special? I got what you need!


  while (!(Audio.HasMissionAudioLoaded(2)) || !(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);


  }


  $.player1.setControl(false /* OFF */);
  Camera.SetFixedPosition(-504.261, 1131.601, 14.157, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-505.183, 1131.776, 13.81, 2 /* JUMP_CUT */);



  World.ClearArea(-517.476, 1121.888, 10.05, 1.0, false /* FALSE */);
  $.dealer1_rock1 = Char.Create(4 /* PEDTYPE_CIVMALE */, BMYBB, -517.476, 1121.888, 10.05);



  $.dealer1_rock1.clearThreatSearch();
  $.dealer1_rock1.setOnlyDamagedByPlayer(true /* TRUE */);
  $.dealer1_rock1.setMoney(1000);


  $.flag_dealer1_created_rock1 = 1;
  TIMERA = 0;
  $.dealer1_in_position_rock1 = 1;


  while (!($.dealer1_in_position_rock1 == 8)) {
    await asyncWait(0);
    if ($.flag_dealer1_dead_rock1 == 0) {
      if (Char.IsDead($.dealer1_rock1)) {
        $.flag_dealer1_dead_rock1 = 1;
      }
      else {
        if ($.dealer1_in_position_rock1 == 1) {
          if (!(Car.IsDead($.cutcar_rock1))) {
            const _res461 = $.cutcar_rock1.getOffsetInWorldCoords(-1.7267, 0.1686, -0.0662);
$.dealer1_dest_x_rock1 = _res461.x;
$.dealer1_dest_y_rock1 = _res461.y;
$.dealer1_dest_z_rock1 = _res461.z;
          }
          World.ClearArea($.dealer1_dest_x_rock1, $.dealer1_dest_y_rock1, $.dealer1_dest_z_rock1, 1.0, false /* FALSE */);
          $.dealer1_rock1.setObjRunToCoord($.dealer1_dest_x_rock1, $.dealer1_dest_y_rock1);
          TIMERA = 0;
          $.dealer1_in_position_rock1 = 2;


        }
        if ($.dealer1_in_position_rock1 == 2) {
          if (TIMERA >= 5000) {
            $.dealer1_rock1.setCoordinates($.dealer1_dest_x_rock1, $.dealer1_dest_y_rock1, $.dealer1_dest_z_rock1);
          }
          if ($.dealer1_rock1.locateOnFoot2D($.dealer1_dest_x_rock1, $.dealer1_dest_y_rock1, 0.5, 0.5, false /* FALSE */)) {
            $.dealer1_rock1.turnToFacePlayer($.player1);
            $.dealer1_rock1.setObjNoObj();
            $.dealer1_rock1.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 3000);
            Audio.PlayMissionAudio(2); // Looking for something special? I got what you need!
            Text.PrintNow("ROK1_1A", 3000, 1); //"Looking for something special? I got what you need!
            $.player1.addScore(-500);
            TIMERA = 0;
            $.dealer1_in_position_rock1 = 3;
          }


        }
        if ($.dealer1_in_position_rock1 == 3) {
          if (Audio.HasMissionAudioFinished(2)) {
            Text.ClearThisPrint("ROK1_1A");
            $.dealer1_in_position_rock1 = 4;
          }


        }
        if ($.dealer1_in_position_rock1 == 4) {
          if (TIMERA >= 3000) {
            Audio.PlayMissionAudio(1); // Thanks for the money sucker!
            Text.PrintNow("ROK1_9", 5000, 1); //"Thanks for the money sucker!"
            $.dealer1_rock1.giveWeapon(21 /* WEAPONTYPE_STUBBY_SHOTGUN */, 30000); // Set to infinate ammo

            //IF NOT IS_CAR_DEAD cutcar_rock1
            //SET_CHAR_WAIT_STATE dealer1_rock1 WAITSTATE_PLAYANIM_DUCK 100000
            //	GET_NEAREST_TYRE_TO_POINT cutcar_rock1 dealer1_dest_x_rock1 dealer1_dest_y_rock1 tyre_number_rock1
            //	BURST_CAR_TYRE cutcar_rock1 tyre_number_rock1
            //	timerb = 0
            //ENDIF

            $.dealer1_in_position_rock1 = 5;
          }


        }
        if ($.dealer1_in_position_rock1 == 5) {
          if (!(Char.IsDead($.dealer1_rock1))) {
            World.ClearArea(-523.372, 1117.609, 9.91, 1.0, false /* FALSE */);
            $.bike_rock1 = Car.Create(PCJ600, -523.372, 1117.609, 9.91);
            $.bike_rock1.setHeading(55.96);
            $.dealer1_rock1.setOnlyDamagedByPlayer(false /* FALSE */);
            if (!(Car.IsDead($.bike_rock1))) {
              $.dealer1_rock1.setObjEnterCarAsDriver($.bike_rock1);
              $.flag_dealer_car_rock1 = 1;
            }
            else {
              $.dealer1_rock1.setObjFleePlayerOnFootAlways($.player1);
              $.flag_dealer_foot_rock1 = 1;
            }
            TIMERA = 0;
            $.dealer1_in_position_rock1 = 6;
          }


        }
        if ($.dealer1_in_position_rock1 == 6) {
          if ($.flag_dealer_foot_rock1 == 1) {
            $.dealer1_in_position_rock1 = 8;
          }
          if ($.flag_dealer_car_rock1 == 1) {
            if (TIMERA > 3000) {
              World.ClearArea(-518.031, 1126.795, 11.975, 1.0, false /* FALSE */);
              Camera.SetFixedPosition(-518.031, 1126.795, 11.975, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(-518.735, 1126.094, 11.86, 2 /* JUMP_CUT */);
              if ($.dealer1_rock1.isInAnyCar()) {
                if (!(Car.IsDead($.bike_rock1))) {
                  TIMERB = 0;
                  $.radar_blip_dealer1_rock1 = Blip.AddForChar($.dealer1_rock1);
                  Text.PrintNow("RBM1_17", 5000, 1); //"Kill the dealer and get the drugs!"
                  $.bike_rock1.setDrivingStyle(2);
                  $.bike_rock1.setCruiseSpeed(40.0);
                  $.bike_rock1.wanderRandomly();
                  $.flag_dealer1_in_car_rock1 = 1;
                  $.dealer1_in_position_rock1 = 7;
                }


              }


            }


          }


        }
        if ($.dealer1_in_position_rock1 == 7) {
          if (TIMERB > 1500) {
            $.dealer1_in_position_rock1 = 8;
          }


        }


      }


    }
    if (Audio.HasMissionAudioFinished(1)) {
      Text.ClearThisPrint("ROK1_9"); // Thanks for the money sucker!
    }
    if (Audio.HasMissionAudioFinished(2)) {
      Text.ClearThisPrint("ROK1_1A"); // Thanks for the money sucker!
    }


  }


  if (!(Car.IsDead($.bike_rock1))) {
    $.bike_rock1.setDrivingStyle(2);
    $.bike_rock1.setCruiseSpeed(40.0);
    $.bike_rock1.wanderRandomly();
  }


  if (Audio.HasMissionAudioFinished(1)) {
    Text.ClearThisPrint("ROK1_9"); // Thanks for the money sucker!
  }


  if (Audio.HasMissionAudioFinished(2)) {
    Text.ClearThisPrint("ROK1_1A"); // Thanks for the money sucker!
  }


  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);


  if (!(Car.IsDead($.cutcar_rock1))) {
    $.cutcar_rock1.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }


  World.SetCarDensityMultiplier(0.5);


  Camera.SetBehindPlayer();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Hud.FreezeTimer(false /* FALSE */);
  Camera.RestoreJumpcut();
  $.flag_done_cutscene_rock1 = 1;
}


// Checks to see if the drugs have been picked up

// Drug1 collection


async function drug1_collection_rock1() {


  if ($.flag_drug1_collected_rock1 == 0) {
    if ($.drug1_rock1.hasBeenCollected()) {
      $.radar_blip_drug1_rock1.remove();
      ++$.counter_number_drugs_collected;
      $.flag_drug1_collected_rock1 = 1;
    }


  }
}

export async function rock1() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************s************************************
  // ************************************ Drugs N'Groupies ***********************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // SCRIPT_NAME rockb1

  // Mission start stuff


  await mission_start_rock1();  // SCM GOSUB mission_start_rock1


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_rock1_failed();  // SCM GOSUB mission_rock1_failed
  }


  await mission_cleanup_rock1();  // SCM GOSUB mission_cleanup_rock1


  // MissionBoundary

  // Variables for mission

  // Mercedes


  // VAR_INT mercedes_rock1


  // VAR_INT radar_blip_merc_rock1


  // VAR_INT flag_merc_in_group_rock1


  // VAR_INT flag_merc_dead_rock1


  // VAR_INT radar_blip_coord2_rock1


  // VAR_INT car_rock1

  // Dealer1


  // VAR_INT dealer1_rock1


  // VAR_INT flag_dealer1_dead_rock1


  // VAR_INT radar_blip_dealer1_rock1


  // VAR_INT flag_dealer1_created_rock1


  // VAR_INT bike_rock1


  // VAR_FLOAT deal_local_x_rock1


  // VAR_FLOAT deal_local_y_rock1


  // VAR_FLOAT deal_local_z_rock1


  // VAR_INT radar_blip_deal_rock1


  // VAR_INT flag_had_horn_mess_rock1


  // VAR_INT cutcar_rock1


  // VAR_INT flag_done_cutscene_rock1


  // VAR_INT dealer1_in_position_rock1


  // VAR_INT flag_dealer1_in_car_rock1


  // VAR_INT car3_rock1

  // Drug1


  // VAR_INT drug1_rock1


  // VAR_INT flag_drug1_collected_rock1


  // VAR_FLOAT drug1_x_rock1


  // VAR_FLOAT drug1_y_rock1


  // VAR_FLOAT drug1_z_rock1


  // VAR_INT radar_blip_drug1_rock1


  // VAR_INT flag_drug1_created_rock1

  // General


  // VAR_INT counter_number_drugs_collected


  // VAR_INT radar_blip_studio_rock1


  // VAR_INT timer_rock1


  // VAR_INT flag_had_car_message_rock1

  // Stuff for dealer2 to walk to players window


  // VAR_FLOAT dealer1_dest_x_rock1


  // VAR_FLOAT dealer1_dest_y_rock1


  // VAR_FLOAT dealer1_dest_z_rock1


  $.dealer1_dest_x_rock1 = 0.0;


  $.dealer1_dest_y_rock1 = 0.0;


  $.dealer1_dest_z_rock1 = 0.0;


  // VAR_INT flag_had_car2_message_rock1


  // VAR_INT cutcar2_rock1

  //VAR_INT tyre_number_rock1 // Tyre for the dealer to burst


  // VAR_INT player_in_correct_vehicle_rock1

  // Dealer car stuff


  // VAR_INT flag_dealer_car_rock1


  // VAR_INT flag_dealer_foot_rock1


  // VAR_INT dealer_doing_stuff_rock1

  // ****************************************Mission Start************************************


}
