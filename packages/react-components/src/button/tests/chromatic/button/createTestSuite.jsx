import { Badge } from "@react-components/badge";
import { SignoutIcon } from "@react-components/icons";
import { cloneElement } from "react";

function Button({ element, ...rest }) {
    return cloneElement(element, rest);
}

function Icons({ element, ...rest }) {
    const button = cloneElement(element, rest);

    return (
        <>
            <div className="flex items-end mb5">
                <Button size="micro" icon={<SignoutIcon />} element={button} className="mr5">Button</Button>
                <Button size="mini" icon={<SignoutIcon />} element={button} className="mr5">Button</Button>
                <Button size="tiny" icon={<SignoutIcon />} element={button} className="mr5">Button</Button>
                <Button size="small" icon={<SignoutIcon />} element={button} className="mr5">Button</Button>
                <Button icon={<SignoutIcon />} element={button} className="mr5">Button</Button>
                <Button size="large" icon={<SignoutIcon />} element={button}>Button</Button>
            </div>
            <div className="flex items-end mb5">
                <Button size="micro" icon={<SignoutIcon />} iconPosition="right" element={button} className="mr5">Button</Button>
                <Button size="mini" icon={<SignoutIcon />} iconPosition="right" element={button} className="mr5">Button</Button>
                <Button size="tiny" icon={<SignoutIcon />} iconPosition="right" element={button} className="mr5">Button</Button>
                <Button size="small" icon={<SignoutIcon />} iconPosition="right" element={button} className="mr5">Button</Button>
                <Button icon={<SignoutIcon />} iconPosition="right" element={button} className="mr5">Button</Button>
                <Button size="large" icon={<SignoutIcon />} iconPosition="right" element={button}>Button</Button>
            </div>
            <div className="flex items-end mb5">
                <Button size="micro" icon={<SignoutIcon />} element={button} className="mr5" />
                <Button size="mini" icon={<SignoutIcon />} element={button} className="mr5" />
                <Button size="tiny" icon={<SignoutIcon />} element={button} className="mr5" />
                <Button size="small" icon={<SignoutIcon />} element={button} className="mr5" />
                <Button icon={<SignoutIcon />} element={button} className="mr5" />
                <Button size="large" icon={<SignoutIcon />} element={button} />
            </div>
            <div className="flex mb5">
                <Button icon={<SignoutIcon />} active element={button} className="mr5">Button</Button>
                <Button icon={<SignoutIcon />} focus element={button} className="mr5">Button</Button>
                <Button icon={<SignoutIcon />} hover element={button} className="mr5">Button</Button>
                <Button icon={<SignoutIcon />} focus hover element={button} className="mr5">Button</Button>
                <Button icon={<SignoutIcon />} disabled element={button} className="mr5">Button</Button>
                <Button icon={<SignoutIcon className="fill-red" />} element={button}>Button</Button>
            </div>
        </>
    );
}

function Loadings({ element, ...rest }) {
    const button = cloneElement(element, rest);

    return (
        <>
            <div className="flex mb5">
                <Button loading element={button} className="mr5">AA</Button>
                <Button active loading element={button} className="mr5">AA</Button>
                <Button focus loading element={button} className="mr5">AA</Button>
                <Button hover loading element={button} className="mr5">AA</Button>
                <Button focus hover loading element={button} className="mr5">AA</Button>
                <Button disabled loading element={button} className="mr5">AA</Button>
                <Button loading element={button} className="mr5" />
                <Button icon={<SignoutIcon />} loading element={button} className="mr5">AA</Button>
                <Button icon={<SignoutIcon />} iconPosition="right" loading element={button}>AA</Button>
            </div>
            <div className="flex items-end mb5">
                <Button size="micro" loading element={button} className="mr5">Aa</Button>
                <Button size="mini" loading element={button} className="mr5">Aa</Button>
                <Button size="tiny" loading element={button} className="mr5">Aa</Button>
                <Button size="small" loading element={button} className="mr5">Aa</Button>
                <Button loading element={button} className="mr5">Aa</Button>
                <Button size="large" loading element={button}>Aa</Button>
            </div>
        </>
    );
}

