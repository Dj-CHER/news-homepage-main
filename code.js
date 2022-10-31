

function my_open()
{
    document.getElementById('close-mobile').style.width = '100%';
    document.getElementById("close-item").style.transition = "width 0.2s";
    document.getElementById('close-item').style.width = '70%';
    document.getElementById('HNPTC-2').style.display = 'block';

}

function my_close()
{
    document.getElementById("close-item").style.transition = "all 2s";
    document.getElementById('close-item').style.wisth = '0';
    document.getElementById('close-mobile').style.width = '0';
    document.getElementById('HNPTC-2').style.display = 'none';
}