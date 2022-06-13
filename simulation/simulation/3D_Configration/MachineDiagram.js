function MachineDrawing(){
	
	
	
	
   x = 100;
   y = 200;
   
   
//black box start
   paper.path("M"+(x + 200)+","+(y + 180)+"l -70 120 550 0 -100 -120 z").attr({
       "stroke": "black ",
       "stroke-width": 1,
       "glow":1, 
   		"fill":"#544F4E"      
        });
	
   paper.path("M"+(x + 131)+","+(y + 300)+"l 0 30 l 550 0 l 0 -30 z").attr({
       "stroke": "black ",
       "stroke-width": 1,
       "glow":1, 
   		"fill":"black"      
        });
   // 1st leg
   paper.path("M"+(x + 161)+","+(y + 330)+"l 5 25 l 25 0 l 5 -25 z ").attr({
       "stroke": "black ",
       "stroke-width": 1,
       "glow":1, 
   		"fill":"black"      
        });
   // 2nd leg
   paper.path("M"+(x + 620)+","+(y + 330)+"l 5 25 l 25 0 l 5 -25 z ").attr({
       "stroke": "black ",
       "stroke-width": 1,
       "glow":1, 
   		"fill":"black"      
        });
   
   //left black support start
   paper.path("M"+(x + 161)+","+(y + 330)+"l -30 20 0 -60").attr({
       "stroke": "black ",
       "stroke-width": 1,
       "glow":1, 
       "fill":"black" 
        });
   
   paper.path("M"+(x + 131)+","+(y + 300)+"l 0 -230 10 -25 55 -10 5 15 0 130 z").attr({
       "stroke": "black ",
       "stroke-width": 1,
       "glow":1, 
       "fill":"black" 
        });
   
 //left black support end 
   
 //right black support start 
   paper.path("M"+(x + 655)+","+(y + 330)+"l 26 20 0 -30 z").attr({
       "stroke": "black ",
       "stroke-width": 1,
       "glow":1, 
   		"fill":"black"      
        });
   
   paper.path("M"+(x + 681)+","+(y + 300)+"l 0 -230 -10 -25 -80 -10 -10 20 0 125 z").attr({
       "stroke": "black ",
       "stroke-width": 1,
       "glow":1, 
       "fill":"black"      
        });
   //right black support start 
   
 //black box end
   
  // blue box start
   paper.path("M"+(x + 200)+","+(y + 240)+"l 0 25 l 200 0 l 0 -25 z").attr({
       "stroke": "#2C6195 ",
       "stroke-width": 1,
       "glow":1, 
   		"fill":"#2C6195"      
        });
   
   paper.path("M"+(x + 200)+","+(y + 240)+"l 20 -50 l 180 0 l 0 50").attr({
       "stroke": "#2888E8 ",
       "stroke-width": 1,
       "glow":1, 
   		"fill":"#2888E8"      
        });
   // blue box end   
   
   //balck rectangle 
   paper.rect((x + 170), (y + 110), 450, 45).attr({
       "stroke": "black ",
       "stroke-width": 1,
       "glow":1, 
   		"fill":"black"
      
        });  
   
   //rod 1 start
   rod1 =  paper.rect((x + 140), (y + 170), 520, 10, 5).attr({
        "stroke": "black ",
        "stroke-width": 1,
        "glow":1, 
    		"fill":"90-#c6c5c8 :20-#f0f0f1 :50-#c6c5c8 :80"
       
         });   
   
   /// rod 2 start      
   rod2 =   paper.rect((x + 170), (y + 125), 450, 10, 5).attr({
         "stroke": "black ",
         "stroke-width": 1,
         "glow":1, 
     		"fill":"90-#c6c5c8 :20-#f0f0f1 :50-#c6c5c8 :80"
        
          });  
   
 /// rod 2 start      
   rod3 =   paper.rect((x + 170), (y + 155), 450, 5, 5).attr({
         "stroke": "black ",
         "stroke-width": 1,
         "glow":1, 
     		"fill":"90-#c6c5c8 :20-#f0f0f1 :50-#c6c5c8 :80"
        
          });
          

    //leftside part of machine start
        
    
   paper.path("M"+(x + 140)+","+(y + 45)+"l -10 45 -85 0 10 -45 z").attr({
       "stroke": "#B7C2CE ",
       "stroke-width": 1,
       "glow":1, 
       "fill":"#B7C2CE"
           
        });
   
   paper.path("M"+(x + 55)+","+(y + 45)+"l 70 -8 50 0").attr({
       "stroke": "#B7C2CE ",
       "stroke-width": 1,
       "glow":1, 
       "fill":"#B7C2CE"
           
        });
   
    paper.rect((x + 45), (y + 92), 85, 260).attr({
       "stroke": "#66727F ",
       "stroke-width": 0,
       "glow":1, 
   		"fill":"90-#66727F :20-#f0f0f1 :50-#66727F :80"
      
        });
    
    paper.path("M"+(x + 45)+","+(y + 100)+"l -15 40 0 100 15 40").attr({
        "stroke": "#66727F ",
        "stroke-width": 1,
        "glow":1, 
        "fill":"#66727F"
            
         });
   
    //leftside part of machine end
    
    
    //rightside part of machine start
    
    paper.path("M"+(x + 671)+","+(y + 45)+"l 10 40 85 0 -10 -40 z").attr({
        "stroke": "#B7C2CE ",
        "stroke-width": 1,
        "glow":1, 
        "fill":"#B7C2CE"
            
         });
    
    paper.path("M"+(x + 755)+","+(y + 45)+"l -100 -10 -50 0").attr({
        "stroke": "#B7C2CE ",
        "stroke-width": 1,
        "glow":1, 
        "fill":"#B7C2CE"
            
         });
    
    paper.rect((x + 682), (y + 85), 85, 265).attr({
        "stroke": "#66727F ",
        "stroke-width": 0,
        "glow":1, 
    		"fill":"90-#66727F :20-#f0f0f1 :50-#66727F :80"
       
         });
    
    
    paper.path("M"+(x + 767)+","+(y + 100)+"l 15 40 0 100 -15 40").attr({
        "stroke": "#66727F ",
        "stroke-width": 1,
        "glow":1, 
        "fill":"#66727F"
            
         });
    
    //rightside part of machine end

   

    paper.image('simulation/diagram/fablab pics/img1.PNG', (x + 200), (y + 180), 200, 60);
    
    //Image of cad model
    txt1 = paper.text((x + 1050), (y - 160), "CAD model of given shape").attr({
		stroke : 'black',
		'font-size' : 30,
		"font-family": "sans-serif" 
	});    
    cadmodelImg = paper.image('simulation/diagram/fablab pics/cadimg.PNG', (x + 900), (y - 140), 300, 300);
    
    
    
    // Img of tool path of given model
    txt2 = paper.text((x + 1050), (y + 250), "Tool path generated for sample model").attr({
		stroke : 'black',
		'font-size' : 30,
		"font-family": "sans-serif" 
	});    
    tollpathImg = paper.image('simulation/diagram/fablab pics/toolpath.PNG', (x + 900), (y + 300), 300, 300);
    
 
   
       
      obj = drawCuttingTool((x+220),(y+215), 110, 200, 10, 90,  "red");
      
      startCutting((x+200),(y+250));
	
	//cuttingNiddle = drawCuttingTool(Ply_x, ply_y);	
	//drawToolWire((paper_x + 30),(paper_y + 50) , 110, 100, 10, 90, X_coOrdinate, (Y_coOrdinate - 65), "hsb(0, .75, .75)");
	
}




