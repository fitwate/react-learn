import React from 'react'

function Item({ name, isPacked }) {
    if (isPacked) {
        // return null;
        return <li className="item">{name} ✔</li>;
    }
    return <li className="item">{name}</li>;
}

function Item2({ name, isPacked }) {
    return <li>
        {isPacked ? (
            <del>
                name + ' ✔'
            </del>

        ) : (
            name
        )
        }
    </li>
}

function Item3({ name, isPacked }) {
    return (
        <li className="item">
            {name} {isPacked && '✔'}
        </li>
    );
}

function Item4({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + " ✔"}
            </del>
        );
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}


const drinks = {
    tea: {
        part: 'leaf',
        caffeine: '15–70 mg/cup',
        age: '4,000+ years'
    },
    coffee: {
        part: 'bean',
        caffeine: '80–185 mg/cup',
        age: '1,000+ years'
    }
};

function Drink({ name }) {
    const info = drinks[name];
    return (
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{info.part}</dd>
                <dt>Caffeine content</dt>
                <dd>{info.caffeine}</dd>
                <dt>Age</dt>
                <dd>{info.age}</dd>
            </dl>
        </section>
    );
}


export default function LearnIf() {
    return (
        <section>
            <h1>Sally Ride 的行李清单. if判断</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="宇航服"
                />
                <Item
                    isPacked={true}
                    name="带金箔的头盔"
                />
                <Item
                    isPacked={false}
                    name="Tam 的照片"
                />
            </ul>
            <hr />
            <h1>Sally Ride 的行李清单. 三目运算符</h1>
            <ul>
                <Item2
                    isPacked={true}
                    name="宇航服"
                />
                <Item2
                    isPacked={true}
                    name="带金箔的头盔"
                />
                <Item2
                    isPacked={false}
                    name="Tam 的照片"
                />
            </ul>
            <hr />
            <h1>Sally Ride 的行李清单. 与运算符（&&）</h1>
            <ul>
                <Item3
                    isPacked={true}
                    name="宇航服"
                />
                <Item3
                    isPacked={true}
                    name="带金箔的头盔"
                />
                <Item3
                    isPacked={false}
                    name="Tam 的照片"
                />
            </ul>
            <h1>Sally Ride 的行李清单. 选择性地将 JSX 赋值给变量</h1>
            <ul>
                <Item4
                    isPacked={true}
                    name="宇航服"
                />
                <Item4
                    isPacked={true}
                    name="带金箔的头盔"
                />
                <Item4
                    isPacked={false}
                    name="Tam 的照片"
                />
            </ul>

            <Drink name="tea" />
            <Drink name="coffee" />
        </section>
    );
}
