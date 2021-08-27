	function choise(){
				var rnd_num = Math.floor(Math.random() * (22));
				var position = Math.floor(Math.random() * (2));
				var rnd_name;
				var rnd_intro;
				var rnd_img;
				if(rnd_num == 0){
					rnd_num = "0";
					if(position == 0){
						rnd_name = "THE FOOL（Upright）";
						rnd_intro = "Innocent, Adventurer, Free, Optimistic, Starting";
						/* rnd_img = "img/the_fool.jpg"; */
					}else{
						rnd_name = "THE FOOL（Reverse）";
						rnd_intro = "Reverie, Folly, Unplanned, Reckless, Escapism";
					}
				}else if(rnd_num == 1){
					rnd_num = "I";
					if(position == 0){
						rnd_name = "THE MAGICIAN（Upright）";
						rnd_intro = "Create, Confidence, Technique, Talent, Ability";
					}else{
						rnd_name = "THE MAGICIAN（Reverse）";
						rnd_intro = "Confusion, Immature, Reluctant, Loss of self-confidence, Frustration";
					}
				}else if(rnd_num == 2){
					rnd_num = "II";
					if(position == 0){
						rnd_name = "THE HIGH PRIESTESS（Upright）";
						rnd_intro = "Intelligence, Sagacity, Mysteries, Judgement, Calm decision";
					}else{
						rnd_name = "THE HIGH PRIESTESS（Reverse）";
						rnd_intro = "Criticism, Pessimism, Cool-headedness, Disregard, Insensitive";
					}
				}else if(rnd_num == 3){
					rnd_num = "III";
					if(position == 0){
						rnd_name = "THE EMPRESS（Upright）";
						rnd_intro = "Fertility, Satisfaction, Tolerance, Love";
					}else{
						rnd_name = "THE EMPRESS（Reverse）";
						rnd_intro = "Jealousy, Indulgence, Waste, Emotional, Lazy";
					}
				}else if(rnd_num == 4){
					rnd_num = "IV";
					if(position == 0){
						rnd_name = "THE EMPEROR（Upright）";
						rnd_intro = "Control, Authority, Stable, Success, Efforts pay off";
					}else{
						rnd_name = "THE EMPEROR（Reverse）";
						rnd_intro = "Overconfidence, Indulgence, Arbitrary, Selfish, Isolation";
					}
				}else if(rnd_num == 5){
					rnd_num = "V";
					if(position == 0){
						rnd_name = "THE HIEROPHANT（Upright）";
						rnd_intro = "Mercy, Kindness, Compliance with the law, Respect, Human virtue judgement";
					}else{
						rnd_name = "THE HIEROPHANT（Reverse）";
						rnd_intro = "Conservative, Restraint, Sense of distrust, Stubborn, Vanity";
					}
				}else if(rnd_num == 6){
					rnd_num = "VI";
					if(position == 0){
						rnd_name = "THE LOVERS（Upright）";
						rnd_intro = "Love, Passion, Marriage, Harmony, Merriment";
					}else{
						rnd_name = "THE LOVERS（Reverse）";
						rnd_intro = "Temptation, Immorality, Bankruptcy, Unfaithful";
					}
				}else if(rnd_num == 7){
					rnd_num = "VII";
					if(position == 0){
						rnd_name = "THE CHARIOT（Upright）";
						rnd_intro = "Execution power, Strong intention, Quick, Victory by rushing";
					}else{
						rnd_name = "THE CHARIOT（Reverse）";
						rnd_intro = "Lethargy, Leave it to others, Failure, Not trying to act";
					}
				}else if(rnd_num == 8){
					rnd_num = "VIII";
					if(position == 0){
						rnd_name = "STRENGTH（Upright）";
						rnd_intro = "Strong intention, Self-control, Indomitable, reason, Control instinct";
					}else{
						rnd_name = "STRENGTH（Reverse）";
						rnd_intro = "No power, Lack of power, Give up, Shilly-shally";
					}
				}else if(rnd_num == 9){
					rnd_num = "IX";
					if(position == 0){
						rnd_name = "THE HERMIT（Upright）";
						rnd_intro = "Spirituality, Introspection, Comprehension, Thoughtful, Identify";
					}else{
						rnd_name = "THE HERMIT（Reverse）";
						rnd_intro = "Negative, Conservative, Closed, Cage, Break the relationship";
					}
				}else if(rnd_num == 10){
					rnd_num = "X";
					if(position == 0){
						rnd_name = "WHEEL OF FORTUNE（Upright）";
						rnd_intro = "Temporary luck, Change, Distiny, Encounter";
					}else{
						rnd_name = "WHEEL OF FORTUNE（Reverse）";
						rnd_intro = "accident, Rapid deterioration, Passing";
					}
				}else if(rnd_num == 11){
					rnd_num = "XI";
					if(position == 0){
						rnd_name = "JUSTICE（Upright）";
						rnd_intro = "Fair judgement, Equilibrium, Justice, Fair, Continue";
					}else{
						rnd_name = "JUSTICE（Reverse）";
						rnd_intro = "Fault, Unjustice, Out of balance, Unfair, Judgment goes down";
					}
				}else if(rnd_num == 12){
					rnd_num = "XII";
					if(position == 0){
						rnd_name = "THE HANGED MAN（Upright）";
						rnd_intro = "Trial, Training, Effort, The hard work will be rewarded";
					}else{
						rnd_name = "THE HANGED MAN（Reverse）";
						rnd_intro = "Not rewarded the hard work, waste, No results";
					}
				}else if(rnd_num == 13){
					rnd_num = "XIII";
					if(position == 0){
						rnd_name = "DEATH（Upright）";
						rnd_intro = "Forced termination, Stop, Catastrophe, Finish";
					}else{
						rnd_name = "DEATH（Reverse）";
						rnd_intro = "Reborn, Restart, Revival of the dead, New development";
					}
				}else if(rnd_num == 14){
					rnd_num = "XIV";
					if(position == 0){
						rnd_name = "TEMPERANCE（Upright）";
						rnd_intro = "Circulation, Good, Harmony, Control, Get ready";
					}else{
						rnd_name = "TEMPERANCE（Reverse）";
						rnd_intro = "Waste, Stagnation, Unbalance, Inertia, Corruption";
					}
				}else if(rnd_num == 15){
					rnd_num = "XV";
					if(position == 0){
						rnd_name = "THE DEVIL（Upright）";
						rnd_intro = "Temptation, Corruption, Betrayal, Break, Reliance";
					}else{
						rnd_name = "THE DEVIL（Reverse）";
						rnd_intro = "Release, reproduction, Let go of attachment, Release from binding";
					}
				}else if(rnd_num == 16){
					rnd_num = "XVI";
					if(position == 0){
						rnd_name = "THE TOWER（Upright）";
						rnd_intro = "Disaster, Misfortune, Accident, Break";
					}else{
						rnd_name = "THE TOWER（Reverse）";
						rnd_intro = "Disgrace, Tension, Continue anxiety";
					}
				}else if(rnd_num == 17){
					rnd_num = "XVII";
					if(position == 0){
						rnd_name = "THE STAR（Upright）";
						rnd_intro = "Intuition, Inspiration, Hope, Goal";
					}else{
						rnd_name = "THE STAR（Reverse）";
						rnd_intro = "Disappointment, Unreasonably ambitious, Lethargy, Discouragement";
					}
				}else if(rnd_num == 18){
					rnd_num = "XVIII";
					if(position == 0){
						rnd_name = "THE MOON（Upright）";
						rnd_intro = "Anxiety, Melancholy, Half-way, Stress";
					}else{
						rnd_name = "THE MOON（Reverse）";
						rnd_intro = "Break away, Clarity, Elimination of trauma, recovery";
					}
				}else if(rnd_num == 19){
					rnd_num = "XIX";
					if(position == 0){
						rnd_name = "THE SUN（Upright）";
						rnd_intro = "Innocence, Pleasure, Glory";
					}else{
						rnd_name = "THE SUN（Reverse）";
						rnd_intro = "Not good, Discouragement, Fall, Deterioration";
					}
				}else if(rnd_num == 20){
					rnd_num = "XX";
					if(position == 0){
						rnd_name = "JUDGEMENT（Upright）";
						rnd_intro = "Reborn, Blessing, reproduction, Recharenge";
					}else{
						rnd_name = "JUDGEMENT（Reverse）";
						rnd_intro = "Alert, Crime, Remove, Atonement for sin";
					}
				}else if(rnd_num == 21){
					rnd_num = "XXI";
					if(position == 0){
						rnd_name = "THE WORLD（Upright）";
						rnd_intro = "Complete, Utopia, Clear, Satisfaction";
					}else{
						rnd_name = "THE WORLD（Reverse）";
						rnd_name = "Uncomplete, Inertia, Unsatisfactory, Stagnation";
					}
				}
				$('.card_num').text(rnd_num);
				$('.card_name').text(rnd_name);
				$('.card_intro').text(rnd_intro);
				/* $('.card_img').attr('src', rnd_img); */
				$('.section').css('display','block');
}