function drawCuttingTool(x,y,ax, ay, bx, by, color){
	
	X_coOrdinate = x ;
	Y_coOrdinate =  y;
  
  
	paper.setStart();
          
     backrectangle = paper.rect((X_coOrdinate - 60), (Y_coOrdinate - 210), 130, 150).attr({
          "stroke": "#42483E ",
          "stroke-width": 0,
          "glow":1, 
      		"fill":"90-#42483E :20-#42483E :50-#42483E :80"
      			
      			//505758
           });
    
    // backrectangle.toBack();

     cutTool = paper.path("M "+X_coOrdinate+","+Y_coOrdinate+"  l 5 0  0 -20 8 0 0 -65 -21 0 0 65 8 0 0 20").attr({
         "stroke": "black ",
         "stroke-width": 1,
         "glow":1, 
     		"fill":"90-#c6c5c8 :20-#f0f0f1 :50-#c6c5c8 :80"
        
          });
     
     paper.rect((X_coOrdinate - 70), (Y_coOrdinate - 60), 150, 25, 10).attr({
         "stroke": "black ",
         "stroke-width": 0.5,
         "glow":1, 
     		"fill":"90-#c6c5c8 :20-#f0f0f1 :50-#c6c5c8 :80"
        
          }); 
     
     paper.rect((X_coOrdinate - 58), (Y_coOrdinate - 208), 25, 25).attr({
         "stroke": "black ",
         "stroke-width": 2,
         "glow":1, 
     		"fill":"90-#505758 :20-#505758 :50-#505758 :80"
        
          }); 
     
     paper.rect((X_coOrdinate + 43), (Y_coOrdinate - 208), 25, 25).attr({
         "stroke": "black ",
         "stroke-width": 2,
         "glow":1, 
     		"fill":"90-#505758 :20-#505758 :50-#505758 :80"
        
          }); 
     
     paper.rect((X_coOrdinate - 50	), (Y_coOrdinate - 182), 5, 130).attr({
         "stroke": "black ",
         "stroke-width": 0.5,
         "glow":1, 
     		"fill":"90-#505758 :20-#505758 :50-#505758 :80"
        
          });
     paper.rect((X_coOrdinate + 53), (Y_coOrdinate - 182), 5, 130).attr({
         "stroke": "black ",
         "stroke-width": 0.5,
         "glow":1,
     		"fill":"90-#505758 :20-#505758 :50-#505758 :80"
        
          });
     
     paper.rect((X_coOrdinate - 52	), (Y_coOrdinate - 130), 10, 60, 5).attr({
         "stroke": "black ",
         "stroke-width": 0.5,
         "glow":1, 
     		"fill":"90-#505758 :20-#505758 :50-#505758 :80"
        
          });
     
     paper.rect((X_coOrdinate + 50	), (Y_coOrdinate - 130), 10, 60, 5).attr({
         "stroke": "black ",
         "stroke-width": 0.5,
         "glow":1, 
     		"fill":"90-#505758 :20-#505758 :50-#505758 :80"
        
          });
     
     paper.path("M"+(X_coOrdinate - 8)+","+(Y_coOrdinate - 150)+"l -10 40 l 40 0 -10 -40 -20 0").attr({
         "stroke": "black ",
         "stroke-width": 0.7,
         "glow":1, 
         "fill":"#0E336F"
        
          });
     
     
     paper.rect((X_coOrdinate - 3), (Y_coOrdinate - 155), 10, 5, 2).attr({
         "stroke": "black ",
         "stroke-width": 0.7,
         "glow":1, 
     		"fill":"#0E336F"
        
          });
     
     paper.rect((X_coOrdinate ), (Y_coOrdinate - 110), 4, 25).attr({
         "stroke": "#655207 ",
         "stroke-width": 0.5,
         "glow":1, 
     		"fill":"#655207"
        
          });
     
     
     	
	   
	
	    var path = [["M", 200, 250], ["C", ax, ay, bx, by, (X_coOrdinate + 2), (Y_coOrdinate - 161)]]
    
	    discattr = {"fill": "black"};
	    wireJoint1_ToMachine = paper.circle((200), (250), 5).attr(discattr)
		wireJoint2_ToNiddle = paper.circle((X_coOrdinate + 2), (Y_coOrdinate - 161), 5).attr(discattr)
	    path2 = [ ["M", bx, by], ["L", (X_coOrdinate + 2), (Y_coOrdinate - 161)]]
	    curve = paper.path(path).attr({stroke: color || Raphael.getColor(), "stroke-width": 4, "stroke-linecap": "round"})
     
     
     
     
	 obj = paper.setFinish();
	 obj.toFront();
  
	return obj;
         
      
}