function Badges({ element, ...rest }) {
    const button = cloneElement(element, rest);

    return (
        <>
            <div className="flex items-end mb5">
                <Button size="micro" badgeRight={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button size="mini" badgeRight={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button size="tiny" badgeRight={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button size="small" badgeRight={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button badgeRight={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button size="large" badgeRight={<Badge>6</Badge>} element={button}>Button</Button>
            </div>
            <div className="flex items-end mb5">
                <Button size="micro" badgeRight={<Badge variant="inline">6</Badge>} element={button} className="mr5">Button</Button>
                <Button size="mini" badgeRight={<Badge variant="inline">6</Badge>} element={button} className="mr5">Button</Button>
                <Button size="tiny" badgeRight={<Badge variant="inline">6</Badge>} element={button} className="mr5">Button</Button>
                <Button size="small" badgeRight={<Badge variant="inline">6</Badge>} element={button} className="mr5">Button</Button>
                <Button badgeRight={<Badge variant="inline">6</Badge>} element={button} className="mr5">Button</Button>
                <Button size="large" badgeRight={<Badge variant="inline">6</Badge>} element={button}>Button</Button>
            </div>
            <div className="flex mb5">
                <Button active badgeRight={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button focus badgeRight={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button hover badgeRight={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button focus hover badgeRight={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button disabled badgeRight={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
            </div>
            <div className="flex items-end mb5">
                <Button size="micro" badgeLeft={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button size="mini" badgeLeft={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button size="tiny" badgeLeft={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button size="small" badgeLeft={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button badgeLeft={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button size="large" badgeLeft={<Badge>6</Badge>} element={button}>Button</Button>
            </div>
            <div className="flex mb5">
                <Button active badgeLeft={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button focus badgeLeft={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button hover badgeLeft={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button focus hover badgeLeft={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button disabled badgeLeft={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
            </div>
            <div className="flex mb5">
                <Button icon={<SignoutIcon />} badgeRight={<Badge>6</Badge>} element={button} className="mr5">Button</Button>
                <Button badgeRight={<Badge className="bg-red">6</Badge>} element={button} className="mr5">Button</Button>
                <Button badgeLeft={<Badge className="bg-red">6</Badge>} element={button} className="mr5">Button</Button>
                <Button badgeRight={<Badge>6</Badge>} loading element={button}>Button</Button>
            </div>
        </>
    );
}

export function createTestSuite(button, stories) {
    return stories
        .add("default", () =>
            <div className="flex">
                <div className="flex flex-column mr8">
                    <div className="flex mb5">
                        <Button element={button} className="mr5">Button</Button>
                        <Button active element={button} className="mr5">Button</Button>
                        <Button focus element={button} className="mr5">Button</Button>
                        <Button hover element={button} className="mr5">Button</Button>
                        <Button focus hover element={button} className="mr5">Button</Button>
                        <Button disabled element={button} className="mr5">Button</Button>
                        <Button className="bg-red mr5" element={button}>Button</Button>
                        <Button style={{ backgroundColor: "red" }} element={button}>Button</Button>
                    </div>
                    <div className="flex items-end mb5">
                        <Button size="micro" element={button} className="mr5">Button</Button>
                        <Button size="mini" element={button} className="mr5">Button</Button>
                        <Button size="tiny" element={button} className="mr5">Button</Button>
                        <Button size="small" element={button} className="mr5">Button</Button>
                        <Button element={button} className="mr5">Button</Button>
                        <Button size="large" element={button}>Button</Button>
                    </div>
                    <Icons element={button} />
                    <Loadings element={button} />
                </div>
                <div className="flex flex-column">
                    <Badges element={button} />
                </div>
            </div>
        )
        .add("ghost", () =>
            <div className="flex">
                <div className="flex flex-column mr8" >
                    <div className="flex mb5">
                        <Button ghost element={button} className="mr5">Button</Button>
                        <Button active ghost element={button} className="mr5">Button</Button>
                        <Button focus ghost element={button} className="mr5">Button</Button>
                        <Button hover ghost element={button} className="mr5">Button</Button>
                        <Button focus hover ghost element={button} className="mr5">Button</Button>
                        <Button disabled ghost element={button} className="mr5">Button</Button>
                        <Button className="bg-red" ghost element={button}>Button</Button>
                    </div>
                    <div className="flex items-end mb5">
                        <Button size="micro" ghost element={button} className="mr5">Button</Button>
                        <Button size="mini" ghost element={button} className="mr5">Button</Button>
                        <Button size="tiny" ghost element={button} className="mr5">Button</Button>
                        <Button size="small" ghost element={button} className="mr5">Button</Button>
                        <Button ghost element={button} className="mr5">Button</Button>
                        <Button size="large" ghost element={button}>Button</Button>
                    </div>
                    <Icons ghost element={button} />
                    <Loadings ghost element={button} />
                </div>
                <div className="flex flex-column">
                    <Badges ghost element={button} />
                </div>
            </div>
        )
        .add("basic", () =>
            <div className="flex">
                <div className="flex flex-column mr8" >
                    <div className="flex mb5">
                        <Button basic element={button} className="mr5">Button</Button>
                        <Button active basic element={button} className="mr5">Button</Button>
                        <Button focus basic element={button} className="mr5">Button</Button>
                        <Button hover basic element={button} className="mr5">Button</Button>
                        <Button focus hover basic element={button} className="mr5">Button</Button>
                        <Button disabled basic element={button} className="mr5">Button</Button>
                        <Button className="bg-red" basic element={button}>Button</Button>
                    </div>
                    <div className="flex items-end mb5">
                        <Button size="micro" basic element={button} className="mr5">Button</Button>
                        <Button size="mini" basic element={button} className="mr5">Button</Button>
                        <Button size="tiny" basic element={button} className="mr5">Button</Button>
                        <Button size="small" basic element={button} className="mr5">Button</Button>
                        <Button basic element={button} className="mr5">Button</Button>
                        <Button size="large" basic element={button}>Button</Button>
                    </div>
                    <Icons basic element={button} />
                    <Loadings basic element={button} />
                </div>
                <div className="flex flex-column">
                    <Badges basic element={button} />
                </div>
            </div>
        )
        .add("compact", () =>
            <div className="flex">
                <div className="flex flex-column mr8" >
                    <div className="flex mb5">
                        <Button compact element={button} className="mr5">Button</Button>
                        <Button active compact element={button} className="mr5">Button</Button>
                        <Button focus compact element={button} className="mr5">Button</Button>
                        <Button hover compact element={button} className="mr5">Button</Button>
                        <Button focus hover compact element={button} className="mr5">Button</Button>
                        <Button disabled compact element={button} className="mr5">Button</Button>
                        <Button className="bg-red" compact element={button}>Button</Button>
                    </div>
                    <div className="flex items-end mb5">
                        <Button size="micro" compact element={button} className="mr5">Button</Button>
                        <Button size="mini" compact element={button} className="mr5">Button</Button>
                        <Button size="tiny" compact element={button} className="mr5">Button</Button>
                        <Button size="small" compact element={button} className="mr5">Button</Button>
                        <Button compact element={button} className="mr5">Button</Button>
                        <Button size="large" compact element={button}>Button</Button>
                    </div>
                    <Icons compact element={button} />
                    <Loadings compact element={button} />
                </div>
                <div className="flex flex-column">
                    <Badges compact element={button} />
                </div>
            </div>
        )
        .add("circular", () =>
            <div className="flex flex-column">
                <div className="flex mb5">
                    <Button circular element={button} className="mr5">Aa</Button>
                    <Button active circular element={button} className="mr5">Aa</Button>
                    <Button focus circular element={button} className="mr5">Aa</Button>
                    <Button hover circular element={button} className="mr5">Aa</Button>
                    <Button focus hover circular element={button} className="mr5">Aa</Button>
                    <Button disabled circular element={button} className="mr5">Aa</Button>
                    <Button className="bg-red" circular element={button}>Aa</Button>
                </div>
                <div className="flex items-end mb5">
                    <Button size="micro" circular element={button} className="mr5">Aa</Button>
                    <Button size="mini" circular element={button} className="mr5">Aa</Button>
                    <Button size="tiny" circular element={button} className="mr5">Aa</Button>
                    <Button size="small" circular element={button} className="mr5">Aa</Button>
                    <Button circular element={button} className="mr5">Aa</Button>
                    <Button size="large" circular element={button}>Aa</Button>
                </div>
                <div className="flex items-end mb5">
                    <Button size="micro" circular compact element={button} className="mr5">Aa</Button>
                    <Button size="mini" circular compact element={button} className="mr5">Aa</Button>
                    <Button size="tiny" circular compact element={button} className="mr5">Aa</Button>
                    <Button size="small" circular compact element={button} className="mr5">Aa</Button>
                    <Button circular compact element={button} className="mr5">Aa</Button>
                    <Button size="large" circular compact element={button}>Aa</Button>
                </div>
                <div className="flex items-end mb5">
                    <Button size="micro" icon={<SignoutIcon />} circular element={button} className="mr5" />
                    <Button size="mini" icon={<SignoutIcon />} circular element={button} className="mr5" />
                    <Button size="tiny" icon={<SignoutIcon />} circular element={button} className="mr5" />
                    <Button size="small" icon={<SignoutIcon />} circular element={button} className="mr5" />
                    <Button icon={<SignoutIcon />} circular element={button} className="mr5" />
                    <Button size="large" icon={<SignoutIcon />} circular element={button} />
                </div>
                <div className="flex items-end mb5">
                    <Button size="micro" icon={<SignoutIcon />} iconPosition="right" circular element={button} className="mr5" />
                    <Button size="mini" icon={<SignoutIcon />} iconPosition="right" circular element={button} className="mr5" />
                    <Button size="tiny" icon={<SignoutIcon />} iconPosition="right" circular element={button} className="mr5" />
                    <Button size="small" icon={<SignoutIcon />} iconPosition="right" circular element={button} className="mr5" />
                    <Button icon={<SignoutIcon />} iconPosition="right" circular element={button} className="mr5" />
                    <Button size="large" icon={<SignoutIcon />} iconPosition="right" circular element={button} />
                </div>
                <div className="flex mb5">
                    <Button active icon={<SignoutIcon />} circular element={button} className="mr5" />
                    <Button focus icon={<SignoutIcon />} circular element={button} className="mr5" />
                    <Button hover icon={<SignoutIcon />} circular element={button} className="mr5" />
                    <Button focus hover icon={<SignoutIcon />} circular element={button} className="mr5" />
                    <Button disabled icon={<SignoutIcon />} circular element={button} className="mr5" />
                    <Button icon={<SignoutIcon className="fill-red" />} circular element={button} />
                </div>
                <Loadings circular element={button} />
            </div>
        );
}
