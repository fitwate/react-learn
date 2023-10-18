import React, { Fragment } from 'react'

function getImageUrl(person) {
    return (
        'https://www.baidu.com/' +
        person.imageId +
        '.ico'
    );


}

const people = [
    {
        id: 0,
        name: '凯瑟琳·约翰逊',
        profession: '数学家',
        accomplishment: '太空飞行相关数值的核算',
        imageId: 'favicon',
    },
    {
        id: 1,
        name: '马里奥·莫利纳',
        profession: '化学家',
        accomplishment: '北极臭氧空洞的发现',
        imageId: 'favicon',
    },
    {
        id: 2,
        name: '穆罕默德·阿卜杜勒·萨拉姆',
        profession: '物理学家',
        accomplishment: '关于基本粒子间弱相互作用和电磁相互作用的统一理论',
        imageId: 'favicon',
    },
    {
        id: 3,
        name: '珀西·莱温·朱利亚',
        profession: '化学家',
        accomplishment: '开创性的可的松药物、类固醇和避孕药的研究',
        imageId: 'favicon',
    },
    {
        id: 4,
        name: '苏布拉马尼扬·钱德拉塞卡',
        profession: '天体物理学家',
        accomplishment: '白矮星质量计算',
        imageId: 'favicon',
    },
];

const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};

function ListSection({ title, people }) {
    return (
        <>
            <h3>{title}</h3>
            <ul>
                {people.map(person =>
                    <li key={person.id}>
                        <img
                            src={getImageUrl(person)}
                            alt={person.name}
                        />
                        <p>
                            <b>{person.name}:</b>
                            {' ' + person.profession + ' '}
                            因{person.accomplishment}而闻名世界
                        </p>
                    </li>
                )}
            </ul>
        </>
    );
}

export default function RenderingLists() {
    const chemists = people.filter(person =>
        person.profession === '化学家'
    );


    const listItems = chemists.map(person =>
        <li key={person.id} >
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                因{person.accomplishment}而闻名世界
            </p>
        </li>
    );

    let chemists2 = [];
    let everyoneElse = [];
    people.forEach(person => {
        if (person.profession === '化学家') {
            chemists2.push(person);
        } else {
            everyoneElse.push(person);
        }
    }
    )


    // 
    let output = [];

    // 填充输出的数组
    poem.lines.forEach((line, i) => {
        output.push(
            <hr key={i + '-separator'} />
        );
        output.push(
            <p key={i + '-text'}>
                {line}
            </p>
        );
    });
    // 移除第一个 <hr />
    output.shift();
    return <ul>
        <h1>基础练习</h1>
        {listItems}

        <h1>增加函数+forEach</h1>

        <ListSection
            title="化学家"
            people={chemists}
        />
        <ListSection
            title="其余的人"
            people={everyoneElse}
        />
        <h1>forEach push shift</h1>
        {output}

        <h1>Fragment</h1>
        {poem.lines.map((line, i) =>
            <Fragment key={i}>
                {i > 0 && <hr />}
                <p>{line}</p>
            </Fragment>
        )}
    </ul>;
}