function startCutting(x, y){
		
	 paths = [
		 line = paper.path("M"+(x + 2)+","+(y - 15)+"l 195 0 0 -3 -195 0 0 -3 195 0 0 -3 -195 0 0 -3 195 0 0 -3 -195 0 0 -3 195 0 0 -3 -195 0 0 -3 195 0 0 -3 -195 0 0 -3 195 0 0 -3 -195 0 0 -3 195 0 0 -3 -195 0 0 -3 195 0 0 -3 -195 0 0 -3 195 0 0 -3 -195 0 0 -3 195 0 ")
	        ];
	 
	 line.attr({
         "stroke": "white ",
         "stroke-width": 1,
       //  'stroke-opacity': 0.2,
          }); 
	      
	   interval = setInterval("method_animasi()", 10);
	
	   setTimeout(stopcutting, 1.26 * 60 * 1000);
	
}


var counter = 0;
var position;
var currentPath = 0;
var dirForward = true;
function method_animasi()
{
    if (counter >= paths[currentPath].getTotalLength() && dirForward)
    {
        dirForward = false;
    }
    else if (counter == 0 && !dirForward)
    {
        var newPath = currentPath;
       
        currentPath = newPath;
        dirForward = true;
    }
    else
    {
       // position = paths[currentPath].getPointAtLength(counter);
      //  obj.attr({cx: position.x, cy: position.y});
      
      		obj.remove();
       //   obj1.remove();
    position = paths[currentPath].getPointAtLength(counter);
   /*   obj.attr({
        cx: position.x  ,
        cy: position.y 
         }); 
     */
    x_path = position.x  
    y_path =  position.y 
     
         drawCuttingTool(x_path, y_path,  110, 100, 10, 90,  "red"); 
       //    box(x_path, y_path); 
    }
    if (dirForward)
    {
        counter++;
    }
    else
    {
        counter--;
    }
};



