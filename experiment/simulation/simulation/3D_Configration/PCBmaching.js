var MachingObj = MachingObj || {};

MaterialArr = [
	"Wood",
	 "Metal (CI, Brass, Al, White metal)",
	"Plastics",
	"Rubbers",
	"Plasters",
	"Molding Waxes",
	"Chemical Wood", 
	"Foam", 
	"Acrylic", 
	"Poly acetate", 
	"ABS", 
	"PC board"

] 

Tools = [
	"1mm Square",
	"2mm Square",
	"3mm Square",
	"4mm Square",
	"5mm Square",
	"6mm Square",
	"R0.5 Bell",
	"R1 Ball",
	"R1.5 Ball",
	"R2 Ball",
	"R2.5 Ball",
	"R3 Ball",
	"0.2mm conical"
]


ToolTypejson = [
	{"name":"stright-square","src":"simulation/diagram/fablab pics/stright-square.png"},
	{"name":"Bell","src":"simulation/diagram/fablab pics/ball.png"},
	{"name":"Redius","src":"simulation/diagram/fablab pics/redius.png"},
	{"name":"Conical","src":"simulation/diagram/fablab pics/conical.png"},
	{"name":"Drill","src":"simulation/diagram/fablab pics/Drill.png"}]


ToolPathjson = [
	{"name":"Scan line.png","src":"simulation/diagram/fablab pics/Scan line.png"},
	{"name":"Uni-directional","src":"simulation/diagram/fablab pics/Uni-directional.png"},
	{"name":"Contour line","src":"simulation/diagram/fablab pics/Contour line.png"},
	{"name":"Sprial","src":"simulation/diagram/fablab pics/Sprial.png"},
]


