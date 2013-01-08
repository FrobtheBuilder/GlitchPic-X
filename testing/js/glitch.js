
function image(initdata)
{
	this.data = initdata;
	this.setData = function(thedata)
	{
		this.data = thedata;
	}

	this.display = function(container)
	{
		img = document.createElement("img");
		container.innerHTML = "";
		container.appendChild(img);
		img.setAttribute("src", this.data);
		img.style.display = "block";
		img.style.margin = "auto";
	}
}

function setCharAt(str,index,chr) 
{
	if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
}

function random(min, max)
{
	return Math.floor(min + Math.random() * (max - min));
}

var imgUtil = {
	imgresult: new image(),
	imagify: function(file)
	{
		var reader = new FileReader;
		reader.readAsDataURL(file);
		reader.onload = function(evt)
		{
			console.log(evt.target.result)
			imgUtil.imgresult = new image()
			imgUtil.imgresult.setData(evt.target.result)
		}
		return imgUtil.imgresult
	},

	scrambleRandomly: function(image)
	{
		var charlist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		console.log(image.data);
		imgUtil.imgresult.data = image.data;

		seed = 30+random(0, ((imgUtil.imgresult.data.length-100)/2));
		for(var p=1; p<3; p++)
		{
			for(var i=(seed*p); i<=(seed*p)+random(60, 100); i++)
			{
				imgUtil.imgresult.setData(setCharAt(imgUtil.imgresult.data, i, charlist.charAt(random(0, charlist.length))))
			}
		}
		console.log(imgUtil.imgresult.data)
		return imgUtil.imgresult
	},

	scramble: function(image, points)
	{
		var charlist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		imgUtil.imgresult.setData(image.data);
		for (var i = 0; i < points.length; i++)
		{
			points[i] = points[i]*imgUtil.imgresult.data.length + random(-4, 4)
		}
		console.log(points)
		for (var i = 0; i < points.length; i++)
		{
			for(var j = 0; j < 100; j++)
			{
				imgUtil.imgresult.setData(setCharAt(imgUtil.imgresult.data, points[i], charlist.charAt(random(0, charlist.length))))
			}
		}
		console.log(imgUtil.imgresult.data);
		return imgUtil.imgresult;
	}
	
}