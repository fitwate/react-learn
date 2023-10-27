import React from 'react'

function AlertButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert(`正在播放 ${movieName}！`);
    }

    return (
        <Button onClick={handlePlayClick}>
            播放 "{movieName}"
        </Button>
    );
}

function UploadButton() {
    return (
        <Button onClick={() => alert('正在上传！')}>
            上传图片
        </Button>
    );
}

function StopButton({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

export default function RespondingToEvents() {
    function handleClick() {
        alert('普通函数 你点击了我！');
    }

    return (
        <div>
            <button onClick={handleClick}>
                普通函数 点我
            </button>

            <button onClick={() => {
                alert('箭头函数 你点击了我！');
            }}>
                箭头函数 点我
            </button>

            <hr />
            <h2>在事件处理函数中读取 props </h2>
            <AlertButton message="正在播放！">
                播放电影
            </AlertButton>
            <AlertButton message="正在上传！">
                上传图片
            </AlertButton>

            <hr />
            <h2>将事件处理函数作为 props 传递</h2>
            <PlayButton movieName="魔女宅急便" />
            <UploadButton />

            <hr />
            <h2>事件传播</h2>
            <div className="Toolbar" onClick={() => {
                alert('你点击了 toolbar ！');
            }}>
                <button onClick={() => alert('正在播放！')}>
                    播放电影
                </button>
                <button onClick={() => alert('正在上传！')}>
                    上传图片
                </button>
            </div>

            <hr />
            <h2>阻止传播</h2>
            <div className="Toolbar" onClick={() => {
                alert('你点击了 toolbar ！');
            }}>
                <StopButton onClick={() => alert('正在播放！')}>
                    播放电影
                </StopButton>
                <StopButton onClick={() => alert('正在上传！')}>
                    上传图片
                </StopButton>
            </div>

        </div>

    );

}
