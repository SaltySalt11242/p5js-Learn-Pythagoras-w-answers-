var introTitle;


function preloadIntro()
{
}

function setupIntro()
{
}

function drawIntro()
{

	background (100);
	textSize(46);

	fill(255);
	stroke(2);
	strokeWeight(3);
	text("Learn Pythagoras",220,270)

	textSize(36);
	stroke(2);
	strokeWeight(3);
	text("Press Anywhere to Begin",200,320)

	if (mouseIsPressed)
	{
		canvasID = -1;
	}
}
