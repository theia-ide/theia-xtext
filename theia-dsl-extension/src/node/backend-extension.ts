/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { injectable, ContainerModule } from "inversify";
import { BaseLanguageServerContribution, LanguageServerContribution, IConnection } from "theia-core/lib/languages/node";


export default new ContainerModule(bind => {
    bind<LanguageServerContribution>(LanguageServerContribution).to(DSLContribution);
});

const JAR = './node_modules/theia-dsl-extension/build/dsl-language-server.jar'

@injectable()
class DSLContribution extends BaseLanguageServerContribution {

    readonly id = "dsl";
    readonly name = "DSL";

    start(clientConnection: IConnection): void {
        const command = 'java';
        const args: string[] = [
            '-jar',
            JAR
        ];
        const serverConnection = this.createProcessStreamConnection(command, args);
        this.forward(clientConnection, serverConnection);
    }

    protected onDidFailSpawnProcess(error: Error): void {
        super.onDidFailSpawnProcess(error);
        console.error("Error starting python language server.")
        console.error("Please make sure it is installed on your system.")
        console.error("Use the following command: 'pip install https://github.com/palantir/python-language-server/archive/master.zip'")
    }

}