var Imgsrc = null;
ModelJson = {}
MachingObj.selectMaterial = function(){
	
	
	var MatrialHtm = ''
		
		MatrialHtm += '<div class="container-fluid">'
			+'<div class="row">'
			
			+'<div class="col-sm-12 col-md-3 col-xl-2" id="ConfigSection">'
			
			+'<h1>Matrial</h1>'
			+'<section>'
			+'<h3>Select Material </h3>'
			+'<center><img src="simulation/images/CADmodelPCB.PNG" style="width:100px; height:100px;"></center>'
		
	    	
	    	
	    	+'<button id="getMachning" class="btn btn-success">Rander</button>'
	    	 +'</section>'
	    	 +'<section hidden id="SelectOP">'
	    	+'<h3>Select Output format</h3></br>'
	    	+'<input type="radio" name="outputFormat" value="jpg" >&nbsp;.jpg </br>'
	    	+'<input type="radio" name="outputFormat" value="png" >&nbsp;.png  </br>'
	    	+'<input type="radio" name="outputFormat" value="dxb" >&nbsp;.dxb </br>'
	    	+'<input type="radio" name="outputFormat" value="Uni" >&nbsp;.Uni </br>'
	    	+'<input type="radio" name="outputFormat" value="Uni" >&nbsp;.Ca </br>'
	    	+'<input type="radio" name="outputFormat" value="Uni" >&nbsp;.rmi </br>'
	    	
	    	+'<br/><button id="outputFormatBtn" class="btn btn-info" > Select Property</button>'
			
	    +'</section>'
	    	+'</div>'
			
			+'<div class="col-sm-12 col-md-9 col-xl-10" id="WoodCuttingSection">'
			+'<img id="MaterialImg" >'
			
			+'</div>'
			
			+'</div>'
			+'</div>'
	
			+'<div class="modal" id="MaterialModal" data-keyboard="false" data-backdrop="static">'
			+'<div class="modal-dialog">'
			+'<div class="modal-content container-fluid">'

				    +'<div class="modal-header">'
				    +'<h4 class="modal-title">Output Format property</h4>'
				    +'<button type="button" class="close" data-dismiss="modal">&times;</button>'
				    +'</div>'

	    			+'<div class="modal-body row" id="detailsData">'
	    			+'<div class="col-sm-12 col-md-12 col-xl-12" >'
			       
			       
			    	
			    	+'<hr></hr>'
			    	+'</div>'
			    
			        +'</div>'

			    
				    +'<div class="modal-footer">'
				    +'<button type="button" class="btn btn-success" id="saveOrientation" data-keyboard="false" data-backdrop="static">Ok</button>'
				    +'<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
			        +'</div>'

			 +'</div>'
			 +'</div>'
			 +'</div>'
			
			 
				
			 
			 
	 $("#mainDiv").html();
	$("#mainDiv").html(MatrialHtm);
	
	
	
	
	$("#getMachning").click( function(){
		
		$("#MaterialImg").attr("src","simulation/images/CADmodelPCB.PNG");
		
		$("#SelectOP").prop("hidden",false);
	
	})
	
	$("#outputFormatBtn").click( function(){
		
		
		if($("input[name='outputFormat']:checked").val() != undefined)
			{
			ModelJson.outputFormat = $("input[name='outputFormat']:checked").val();
			MachingObj.OPFormat();
			
			}
		else{
			alertify.alert('Warning!!','Please select output format' );
			 $(".ajs-header").css("background-color","#ce6058");
		}
		
		
	})
	
	MachingObj.CuttingParameter = function(){
		
		var MatrialHtm = ''
			
			MatrialHtm += '<div class="container-fluid">'
				+'<div class="row">'
				  +'<h1>Set Cutting Parameter</h1>'
				
				 +'</div>'
				 +'</div>'
		 $("#ConfigSection").html();
			$("#ConfigSection").html(MatrialHtm);
	}
	

	MachingObj.OPFormat = function() {
		var MatrialHtm = ''
			
			MatrialHtm += '<div class="container-fluid">' + '<div class="row">'
			 
		    	+'<div id="OtherOPPro">'
		    	+'<section >'
		        +'<h3>Maximum Vector Fill Error</h3>'
		        +'<input type="number" id="VecterFillError" step="0.01" class="form-control" placeholder="lattice units "> '
		        +'<h3>Tool diameter</h3>'
		        +'<input type="number" id="tooldiameter" step="0.0001" class="form-control" placeholder="tool diameter"> '
		        +'<h3>Tool overlap</h3>'
		        +'<input type="number" id="tooloverlap"  step="0.1" class="form-control" placeholder="tool overlap "> '
		    	+'</section>'
		    	+'<button id="OPFormatBtn" class="btn btn-success">Submit</button>'
		    	+'</div>'
			+ '</div>' 
			
			+ '</div>'
		$("#ConfigSection").html();
		$("#ConfigSection").html(MatrialHtm);
	
	
$("#OPFormatBtn").click( function(){
		
		
		ModelJson.VecterFillError = $("#VecterFillError").val();
		ModelJson.tooldiameter = $("#tooldiameter").val();
		ModelJson.tooloverlap = $("#tooloverlap").val();
		
		
		if ( $("#VecterFillError").val() != "" && $("#tooldiameter").val() != "" && $("#tooloverlap").val() != "") 
		{
			$("#MaterialImg").attr("src","simulation/images/VectorizedSample.PNG");
			MachingObj.Settools() ;
			console.log(ModelJson)
			$("#VecterFillError, #tooldiameter, #tooloverlap, #OPFormatBtn").prop("disabled", true);
		}
		else
	   {
			
			alertify.alert('Warning!!','Please enter all the inputs' );
			 $(".ajs-header").css("background-color","#ce6058");
//			 $("#saveOrientation").attr({"data-keyboard":"false","data-backdrop":"static"})
	   }
	})
	
			MachingObj.Settools = function() {
					
							var MatrialHtm = ''
					
							MatrialHtm += '<div class="container-fluid">' + '<div class="row">'
							
							+'<section>'
					    	+'<h3>Material Dimension</h3>'
					    	+'X:&nbsp<input type="number" class="form-control" id="X_Value">&nbspmm</br>'
					    	+'Y:&nbsp<input type="number" class="form-control" id="Y_Value">&nbspmm</br>'
					    	+'XY Speed:&nbsp<input type="number" class="form-control" id="XY_Speed">&nbspmm</br>'
					    	+'Z Speed:&nbsp<input type="number" class="form-control" id="Z_Speed">&nbspmm</br>'
					    	+'</section>'
							
							+ '</div>' 
							+'<button id="OPSelectBtn" class="btn btn-success">Submit</button>'
							+ '</div>'
							
							
							
							
							$("#OtherOPPro").html();
							$("#OtherOPPro").html(MatrialHtm);
					
							
							$("#OPSelectBtn").click( function ()
							{
								
								
								console.log(ModelJson);
								
								if($("#X_Value").val() != "" && $("#Y_Value").val() != 0 &&  $("#XY_Speed").val() != "" &&  $("#Z_Speed").val() != "" )
									{
									
									ModelJson.X_Value = $("#X_Value").val();
									ModelJson.Y_Value = $("#Y_Value").val();
									ModelJson.XY_Speed = $("#XY_Speed").val();
									ModelJson.Z_Speed = $("#Z_Speed").val();
									
									alertify.confirm('Confirmation!!', 'Are you sure you want to start the animation ? ', function(){
										$("#X_Value, #Y_Value, #XY_Speed, #Z_Speed, #OPSelectBtn").prop("disabled", true);
										$("#MaterialImg").css("display","none");
										//animation start 
										paper = Raphael("WoodCuttingSection", 1400, 800);	
										 
										 
										MachineDrawing_PCB();
										}, function(){
											$("#X_Value, #Y_Value, #XY_Speed, #Z_Speed, #OPSelectBtn").prop("disabled", false);
											$("#MaterialImg").css("display","inline");
										});
							    	  $(".ajs-header").css("background-color","#17a2b8");
									
									}
								else
									{
									alertify.alert('Warning!!','Please enter all the inputs' );
									 $(".ajs-header").css("background-color","#ce6058");
									}
							});
							
							
}			
							
				}
}