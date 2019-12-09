const canvasWidth = 800;
const canvasHeight = 600;

class treeNode
{
    constructor(name, size, children)
    {
        this.name = name;
        this.size = size;
        this.children = new Array();
        // 递归建树
        for (var i in children)
        {
            var childNode = new treeNode(children[i]['name'], children[i]['size'], children[i]['children']);
            this.children.push(childNode);
        }
        var children_sort = this.children.sort(function(a, b){return a['size'] - b['size']});
        this.children = children_sort.reverse();
    }
    display(width, height, startX, startY, colorID)
    {
        context.fillStyle = 'rgba('+color[colorID]+')';
        context.fillRect(startX + 5, startY + 5, width - 10, height - 10);
        if (!this.children.length)
        {
            context.fillStyle = 'rgba(255, 0, 0, 1)';
            context.fillText(this.name, startX + 10, startY + 22);
        }
        if (width > height)
        {
            var widthPast = 0;
            for (var i in this.children)
            {
                this.children[i].display(width / this.size * this.children[i].size, height, startX + widthPast, startY, colorID + 1);
                widthPast += width / this.size * this.children[i].size;
            }
        }
        else
        {
            var heightPast = 0;
            for (var i in this.children)
            {
                this.children[i].display(width, height / this.size * this.children[i].size, startX, startY + heightPast, colorID + 1);
                heightPast += height / this.size * this.children[i].size;
            }
        }
    }
}

// 树节点的封装，主函数操纵根节点
class tree
{
    constructor(data)
    {
        this.root = new treeNode(data['name'], data['size'], data['children']);
    }
    display()
    {
        this.root.display(canvasWidth, canvasHeight, 0, 0, 1);
    }
    mark(x, y)
    {
        this.root.mark(x, y);
    }
}

function main()
{
    var canvas = document.getElementById("treemap");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    context = canvas.getContext("2d");
    context.fillStyle = 'rgba('+color[0]+')';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.font = "normal small-caps bold 17px Arial";

    var cRect = canvas.getBoundingClientRect();
    document.addEventListener('mousedown', (e)=>{
        var x = e.pageX - cRect.left;
        var y = e.pageY - cRect.top;
        context.fillStyle = 'rgba(255, 0, 0, 1)';
            context.fillText('警戒', x, y);
    }, false);

    tree = new tree(data);
    
    tree.display(canvasWidth, canvasHeight, 0, 0, 1);
}

function change()
{
    animate();
    function animate()
    {
        var delta = updateTheta();
        if (delta > 10)
        {
            delta = 10;
        }
        tree.root.children[0].size = 40 + delta;
        tree.root.children[1].size = 20 - delta;
        tree.display(canvasWidth, canvasHeight, 0, 0, 1);    
        requestAnimationFrame(animate);
    }
    var timeLast = Date.now();
    function updateTheta()
    {
        var timeNow = Date.now();
        var timePast = timeNow - timeLast;
        return timePast / 100;
    }
}