function stopcutting(){
	
	
	clearInterval(interval);
	
    txt1.hide();
    cadmodelImg.hide();

    txt2.hide();
    tollpathImg.hide();
    
    txt3 = paper.text((x + 1050), (y - 160), "Final product view").attr({
		stroke : 'black',
		'font-size' : 30,
		"font-family": "sans-serif" 
	});    
    finalProduct = paper.image('simulation/diagram/fablab pics/final product 3d view.PNG', (x + 900), (y - 140), 300, 300);
    
	
    
	
}

function drawToolWire(x, y, ax, ay, bx, by, zx, zy, color){
	
	    x_wire = x;
	    y_wire = y;
	    zx_wire = zx;
	    zy_wire = zy;
	
	
	    var path = [["M", x_wire, y_wire], ["C", ax, ay, bx, by, zx, zy]]
       
	    discattr = {"fill": "black"};
	    wireJoint1_ToMachine = paper.circle(x_wire, y_wire, 5).attr(discattr)
		wireJoint2_ToNiddle = paper.circle(zx_wire, zy_wire, 5).attr(discattr)
	    path2 = [ ["M", bx, by], ["L", zx_wire, zy_wire]]
	    curve = paper.path(path).attr({stroke: color || Raphael.getColor(), "stroke-width": 4, "stroke-linecap": "round"})
}











