function points_along(x,y,num,scale,field,color){
	
	let array = []; 
	for(let t=0; t<num; t+=1){
		let p = {x:x,y:y};
		let v = field(x,y);
		//render
		stroke(color);
		strokeWeight(/*t/10*/6);
		point(x,y);
		
		array.push(p);
		x += v.x*scale;
		y += v.y*scale;
	}
	
	return array;
}
