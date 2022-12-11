const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type:String,
            required:true,
            maxLength: 280,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => {
                let month = createdAtVal.getMonth() + 1;
                let day = createdAtVal.getDate();
                let year = createdAtVal.getFullYear();
                return `${month}/${day}/${year}`;
            }
        },
        username: {
            type:String,
            required: 'You must include username in request'
        },
    },
    {
        toJSON: {
            getters: true
        },

    }
);

const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type:String,
            maxLength: 280,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => {
                let month = createdAtVal.getMonth() + 1;
                let day = createdAtVal.getDate();
                let year = createdAtVal.getFullYear();
                return `${month}/${day}/${year}`;
            }
        },
        username: {
            type:String,
            required: 'You must include username in request'
        },
        reactions:[ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id:false
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model ('Thought', ThoughtSchema);
module.exports = Thought;