var canvasID;

function preload()
{
	preloadIntro();
	preloadPythagoras();
}

function setup()
{
	createCanvas(800,600);
	setupIntro();
	setupPythagoras();
	setupPlayer();

	canvasID = 0;

}

function draw()
{

	if(canvasID == 0)
	{
		drawIntro();
	}

	if (canvasID == 1)
	{
		drawPythagoras();
	}
	if (canvasID == 2)
	{
		background(0,0,0);
		showControls();
		image(questionzero,50,10,400,250)
		drawWorldPythagoras(0);
	}
	if (canvasID == 3)
	{
		background(0,0,0);
		showControls();
		image(questionone,50,10,400,250)
		drawWorldPythagoras(1);
	}
	if (canvasID == 4)
	{
		background(0,0,0);
		showControls();
		image(questiontwo,50,10,400,250)
		drawWorldPythagoras(2);
	}
	if (canvasID == 5)
	{
		background(0,0,0);
		showControls();
		image(questionthree,50,10,400,250)
		drawWorldPythagoras(3);
	}
	if (canvasID == 6)
	{
		drawPythagorasscore();
	}
}

function mouseReleased()
{
	if (canvasID == -1)
	{
		canvasID = 1;
	}
	if (canvasID == -2)
	{
		canvasID = 2;
	}
	if (canvasID == -3)
	{
		canvasID = 3;
	}
}
